import { operations } from "../../Common/Enumerations/Operations.js";
import { insertBook } from "./Messages/InsertBook.js";

export function messageHandler(socket, message)
{
    const operation = message["operation"];

    switch(operation)
    {
        case operations.INSERT:
        {
            insertBook(socket, message)
            break;
        }

        case operations.BORROW:
        {
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