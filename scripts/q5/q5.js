//data

var dataset = [
    {
        "key": "Less than 1",
        "values": [
            {
                x: "Approached by an editor after authoring a paper",
                y: 55
  },
            {
                x: "Approached by an unknown editor",
                y: 52
  },
            {
                x: "Asked to undertake a review on behalf of supervisor/PI",
                y: 17
  },
            {
                x: "Approached by a known editor/personal contact",
                y: 9
  },
            {
                x: "Supervisor/PI recommended to an editor",
                y: 5
  },
            {
                x: "Author recommended as a potential reviewer",
                y: 4
  },
            {
                x: "Submitted request to be added to journal’s reviewer list",
                y: 8
  },
            {
                x: "other",
                y: 4
  }],
},
    {
        "key": "1 to 2",
        "values": [
            {
                x: "Approached by an editor after authoring a paper",
                y: 136
  },
            {
                x: "Approached by an unknown editor",
                y: 126
  },
            {
                x: "Asked to undertake a review on behalf of supervisor/PI",
                y: 63
  },
            {
                x: "Approached by a known editor/personal contact",
                y: 33
  },
            {
                x: "Supervisor/PI recommended to an editor",
                y: 32
  },
            {
                x: "Author recommended as a potential reviewer",
                y: 25
  },
            {
                x: "Submitted request to be added to journal’s reviewer list",
                y: 9
  },
            {
                x: "other",
                y: 8
  }],
},
    {
        "key": "3 to 5",
        "values": [
            {
                x: "Approached by an editor after authoring a paper",
                y: 263
  },
            {
                x: "Approached by an unknown editor",
                y: 258
  },
            {
                x: "Asked to undertake a review on behalf of supervisor/PI",
                y: 128
  },
            {
                x: "Approached by a known editor/personal contact",
                y: 74
  },
            {
                x: "Supervisor/PI recommended to an editor",
                y: 55
  },
            {
                x: "Author recommended as a potential reviewer",
                y: 45
  },
            {
                x: "Submitted request to be added to journal’s reviewer list",
                y: 16
  },
            {
                x: "other",
                y: 9
  }],
},
    {
        "key": "6 to 10",
        "values": [
            {
                x: "Approached by an editor after authoring a paper",
                y: 219
  },
            {
                x: "Approached by an unknown editor",
                y: 177
  },
            {
                x: "Asked to undertake a review on behalf of supervisor/PI",
                y: 117
  },
            {
                x: "Approached by a known editor/personal contact",
                y: 70
  },
            {
                x: "Supervisor/PI recommended to an editor",
                y: 47
  },
            {
                x: "Author recommended as a potential reviewer",
                y: 33
  },
            {
                x: "Submitted request to be added to journal’s reviewer list",
                y: 21
  },
            {
                x: "other",
                y: 8
  }],
},
    {
        "key": "11 to 15",
        "values": [
            {
                x: "Approached by an editor after authoring a paper",
                y: 78
  },
            {
                x: "Approached by an unknown editor",
                y: 73
  },
            {
                x: "Asked to undertake a review on behalf of supervisor/PI",
                y: 45
  },
            {
                x: "Approached by a known editor/personal contact",
                y: 26
  },
            {
                x: "Supervisor/PI recommended to an editor",
                y: 13
  },
            {
                x: "Author recommended as a potential reviewer",
                y: 7
  },
            {
                x: "Submitted request to be added to journal’s reviewer list",
                y: 8
  },
            {
                x: "other",
                y: 4
  }],
},
    {
        "key": "More than 15",
        "values": [
            {
                x: "Approached by an editor after authoring a paper",
                y: 130
  },
            {
                x: "Approached by an unknown editor",
                y: 107
  },
            {
                x: "Asked to undertake a review on behalf of supervisor/PI",
                y: 78
  },
            {
                x: "Approached by a known editor/personal contact",
                y: 60
  },
            {
                x: "Supervisor/PI recommended to an editor",
                y: 22
  },
            {
                x: "Author recommended as a potential reviewer",
                y: 8
  },
            {
                x: "Submitted request to be added to journal’s reviewer list",
                y: 9
  },
            {
                x: "other",
                y: 30
  }],
}
];

console.log(dataset);

nv.addGraph(function () {
    var chart = nv.models.multiBarHorizontalChart()
        .showControls(true) //Allow user to switch between 'Grouped' and 'Stacked' mode.
        .groupSpacing(0.2) //Distance between each group of bars.
        .color(["#F2BA49", "#BCADE2", "#A0C7E5", "#C6DE8C", "#D22938", "#B1D8CF"])
        .height(600)
        .margin({
            top: 30,
            right: 20,
            bottom: 0,
            left: 320
        });

    chart.legend.vers('furious');

    //chart.xAxis
    //.tickFormat(d3.format(',f'));

    chart.yAxis
        .tickFormat(d3.format(',1f'))
        .axisLabel('Responses');

    d3.select('#chart1 svg')
        .datum(dataset)
        .call(chart);

    nv.utils.windowResize(chart.update);

    return chart;
});