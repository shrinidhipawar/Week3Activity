# Week3Activity


The Library Management System is a web-based application designed to streamline library operations for both users and librarians. It allows users to borrow and return books effortlessly, while librarians can manage the collection and user details. This system provides a user-friendly interface and ensures data integrity with robust backend support.


**FEATURES :**


**User Features :**

- **Borrow Books:** Check out available books with ease.

- **Return Books:** Manage returns.

- **Track Borrowed Books:** View borrowed books and their due dates.


**Librarian Features :**

- **Add Books:** Add new books to the library catalog.

- **Remove Books:** Delete outdated or unavailable books from the system.

- **User Management:** View user activity.

**SCREENSHOTS :**
![alt text](images/homepage.png)
![alt text](images/addBook.png)
![alt text](images/borrowReturn.png)

**FILE STRUCTURE :**

library-management-system :         


```
library-management-system/
├── Backend/
│   ├── Database/
│   │   ├── DatabaseConnector.js         # Handles database connection
│   │   ├── InitializeDatabase.js        # Initializes database tables and schema
│   ├── Server/
│       ├── Messages/
│       │   ├── InsertBook.js            # Handles book insertion logic
│       ├── MessageHandler.js            # Processes server messages
│       ├── Server.js                    # Main server logic
├── Common/
│   ├── Enumerations/
│   │   ├── Operations.js                # Enumerations for common operations
│   ├── Globals.js                       # Global constants and settings
│   ├── Navigator.js                     # Handles navigation logic
├── Frontend/
│   ├── Pages/
│   │   ├── AddBookPage.html             # HTML for adding a book
│   │   ├── AddBookPage.js               # JS logic for adding a book
│   │   ├── BorrowReturnPage.html        # HTML for borrowing/returning books
│   │   ├── BorrowReturnPage.js          # JS logic for borrow/return operations
│   │   ├── HomePage.html                # HTML for homepage
│   │   ├── HomePage.js                  # JS logic for homepage
|   |   ├──SendRequest.js
│   ├── Styles.css                       # Common styling for all pages
├── node_modules/                        # Dependencies for the project
├── index.html                           # Entry point of the web application
├── IPCHandler.js                        # Handles inter-process communication
├── Main.js                              # Main application logic
├── package.json                         # Node.js project configuration
├── package-lock.json                    # Lock file for dependencies
└── README.md                            # Documentation file
```

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, WebSocket
- **Database**: MySQL
- **Tools**: Visual Studio Code (VS Code), npm

---

## Installation

### Prerequisites

- Node.js (v16 or later)
- MySQL (with a running server)
- Code editor (e.g., VS Code)

### Steps

1. **Clone the repository**:

   ```bash
   git clone https://github.com/YourUsername/library-management-system.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd library-management-system
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

4. **Set up the database**:

   - Create a MySQL database and note down the credentials.
   - Update the database connection settings in `Backend/Database/DatabaseConnector.js`.
   - Run the SQL schema provided in the `InitializeDatabase.js` file to set up the required tables.

5. **Run the application**:

   ```bash
   node Main.js
   ```

6. **Access the application**: Open your browser and navigate to `http://localhost:3000`.

---

## Usage

1. **User Portal**:

   - Borrow and return books.
   - View the current list of borrowed books.

2. **Librarian Portal**:

   - Add or remove books from the system.
   - Track overdue books and user activities.

---

## Contribution Guidelines

We welcome contributions to the project! Follow these steps:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m "Add feature"`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

Refer to the `CONTRIBUTING.md` file for more details.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for more information.

