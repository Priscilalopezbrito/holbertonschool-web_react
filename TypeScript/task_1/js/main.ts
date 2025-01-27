// Task 1: Let's build a Teacher interface
interface Teacher {
    readonly firstName: string //can only be set during init
    readonly lastName: string //can only be set during init
    fullTimeEmployee: boolean
    yearsOfExperience?: number //optional
    location: string
    [key: string]: any; //any attribute
}

// Task 2: Extending the Teacher class
interface Directors extends Teacher {
    numberOfReports: number
}

// Task 3: Printing teachers
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}
const printTeacher: printTeacherFunction = (firstName: string, lastName: string) => {
    return `${firstName[0]}. ${lastName}`;
};

// Example:
// console.log(printTeacher("John", "Doe"));
