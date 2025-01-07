import DatabaseConnector from "../../Database/DatabaseConnector.js";

export function insertBook(socket, message)
{
    const data = message["data"];

    const id = data["id"];
    const title = data["title"];
    const author = data["author"];
    const publisher = data["publisher"];
    const year = data["year"];
    const quantity = data["quantity"];

    const query = `INSERT INTO Books (id, title, author, publisher, year, quantity) VALUES (${id}, '${title}', '${author}', '${publisher}', ${year}, ${quantity});`;

    DatabaseConnector.executeQuery(query).then((result) => 
    {
        console.log("Book inserted");
    });
}