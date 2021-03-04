function deleteRow(obj) {
    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("myTable");
    table.deleteRow(index);

}