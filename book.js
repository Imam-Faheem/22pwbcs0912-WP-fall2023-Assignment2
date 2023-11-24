// books.js

function addBookCard(book) {
    const bookList = document.getElementById("bookList");
  
    const bookCard = document.createElement("div");
    bookCard.classList.add("col-md-4");
  
    bookCard.innerHTML = `
      <div class="card mb-4 box-shadow">
        <img class="card-img-top p-3" src="${book.cover_image}" alt="Book Cover">
        <div class="card-body">
          <p class="card-text text-muted italic "><em>#${book.category}</em></p>
          <div class="d-flex justify-content-between">
            <h4 style="color:#107896; class="card-title">${book.title}</h4>
            <p style="color:#107896; font-weight:bold; font-size:20px;" class="card-text">$${book.price.toFixed(2)}</p>
          </div>
          <p class="card-text">${book.description}</p>
          <p class="card-text mt-3 blockquote-footer pb-4">by: ${book.author}</p>
          <button style="background-color:#107896; position:absolute; right:1rem; bottom:20px;" class="btn btn text-white"  onclick="addToCart(${book.id})">Add to Cart</button>
        </div>
      </div>
    `;
  
    bookList.appendChild(bookCard);
  }
  