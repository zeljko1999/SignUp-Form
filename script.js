const form = document.querySelector("form");
const password = document.getElementById("pw");
const passwordConfirm = document.getElementById("password-confirm");
const passwordError = document.querySelector(".error-row");

passwordConfirm.addEventListener("input", (event) => {
if(passwordConfirm.value == password.value)
{
    passwordError.textContent = "\u00A0";
    passwordConfirm.style.border = "1px solid rgba(0,0,0,0.1)";
    passwordConfirm.setCustomValidity("");
}
    else
    {
        passwordError.textContent = "*Passwords do not match";
        passwordConfirm.style.border = "1px solid rgba(255,0,0,1)";
        passwordConfirm.setCustomValidity("Passwords do not match");
    }
});

password.addEventListener("input", (event) => {
    if(password.value == passwordConfirm.value)
    {
        passwordError.textContent = "\u00A0";
        passwordConfirm.style.border = "1px solid rgba(0,0,0,0.1)";
        passwordConfirm.setCustomValidity("");
    }
        else
        {
            passwordError.textContent = "*Passwords do not match";
            passwordConfirm.style.border = "1px solid rgba(255,0,0,1)";
            passwordConfirm.setCustomValidity("Passwords do not match.");
        }
    });