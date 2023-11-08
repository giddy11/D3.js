const canvas = d3.select(".canva");

var dataArray = [4, 15, 34];

const svg = canvas.select("svg")

//add an svg element
// const svg = canvas.append("svg")
//             .attr("width", 600)
//             .attr("height", 600);
            // .append("circle")
            //     .attr("cx", 60)
            //     .attr("cy", 60)
            //     .attr("r", 50)

    // svg.append("text")
    //     .text("Hello!")
    //     // .attr("text-anchor", "start")
    //     .attr("x", 110)
    //     .attr("y", 20)

    // svg.append("text")
    //     .text("There!")
    //     .attr("text-anchor", "middle")
    //     .attr("x", 110)
    //     .attr("y", 40)

    // svg.append("text")
    //     .text("James!")
    //     .attr("text-anchor", "end")
    //     .attr("x", 110)
    //     .attr("y", 60)

// const rect = svg.append("rect");
const rect = svg.selectAll("rect");


rect.attr("width", 24)
    .data(dataArray)
    .attr("fill", "orange")
    .attr("height", function(d) {
        return d * 3
    })
    .attr("x", function(d,i) {
        return i * 25
    })
    .attr("y", function(d,i) {
        return 100 - (d * 3)
    })

/*
const canvas = d3.select(".canva");

var dataArray = [4, 15, 34];

// const svg = canvas.select("svg")
const svg = canvas.append("svg");

const rect = svg.selectAll("rect");


rect.data(dataArray)
    .enter()
    .append("rect")
    .attr("width", 24)
    .attr("fill", "orange")
    .attr("height", function(d) {
        return d * 2
    })
    .attr("x", function(d,i) {
        return i * 25
    })
    .attr("y", function(d,i) {
        return 100 - (d * 2)
    })
*/