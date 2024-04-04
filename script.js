// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data function
const collectEmployees = function () {
  const allEmployees = [];
  let decision = true;
  //while loop to collect employee info
  while (decision) {
    const firstName = prompt("Please enter your first name.");
    const lastName = prompt("Please enter your last name.");
    let Salary = prompt("Enter Salary");
    //if statement to force 0 in place of NaN
    if (isNaN(Salary) || Salary === null) {
      Salary = 0;
    }
//employee array
    let employee = {
      firstName: firstName,
      lastName: lastName,
      salary: parseFloat(Salary)
    };
//push into array
    allEmployees.push(employee);

    console.log(employee);

    decision = window.confirm("Add another employee?")
  }
  console.log(allEmployees);
  return allEmployees;

}


// Display the average salary
const displayAverageSalary = function (employeesArray) {
  totalSalary = 0;
  for (i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];
    totalSalary += parseInt(currentEmployee.salary);
  }
  let averageSalary = totalSalary / employeesArray.length;
  alert((`There are ${employeesArray.length} employees. The average salary is $ ${averageSalary} `))
  console.log(`The average salary is $ ${averageSalary} `);
  console.log(`There are ${employeesArray.length} employees`)
  return averageSalary;
}

// Select a random employee
const getRandomEmployee = function (employeesArray) {
let randomEmployee = Math.floor(Math.random() * employeesArray.length);
alert(`Congrats to ${employeesArray[randomEmployee].firstName} ${employeesArray[randomEmployee].lastName} for being randomly selected.`);
console.log(getRandomEmployee);
}


/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}
// all employees chosen will have their data collected
const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
