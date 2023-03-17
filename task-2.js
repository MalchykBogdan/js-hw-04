const obj = {
    name: 'Mango', 
    age: 2,
    mail: 'poly@mail.com', 
    isOnline: true, 
    score: 500 
}

function countProps(obj) {
    let count = 0;
    for (let prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        count++;
      }
    }
    return count;
}

console.log(obj);
console.log("Загальну сума усіх властивостей:",countProps(obj));