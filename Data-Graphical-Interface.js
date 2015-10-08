google.load('visualization', '1', {packages: ['corechart', 'bar']});
google.setOnLoadCallback(drawMultSeries);

function drawMultSeries() {
    var data = google.visualization.arrayToDataTable([
        ['City', '2011 Population', '2012 Population'],
        ['Staten Island', 128, 99],
        ['Queens', 102, 86],
        ['Brooklyn', 242, 368],
        ['Bronx', 115, 169],
        ['Manhattan', 786, 652]
    ]);

    var options = {
        title: 'Population of Homeless in New York',
        chartArea: {width: '50%'},
        hAxis: {
            title: 'Total Population',
            minValue: 0
        },
        vAxis: {
            title: 'City'
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}