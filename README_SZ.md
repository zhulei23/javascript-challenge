### Level 1: Automatic Table and Date Search (Required)

* Create a basic HTML web page or use the [index.html](StarterCode/index.html) file provided (we recommend building your own custom page!).

* Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a table to your web page and then adds new rows of data for each UFO sighting.

  * Make sure you have a column for `date/time`, `city`, `state`, `country`, `shape`, and `comment` at the very least.

* Use a date form in your HTML document and write JavaScript code that will listen for events and search through the `date/time` column to find rows that match user input.

Process:
1. from data.js;
2. Get a reference to the table body;
3. Use d3 to update each cell's text with data values to display all data;
4. Create a event handler to search result through data/time column;
5. Select the submit button;
6. Create event of filter table button;
7. Prevent page get refreshed automatcially;
8. Create event of entering particular date;
9. Create event of retreiving filtered value for a particular date.

### Level 2: Multiple Search Categories (Optional)

* Complete all of Level 1 criteria.

* Using multiple `input` tags and/or select dropdowns, write JavaScript code so the user can to set multiple filters and search for UFO sightings using the following criteria based on the table columns:

  1. `date/time`
  2. `city`
  3. `state`
  4. `country`
  5. `shape`

  Process:
  1. from data.js;
  2. Get a reference to the table body;
  3. Use d3 to update each cell's text with data values to display all data;
  4. Create a event handler to search result through data/time column;
  5. Select the submit button - Create event of filter table button;
  6. Prevent page get refreshed automatcially;
  7. Create references for filters;
  8. Get references to the multiple filters (input tags) of date/time, city, state, country, shape;
  9. Displaying filtered data. 


