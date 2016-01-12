google.load('visualization', '1.1', {
    packages: ['corechart']
});
google.setOnLoadCallback(init);

//chart and interactivity
function init() {

    //data
    var datasetTotal = [['review opportunity', 'responses', {role: 'style'}],
             ["I was approached by an editor after authoring a paper for the journal", 881, '#E55800'],
  ["I was approached by an editor I didn't know", 793, '#E55800'],
  ["My supervisor/PI asked me to undertake a review on their behalf", 448, '#E55800'],
  ["I was approached by an editor I know/personal contact", 272, '#E55800'],
  ["My supervisor/PI recommended me to an editor", 174, '#E55800'],
  ["The author recommended me as a potential reviewer for their paper", 122, '#E55800'],
  ["I asked to be added to the list of reviewers for the journal", 71, '#E55800'],
  ["Other", 63, '#E55800']
            ];

    var datasetLessThan1 = [['review opportunity', 'responses', {role: 'style'}],
             ["I was approached by an editor after authoring a paper for the journal", 55, '#075B81'],
  ["I was approached by an editor I didn't know", 52, '#075B81'],
  ["My supervisor/PI asked me to undertake a review on their behalf", 17, '#075B81'],
  ["I was approached by an editor I know/personal contact", 9, '#075B81'],
  ["My supervisor/PI recommended me to an editor", 5, '#075B81'],
  ["The author recommended me as a potential reviewer for their paper", 4, '#075B81'],
  ["I asked to be added to the list of reviewers for the journal", 8, '#075B81'],
  ["Other", 4, '#075B81']
            ];

    var dataset1to2 = [['review opportunity', 'responses', {role: 'style'}],
             ["I was approached by an editor after authoring a paper for the journal", 136, '#648FD8'],
  ["I was approached by an editor I didn't know", 126, '#648FD8'],
  ["My supervisor/PI asked me to undertake a review on their behalf", 63, '#648FD8'],
  ["I was approached by an editor I know/personal contact", 33, '#648FD8'],
  ["My supervisor/PI recommended me to an editor", 32, '#648FD8'],
  ["The author recommended me as a potential reviewer for their paper", 25, '#648FD8'],
  ["I asked to be added to the list of reviewers for the journal", 9, '#648FD8'],
  ["Other", 8, '#648FD8']
            ];

    var dataset3to5 = [['review opportunity', 'responses', {role: 'style'}],
             ["I was approached by an editor after authoring a paper for the journal", 263, '#92CB9C'],
  ["I was approached by an editor I didn't know", 258, '#92CB9C'],
  ["My supervisor/PI asked me to undertake a review on their behalf", 128, '#92CB9C'],
  ["I was approached by an editor I know/personal contact", 74, '#92CB9C'],
  ["My supervisor/PI recommended me to an editor", 55, '#92CB9C'],
  ["The author recommended me as a potential reviewer for their paper", 45, '#92CB9C'],
  ["I asked to be added to the list of reviewers for the journal", 16, '#92CB9C'],
  ["Other", 9, '#92CB9C']
            ];

    var dataset6to10 = [['review opportunity', 'responses', {role: 'style'}],
             ["I was approached by an editor after authoring a paper for the journal", 219, '#00A3B2'],
  ["I was approached by an editor I didn't know", 177, '#00A3B2'],
  ["My supervisor/PI asked me to undertake a review on their behalf", 117, '#00A3B2'],
  ["I was approached by an editor I know/personal contact", 70, '#00A3B2'],
  ["My supervisor/PI recommended me to an editor", 47, '#00A3B2'],
  ["The author recommended me as a potential reviewer for their paper", 33, '#00A3B2'],
  ["I asked to be added to the list of reviewers for the journal", 21, '#00A3B2'],
  ["Other", 8, '#00A3B2']
            ];

    var dataset11to15 = [['review opportunity', 'responses', {role: 'style'}],
             ["I was approached by an editor after authoring a paper for the journal", 78, '#B40043'],
  ["I was approached by an editor I didn't know", 73, '#B40043'],
  ["My supervisor/PI asked me to undertake a review on their behalf", 45, '#B40043'],
  ["I was approached by an editor I know/personal contact", 26, '#B40043'],
  ["My supervisor/PI recommended me to an editor", 13, '#B40043'],
  ["The author recommended me as a potential reviewer for their paper", 7, '#B40043'],
  ["I asked to be added to the list of reviewers for the journal", 8, '#B40043'],
  ["Other", 4, '#B40043']
            ];

    var datasetMoreThan15 = [['review opportunity', 'responses', {role: 'style'}],
             ["I was approached by an editor after authoring a paper for the journal", 130, '#855199'],
  ["I was approached by an editor I didn't know", 107, '#855199'],
  ["My supervisor/PI asked me to undertake a review on their behalf", 78, '#855199'],
  ["I was approached by an editor I know/personal contact", 60, '#855199'],
  ["My supervisor/PI recommended me to an editor", 22, '#855199'],
  ["The author recommended me as a potential reviewer for their paper", 8, '#855199'],
  ["I asked to be added to the list of reviewers for the journal", 9, '#855199'],
  ["Other", 30, '#855199']
            ];
    var data = [];
    data[0] = google.visualization.arrayToDataTable(datasetTotal);
    data[1] = google.visualization.arrayToDataTable(datasetLessThan1);
    data[2] = google.visualization.arrayToDataTable(dataset1to2);
    data[3] = google.visualization.arrayToDataTable(dataset3to5);
    data[4] = google.visualization.arrayToDataTable(dataset6to10);
    data[5] = google.visualization.arrayToDataTable(dataset11to15);
    data[6] = google.visualization.arrayToDataTable(datasetMoreThan15);

    var current = 0;
    var options = {
        legend: {
            position: "none"
        },
        colors: ['#F2BA49'],
        width: 850,
        height: 500,
        chartArea: {
            left: 360,
            top: 20,
            width: '50%',
            height: '90%'
        },
        animation: {
            duration: 500,
            easing: 'out',
        }
    };

    var chart = new google.visualization.BarChart(
        document.getElementById('q5-chart'));
    var button = document.getElementsByClassName('q5-radio');



    function drawChart() {
        // Disabling the button while the chart is drawing.
        button.disabled = true;
        google.visualization.events.addListener(chart, 'ready',
            function () {
                button.disabled = false;
            });
        chart.draw(data[current], options);
    }
    for (i = 0; i < button.length; i++) {
        button[i].onclick = function () {
            for (j = 0; j < button.length; j++) {
                button[j].classList.remove("is-active");
            };
            this.classList.add("is-active");
            var dataset = this.getAttribute('value');
            current = dataset;
            drawChart();
        }

    }
    drawChart();
}