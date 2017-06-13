//data

var dataset = [
    {
        "key": "Health Sciences",
        "values": [
  {
     x:"Introduction to becoming a peer reviewer"
    ,y:178
  },
  {
     x:"Handling conflicts of interest"
    ,y:71
  },
  {
     x:"Handling plagiarism issues"
    ,y:212
  },
  {
     x:"Constructing a review report"
    ,y:239
  },
  {
     x:"Providing constructive, useful feedback"
    ,y:213
  },
  {
     x:"Working with editors during the review process"
    ,y:158
  },
  {
     x:"How to review a Qualitative Research article"
    ,y:192
  },
  {
     x:"Reviewing a Quantitative Research article"
    ,y:129
  },
  {
     x:"Performing a statistical review"
    ,y:238
  },
  {
     x:"Reviewing a clinical paper"
    ,y:252
  },
  {
     x:"Reviewing a systematic literature review paper"
    ,y:210
  },
  {
     x:"Reviewing data"
    ,y:143
  },
  {
     x:"Handling re-reviews"
    ,y:113
  },
  {
     x:"Using reporting standards guidelines"
    ,y:85
  }],
},
    {
        "key": "Life Sciences",
        "values": [
  {
     x:"Introduction to becoming a peer reviewer"
    ,y:206
  },
  {
     x:"Handling conflicts of interest"
    ,y:68
  },
  {
     x:"Handling plagiarism issues"
    ,y:225
  },
  {
     x:"Constructing a review report"
    ,y:256
  },
  {
     x:"Providing constructive, useful feedback"
    ,y:236
  },
  {
     x:"Working with editors during the review process"
    ,y:169
  },
  {
     x:"How to review a Qualitative Research article"
    ,y:156
  },
  {
     x:"Reviewing a Quantitative Research article"
    ,y:124
  },
  {
     x:"Performing a statistical review"
    ,y:170
  },
  {
     x:"Reviewing a clinical paper"
    ,y:61
  },
  {
     x:"Reviewing a systematic literature review paper"
    ,y:126
  },
  {
     x:"Reviewing data"
    ,y:137
  },
  {
     x:"Handling re-reviews"
    ,y:104
  },
  {
     x:"Using reporting standards guidelines"
    ,y:67
  }],
},
    {
        "key": "Physical Sciences",
        "values": [
  {
     x:"Introduction to becoming a peer reviewer"
    ,y:182
  },
  {
     x:"Handling conflicts of interest"
    ,y:77
  },
  {
     x:"Handling plagiarism issues"
    ,y:177
  },
  {
     x:"Constructing a review report"
    ,y:213
  },
  {
     x:"Providing constructive, useful feedback"
    ,y:195
  },
  {
     x:"Working with editors during the review process"
    ,y:167
  },
  {
     x:"How to review a Qualitative Research article"
    ,y:152
  },
  {
     x:"Reviewing a Quantitative Research article"
    ,y:105
  },
  {
     x:"Performing a statistical review"
    ,y:70
  },
  {
     x:"Reviewing a clinical paper"
    ,y:25
  },
  {
     x:"Reviewing a systematic literature review paper"
    ,y:98
  },
  {
     x:"Reviewing data"
    ,y:82
  },
  {
     x:"Handling re-reviews"
    ,y:77
  },
  {
     x:"Using reporting standards guidelines"
    ,y:57
  }],
},
    {
        "key": "Social Sciences and Humanities",
        "values": [
  {
     x:"Introduction to becoming a peer reviewer"
    ,y:91
  },
  {
     x:"Handling conflicts of interest"
    ,y:51
  },
  {
     x:"Handling plagiarism issues"
    ,y:97
  },
  {
     x:"Constructing a review report"
    ,y:138
  },
  {
     x:"Providing constructive, useful feedback"
    ,y:160
  },
  {
     x:"Working with editors during the review process"
    ,y:101
  },
  {
     x:"How to review a Qualitative Research article"
    ,y:100
  },
  {
     x:"Reviewing a Quantitative Research article"
    ,y:81
  },
  {
     x:"Performing a statistical review"
    ,y:73
  },
  {
     x:"Reviewing a clinical paper"
    ,y:25
  },
  {
     x:"Reviewing a systematic literature review paper"
    ,y:92
  },
  {
     x:"Reviewing data"
    ,y:59
  },
  {
     x:"Handling re-reviews"
    ,y:84
  },
  {
     x:"Using reporting standards guidelines"
    ,y:43
  }]
}
];

console.log(dataset);

nv.addGraph(function () {
    var chart = nv.models.multiBarHorizontalChart()
        .showControls(true) //Allow user to switch between 'Grouped' and 'Stacked' mode.
        .groupSpacing(0.2) //Distance between each group of bars.
        .color(["#F2BA49", "#855199", "#648FD8", "#92CB9C", "#D22938", "#075B81"])
        .height(900)
        .margin({
            top: 30,
            right: 20,
            bottom: 0,
            left: 280
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