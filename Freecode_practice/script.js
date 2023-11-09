const body = d3.select("body");

const svg = body.append("svg")
                .attr("width", 960)
                .attr("height", 500)
                // .attr("stroke", "red")
                // .attr("stroke-width", 2)




svg.append("circle")
    .attr("cx", 50)
    .attr("cy", 50)
    .attr("r", 50)

const rect = svg.append("rect");
    rect.attr("x", 400)
        .attr("y", 100)
        .attr("width", 400)
        .attr("height", 200)
        .attr("fill", "yellow")
        .attr("stroke", "navy")
        .attr("stroke-width", 10)

const line = svg.append("line");
    line.attr("x1", 0)
        .attr("y1", 0)
        .attr("x2", 100)
        .attr("y2", 100)
        .attr("stroke", "navy")