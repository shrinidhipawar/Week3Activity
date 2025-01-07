const addBooksButton = document.querySelector(".add-book-button");
const borrowReturnButton = document.querySelector(".borrow-return-button");
const borrowListButton = document.querySelector(".borrow-list-button");

addBooksButton.addEventListener("click", () => 
{
    window.location.href = "AddBookPage.html";
});

borrowReturnButton.addEventListener("click", () =>
{
    window.location.href = "BorrowReturnPage.html";
});

borrowListButton.addEventListener("click", () =>
{
    window.location.href = "BorrowListPage.html";
});
