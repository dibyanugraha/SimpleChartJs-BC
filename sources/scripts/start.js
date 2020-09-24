var addInElement = document.getElementById("controlAddIn");
var chartCanvas = document.createElement("canvas");
addInElement.appendChild(chartCanvas);

let data = [20000, 14000, 12000, 15000, 18000, 19000, 22000];
let labels =  ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

var myChart = new Chart(chartCanvas, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            label: 'This week',
            data: data,
        }],
        borderWidth: 1,
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

function SendDataToJS(code, name, total) {
    let newData = [30000, 40000, 50000, 15000, 18000, 19000, 22000];
    let newLabels =  ["Minggu", "Senin", "tuesday", "wednesday", "thursday", "friday", "saturday"];

    Microsoft.Dynamics.NAV.InvokeExtensibilityMethod('OnControlAddInReady', "Button is clicked");
    this.removeData(myChart);
    this.addData(myChart, newLabels, newData);
}
function addData(chart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
}
function removeData(chart) {
    chart.data.labels.pop();
    chart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });
    chart.update();
}

// Microsoft.Dynamics.NAV.InvokeExtensibilityMethod('OnControlAddInReady', "Button is clicked");