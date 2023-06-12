interface Student {
    firstName: string;
    age: number;
    location: string
}

const student1: Student = {
    firstName: "Daniel",
    age: 22,
    location: 'London'
};

const student2: Student = {
    firstName:'T',
    age: 22,
    location: 'Southampton'
};

const mList = [student1, student2];

let table = document.createElement('table');
for (let row of mList) {
    table.insertRow();

    let nameCell = table.rows[table.rows.length - 1].insertCell();
    nameCell.textContent = row.firstName;
    let newCell = table.rows[table.rows.length - 1].insertCell();
    newCell.textContent = row.location;

    document.body.appendChild(table);

}