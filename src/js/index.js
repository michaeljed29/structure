import '../sass/main.scss'
import { addNum } from './other';

const buttonAdd = document.querySelector('.btn-add');

const res = document.querySelector('.result');


buttonAdd.addEventListener('click', e => {
    e.preventDefault();
    const num1 = document.querySelector('.num1').value;
    const num2 = document.querySelector('.num2').value;
    res.textContent = addNum(num1, num2);
    
});