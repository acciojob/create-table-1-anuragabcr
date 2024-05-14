function insert_Row() {
    //Write your code here
  table = document.getElementById("sampleTable")
	row = table.insertRow(0)
	cell1 = row.insertCell(0)
	cell2 = row.insertCell(1)
	cell1.innerHTML = "New Cell1"
	cell2.innerHTML = "New Cell2"
}
