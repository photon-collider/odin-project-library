function Book(title, author, pages, read){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.getInfo = function() {
  let readStr = "";
  if(this.read){
    readStr = "finished reading";
  }
  else{
    readStr= "not yet finished reading"
  }
  return this.title + " " + this.author +  ", " + this.pages + " pages, " + readStr;;
}


library = document.querySelector('.library-container');

library.addEventListener('mouseover', function(e) {
  let bookObj = event.target.closest('.book');
  if(!bookObj) return ;

  bookObj.querySelector('.top-buttons-container').classList.remove('hide-element');
});

library.addEventListener('mouseout', function(e){
  let bookObj = event.target.closest('.book');
  if(!bookObj) return ;

  bookObj.querySelector('.top-buttons-container').classList.add('hide-element');
});

library.addEventListener('click', function(e){
  let target = e.target;
  if(target.matches('.read-state-button')){
    if(target.matches('.read-book')){
      target.classList.toggle('read-book');
      target.textContent = 'Unread';
    }
    else{
      target.classList.toggle('read-book');
      target.textContent = 'Completed';
    }
  }
});

library.addEventListener('click', function(e){
  let target = e.target;
  if(target.matches('.delete-button')){
    bookDiv = target.closest('.book');
    bookDiv.remove();
  }
});


function addBooktoPage(containerRef, book){
  bookDiv = document.createElement('div');
  bookDiv.classList.add('book');

  //Create top buttons
  topButtonsDiv = document.createElement('div');
  topButtonsDiv.classList.add('top-buttons-container', 'hide-element');

  editButton = document.createElement('button');
  editButton.classList.add('top-button', 'edit-button');

  deleteButton = document.createElement('button');
  deleteButton.classList.add('top-button', 'delete-button');

  topButtonsDiv.appendChild(editButton);
  topButtonsDiv.appendChild(deleteButton);
  bookDiv.appendChild(topButtonsDiv);

  //Create book Metadata
  bookMetaData = document.createElement('ul');
  bookMetaData.classList.add('book-metadata');

  bookTitle = document.createElement('li');
  bookTitle.textContent = book.title;
  bookTitle.classList.add('book-title');

  bookAuthor = document.createElement('li');
  bookAuthor.textContent = book.author;
  bookAuthor.classList.add('book-author');

  bookPages = document.createElement('li');
  bookPages.textContent = book.pages;
  bookPages.classList.add('book-page-count');

  bookMetaData.appendChild(bookTitle);
  bookMetaData.appendChild(bookAuthor);
  bookMetaData.appendChild(bookPages);
  bookDiv.appendChild(bookMetaData);

  //Add read button
  readButton = document.createElement('button');
  readButton.textContent = 'Read';
  readButton.classList.add('read-state-button');
  bookDiv.appendChild(readButton);

  containerRef.appendChild(bookDiv);
}


exampleBook = new Book("HAHAHA", "hehehe", "0 pages", false);

addBooktoPage(library, exampleBook);
addBooktoPage(library, exampleBook);
addBooktoPage(library, exampleBook);
addBooktoPage(library, exampleBook);
addBooktoPage(library, exampleBook);
addBooktoPage(library, exampleBook);
addBooktoPage(library, exampleBook);
addBooktoPage(library, exampleBook);
addBooktoPage(library, exampleBook);
addBooktoPage(library, exampleBook);
addBooktoPage(library, exampleBook);
