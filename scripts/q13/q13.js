//data

var dataset = [
    {
        "key": "Under 30",
        "values": [{
            x: "Double-blind",
            y: 4.1
        }, {
            x: "Single-blind",
            y: 3.9
        }, {
            x: "Transferable",
            y: 3.5
        }, {
            x: "Collaborative",
            y: 3.3
        }, {
            x: "Open",
            y: 2.9
        }, {
            x: "Post-publication",
            y: 2.9
        }, {
            x: "Open and published",
            y: 2.6
        }],
},
    {
        "key": "31 to 40",
        "values": [{
            x: "Double-blind",
            y: 4.2
        }, {
            x: "Single-blind",
            y: 3.8
        }, {
            x: "Transferable",
            y: 3.5
        }, {
            x: "Collaborative",
            y: 3.3
        }, {
            x: "Open",
            y: 2.8
        }, {
            x: "Post-publication",
            y: 3
        }, {
            x: "Open and published",
            y: 2.9
        }],
},
    {
        "key": "41 to 50",
        "values": [{
            x: "Double-blind",
            y: 4.1
        }, {
            x: "Single-blind",
            y: 3.9
        }, {
            x: "Transferable",
            y: 3.5
        }, {
            x: "Collaborative",
            y: 3.3
        }, {
            x: "Open",
            y: 2.8
        }, {
            x: "Post-publication",
            y: 2.9
        }, {
            x: "Open and published",
            y: 2.8
        }],
},
    {
        "key": "51 to 60",
        "values": [{
            x: "Double-blind",
            y: 3.9
        }, {
            x: "Single-blind",
            y: 3.8
        }, {
            x: "Transferable",
            y: 3.3
        }, {
            x: "Collaborative",
            y: 3.1
        }, {
            x: "Open",
            y: 2.7
        }, {
            x: "Post-publication",
            y: 2.8
        }, {
            x: "Open and published",
            y: 2.4
        }],
},
    {
        "key": "61 to 70",
        "values": [{
            x: "Double-blind",
            y: 3.9
        }, {
            x: "Single-blind",
            y: 3.9
        }, {
            x: "Transferable",
            y: 3.2
        }, {
            x: "Collaborative",
            y: 3.1
        }, {
            x: "Open",
            y: 2.8
        }, {
            x: "Post-publication",
            y: 2.6
        }, {
            x: "Open and published",
            y: 2.8
        }],
},
    {
        "key": "Over 70",
        "values": [{
            x: "Double-blind",
            y: 3.9
        }, {
            x: "Single-blind",
            y: 3.8
        }, {
            x: "Transferable",
            y: 3.2
        }, {
            x: "Collaborative",
            y: 3.3
        }, {
            x: "Open",
            y: 2.8
        }, {
            x: "Post-publication",
            y: 2.6
        }, {
            x: "Open and published",
            y: 2.9
        }],
}
];

console.log(dataset);

nv.addGraph(function () {
    var chart = nv.models.multiBarChart()
        .reduceXTicks(false) //If 'false', every single x-axis tick label will be rendered.
        .rotateLabels(-45) //Angle to rotate x-axis labels.
        .showControls(true) //Allow user to switch between 'Grouped' and 'Stacked' mode.
        .groupSpacing(0.2) //Distance between each group of bars.
        .color(["#F2BA49", "#855199", "#648FD8", "#92CB9C", "#D22938", "#075B81"])
        .height(600)
        .margin({
            top: 0,
            right: 0,
            bottom: 0
        })
    ;

    //    chart.xAxis
    //        .tickFormat(d3.format(',f'));
    
    chart.legend.vers('furious');
    
    chart.yAxis
        .tickFormat(d3.format(',.1f'))
        .axisLabel('Mean response');

    d3.select('#chart1 svg')
        .datum(dataset)
        .call(chart);

    nv.utils.windowResize(chart.update);

    return chart;
});