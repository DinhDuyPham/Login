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
                    render.set_vib(document.querySelector("#Name").parentElement, false);
                } else {
                    let input = document.querySelector(".label:has(>#Name)");
                    this.timeout_error(input);
                    input.querySelector("span").innerText = "Invalid name, please enter another name";
                    console.log("Invalid name");
                }
            }

            if (!regex_email.test(email)) {
                let input = document.querySelector(".label:has(>#email)");
                this.timeout_error(input);
                console.log("Invalid email");
                input.querySelector("span").innerText = "Invalid email, please enter a valid email address";
            } else {
                console.log(document.querySelector("#email").parentElement.querySelector("span"));
                render.set_vib(document.querySelector("#email").parentElement, false);
            }
            if (!regex_pass.test(password)) {
                let input = document.querySelector(".label:has(>#password)");
                this.timeout_error(input);
                console.log("Invalid password");
                if (login === 1) {
                    input.querySelector("span").innerText = "your password is not correct.";
                    return false;
                } else {
                    if (password.length < 8) {
                        input.querySelector("span").innerText = "Your password must be at least 8 characters long.";
                        console.log(password.length);
                    }
                    if (password.length > 8) {
                        input.querySelector("span").innerText = "Your password must include letters and numbers.";
                    }
                }
            } else {
                if (login === 1) {
                } else {
                    render.set_vib(document.querySelector("#password").parentElement, false);
                }
            }
            if ((password !== cf_password) | (cf_password == "") && login === 0) {
                let input = document.querySelector(".label:has(>#Confirm_password)");
                this.timeout_error(input);
                console.log("Password does not match");
            } else {
                if (login === 1) {
                    return false;
                } else {
                    render.set_vib(document.querySelector("#Confirm_password").parentElement, false);
                }
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
        // this.set_vib(btn, true);
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
        render.set_vib(input, true);
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
        let bgr = JSON.parse(localStorage.getItem("background")) || "assets/img/background-1.jpg";
        document.querySelector("body").style.backgroundImage = "url(" + bgr + ")";
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
            localStorage.setItem("background", JSON.stringify(imgs[i].img));

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

    // set visibility for span error
    set_vib: function (btn, visible) {
        let label_error = btn.querySelector("span");
        // console.log(label_error);
        if (visible) {
            // console.log("90");
            label_error.style.visibility = "visible";
        } else {
            // console.log("100");
            label_error.style.visibility = "hidden";
        }
    },

    // delete span error when focus input
    delete_error: function (input) {
        let a = input.querySelectorAll("input");
        for (let item of a) {
            item.addEventListener("focus", () => {
                this.set_vib(item.parentElement, false);
            });
        }
    },
};
