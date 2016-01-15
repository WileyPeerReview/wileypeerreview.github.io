//data

var dataset = [
    {
        "key": "Less than 1",
        "values": [{
                x: "Seeing work ahead of publication",
                y: 3.6
  },
            {
                x: "Improving own writing skills",
                y: 4.1
  },
            {
                x: "Active participation in research community",
                y: 4.3
  },
            {
                x: "Develops personal reputation & career progression",
                y: 3.9
  },
            {
                x: "Expectation that researchers undertake review",
                y: 3.7
  },
            {
                x: "PI/Supervisor recommendation",
                y: 2.9
  },
            {
                x: "Reciprocation of peer review received",
                y: 3.8
  },
            {
                x: "Builds relationships with particular journals/editors",
                y: 3.9
  },
            {
                x: "Increases likelihood of future papers being accepted",
                y: 2.9
  },
            {
                x: "Professional recognition or credit gained",
                y: 3.6
  }],
},
    {
        "key": "1 to 2",
        "values": [{
                x: "Seeing work ahead of publication",
                y: 3.6
  },
            {
                x: "Improving own writing skills",
                y: 3.9
  },
            {
                x: "Active participation in research community",
                y: 4.3
  },
            {
                x: "Develops personal reputation & career progression",
                y: 3.8
  },
            {
                x: "Expectation that researchers undertake review",
                y: 3.8
  },
            {
                x: "PI/Supervisor recommendation",
                y: 2.8
  },
            {
                x: "Reciprocation of peer review received",
                y: 3.8
  },
            {
                x: "Builds relationships with particular journals/editors",
                y: 3.7
  },
            {
                x: "Increases likelihood of future papers being accepted",
                y: 2.8
  },
            {
                x: "Professional recognition or credit gained",
                y: 3.4
  }],
},
    {
        "key": "3 to 5",
        "values": [{
                x: "Seeing work ahead of publication",
                y: 3.6
  },
            {
                x: "Improving own writing skills",
                y: 3.8
  },
            {
                x: "Active participation in research community",
                y: 4.2
  },
            {
                x: "Develops personal reputation & career progression",
                y: 3.6
  },
            {
                x: "Expectation that researchers undertake review",
                y: 3.7
  },
            {
                x: "PI/Supervisor recommendation",
                y: 2.6
  },
            {
                x: "Reciprocation of peer review received",
                y: 3.8
  },
            {
                x: "Builds relationships with particular journals/editors",
                y: 3.5
  },
            {
                x: "Increases likelihood of future papers being accepted",
                y: 2.7
  },
            {
                x: "Professional recognition or credit gained",
                y: 3.4
  }],
},
    {
        "key": "6 to 10",
        "values": [{
                x: "Seeing work ahead of publication",
                y: 3.5
  },
            {
                x: "Improving own writing skills",
                y: 3.6
  },
            {
                x: "Active participation in research community",
                y: 4.2
  },
            {
                x: "Develops personal reputation & career progression",
                y: 3.5
  },
            {
                x: "Expectation that researchers undertake review",
                y: 3.8
  },
            {
                x: "PI/Supervisor recommendation",
                y: 2.5
  },
            {
                x: "Reciprocation of peer review received",
                y: 4.0
  },
            {
                x: "Builds relationships with particular journals/editors",
                y: 3.4
  },
            {
                x: "Increases likelihood of future papers being accepted",
                y: 2.6
  },
            {
                x: "Professional recognition or credit gained",
                y: 3.3
  }],
},
    {
        "key": "11 to 15",
        "values": [{
                x: "Seeing work ahead of publication",
                y: 3.5
  },
            {
                x: "Improving own writing skills",
                y: 3.4
  },
            {
                x: "Active participation in research community",
                y: 4.1
  },
            {
                x: "Develops personal reputation & career progression",
                y: 3.3
  },
            {
                x: "Expectation that researchers undertake review",
                y: 3.8
  },
            {
                x: "PI/Supervisor recommendation",
                y: 2.3
  },
            {
                x: "Reciprocation of peer review received",
                y: 4.0
  },
            {
                x: "Builds relationships with particular journals/editors",
                y: 3.4
  },
            {
                x: "Increases likelihood of future papers being accepted",
                y: 2.5
  },
            {
                x: "Professional recognition or credit gained",
                y: 3.1
  }],
},
    {
        "key": "More than 15",
        "values": [{
                x: "Seeing work ahead of publication",
                y: 3.4
  },
            {
                x: "Improving own writing skills",
                y: 3.1
  },
            {
                x: "Active participation in research community",
                y: 4.1
  },
            {
                x: "Develops personal reputation & career progression",
                y: 3.0
  },
            {
                x: "Expectation that researchers undertake review",
                y: 4.0
  },
            {
                x: "PI/Supervisor recommendation",
                y: 2.1
  },
            {
                x: "Reciprocation of peer review received",
                y: 4.0
  },
            {
                x: "Builds relationships with particular journals/editors",
                y: 3.3
  },
            {
                x: "Increases likelihood of future papers being accepted",
                y: 2.2
  },
            {
                x: "Professional recognition or credit gained",
                y: 2.9
  }],
}
];

console.log(dataset);

nv.addGraph(function () {
    var chart = nv.models.multiBarHorizontalChart()
        .showControls(true) //Allow user to switch between 'Grouped' and 'Stacked' mode.
        .groupSpacing(0.2) //Distance between each group of bars.
        .color(["#F2BA49", "#855199", "#648FD8", "#92CB9C", "#D22938", "#075B81"])
        .height(600)
        .margin({
            top: 30,
            right: 20,
            bottom: 0,
            left: 330
        });

    chart.legend.vers('furious');

    //chart.xAxis
    //.tickFormat(d3.format(',f'));

    chart.yAxis
        .tickFormat(d3.format(',.1f'))
        .axisLabel('Mean response');

    d3.select('#chart1 svg')
        .datum(dataset)
        .call(chart);

    nv.utils.windowResize(chart.update);

    return chart;
});