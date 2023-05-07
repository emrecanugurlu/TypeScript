/*Promise , async süreçlerde yapılan işlemin sonucunu temsil eder. ".then" ve ".catch" yöntemleri ile işlemin
 başarılı olma ve hata alma durumlarını kontrol edebiliriz.*/
function getData() :Promise<String>{
    return new Promise<String>((resolve,reject) => {
        setTimeout(() =>{
            /*Eğer işlem başarılı olduysa resolve içerisine değerimizi koyabiliriz. Eğer işlem başarısız ise hata
             değerimizi reject'in içerisine koyabiliriz. Her ikisi birden çalışmayacaktır.*/
            resolve("Çözüldü")
        },10000)
        setTimeout(() =>{
            reject("Hata")
        },6000)
    })
}

getData()
    .then((result) => {console.log(result)})
    .catch((error) => console.log(error))

console.log("Deneme")