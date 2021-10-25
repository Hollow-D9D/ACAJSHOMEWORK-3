class Employee {
    constructor(id, name, lastName, position, salary, workingHours) {
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.position = position;
        this.salary = salary;  //as I guessed it is per hour
        this.workingHours = workingHours;
    }
    
    get id() {return this._id}
    set id(id) {this._id = id}

    get name() {return this._name}
    set name(name) {this._name = name}
    
    get lastName() {return this._lastName}
    set lastName(lastName) {this._lastName = lastName}
    
    get position() {return this._position}
    set position(position) {this._position = position}
    
    get salary() {return this._salary}
    set salary(salary) {this._salary = salary}
    
    get workingHours() {return this._workingHours}
    set workingHours(workingHours) {this._workingHours = workingHours}

    getFullName() {return `${this.name} ${this.lastName}`}
    getAnnualSalary() {return this.salary * ((365 / 7) * 5) * this.workingHours}  //taking out average working days and multiplying it with working hours
    raiseSalary(percent) {this.salary += this.salary / 100 * percent}

}

let test = new Employee(1, "Richard", "Gurney", "Logistics Specialist", 20, 9);

console.log(test);
console.log(test.getFullName());
console.log(test.getAnnualSalary());