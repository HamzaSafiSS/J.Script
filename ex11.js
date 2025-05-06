const books = [
  { id: 1, amount: 2, title: "Clean Code", author: "Robert C. Martin", isAvailable: true },
  { id: 2, amount: 3, title: "Eloquent JavaScript", author: "Marijn Haverbeke", isAvailable: true },
  { id: 3, amount: 1, title: "You Don't Know JS", author: "Kyle Simpson", isAvailable: true }
];

const users = [
  { id: "U101", name: "Ali", borrowedBooks: [] },
  { id: "U102", name: "Sara", borrowedBooks: [] }
];

function selectOption() {
  return Number(prompt(`
    <-----------Choose what you want---------->
    1. Register User
    2. Borrow a Book
    3. Return a Book
    4. Display Users and Books
    0. Exit
  `));
}

function registerUser() {
  let name = prompt("Enter your name to register:");
  while (!isNaN(Number(name)) || name.length < 3) {
    name = prompt("Invalid name. Please enter a valid name:");
  }

  let newID = prompt("Enter your unique ID:");
  while (users.some(user => user.id === newID)) {
    newID = prompt("ID already exists. Enter a new ID:");
  }

  users.push({ id: newID, name, borrowedBooks: [] });
  console.log("User registered successfully!");
  console.log(users);
}

function borrowBook() {
  const id = prompt("Enter your user ID:");
  const user = users.find(u => u.id === id);
  if (!user) return alert("User not found.");

  const bookTitle = prompt(`Enter the book title to borrow:\n${books.map(b => b.title).join("\n")}`);
  const book = books.find(b => b.title.toLowerCase() === bookTitle.toLowerCase());

  if (!book) return alert("Book not found.");
  if (!book.isAvailable) return alert("This book is currently not available.");

  const borrowDate = new Date().toISOString().split("T")[0];
  user.borrowedBooks.push({ title: book.title, borrowDate });

  book.amount--;
  if (book.amount === 0) book.isAvailable = false;

  console.log(`Successfully borrowed '${book.title}'.`);
}

function returnBook() {
  const id = prompt("Enter your user ID:");
  const user = users.find(u => u.id === id);
  if (!user) return alert("User not found.");

  const bookTitle = prompt("Enter the book title to return:");
  const book = books.find(b => b.title.toLowerCase() === bookTitle.toLowerCase());
  if (!book) return alert("Book not found.");

  const borrowRecord = user.borrowedBooks.find(b => b.title === book.title);
  if (!borrowRecord) return alert("You haven't borrowed this book.");

  let retDateStr = prompt("Enter return date (YYYY-MM-DD):");
  let returnDate = new Date(retDateStr);
  while (isNaN(returnDate.getTime())) {
    retDateStr = prompt("Invalid format. Enter return date (YYYY-MM-DD):");
    returnDate = new Date(retDateStr);
  }

  const borrowDate = new Date(borrowRecord.borrowDate);
  const dayDiff = Math.floor((returnDate - borrowDate) / (1000 * 60 * 60 * 24));
  let fine = 0;
  if (dayDiff > 7) fine = (dayDiff - 7) * 5;

  user.borrowedBooks = user.borrowedBooks.filter(b => b.title !== book.title);
  book.amount++;
  book.isAvailable = true;

  console.log(`Book returned successfully. Fine: ${fine} ETB`);
}

function displayAll() {
  console.log("Users List:");
  console.log(JSON.stringify(users, null, 2));
  console.log("Books List:");
  console.log(JSON.stringify(books, null, 2));
}


let choice = selectOption();
while (choice !== 0) {
  switch (choice) {
    case 1:
      registerUser();
      break;
    case 2:
      borrowBook();
      break;
    case 3:
      returnBook();
      break;
    case 4:
      displayAll();
      break;
    default:
      console.log("Invalid option. Try again.");
  }
  choice = selectOption();
}
