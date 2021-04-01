document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const bookTitle = event.target.title.value;
    const bookAuthor = event.target.author.value;
    const bookCategory = event.target.category.value;
    console.log(bookTitle, bookAuthor, bookCategory)
    const newListItem = document.createElement('li');
    newListItem.textContent = `${bookTitle}, ${bookAuthor}, ${bookCategory}`;
    newListItem.classList.add('purple');
    const list = document.querySelector('ul');
    list.appendChild(newListItem);
    // document.getElementById('#new-item-form').reset()
    event.target.reset();
  })
  

})

// const newListItem = document.createElement('li');
// newListItem.textContent = 'Purple';
// newListItem.classList.add('purple');

// const button = document.querySelector('#GO')
// button.addEventListener('click', () => {
//   form.reset()

// })



  // const button = document.querySelector('#button')

  // // ad and EventListener method
  // button.addEventListener('click', () => {
  //   // target another element and change its text content
  //   const buttonResultText = document.querySelector('#button-result')
  //   buttonResultText.textContent = 'The button has been clicked!'

  // })



// const form = document.querySelector('#form')

// form.addEventListener('submit', (event) => {
//   event.preventDefault()
//   const formTextResult = document.querySelector('#form-result') 
//   formTextResult.textContent = `The form submitted was: 
//   ${event.target.first_name.value} ${event.target.last_name.value}`

// })

// const selectInput = document.querySelector('#select')

//   selectInput.addEventListener('change', (event) => {
//     const selectInputResult = document.querySelector('#select-result')
//     selectInputResult.textContent = `Your choice is: ${event.target.value}`
    
//   })
