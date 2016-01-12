google.load('visualization', '1', {
    packages: ['controls']
});
google.setOnLoadCallback(drawChart);

function drawChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'incentive');
    data.addColumn('number', 'Less than 1');
    data.addColumn('number', '1 to 2');
    data.addColumn('number', '3 to 5');
    data.addColumn('number', '6 to 10');
    data.addColumn('number', '11 to 15');
    data.addColumn('number', 'more than 15');
    data.addRows([
        ["Name being published alongside the paper as one of the reviewers",30,115,174,136,56,78  ],
  ["Signed report being publicized with the paper",5,30,87,44,22,39  ],
  ["Acknowledgement in the journal",44,183,357,317,121,218  ],
  ["Acknowledgement on the journal's website",52,170,349,305,93,175  ],
  ["A personal thank you note from the editor",70,170,325,252,82,183  ],
  ["CME Accreditation/CPD points",32,88,145,114,49,81  ],
  ["Credit automatically awarded on a 3rd party site",28,102,186,156,63,66  ],
  ["A certificate from the journal to acknowledge review effort",95,272,492,373,128,169  ],
  ["Payment in-kind by the journal",27,80,169,118,53,58  ],
  ["Cash payment by the journal",33,94,217,173,64,107  ],
  ["Payment or credits by independent/portable peer review services",19,35,89,67,23,33  ],
  ["Book discount",31,75,161,130,50,78  ],
  ["Discount/waiver on Open Access fees",40,119,241,229,86,147  ],
  ["Discount/waiver on color or other publication charges",33,109,233,201,73,105  ],
  ["Reviewer web badges that you could include on your LinkedIn site/online resume, etc.",37,112,190,149,46,48  ],
  ["Access to papers which I have reviewed, if accepted and published",43,125,243,198,68,103  ],
  ["Personal access to journal content",56,215,418,331,116,205  ],
  ["Reviewer of the year awards from the journal",55,174,328,239,92,109  ],
  ["\"Top reviewer\" badges that you could include on your LinkedIn site/online resume, etc.",61,155,291,209,70,84  ],
  ["Feedback from the journal on the usefulness/quality of your review",96,255,492,406,125,220  ],
  ["Information from the journal on the decision outcome of the paper that you reviewed",63,234,464,406,150,275  ],
  ["Visibility of other reviewers comments/reviewer reports",63,202,370,284,107,201  ],
  ["Metrics related to your review history",37,111,222,179,77,98  ],
  ["Post-publication metrics related to the articles you have reviewed",34,134,233,165,58,97  ]
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
                label: 'Years of experience',
                labelStacking: 'horizontal',
                caption: 'add an experience group',
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