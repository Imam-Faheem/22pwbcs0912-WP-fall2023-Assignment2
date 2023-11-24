        // Include all content from first.js
// Assuming first.js is in the same directory
$.getScript('./script.js', function() {
    // Fetch data from Book.json using the Fetch API
    fetch('./assets/other_resources/books.json')
      .then(response => response.json())
      .then(data => {
        // Loop through the first 10 books and add each book card to the HTML
        for (let i = 0; i < 10 && i < data.length; i++) {
          addBookCard(data[i]);
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  });