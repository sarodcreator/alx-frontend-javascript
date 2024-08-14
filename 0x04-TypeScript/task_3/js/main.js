"use strict";
exports.__esModule = true;
var crud_1 = require("./crud");
var row = {
    firstName: 'Guillaume',
    lastName: 'Salva'
};
var newRowID = crud_1["default"].insertRow(row);
row.age = 23;
var updatedRow = row;
crud_1["default"].updateRow(newRowID, updatedRow);
crud_1["default"].deleteRow(newRowID);
