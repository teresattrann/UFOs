// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
// D3 is a JavaScript library that produces sophisticated and highly dynamic graphics 
// in an HTML webpage. It is often used by data professionals to create dashboards, 
// or a collection of visual data (such as graphs and maps), for presentation.

var tbody = d3.select("tbody");

// make new function

function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");
  
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
      // Append a row to the table body
      let row = tbody.append("tr");
  
      // Loop through each field in the dataRow and add
      // each value as a table cell (td)
      Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }
      );
    });
  }          

// Object.values, we're telling JavaScript to reference one object from the array of UFO sightings. 
// By adding (dataRow) as the argument, we are saying that we want the values to go into the dataRow. 
// We've added forEach((val) to specify that we want one object per row.

// add button so make a new function

// function handleClick () {
//    // Grab the datetime value from the filter
//     let date = d3.select("#datetime").property("value");
//     let filteredData = tableData;

// .select() - select the very first element that matches our selector string: 
            // "#datetime". The selector string is the item we're telling D3.js to look for.
// d3.select("#datetime") - we're telling D3 to look for the #datetime id in the HTML tags. 
                         // We haven't created our HTML yet, but we know that the date value will 
                         // be nested within tags that have an id of "datetime."
// By chaining .property("value"); to the d3.select function, we're telling D3 not only to look 
// for where our date values are stored on the webpage, but to actually 
// grab that information and hold it in the "date" variable.

function handleClick() {
  // Grab the datetime value from the filter
  let date = d3.select("#datetime").property("value");
  let filteredData = tableData;

   // Check to see if a date was entered and filter the
  // data using that date.
  if (date) {
    // Apply `filter` to the table data to only keep the
    // rows where the `datetime` value matches the filter value
    filteredData = filteredData.filter(row => row.datetime === date);
  }

   // Rebuild the table using the filtered data
  // @NOTE: If no date was entered, then filteredData will
  // just be the original tableData.
  buildTable(filteredData);
}

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);
