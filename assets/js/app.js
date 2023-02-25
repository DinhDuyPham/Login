const render = {
    // invalid form register & login
    invalid: function (fullName, email, password, cf_password, login) {
        const regex_name =
            /^[A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ][a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]*(?:[ ][A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ][a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]*)*$/gm;
        const regex_email =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const regex_pass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (
            regex_name.test(fullName) &&
            regex_email.test(email) &&
            regex_pass.test(password) &&
            password === cf_password
        ) {
            return true;
        } else {
            if (!regex_name.test(fullName) && login === 0) {
                if (regex_name.test(fullName)) {
                } else {
                    let input = document.querySelector(".lable:has(>#Name)");
                    this.timeout_error(input);
                }
            }
            if (!regex_email.test(email)) {
                let input = document.querySelector(".lable:has(>#email)");
                this.timeout_error(input);
            }
            if (!regex_pass.test(password)) {
                let input = document.querySelector(".lable:has(>#password)");
                this.timeout_error(input);
            }
            if ((password !== cf_password) | (cf_password == "") && login === 0) {
                let input = document.querySelector(".lable:has(>#Confirm_password)");
                this.timeout_error(input);
            }
            return false;
        }
    },
    // Case login fail
    fail_login: function (btn) {
        btn.classList.add("btn_login-invalid");
        setTimeout(() => {
            btn.classList.remove("btn_login-invalid");
        }, 1000);
    },
    // Case register fail
    fail_register: function (btn) {
        btn.classList.add("btn_register-invalid");
        setTimeout(() => {
            btn.classList.remove("btn_register-invalid");
        }, 1000);
    },

    // Case fail to label error
    timeout_error: function (input) {
        input.classList.add("lable-error");
        setTimeout(() => {
            input.classList.remove("lable-error");
        }, 1000);
    },

    // hide and show password
    toogle_hide_password: function () {
        let btn = document.querySelectorAll('input[type="password"] ~ i');
        console.log(btn);

        for (var item of btn) {
            item.addEventListener("click", (e) => {
                if (e.target.getAttribute("class") == "fa-regular fa-eye") {
                    e.target.setAttribute("class", "fa-solid fa-eye-slash");
                    e.target.parentElement.querySelector("input").setAttribute("type", "password");
                } else {
                    e.target.setAttribute("class", "fa-regular fa-eye");
                    e.target.parentElement.querySelector("input").setAttribute("type", "text");
                }
            });
        }
    },
};
