const form = document.getElementById('form');
form.addEventListener('submit', () => alert("This is just an example, so there's no actual sign-up. " +
                                            "Thanks for checking it out though!"));

const confirm_password = document.getElementById('confirm-password');
function check_pass() {
    const first_pass = document.getElementById('password').value;
    const second_pass = document.getElementById('confirm-password').value;
    if (first_pass != second_pass) {
        confirm_password.setCustomValidity("Passwords do not match!");
    } else {
        confirm_password.setCustomValidity("");
    }
}