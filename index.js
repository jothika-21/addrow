var form = document.getElementById("myForm");

form.addEventListener("submit", function (event) {

  event.preventDefault();

  var inputValue1 = document.getElementById("inputField1").value;
  var inputValue2 = document.getElementById("inputField2").value;

  if (!inputValue1 || !inputValue2) {

    document.getElementById("errorContainer").innerHTML = "Both fields are required.";
  } else {

    document.getElementById("errorContainer").innerHTML = "";

    var table = document.getElementById("myTable");

    var newRow = table.insertRow(-1);

    var newCell1 = newRow.insertCell(0);
    var newCell2 = newRow.insertCell(1);

    newCell1.innerHTML = inputValue1;
    newCell2.innerHTML = inputValue2;
  }
});














