import { operations } from "../Enumerations/Operations.js";
import { borrowBook } from "./Messages/BorrowBook.js";
import { insertBook } from "./Messages/InsertBook.js";

export function messageHandler(socket, message)
{
    console.log("inside messageHandler");
    const operation = message["operation"];

    switch(operation)
    {
        case operations.INSERT:
        {
            insertBook(socket, message);
            break;
        }

        case operations.BORROW:
        {
            borrowBook(socket, message);
            break;
        }

        case operations.REMOVE:
        {
            break;
        }   

        case operations.RETURN:
        {
            break;
        }
    }
}