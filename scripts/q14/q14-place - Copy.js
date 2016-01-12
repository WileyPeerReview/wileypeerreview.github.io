google.load('visualization', '1', {
    packages: ['controls']
});
google.setOnLoadCallback(drawChart);

function drawChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'incentive');
    data.addColumn('number', 'University or College');
    data.addColumn('number', 'Research Institution');
    data.addColumn('number', 'Hospital / Healthcare');
    data.addColumn('number', 'Other');
    data.addColumn('number', 'Government Organization');
    data.addColumn('number', 'Corporation');
    data.addRows([
        ["Name being published alongside the paper as one of the reviewers",309,110,73,38,20,10  ],
  ["Signed report being publicized with the paper",125,50,24,8,6,4  ],
  ["Acknowledgement in the journal",714,205,134,73,37,19  ],
  ["Acknowledgement on the journal's website",671,211,88,68,40,20  ],
  ["A personal thank you note from the editor",625,200,79,70,29,17  ],
  ["CME Accreditation/CPD points",259,80,89,32,12,7  ],
  ["Credit automatically awarded on a 3rd party site",348,107,55,32,20,10  ],
  ["A certificate from the journal to acknowledge review effort",865,291,137,81,47,24  ],
  ["Payment in-kind by the journal",303,102,27,31,15,3  ],
  ["Cash payment by the journal",419,120,51,39,19,8  ],
  ["Payment or credits by independent/portable peer review services",150,55,25,15,9,3  ],
  ["Book discount",313,93,28,36,18,9  ],
  ["Discount/waiver on Open Access fees",519,146,73,46,29,8  ],
  ["Discount/waiver on color or other publication charges",419,167,62,36,24,9  ],
  ["Reviewer web badges that you could include on your LinkedIn site/online resume, etc.",337,104,45,43,21,13  ],
  ["Access to papers which I have reviewed, if accepted and published",440,140,70,61,18,12  ],
  ["Personal access to journal content",724,258,135,83,42,27  ],
  ["Reviewer of the year awards from the journal",592,185,69,50,32,11  ],
  ["\"Top reviewer\" badges that you could include on your LinkedIn site/online resume, etc.",500,146,80,48,30,17  ],
  ["Feedback from the journal on the usefulness/quality of your review",894,296,154,96,57,26  ],
  ["Information from the journal on the decision outcome of the paper that you reviewed",922,277,154,90,60,22  ],
  ["Visibility of other reviewers comments/reviewer reports",703,214,128,78,37,15  ],
  ["Metrics related to your review history",414,122,74,51,23,11  ],
  ["Post-publication metrics related to the articles you have reviewed",392,127,79,56,26,11  ]
    ]);

    var columnsTable = new google.visualization.DataTable();
    columnsTable.addColumn('number', 'colIndex');
    columnsTable.addColumn('string', 'colLabel');
    var initState = {
        selectedValues: []
    };
    // put the columns into this data table (skip column 0)
    for (var i = 1; i < data.getNumberOfColumns(); i++) {
        columnsTable.addRow([i, data.getColumnLabel(i)]);
        // you can comment out this next line if you want to have a default selection other than the whole list
        initState.selectedValues.push(data.getColumnLabel(i));
    }
    // you can set individual columns to be the default columns (instead of populating via the loop above) like this:
    // initState.selectedValues.push(data.getColumnLabel(4));

    var chart = new google.visualization.ChartWrapper({
        chartType: 'BarChart',
        containerId: 'q14-chart',
        dataTable: data,
        options: {
            colors: ["#F2BA49","#BCADE2","#A0C7E5","#C6DE8C","#D22938","#B1D8CF"],
            width: 900,
            height: 800,
            isStacked: true,
            animation: {
                duration: 500,
                easing: 'out',
                startup: true
            },
            hAxis: {
                title: 'responses',
                gridlines: {
                    count: 10,
                },

            },
            chartArea: {
                left: 300,
                top: 0,
                width: '50%',
                height: '90%'
            }
        }
    });

    var columnFilter = new google.visualization.ControlWrapper({
        controlType: 'CategoryFilter',
        containerId: 'colFilter_div',
        dataTable: columnsTable,
        options: {
            filterColumnLabel: 'colLabel',
            ui: {
                label: 'Place of work',
                labelStacking: 'horizontal',
                caption: 'add a place of work',
                allowTyping: false,
                allowMultiple: true,
                allowNone: false,
                selectedValuesLayout: 'aside',
                cssClass: 'google-picker'
            }
        },
        state: initState
    });

    function setChartView() {
        var state = columnFilter.getState();
        var row;
        var view = {
            columns: [0]
        };
        for (var i = 0; i < state.selectedValues.length; i++) {
            row = columnsTable.getFilteredRows([{
                column: 1,
                value: state.selectedValues[i]
            }])[0];
            view.columns.push(columnsTable.getValue(row, 0));
        }
        // sort the indices into their original order
        view.columns.sort(function (a, b) {
            return (a - b);
        });
        chart.setView(view);
        chart.draw();
    }
    google.visualization.events.addListener(columnFilter, 'statechange', setChartView);

    setChartView();
    columnFilter.draw();
}