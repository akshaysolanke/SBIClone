const keyInput =  document.querySelectorAll(".a_key");
const formInput = document.querySelectorAll(".a_input");

const checkbox = document.getElementById("checkbox");
const imagebox = document.querySelector(".a_image_content_box");
const keybox = document.querySelector(".a_dynamic_keybord");
const refreshCaptcha = document.getElementById("refreshCaptcha");
const a_image_content_box = document.querySelector(".a_image_content_box");
// const Username = document.getElementById("Username")

console.log(imagebox);
console.log(keybox);

let inputFocusName = null;
function usernamefun() {
  inputFocusName = "Username";
}

function passwordfun() {
  inputFocusName = "password";
}

function captchafun() {
  inputFocusName = "captcha";
}

const captchaBox = document.getElementById("a_captcha_box");
const refreshcaptcha = document.getElementById("refreshCaptcha");

// window onload

window.onload = function () {
  captchaBox.innerText = captchaGen();
};

refreshCaptcha.addEventListener("click", function () {
  captchaBox.innerText = captchaGen();
});

document.addEventListener("click", function (Event) {
  if (Event.target.classList.contains("a_key")) {
    const input = getElementById(inputFocusName);
    if (Event.target.innerText == "Clear") {
      input.value = "";
    } else {
      input.value += Event.target.innerText;
    }
  }
});


checkbox.addEventListener("change", function (e) {
  const isVisiable = e.target.checked;
  if (!isVisiable) {
    imagebox.classList.remove("d-none");
    keybox.classList.add("d-none");
  } else {
    keybox.classList.remove("d-none");
    imagebox.classList.add("d-none");
  }
});
