import DatabaseConnector from "../../Database/DatabaseConnector.js";
import { operations } from "../../Enumerations/Operations.js";
import { getDateFromMysqlDateTime } from "../../Utility.js";

export function borrowList(socket, message)
{
    console.log("inside borrowList");

    const query = `SELECT * FROM borrow WHERE borrower_name = '${message["data"]["borrowerName"]}'`;

    DatabaseConnector.executeQuery(query).then((result) =>
    {
        console.log(result["rows"]);
        const resultRows = [];

        for(const row of result["rows"])
        {
            resultRows.push({borrowerName: row["borrower_name"], bookName: row["book_name"], borrowDate: getDateFromMysqlDateTime(row["borrow_date"]).toDateString(), dueDate: getDateFromMysqlDateTime(row["due_date"]).toDateString()});
        }

        socket.send(JSON.stringify({ operation: operations.BORROW_LIST, status: 200, data: resultRows}));
    });

}