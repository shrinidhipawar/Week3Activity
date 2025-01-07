import DatabaseConnector from "./DatabaseConnector.js";

export async function initializeDatabase()
{
    const createBooksTableQuery = `
    CREATE TABLE IF NOT EXISTS Books (
        id INT PRIMARY KEY AUTO_INCREMENT,
        title VARCHAR(255) NOT NULL UNIQUE,
        author VARCHAR(255),
        publisher VARCHAR(255),
        year INT,
        quantity INT
    );`;

    const createBorrowTableQuery = `
    CREATE TABLE IF NOT EXISTS Borrow (
        book_id INT NOT NULL,
        user_name VARCHAR(255) NOT NULL,
        borrow_date DATETIME DEFAULT CURRENT_TIMESTAMP,
        quantity INT NOT NULL,
        FOREIGN KEY (book_id) REFERENCES Books(id) ON DELETE CASCADE
    );`;

    await DatabaseConnector.executeQuery(createBooksTableQuery);
    console.log("books table initialized");
    await DatabaseConnector.executeQuery(createBorrowTableQuery);
    console.log("Database initialized");
}