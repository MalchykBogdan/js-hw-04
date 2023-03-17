const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: 'true',
};

function addMood (value){
    user.mood = value
}
function updateHobby (newValue){
    user.hobby = newValue
}
function updatePremium(newValue){
    this.premium = newValue
}

function newArr(values){
    for(const value of  values){
        console.log(`${value}:${user[value]}`);
    }
}

addMood('happy')

updateHobby('skydiving')

updatePremium('false')

console.table(user)

newArr(Object.keys(user))