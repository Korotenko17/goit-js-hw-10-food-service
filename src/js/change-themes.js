import { LIGHT, DARK } from './themes';

const checkboxRef = document.querySelector('#theme-switch-toggle');

checkboxRef.addEventListener('change', handleCheckboxChange);

function handleCheckboxChange() {
    if (checkboxRef.checked) handlerCheckedOn()

    if (!checkboxRef.checked) handlerCheckedOff()
}

function handlerCheckedOn() {
    document.body.classList.add(DARK);
    document.body.classList.remove(LIGHT);
    localStorage.setItem('theme', JSON.stringify(DARK))
    checkboxRef.checked = true;
}

function handlerCheckedOff() {
    document.body.classList.add(LIGHT)
    document.body.classList.remove(DARK);
    localStorage.setItem('theme', JSON.stringify(LIGHT))
    checkboxRef.checked = false;
}

function defaultTheme() {
    const savedTheme = localStorage.getItem('theme');
    const parsedTheme = JSON.parse(savedTheme);

    if (!savedTheme || parsedTheme === LIGHT) handlerCheckedOff()

    if (parsedTheme === DARK) handlerCheckedOn() 
}

defaultTheme();