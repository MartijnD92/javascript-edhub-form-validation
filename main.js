const username = document.querySelector('#username');
const usernameWarning = document.querySelector('.username-warning');
const password = document.querySelector('#password');
const passwordWarning = document.querySelector('.password-warning');

username.addEventListener('keyup', checkUsername)
password.addEventListener('keyup', checkPassword)

function checkUsername(e) {
    const input = e.target.value;
    if (input.includes('@')) {
        usernameWarning.style.visibility = 'visible';
    } else {
        usernameWarning.style.visibility = 'hidden';
    }
}

function checkPassword(e) {
    const input = e.target.value;
    if (/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@!$%&#])/.test(input) && input.length >= 6) {
        passwordWarning.style.visibility = 'hidden';
    } else {
        passwordWarning.style.visibility = 'visible';
    }
}
