const allNumbers = {
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
};

const findBestEmployee = function (employees) {
    const values = Object.values(employees)
    const max = Math.max(...values)
    for (let [name, salary] of Object.entries(employees)){
        if(salary === max){
            return name
        }
    }
};

const resultNumbers = findBestEmployee(allNumbers)
console.log("Ім'я найпродуктивнішого працівника:",resultNumbers);