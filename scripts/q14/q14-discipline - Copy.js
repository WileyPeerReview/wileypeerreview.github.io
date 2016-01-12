google.load('visualization', '1', {
    packages: ['controls']
});
google.setOnLoadCallback(drawChart);

function drawChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'incentive');
    data.addColumn('number', 'Health Sciences');
    data.addColumn('number', 'Life Sciences');
    data.addColumn('number', 'Physical Sciences');
    data.addColumn('number', 'Social Sciences & Humanities');
    data.addRows([
        ["Name being published alongside the paper as one of the reviewers",182,160,117,102  ],
  ["Signed report being publicized with the paper",66,56,55,40  ],
  ["Acknowledgement in the journal",372,294,250,262  ],
  ["Acknowledgement on the journal's website",304,322,251,215  ],
  ["A personal thank you note from the editor",254,286,295,179  ],
  ["CME Accreditation/CPD points",206,115,89,66  ],
  ["Credit automatically awarded on a 3rd party site",159,175,136,100  ],
  ["A certificate from the journal to acknowledge review effort",407,414,418,199  ],
  ["Payment in-kind by the journal",116,135,121,108  ],
  ["Cash payment by the journal",150,182,153,168  ],
  ["Payment or credits by independent/portable peer review services",71,74,55,57  ],
  ["Book discount",96,142,128,131  ],
  ["Discount/waiver on Open Access fees",231,275,169,142  ],
  ["Discount/waiver on color or other publication charges",180,266,189,79  ],
  ["Reviewer web badges that you could include on your LinkedIn site/online resume, etc.",160,149,149,102  ],
  ["Access to papers which I have reviewed, if accepted and published",192,195,206,142  ],
  ["Personal access to journal content",366,365,315,220  ],
  ["Reviewer of the year awards from the journal",239,244,294,156  ],
  ["\"Top reviewer\" badges that you could include on your LinkedIn site/online resume, etc.",241,221,218,138  ],
  ["Feedback from the journal on the usefulness/quality of your review",434,419,383,276  ],
  ["Information from the journal on the decision outcome of the paper that you reviewed",413,439,347,317  ],
  ["Visibility of other reviewers comments/reviewer reports",331,328,283,225  ],
  ["Metrics related to your review history",211,196,178,107  ],
  ["Post-publication metrics related to the articles you have reviewed",213,189,168,118  ]
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
                label: 'Discipline',
                labelStacking: 'horizontal',
                caption: 'add a discipline',
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