// JavaScript to show an alert message when the button is clicked
document.getElementById('messageButton').addEventListener('click', function() {
    alert("Thank you for your interest! We aim to promote reading culture in our community.");
});
// Sample array of books (replace with your actual data)
const books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { title: "To Kill a Mockingbird", author: "Harper Lee" },
    { title: "1984", author: "George Orwell" },
    { title: "Pride and Prejudice", author: "Jane Austen" },
    { title: "power of money", author: "J.D. Salinger" },
    // Add more book objects here
  ];
  
  // Function to display the books
  function displayBooks(filteredBooks) {
    const bookList = document.getElementById("bookList");
    bookList.innerHTML = ""; // Clear current list
  
    // If there are no results
    if (filteredBooks.length === 0) {
      bookList.innerHTML = "<li>No results found</li>";
      return;
    }
  
    // Create an li element for each book
    filteredBooks.forEach(book => {
      const li = document.createElement("li");
      li.textContent = `${book.title} by ${book.author}`;
      bookList.appendChild(li);
    });
  }
  
  // Function to filter books based on search input
  function searchBooks() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const bookList = document.getElementById("bookList");
  
    // Show the list only if there is input
    if (searchInput.trim() !== "") {
      bookList.classList.remove("hidden"); // Show the book list
      const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(searchInput) || 
        book.author.toLowerCase().includes(searchInput)
      );
      displayBooks(filteredBooks);
    } else {
      bookList.classList.add("hidden"); // Hide the book list if input is empty
    }
  }
  
  // Event listener for search input
  document.getElementById("searchInput").addEventListener("input", searchBooks);
  