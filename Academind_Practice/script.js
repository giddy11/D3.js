const div = d3.select("div")
            .style('border', "1px solid red")
            .style('width', "250px")
            .style('height', "200px");

// const p = div.select("p");

const svg = div.append("svg")
            .attr('width', "250")
            .attr('height', "200")

const rect = svg.selectAll("rect")


d3.json("data.json")
    .then(data => {
        console.log(data);

rect.data(data)
    .enter()
    .append("rect")
    // .text(d => d.region)
    .attr('width', 25)
    .attr('height', 100)
    .attr('fill', "red")
    .attr('x', d => d.value * 8)
    .attr('y', 100)

        
    
    
    
    
    
    
    
    
});