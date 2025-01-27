interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'Priscila',
    lastName: 'Lopez',
    age: 33,
    location: 'Las Piedras',
};

const student2: Student = {
    firstName: 'Carmen',
    lastName: 'Ortiz',
    age: 30,
    location: 'Cayey',
};

const studentsList: Student[] = [student1, student2];

// Create table
const table: HTMLTableElement = document.createElement('table');
document.body.appendChild(table);

// Table header
const thead = table.createTHead();
const headerRow: HTMLTableRowElement = thead.insertRow();
const headers = ['First Name', 'Location'];

// Fill header
headers.forEach((header) => {
    const th: HTMLTableCellElement = document.createElement('th');
    th.textContent = header;
    headerRow.appendChild(th);
});

// Add rows for students
studentsList.forEach((student) => {
    const row: HTMLTableRowElement = table.insertRow();
    const firstNameCell: HTMLTableCellElement = row.insertCell();
    const locationCell: HTMLTableCellElement = row.insertCell();

    firstNameCell.innerHTML = student.firstName;
    locationCell.innerHTML = student.location;
});
