google.load('visualization', '1', {
    packages: ['controls']
});
google.setOnLoadCallback(drawChart);

function drawChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'training');
    data.addColumn('number', 'less than 1');
    data.addColumn('number', '1 to 2');
    data.addColumn('number', '3 to 5');
    data.addColumn('number', '6 to 10');
    data.addColumn('number', '11 to 15');
    data.addColumn('number', 'more than 15');
    data.addRows([
        ["Introduction to becoming a peer reviewer",75,152,236,127,28,50  ],
  ["Handling conflicts of interest",21,37,88,65,26,32  ],
  ["Handling plagiarism issues",42,120,233,189,54,75  ],
  ["Constructing a review report",57,168,277,213,51,82  ],
  ["Providing constructive, useful feedback",43,142,266,205,65,90  ],
  ["Working with editors during the review process",38,96,196,156,47,65  ],
  ["How to review a Qualitative Research article",47,119,219,137,40,42  ],
  ["Reviewing a Quantitative Research article",28,82,161,104,32,33  ],
  ["Performing a statistical review",41,110,202,116,36,51  ],
  ["Reviewing a clinical paper",27,68,136,91,13,31  ],
  ["Reviewing a systematic literature review paper",33,95,186,126,37,52  ],
  ["Reviewing data",30,89,160,91,23,31  ],
  ["Handling re-reviews",22,59,129,96,27,47  ],
  ["Understanding/checking against reporting standards guidelines",20,50,97,52,16,20  ]
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
        containerId: 'q28-chart',
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