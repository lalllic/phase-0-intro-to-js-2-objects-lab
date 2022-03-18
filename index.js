// Write your solution in this file!
let employee = {};
function reset() {
    for (const key in employee) {
        delete employee[key];
      }
      employee.name = 'Sam';
}

reset();
function updateEmployeeWithKeyAndValue(employee, key, value) {
    let newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee;
}

reset();
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

reset();
function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee
}

reset();
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}

