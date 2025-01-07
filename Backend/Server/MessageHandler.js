import { operations } from "../Enumerations/Operations.js";
import { borrowBook } from "./Messages/BorrowBook.js";
import { borrowList } from "./Messages/BorrowList.js";
import { insertBook } from "./Messages/InsertBook.js";
import { returnBook } from "./Messages/ReturnBook.js";

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

        case operations.RETURN:
        {
            returnBook(socket, message);
            break;
        }

        case operations.BORROW_LIST:
        {
            borrowList(socket, message);
            break;
        }
    }
}