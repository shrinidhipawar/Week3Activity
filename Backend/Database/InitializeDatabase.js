import DatabaseConnector from "./DatabaseConnector.js";

export async function initializeDatabase()
{
    const createBooksTableQuery = `
    CREATE TABLE IF NOT EXISTS Books (
        book_name varchar(255) PRIMARY KEY,
        quantity int
    );`;

    const createBorrowTableQuery = `
    CREATE TABLE IF NOT EXISTS Borrow (
        borrower_name VARCHAR(255),
        book_name VARCHAR(255),
        borrow_date DATE,
        due_date DATE,
        FOREIGN KEY (book_name) REFERENCES Books(book_name) ON DELETE CASCADE
    );`;

    await DatabaseConnector.executeQuery(createBooksTableQuery);
    console.log("books table initialized");
    await DatabaseConnector.executeQuery(createBorrowTableQuery);
    console.log("Database initialized");
}