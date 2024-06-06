function generatePassword() {
    const length = document.getElementById('length').value;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let password = "";
    for (let i = 0, n = charset.length; i < length; ++i) {
        password += charset.charAt(Math.floor(Math.random() * n));
    }
    document.getElementById('password').value = password;
}

function validatePassword() {
    const password = document.getElementById('customPassword').value;
    const validationMessage = document.getElementById('validationMessage');
    
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasNonalphas = /\W/.test(password);
    const isValidLength = password.length >= 8;

    if (hasUpperCase && hasLowerCase && hasNumbers && hasNonalphas && isValidLength) {
        validationMessage.style.color = 'green';
        validationMessage.textContent = 'Password is strong!';
    } else {
        validationMessage.style.color = ' red';
        validationMessage.textContent = 'Password should be at least 8 characters long and include uppercase letters, lowercase letters, numbers, and special characters.';
    }
}
