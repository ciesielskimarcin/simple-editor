const textarea = document.querySelector('.textarea--js');
const loadButton = document.querySelector('.load--js');
const saveButton = document.querySelector('.save--js');


saveButton.addEventListener('click', ()=> {
    localStorage.setItem('value', textarea.value)
})

loadButton.addEventListener('click', ()=> {
    textarea.value = localStorage.getItem('value');
})

// button.addEventListener('click', ()=> {
//     const navigation = document.querySelector('.navigation--js');
//     navigation.classList.toggle('navigation--open');
// })