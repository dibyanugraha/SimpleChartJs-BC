let addInElement = document.getElementById("controlAddIn");
let chartCanvas = document.createElement("canvas");
chartCanvas.id = "canvasChartJs";
addInElement.appendChild(chartCanvas);

let config = {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'In US $',
            fill: false,backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
            data: [
                30000, 40000, 50000, 15000, 18000, 19000, 22000
            ]
        } 
        // ,{
        //     label: 'My Second dataset ',
        //     fill: false,
        //     borderColor: window.chartColors.blue,
        //     backgroundColor: window.chartColors.blue,
        //     data: [
        //         randomScalingFactor(),
        //         randomScalingFactor(),
        //         randomScalingFactor(),
        //         randomScalingFactor(),
        //         randomScalingFactor(),
        //         randomScalingFactor(),
        //         randomScalingFactor()
        //     ]
        // }
        ]
    },
    options: {
        title: {
            display: true,
            text: 'Balance per Customer'
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
        // ,animation: {
        //     duration: 2000,
        //     onProgress: function(animation) {
        //         progress.value = animation.currentStep / animation.numSteps;
        //     },
        //     onComplete: function() {
        //         window.setTimeout(function() {
        //             progress.value = 0;
        //         }, 2000);
        //     }
        // }
    }
};

let ctx = document.getElementById('canvasChartJs').getContext('2d');
let myChart = new Chart(ctx, config);

function SendDataToJS(code, name, total) {
    debugger;
    () => {
        Microsoft.Dynamics.NAV.InvokeExtensibilityMethod('OnControlAddInReady', ['Button is clicked'])
    };

    let newData = [20000, 14000, 12000, 15000, 18000, 19000, 22000];
    let newLabels =  ["Minggu", "Senin", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    
    config.data.datasets[0].labels.length = 0;
    config.data.datasets[0].labels = newLabels.slice(0);

    config.data.datasets[0].data.length = 0;
    config.data.datasets[0].data = newData.slice(0);
    myChart.update();
};

Microsoft.Dynamics.NAV.InvokeExtensibilityMethod('OnControlAddInReady', ['Something is fucked up']);