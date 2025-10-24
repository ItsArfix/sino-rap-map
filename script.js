const mapType = 0

const width = 800,
    height = 1000;

const svg = d3.select("#map").attr("width", width).attr("height", height);

const projection = d3.geoMercator().center([119, 25]).scale(17000).translate([width / 2, height / 2]);

const path = d3.geoPath().projection(projection);

d3.json(`data/CHN_${str(mapType)}.json`).then(data => { svg.selectAll("path").data(data.features).enter().append("path").attr("d", path) });