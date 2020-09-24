var addInElement = document.getElementById("controlAddIn");
var chartCanvas = document.createElement("canvas");
addInElement.appendChild(chartCanvas);

let data = [20000, 14000, 12000, 15000, 18000, 19000, 22000];
let labels =  ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

//function renderChart(data, labels) {
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
//}

function SendDataToJS(code, name, total) {
    // data = [total];
    // labels =  name;
    var newData = [30000, 40000, 50000, 15000, 18000, 19000, 22000];
    var newLabels =  ["Minggu", "Senin", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    // data = newData.slice(0);

    // this.renderChart(newData, newLabels);
}

Microsoft.Dynamics.NAV.InvokeExtensibilityMethod('OnControlAddInReady');