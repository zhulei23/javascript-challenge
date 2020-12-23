// from data.js
var tableData = data;
console.log(tableData)

// Get a reference to the table body
var tbody = d3.select("tbody");

// Use d3 to update each cell's text with data values to display all data
tableData.forEach((ufo_data) => {
  console.log(ufo_data);
  var row = tbody.append("tr");

  Object.entries(ufo_data).forEach(([key, value]) => {
    console.log(key, value);
    var cell = row.append("td");
    cell.text(value);
     });
});

//Create a event handler to search result through data/time column
//Select the submit button
var filterTableButton = d3.select("#filter-btn")

//Create event of filter table button
filterTableButton.on("click", function() {

//Prevent page get refreshed automatcially
  d3.event.preventDefault();

//Create event of entering particular date
  var dateEntry = d3.select("#datetime").property("value")
  console.log(dateEntry)

  d3.select("tbody").html("");

//Create event of retreiving filtered value for a particular date
  var retrievedValue = tableData.filter(retrievedData => retrievedData.datetime === dateEntry);
  console.log(retrievedValue);

  retrievedValue.forEach((ufo_data) => {
    var row = tbody.append("tr");

     Object.entries(ufo_data).forEach(([key, value]) => {
      console.log(key, value);
      var cell = row.append("td")
      cell.text(value);
       });
  });

});



