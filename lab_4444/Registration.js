/* that is the login part where login related code goes*******************************LOGIN***********************
*****************************************************************************************************************/
function check_same_Password(){
    let tag_id1 = "#Signinpassword";
    let tag_id2 = "#Signinpassword2";
    let password1 = document.querySelector(tag_id1).value
    let password2 = document.querySelector(tag_id2).value
    if(password1 == password2){
        return true;
    } else{

        error_Message("The passwords do not match", "Signin")
        
        return false;
    }
}

function LoginVerifyForm() {
    if(check_Email("Login") && check_Password("Login")){
        deleteAllChildren("#LoginErrorMessage")
        signIn();
    }
    return false;
}

/* that is the login part where signin related code goes******************************SIGNIN**********************
*****************************************************************************************************************/
function SigninVerifyForm() {
    if(check_Email("Signin") && check_Password("Signin") && check_same_Password()){
        deleteAllChildren("#SigninErrorMessage")
        signUp();
    }
    return false;
}





/* that is part where login and sign in related code goes*****************************BOTH************************
*****************************************************************************************************************/

function check_Email(log_sign) {
    let tag_id = "#" + log_sign + "email";
    let email = document.querySelector(tag_id).value;
    if(email){
        // Regular expression for email validation
        let emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

        if (!emailRegex.test(email)) {
            let message = "Invalid email format";
            error_Message(message, log_sign);
            return false;
        }

        return true;
    }

    error_Message("No input provided in email field", log_sign);
    return false;
}

function check_Password(log_sign) {
    let tag_id = "#" + log_sign + "password";
    let password = document.querySelector(tag_id).value
    console.log(password.length)
    if(password){

        if(password.length < 8){
            error_Message("Password must have at least 8 characters!", log_sign)
            return;
        }

        return true;
    }

    error_Message("No input provided in field password", log_sign);

    return false;
}

function deleteAllChildren(elementId) {
    const parentElement = document.querySelector(elementId);
    
    if (parentElement) {
        while (parentElement.firstChild) {
            parentElement.removeChild(parentElement.firstChild);
        }
    }
}

function error_Message(message, log_sign){
    let tag_id = "#" + log_sign + "ErrorMessage";
    deleteAllChildren(tag_id)

    let parent = document.querySelector(tag_id)
    let child = document.createElement("p")
    child.textContent = message

    parent.appendChild(child);
}

// send messages to the server
async function signIn() {

    const emailValue = document.getElementById('Loginemail').value;
    const passwordValue = document.getElementById('Loginpassword').value;
    console.log(emailValue)
    console.log(passwordValue)
    const response = await fetch('http://localhost:5027/api/auth/login', {
        method: "POST",
        body: JSON.stringify({
            "email": `${emailValue}`,
            "password": `${passwordValue}`
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    });

    if (!response.ok) {
        const errorDetails = await response.json();
        console.log(`Error! ${errorDetails}`)
    } else {
        localStorage.setItem('token', `${await response.text()}`)
        window.location.href = "/Products.html";
    }
}

async function signUp() {

    const emailValue = document.getElementById('Signinemail').value;
    const displayName = document.getElementById('Signinusername').value;
    const passwordValue = document.getElementById('Signinpassword').value;
    console.log(emailValue)
    console.log(displayName)
    console.log(passwordValue)
    const response = await fetch('http://localhost:5027/api/auth/register', {
        method: "POST",
        body: JSON.stringify({
            "email": `${emailValue}`,
            "displayName": `${displayName}`,
            "password": `${passwordValue}`
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    });

    if (!response.ok) {
        const errorDetails = await response.json();
        console.log(`Error! ${errorDetails.body}`)
    } else {
        location.reload();
    }
}