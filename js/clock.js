let username = prompt("Lütfen Adinizi Giriniz !");

let unameDom = document.querySelector("#myName");

function warn() {
    alert("Lütfen geçerli bir kullanici adi giriniz !");
    this.location.reload();
}

unameDom.innerHTML = `${username.length > 0 ? username : warn()}`;