// Define a Student class
class Student {
    constructor(name) {
        this.name = name;
        this.id = this.generateUniqueId();
        this.course = null;
        this.tuitionFee = 20000;
        this.remainingFee = this.tuitionFee;
    }

    generateUniqueId() {
        const randomNumber = Math.floor(Math.random() * 10000);
        const timestamp = new Date().getTime();
        return `${timestamp}-${randomNumber}`;
    }

    selectCourse(courseName) {
        this.course = courseName;
    }

    payFee(amount) {
        this.remainingFee -= amount;
    }

    showStatus() {
        console.log(`Student Name: ${this.name}\nID: ${this.id}\nDesired Course: ${this.course}\nDue Balance: ${this.remainingFee}`);
    }
}

// Usage

// Get student details
const studentName = "John"; // Example name
const student = new Student(studentName);

// Select course
const selectedCourse = "JavaScript"; // Example course
student.selectCourse(selectedCourse);

// Pay fee
const paidFee = 10000; // Example fee
student.payFee(paidFee);

// Show status
student.showStatus();
