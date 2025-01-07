import DatabaseConnector from "../../Database/DatabaseConnector.js";
import { operations } from "../../Enumerations/Operations.js";

export function insertBook(socket, message)
{
    console.log("inside insertBook");
    const data = message["data"];

    const bookName = data["bookName"];
    const quantity = parseInt(data["quantity"]);

    //If book already exists add the quantity
    const checkBookQuery = `SELECT * FROM Books WHERE book_name = '${bookName}'`;
    DatabaseConnector.executeQuery(checkBookQuery).then((result) => 
    {
        if (result["rows"].length > 0)
        {
            const currentQuantity = parseInt(result["rows"][0]["quantity"]);
            const updatedQuantity = currentQuantity + quantity;

            const updateQuery = `UPDATE Books SET quantity = ${updatedQuantity} WHERE book_name = '${bookName}'`;
            DatabaseConnector.executeQuery(updateQuery).then((result) => 
            {
                console.log("Book updated");
                socket.send(JSON.stringify({ operation: operations.INSERT, status: 200 }));
            });
            return;
        }
        else
        {
            const query = `INSERT INTO Books (book_name, quantity) VALUES ('${bookName}', ${quantity});`;

            DatabaseConnector.executeQuery(query).then((result) => 
            {
                console.log("Book inserted");
                socket.send(JSON.stringify({ operation: operations.INSERT, status: 200 }));
            });
        }
    });    
}