// import { axisBottom } from "d3-axis";
// import { timeMonth } from "d3-time";
// import { timeFormat } from "d3-time-format";

// import {axisBottom, timeMonth, timeFormat} from "d3"

// const { 
//     scaleTime,
//     scaleLinear,
//     select,
//     csv,
//     extent,
//     max,
//     min
// } = d3;


// Set dimensions and margins for the chart
const margin = {top: 70, right: 30, bottom: 40, left: 80};
const width = window.innerWidth - margin.left - margin.right;
const height = window.innerHeight - margin.top - margin.bottom;
const svgWidth = width + margin.left + margin.right;
const svgHeight = height + margin.top + margin.bottom;

// Set up the x and y scales
const x = d3.scaleTime()
  .range([0, width]);

const y = d3.scaleLinear()
  .range([height, 0]);

// Create the SVG element and append it to the chart container
const svg = d3.select("#chart-container")
                .append("svg")
                    .attr("width", svgWidth)
                    .attr("height", svgHeight)
                .append("g")
                    .attr("transform", `translate(${margin.left},${margin.top})`);

// Create a fake dataset
// const dataset = [
//     { date: new Date("2022-01-01"), value: 200 },
//     { date: new Date("2022-02-01"), value: 250 },
//     { date: new Date("2022-03-01"), value: 180 },
//     { date: new Date("2022-04-01"), value: 300 },
//     { date: new Date("2022-05-01"), value: 280 },
//     { date: new Date("2022-06-01"), value: 220 },
//     { date: new Date("2022-07-01"), value: 300 },
//     { date: new Date("2022-08-01"), value: 450 },
//     { date: new Date("2022-09-01"), value: 280 },
//     { date: new Date("2022-10-01"), value: 600 },
//     { date: new Date("2022-11-01"), value: 780 },
//     { date: new Date("2022-12-01"), value: 320 }
//   ];

d3.csv('date.csv').then(function(dataset) {
    // Assuming x and y are scales
    const x = d3.scaleTime()
      .domain(d3.extent(dataset, d => new Date(d.date)))
      .range([0, width]); // Assuming width is defined
  
    const y = d3.scaleLinear()
      .domain([0, d3.max(dataset, d => +d.value)]) // Assuming 'value' is a numeric field
      .range([height, 0]); // Assuming height is defined
  
    // Define the x and y domains
    // x.domain(d3.extent(data, d => new Date(d.date)));
    // y.domain([0, d3.max(data, d => +d.value)]);
  
    // Add the x-axis
    svg.append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(x)
        .ticks(d3.timeMonth.every(1))
        .tickFormat(d3.timeFormat("%b %Y")));

    svg.append("g")
        .call(d3.axisLeft(y));
  });

// Define the x and y domains
// x.domain(d3.extent(dataset, d => d.date));
// y.domain([0, d3.max(dataset, d => d.value)]);

// Add the x-axis
// svg.append("g")
//     .attr("transform", `translate(0, ${height})`)
//     .call(d3.axisBottom(x)
//         .ticks(d3.timeMonth.every(1))
//         .tickFormat(d3.timeFormat("%b %Y")));

// // Add the y-axis
// svg.append("g")
//     .call(d3.axisLeft(y));

// Create the line generator
// const line = d3.line()
//     .x(d => x(d.date))
//     .y(d => y(d.value));

// Add the line path to the SVG element

// svg.append("path")
//     .datum(dataset)
//     .attr("fill", "none")
//     .attr("stroke", "steelblue")
//     .attr("stroke-width", 1)
//     .attr("d", line);