let salary = {
    mango: 100,
    poly: 150,
    alfred: 80,
}

const countTotalSalary = function (employees) {
    let totalSalary = 0;
   for (let salary of Object.values(employees)){
    totalSalary += salary
   }
   return totalSalary;
};

const allsalary = countTotalSalary(salary) 
console.log("Загальну сума усіх зарплат:",allsalary);
  