function getData() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("Çözüldü");
        }, 10000);
        setTimeout(function () {
            reject("Hata");
        }, 6000);
    });
}
getData().then(function (result) { console.log(result); }).catch(function (error) { return console.log(error); });
console.log("Deneme");
