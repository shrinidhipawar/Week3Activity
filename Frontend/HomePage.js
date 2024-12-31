const addBooksButton = document.querySelector(".add-book-button");
const borrowReturnButton = document.querySelector(".borrow-return-button");

addBooksButton.addEventListener("click", () => 
{
    window.location.href = "AddBookPage.html";
});

borrowReturnButton.addEventListener("click", () =>
{
    window.location.href = "BorrowReturnPage.html";
});


