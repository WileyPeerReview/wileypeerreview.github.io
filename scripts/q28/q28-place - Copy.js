google.load('visualization', '1', {
    packages: ['controls']
});
google.setOnLoadCallback(drawChart);

function drawChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'training');
    data.addColumn('number', 'University or College');
    data.addColumn('number', 'Research Institution');
    data.addColumn('number', 'Hospital / Healthcare');
    data.addColumn('number', 'Other');
    data.addColumn('number', 'Government Organization');
    data.addColumn('number', 'Corporation');
    data.addRows([
        ["Introduction to becoming a peer reviewer",373,119,64,59,30,14  ],
  ["Handling conflicts of interest",149,51,25,27,11,5  ],
  ["Handling plagiarism issues",428,135,60,53,22,14  ],
  ["Constructing a review report",508,155,92,49,33,11  ],
  ["Providing constructive, useful feedback",482,143,69,57,42,17  ],
  ["Working with editors during the review process",352,118,54,42,21,11  ],
  ["How to review a Qualitative Research article",344,122,64,42,24,6  ],
  ["Reviewing a Quantitative Research article",251,92,36,33,22,4  ],
  ["Performing a statistical review",281,100,99,37,26,11  ],
  ["Reviewing a clinical paper",167,52,109,25,7,5  ],
  ["Reviewing a systematic literature review paper",289,86,76,40,22,13  ],
  ["Reviewing data",229,82,57,36,11,7  ],
  ["Handling re-reviews",229,56,41,34,13,6  ],
  ["Understanding/checking against reporting standards guidelines",154,40,25,18,14,3  ]
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