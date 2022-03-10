const createNewBtn = document.querySelector('.createNewBtn');
const articleTemp = document.querySelector('.articlesList');
const wrapper = document.querySelector('.wrapper');
const article = document.querySelectorAll('.articlesList')
const deleteBtn = document.querySelectorAll('.deleteBtn');

console.log(articleTemp);
console.log(articleTemp.cloneNode(true));
console.log(wrapper);

// Adding New Article

createNewBtn.addEventListener('click', () => {
    addNewArticle();
})

function addNewArticle() {

    // // Creating elements
    // const editBtn = document.createElement('button');
    // const delBtn = document.createElement('button');
    // const createdDate = document.createElement('small');
    // const articleParagraph = document.createElement('p');
    // const articleTitle = document.createElement('h1');
    // const articleBtn = document.createElement('div');
    // const articleDate = document.createElement('div');
    // const articleHeader = document.createElement('div');
    // const articleSnippet = document.createElement('div');

    // // Adding content to created elements
    // editBtn.textContent = "Edit";
    // delBtn.textContent = "Delete";
    // createdDate.textContent = "Created on " + Date.now();
    // articleParagraph.textContent = "Lorem ipsum";
    // articleTitle.textContent = "Article";
    
    // // Adding classes to created elements
    // edit.classList.add('editBtn');
    // deleteBtn.classList.add('deleteBtn');

    // // Appending created elements to DOM
    // articleBtn.appendChild(editBtn);
    // articleBtn.appendChild(delBtn);
    // articleDate.appendChild(createdDate);
    // articleSnippet.appendChild(articleParagraph);
    // articleHeader.appendChild(articleTitle);

     const newArticle = articleTemp.cloneNode(true);
    console.log(newArticle);
    wrapper.appendChild(newArticle);
    // wrapper.appendChild(articleBtn);
    // wrapper.appendChild(articleDate);
    // wrapper.appendChild(articleSnippet);
    // wrapper.appendChild(articleHeader);

}

// Editing Article

// Deleting Article
Array.from(deleteBtn).forEach(btn => {
    btn.addEventListener('click', (event) => {

        const targetArticle = event.target.parentElement.parentElement;
        console.log(event.target.parentElement.parentElement);
        wrapper.removeChild(targetArticle);
    } )
})
