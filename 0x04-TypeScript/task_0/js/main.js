var student1 = {
    firstName: 'Barry',
    lastName: 'Saro',
    age: 25,
    location: 'Nigeria'
};
var student2 = {
    firstName: 'Nancy',
    lastName: 'Anthony',
    age: 23,
    location: 'North Carolina'
};
var studentList = [student1, student2];
var body = document.getElementsByTagName("body")[0];
var table = document.createElement('table');
var thead = document.createElement('thead');
var th1 = document.createElement('th');
var th2 = document.createElement('th');
th1.innerText = 'First Name';
th2.innerText = 'Location';
th1.style.border = '1px solid blue';
th2.style.border = '1px solid blue';
th1.style.padding = '.5rem';
th2.style.padding = '.5rem';
table.style.border = '1px solid blue';
table.style.borderCollapse = 'collapse';
thead.append(th1);
thead.append(th2);
table.append(thead);
studentList.forEach(function (student) {
    var row = document.createElement('tr');
    var column1 = document.createElement('td');
    var column2 = document.createElement('td');
    column1.innerText = student.firstName;
    column2.innerText = student.location;
    column1.style.border = '1px solid gray';
    column2.style.border = '1px solid gray';
    column1.style.padding = '.5rem';
    column2.style.padding = '.5rem';
    row.append(column1);
    row.append(column2);
    table.append(row);
});
body.append(table);
