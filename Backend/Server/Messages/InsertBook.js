import DatabaseConnector from "../../Database/DatabaseConnector.js";
import { operations } from "../../Enumerations/Operations.js";

export function insertBook(socket, message)
{
    console.log("inside insertBook");
    const data = message["data"];

    const bookName = data["bookName"];
    const quantity = data["quantity"];

    const query = `INSERT INTO Books (book_name, quantity) VALUES ('${bookName}', '${quantity}');`;

    DatabaseConnector.executeQuery(query).then((result) => 
    {
        console.log("Book inserted");
        socket.send(JSON.stringify({ operation: operations.INSERT, status: 200 }));
    });
}