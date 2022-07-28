document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleForm);

  const body = document.querySelector('body')
  const readingList = document.querySelector('#reading-list')
  const heading = document.querySelector('h1')

  const deleteButton = document.createElement('button')
  deleteButton.classList.add('delete-button')
  body.insertBefore(deleteButton, heading)
  
  deleteButton.addEventListener('click', handleDeleteAll)

});

const handleForm = function (event) {
  event.preventDefault();
  let output = [{name:event.target.title.id, value:event.target.title.value}, {name:event.target.author.id,value:event.target.author.value }, {name:event.target.category.id,value:event.target.category.value}];
  const list = document.querySelector('#reading-list');
  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');
  list.appendChild(wrapper);
  output.forEach((entry) => {
    item = document.createElement('li');
    item.textContent = entry.value;
    item.classList.add(entry.name);
    // console.log(entry.name)
    wrapper.appendChild(item);
  });
  event.srcElement.reset();
};

const handleDeleteAll = function () {
  readingList = document.querySelector('#reading-list');
  readingList.innerHTML = '';
}