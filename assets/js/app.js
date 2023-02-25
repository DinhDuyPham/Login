function invalid(fullName, email, password, cf_password, login) {
    const regex_name =
        /^[A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ][a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]*(?:[ ][A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ][a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]*)*$/gm;
    const regex_email =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const regex_pass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (regex_name.test(fullName) && regex_email.test(email) && regex_pass.test(password) && password === cf_password) {
        return true;
    } else {
        if (!regex_name.test(fullName) && login === 0) {
            let input = document.querySelector(".lable:has(>#Name)");
            timeout_error(input);
        }
        if (!regex_email.test(email)) {
            let input = document.querySelector(".lable:has(>#email)");
            timeout_error(input);
        }
        if (!regex_pass.test(password)) {
            let input = document.querySelector(".lable:has(>#password)");
            timeout_error(input);
        }
        if ((password !== cf_password) | (cf_password == "") && login === 0) {
            let input = document.querySelector(".lable:has(>#Confirm_password)");
            timeout_error(input);
        }
        return false;
    }
}

function fail_login(btn) {
    btn.classList.add("btn_login-invalid");
    setTimeout(() => {
        btn.classList.remove("btn_login-invalid");
    }, 1000);
}

function fail_register(btn) {
    btn.classList.add("btn_register-invalid");
    setTimeout(() => {
        btn.classList.remove("btn_register-invalid");
    }, 1000);
}

function timeout_error(input) {
    input.classList.add("lable-error");
    setTimeout(() => {
        input.classList.remove("lable-error");
    }, 500);
}
