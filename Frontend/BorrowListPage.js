import { sendRequest } from "./SendRequest";

const borrowListTableContainer = document.querySelector(".borrow-list-table-container");
const borrowerNameInput = document.querySelector(".borrower-name");

borrowerNameInput.addEventListener("change", () =>
{
    const borrowerName = borrowerNameInput.value;

    if (borrowerName)
    {
        sendRequest("BORROW_LIST", { borrowerName: borrowerName });
    }
    else
    {
        alert("Please fill all the fields!");
    }

});

window.addEventListener("borrow-list-received", (event) =>
{
    const data = event.detail;

    const table = document.createElement("table");
    table.style.width = "75%";

    table.innerHTML =
    `
        <tr>
            <th>Book Name</th>
            <th>Borrow Date</th>
            <th>Due Date</th>
        </tr>
    `;

    //book : { bookName, borrowDate, dueDate }
    for(const book of data)
    {
        const tr = document.createElement("tr");
        tr.innerHTML =
        `
            <td>${book.bookName}</td>
            <td>${book.borrowDate}</td>
            <td>${book.dueDate}</td>
        `;
        
        table.appendChild(tr);
    }

    borrowListTableContainer.innerHTML = "";
    borrowListTableContainer.appendChild(table);

});