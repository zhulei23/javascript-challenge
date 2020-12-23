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
var filterTableButton = d3.select("#filter-btn");

//Create event of filter table button
filterTableButton.on("click", function() {

//Prevent page get refreshed automatcially
  d3.select("tbody").html("");
  d3.event.preventDefault();

// Create references for filters
  var retrievedDateTime = d3.select("#datetime").property("value");
  var retrievedCity = d3.select("#city").property("value");
  var retrievedState = d3.select("#state").property("value");
  var retrievedCountry = d3.select("#country").property("value");
  var retrievedShape = d3.select("#shape").property("value");

//Get references to the multiple filters (input tags) of date/time, city, state, country, shape
retrievedValue2 = tableData;

if (retrievedDateTime) {
  retrievedValue2 = retrievedValue2.filter(retrievedData2 => retrievedData2.datetime === retrievedDateTime);
}
if (retrievedCity) {
  retrievedValue2 = retrievedValue2.filter(retrievedData2 => retrievedData2.city === retrievedCity);
}
if (retrievedState) {
  retrievedValue2 = retrievedValue2.filter(retrievedData2 => retrievedData2.state === retrievedState);
}
if (retrievedCountry) {
  retrievedValue2 = retrievedValue2.filter(retrievedData2 => retrievedData2.country === retrievedCountry);
}
if (retrievedShape) {
  retrievedValue2 = retrievedValue2.filter(retrievedData2 => retrievedData2.shape === retrievedShape);
}

// Displaying filtered data 
retrievedValue2.forEach((ufo_data) => {
  var row = tbody.append("tr");

  Object.entries(ufo_data).forEach(([key, value]) => {
    console.log(key, value);
    var cell = row.append("td");
    cell.text(value);
  });
});
});
