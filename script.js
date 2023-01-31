const output = document.querySelector(".output");
const myInput = createMyElement(output, 'input', 'main');
myInput.setAttribute('type', 'text');
const myBtn = createMyElement(output, 'button', 'btn');
myBtn.textContent = 'Add New User';
const myList = createMyElement(output, 'ul', 'myList')

myBtn.addEventListener('click', (e) => {
  let userName = myInput.value;
  if(userName.length > 3) {
    const li = addNewUser(userName)
    myInput.value = '';
  }
})

function addNewUser(userName) {
  const li = createMyElement(myList, 'li', 'myList');
  const div = createMyElement(li, 'div', 'container');
  const span1 = createMyElement(div, 'span', 'info');
  span1.textContent = userName;
  const span2 = createMyElement(div, 'span', 'editor');
  span2.textContent = 'Edit';
  const span3 = createMyElement(div, 'span', 'del');
  span3.textContent = 'Delete'

  span2.addEventListener('click', (e) => {
    console.log('edit')
  })

  span3.addEventListener('click', (e) => {
    console.log('delete')
  })





  return li;
}


function createMyElement(parent, elType, classAdd) {
  const ele = document.createElement(elType);
  parent.append(ele);
  ele.classList.add(classAdd)
  return ele;
}