const canvas = d3.select(".canva");

// var dataArray = [
//     {width: 25, height: 4, fill: "pink"},
//     {width: 25, height: 14, fill: "purple"},
//     {width: 25, height: 44, fill: "orange"},
//     {width: 25, height: 124, fill: "green"},
//     {width: 25, height: 12, fill: "grey"}
// ];

// const svg = canvas.select("svg")
const svg = canvas.append("svg")
            .attr("width", 600)
            .attr("height", 600);

const rect = svg.selectAll("rect");

// d3.json("https://jsonplaceholder.typicode.com/todos/1")
d3.json("text.json")
    .then(data => {
        console.log(data);

// rect.data(dataArray)
//     .enter()
//     .append("rect")
//     .attr("width", 24)
//     // .attr("fill", function(d) {
//     //     return d.fill
//     // })
//     .attr("fill", d => d.fill)
//     .attr("height", function(d) {
//         return d.height * 2
//     })
//     // .attr("x", function(d,i) {
//     //     return i * 25
//     // })
//     .attr("x", (d, i) => i * 25)
//     .attr("y", function(d,i) {
//         return 100 - (d.height * 2)
//     })

rect.data(data)
    .enter()
    .append("rect")
    .attr("width", 24)
    // .attr("fill", function(d) {
    //     return d.fill
    // })
    .attr("fill", d => d.fill)
    .attr("height", function(d) {
        return d.height * 2
    })
    // .attr("x", function(d,i) {
    //     return i * 25
    // })
    .attr("x", (d, i) => i * 25)
    .attr("y", function(d,i) {
        return 200 - (d.height * 2)
    })

})
