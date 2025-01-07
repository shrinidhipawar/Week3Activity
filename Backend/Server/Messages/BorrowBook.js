import DatabaseConnector from "../../Database/DatabaseConnector.js";
import { operations } from "../../Enumerations/Operations.js";
import { getMysqlDateTime } from "../../Utility.js";

export function borrowBook(socket, message)
{
    console.log("inside borrowBook");
    const data = message["data"];

    const borrowerName = data["borrowerName"];
    const bookName = data["bookName"];
    const quantity = data["quantity"];
    const borrowDate = Date.now();

    //Due date will be borrowDate + 1month 
    const dueDate = new Date(borrowDate);
    dueDate.setMonth(dueDate.getMonth() + 1);

    let updateBookQuantity = true;

    const checkBookQuantityQuery = `SELECT quantity FROM Books WHERE book_name = '${bookName}'`;

    DatabaseConnector.executeQuery(checkBookQuantityQuery).then((result) => 
    {
        const bookQuantity = result["rows"][0]["quantity"];

        if (quantity > bookQuantity)
        {
            console.log("Book not available");
            socket.send(JSON.stringify({ operation: operations.BORROW, status: 400, message: "Book not available" }));
            updateBookQuantity = false;
            return;
        }
        
        if(!updateBookQuantity)
        {
            return;
        }
    
        const borrowBooks = async (numberOfBooks) => 
        {
            for(let i = 0; i < numberOfBooks; i++)
            {
                //add i seconds to borrowDate and dueDate and assign it to currentBookBorrowDate and currentBookDueDate
                const currentBookBorrowDate = new Date(borrowDate);
                currentBookBorrowDate.setSeconds(currentBookBorrowDate.getSeconds() + i);
                const currentBookDueDate = new Date(dueDate);
                currentBookDueDate.setSeconds(currentBookDueDate.getSeconds() + i);
    
                const insertQuery = `INSERT INTO Borrow (borrower_name, book_name, borrow_date, due_date) VALUES ('${borrowerName}', '${bookName}', '${getMysqlDateTime(currentBookBorrowDate)}', '${getMysqlDateTime(currentBookDueDate)}');`;
                await DatabaseConnector.executeQuery(insertQuery);
            }
        }
    
        borrowBooks(quantity).then(() =>
        {
            const updateBookQuantityQuery = `UPDATE Books SET quantity = quantity - ${quantity} WHERE book_name = '${bookName}'`;
            DatabaseConnector.executeQuery(updateBookQuantityQuery).then((result) => 
            {
                console.log("Book borrowed");
                socket.send(JSON.stringify({ operation: operations.BORROW, status: 200 }));
            });
        }); 

    });

    

}

