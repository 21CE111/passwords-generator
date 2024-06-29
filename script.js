const passwordbox = document.getElementById("password");
const length = 12;
const uppercase = "QWERTYUIOPASDFGHJKLZXCVBNM";
const lowercase = "qwertyuiopasdfghjklzxcvbnm";
const number = "1234567890";
const ch = "~!@#$%^&*()_+{}[]<>+/?";
const allch = lowercase + uppercase + number + ch;

function createPassword() {
  let password = "";

  while (length > password.length) {
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += ch[Math.floor(Math.random() * ch.length)];
  }
  passwordbox.value = password;
}

function copyPassword() {
  passwordbox.select();
  document.execCommand("copy");
}
