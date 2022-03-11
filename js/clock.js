let username = prompt("Lütfen Adinizi Giriniz !");

let unameDom = document.querySelector("#myName");


function warn() {
    alert("Lütfen geçerli bir kullanici adi giriniz !");
    this.location.reload();
}
function showTime() {
    const hours = new Date().getHours();
    const minutes = new Date().getMinutes();
    const seconds = new Date().getSeconds();

    const day = new Date().getDay();
    const weekday = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    let fullTime = hours.toString() + ":" + minutes.toString() + ":" + seconds.toString() + "  " + weekday[day];
    let clockElement = document.getElementById('myClock');
    clockElement.innerHTML = `${fullTime ? fullTime : "Hata"} `;

}

unameDom.innerHTML = `${username.length > 0 ? username : warn()}`;

setInterval(() => {
    showTime();
}, 1000);


