google.load('visualization', '1', {
    packages: ['controls']
});
google.setOnLoadCallback(drawChart);

function drawChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'training');
    data.addColumn('number', 'Health Sciences');
    data.addColumn('number', 'Life Sciences');
    data.addColumn('number', 'Physical Sciences');
    data.addColumn('number', 'Social Sciences & Humanities');
    data.addRows([
        ["Introduction to becoming a peer reviewer",178,206,182,91  ],
  ["Handling conflicts of interest",71,68,77,51  ],
  ["Handling plagiarism issues",212,225,177,97  ],
  ["Constructing a review report",239,256,213,138  ],
  ["Providing constructive, useful feedback",213,236,195,160  ],
  ["Working with editors during the review process",158,169,167,101  ],
  ["How to review a Qualitative Research article",192,156,152,100  ],
  ["Reviewing a Quantitative Research article",129,124,105,81  ],
  ["Performing a statistical review",238,170,70,73  ],
  ["Reviewing a clinical paper",252,61,25,25  ],
  ["Reviewing a systematic literature review paper",210,126,98,92  ],
  ["Reviewing data",143,137,82,59  ],
  ["Handling re-reviews",113,104,77,84  ],
  ["Understanding/checking against reporting standards guidelines",85,67,57,43  ]
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