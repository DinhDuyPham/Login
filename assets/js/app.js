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
            // return true;
            if (!regex_name.test(fullName) && login === 0) {
                if (regex_name.test(fullName)) {
                } else {
                    let input = document.querySelector(".label:has(>#Name)");
                    this.timeout_error(input);
                    console.log("Invalid name");
                }
            }
            if (!regex_email.test(email)) {
                let input = document.querySelector(".label:has(>#email)");
                this.timeout_error(input);
                console.log("Invalid email");
            }
            if (!regex_pass.test(password)) {
                let input = document.querySelector(".label:has(>#password)");
                this.timeout_error(input);
                console.log("Invalid password");
            }
            if ((password !== cf_password) | (cf_password == "") && login === 0) {
                let input = document.querySelector(".label:has(>#Confirm_password)");
                this.timeout_error(input);
                console.log("Password does not match");
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
        input.classList.add("label-error");
        setTimeout(() => {
            input.classList.remove("label-error");
        }, 1000);
    },

    // hide and show password
    toggle_hide_password: function () {
        let btn = document.querySelectorAll('input[type="password"] ~ i');
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

    // Change background
    change_background: function () {
        const imgs = [
            {
                img: "assets/img/background-1.jpg",
                dark: true,
            },
            {
                img: "assets/img/background-2.jpg",
                dark: true,
            },
            {
                img: "assets/img/background-3.jpg",
                dark: true,
            },
            {
                img: "assets/img/background-4.jpg",
                dark: true,
            },
            {
                img: "assets/img/background-5.jpg",
                dark: true,
            },
            {
                img: "assets/img/background-6.jpg",
                dark: false,
            },
            {
                img: "assets/img/background-7.jpg",
                dark: false,
            },
            {
                img: "assets/img/background-8.jpg",
                dark: false,
            },
            {
                img: "assets/img/background-9.jpg",
                dark: false,
            },
            {
                img: "assets/img/background-10.jpg",
                dark: false,
            },
        ];
        imgs.sort(() => {
            return Math.random() - 0.5;
        });
        let i = 0;
        document.querySelector(".btn.btn-change-bg").addEventListener("click", () => {
            var img = imgs[i].img;
            // var img = new Image();
            // img.src = imgs[i].img;
            // img.onload = function () {
            console.log(img);
            if (imgs[i].dark) {
                document.querySelector("body").style.backgroundImage = "url(" + img + ")";
                document.documentElement.style.setProperty("--color-text", "#FFF");
                document.documentElement.style.setProperty("--color-shadow", "#EEE");
                document.documentElement.style.setProperty("--color-text-reverse", "#000");
            } else {
                document.querySelector("body").style.backgroundImage = "url(" + img + ")";
                document.documentElement.style.setProperty("--color-text", "#000");
                document.documentElement.style.setProperty("--color-shadow", "#111");
                document.documentElement.style.setProperty("--color-text-reverse", "#FFF");
            }
            // };

            i++;
            if (i >= 10) {
                i = 1;
            }
        });
    },
};
