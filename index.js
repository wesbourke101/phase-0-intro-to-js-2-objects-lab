const employee = {
    name: "Wes",
    streetAddress: "9 Pennsylvania ave",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]: value,
    };
};

// function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
//     return employee = {
//         ...employee, 
//         [key]: value,
//     };
// };

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    
}
