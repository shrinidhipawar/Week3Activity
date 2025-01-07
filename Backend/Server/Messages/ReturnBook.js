import DatabaseConnector from "../../Database/DatabaseConnector.js";
import { operations } from "../../Enumerations/Operations.js";
import { getDateFromMysqlDateTime } from "../../Utility.js";

export function returnBook(socket, message)
{
    console.log("inside returnBook");
    const data = message["data"];

    const borrowerName = data["borrowerName"];
    const bookName = data["bookName"];
    const quantity = parseInt(data["quantity"]);

    const currentDate = Date.now(); 

    //Check if book is borrowed
    const checkBorrowQuery = `SELECT due_date FROM Borrow WHERE borrower_name = '${borrowerName}' AND book_name = '${bookName}' ORDER BY due_date ASC`;
    
    DatabaseConnector.executeQuery(checkBorrowQuery).then((result) => 
    {
        if (quantity > result["rows"].length)
        {
            console.log("Book not borrowed");
            socket.send(JSON.stringify({ operation: operations.RETURN, status: 400, message: "Book not borrowed." }));
            return;
        }
        else 
        {
            DatabaseConnector.executeQuery(`DELETE FROM Borrow WHERE borrower_name = '${borrowerName}' AND book_name = '${bookName}' ORDER BY due_date ASC LIMIT ${quantity}`);

            let dueDatePassed = false;

            for(let i = 0; i < quantity; i++)
            {
                const dueDate = getDateFromMysqlDateTime(result["rows"][i]["due_date"]) ;

                if (currentDate > dueDate)
                {
                    dueDatePassed = true; 
                }
                DatabaseConnector.executeQuery(`DELETE FROM Borrow WHERE borrower_name = '${borrowerName}' AND book_name = '${bookName}' ORDER BY due_date ASC LIMIT 1`);
            }

            if (dueDatePassed)
            {
                console.log("Book not returned on time");
                socket.send(JSON.stringify({ operation: operations.RETURN, status: 400, message: "Book not returned on time, Need to pay fine!" }));
                return;
            }
            else 
            {
                console.log("Book returned");
                socket.send(JSON.stringify({ operation: operations.RETURN, status: 200 }));
            }

            // Add quantity books to Books table
            const updateQuery = `UPDATE Books SET quantity = quantity + ${quantity} WHERE book_name = '${bookName}'`;
            DatabaseConnector.executeQuery(updateQuery).then((result) => 
            {
                console.log("Books updated");
            });
        }
    });
}