import { sendRequest } from "./SendRequest.js";
const bookNameInput = document.querySelector("#book-name");
const bookQuantityInput = document.querySelector("#book-quantity");
const addBookButton = document.querySelector("#add-book-button");

addBookButton.addEventListener("click", () =>
{
    const bookName = bookNameInput.value;
    const bookQuantity = bookQuantityInput.value;

    if (bookName && bookQuantity)
    {
        const book = { bookName: bookName, quantity: bookQuantity };
        sendRequest("INSERT", book);
    }
    else
    {
        alert("Please fill all the fields");
    }
});

