FixedSalaryEmployee.prototype = new Employee();

FixedSalaryEmployee.prototype.getYearSalary = function() {
    show (this.getPosition() + " " + this.getName() + " earns " + this.salaryPerMonth * this.workingMonthes + " per year.");
}

SalaryPerHourEmployee.prototype = new Employee();

SalaryPerHourEmployee.prototype.getYearSalary = function() {
    show (this.getPosition() + " " + this.getName() + " gains " + this.salaryPerHour * this.workingHours + " per year.");
}

//Creating employee with monthly fixed salary
var employee_1 = new FixedSalaryEmployee(500, 8);
employee_1.setName("William");
employee_1.setPosition("Writer");

//Creating employee with hourly wage
var employee_2 = new SalaryPerHourEmployee(100, 450);
employee_2.setName("Jack");
employee_2.setPosition("Pirat");

//Run polymorphic method for each employee
var arrayOfEmployees = [employee_1, employee_2];
arrayOfEmployees.forEach(function(employee){
    employee.getYearSalary();
});



// functions
function Employee(){
    var name;
    var position;

    this.setName = function(newName) {
        name = newName;
    };

    this.getName = function() {
        return name;
    };

    this.setPosition = function(newPosition) {
        position = newPosition;
    };

    this.getPosition = function() {
        return position;
    };
};

function FixedSalaryEmployee (salaryPerMonth, workingMonthes) {
    this.salaryPerMonth = salaryPerMonth;
    this.workingMonthes = workingMonthes;
};

function SalaryPerHourEmployee (salaryPerHour, workingHours) {
    this.salaryPerHour = salaryPerHour;
    this.workingHours = workingHours;
};

function show(data) {
    console.log(data);
};