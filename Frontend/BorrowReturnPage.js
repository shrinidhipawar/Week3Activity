import { sendRequest } from "./SendRequest.js";
const borrowReturnButton = document.querySelector("#borrow-return-button");
const operationSelect = document.querySelector("#operation");
const bookNameInput = document.querySelector("#book-name");
const bookQuantityInput = document.querySelector("#book-quantity");

borrowReturnButton.addEventListener("click", () =>
{
    const operation = operationSelect.value;
    const bookName = bookNameInput.value;
    const bookQuantity = bookQuantityInput.value;

    if (operation && bookName && bookQuantity)
    {
        const book = { bookName: bookName, quantity: bookQuantity };
        sendRequest(operation, book);
    }
    else
    {
        alert("Please fill all the fields");
    }
});