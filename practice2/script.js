// import * as d3 from "d3";

// const { select } = require("d3")

// var dataset = ["hello", "hi", "yo", "hey", "hola", "what's up", "why"]

// d3.select("body")
//     .selectAll("p")
//     .data(dataset)
//     .enter()
//     .append("p")
//         .text(function(d) {
//             return d + ", world"
//         })


d3.csv("Shots.csv", function(data) {
    // console.log(data)

    var shots = d3.select("svg")
        .selectAll("g")
            .data(data)
            .enter()
            .append("g")
                .attr("class", "shot")
                .attr("transform", function(d) {
                    return "translate(" + 10 * d.converted_x + "," + 10 * d.converted_y + ")"
                    // return "translate(" + d.converted_x + "," + d.converted_x + ")"
                })
            .on("mouseover", function(d) {
                d3.select(this).raise() // confused about without raise
                    .append("text")
                    .attr("class", "playername")
                    .text(d.player)
            })
            .on("mouseout", function(d) {
                d3.selectAll("text.playername").remove()
            })

    shots.append("circle")
            .attr("r", 15)
                .attr("fill", function(d) {
                    if (d.result == "made") {
                        return "green"
                    } else {
                        return "red"
                    }
                })

    var players = d3.nest()
      .key(function(d) {
        return d.player
      })
      .rollup(function(v) {
        return v.length 
      })
      .entries(data)

    console.log(players);

    // players.unshift({"key": "All",
    //                 "value": d3.sum(players, function(d) {
    //                     return d.value
    //                 })})

    var selector = d3.select("#selector")

    selector
            .selectAll("option")
            .data(players)
            .enter()
                .append("option")
                    .text(function(d) {
                        return d.key + ":" + d.value
                    })
                    .attr("value", function(d) {
                        return d.key
                    })

    selector
        .on("change", function() {
            d3.selectAll(".shot")
                .attr("opacity", 1.0)
            var value = selector.property("value")
            if (value != "All") {
                d3.selectAll(".shot")
                    .filter(function(d) {
                        return d.player != value
                    })
                    .attr("opacity", 0.1)
            }
        })
})