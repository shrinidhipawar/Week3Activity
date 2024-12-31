import { operations } from "../../Common/Enumerations/Operations.js";

export function messageHandler(message)
{
    const operation = message["operation"];
    const data = message["data"]; 

    console.log("Data: " , data);

    switch(operation)
    {
        case operations.INSERT:
        {
            console.log("Simply")   
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