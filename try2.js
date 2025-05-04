const books = [
    { id: 1, title: "Clean Code", author: "Robert C. Martin", isAvailable: true },
    { id: 2, title: "Eloquent JavaScript", author: "Marijn Haverbeke", isAvailable: true },
    { id: 3, title: "You Don't Know JS", author: "Kyle Simpson", isAvailable: true }
  ];
  
  const users = [
    { id: "U101", name: "Ali", borrowedBooks: [] },
    { id: "U102", name: "Sara", borrowedBooks: [] }
  ];
  
  
  
    let select = Number(prompt(`
      -----------Choose what you want----------
    1.Register User (Name + ID)
    2.Borrow a Book
    3.Return a Book
    4.Display Users
      `));
    let id = users.length
    while(select) {

      switch (select) {
        case 1:
          let name = prompt("Please enter your Name to register")
          if(!isNaN(name) || name.length < 3) {
            name = prompt("Please enter your Valid Name")
          }
          let newID = prompt("Please enter your ID to register.")
          let borrowedBooks = []
         
            users.push({id:newID,name,borrowedBooks})
        
          console.log("Successfully registered!")
          console.log(users)
          select = Number(prompt("Please select what you want"));
          break;

        case 2:
          let id2 = prompt("Please enter your ID to borrow.")
          let bookTitle = prompt("Please enter boook you want to borrow.")
          let user = users.find((user)=>user.id === id2)
          
          if(!user) {
            alert("User not found please Register first.")
            break;
          }
          
          let isbook = books.find(book => book.title.toLowerCase() === bookTitle.toLowerCase());

          if(!isbook) {
            alert("Book not found.")
            break;
          }

          if(!isbook.isAvailable) {
            alert("Sorry this book is already borrowed.")
            break;
          }

          user.borrowedBooks.push(isbook.id);
          isbook.isAvailable = false
          console.log("You successfully borrowed!")
          console.log(JSON.stringify(users, null, 2))
          console.log(JSON.stringify(books, null, 2))
          
          select = Number(prompt("Please select what you want"));
          break;

          case 3:
            let stuID = prompt("Please enter your ID.")
            let isUser = users.find((user)=>user.id === stuID)
            if(!isUser) {
              alert("Please enter valid ID")
              break;
            }
            
            let booktitle = prompt("Please enter book title.")
            let isBook = books.find(book => book.title.toLowerCase() === booktitle.toLowerCase());

            if(!isBook) {
              alert("Please enter books you borrowed.")
              break;
            }
            
            if (!isUser.borrowedBooks.includes(isBook.id)) {
              alert("You have not borrowed this book.");
              break;
            }

           isUser.borrowedBooks =  isUser.borrowedBooks.filter((borrow)=>isBook.id !==borrow)
           isBook.isAvailable = true
           console.log("Book successfullly returned.")
           console.log(JSON.stringify(users))
           console.log(JSON.stringify(books))
          select = Number(prompt("Please select what you want"));
           
           break;
           case 4:
            console.log("Users List")
            console.log(JSON.stringify(users))
          select = Number(prompt("Please select what you want"));
            break;
      }
    }
