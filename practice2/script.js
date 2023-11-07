// import * as d3 from "d3";

var dataset = ["hello", "hi", "yo", "hey", "hola", "what's up", "why"]

d3.select("body")
    .selectAll("p")
    .data(dataset)
    .enter()
    .append("p")
        .text(function(d) {
            return d + ", world"
        })