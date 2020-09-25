var config = {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            fill: false,
            borderColor: window.chartColors.red,
            backgroundColor: window.chartColors.red,
            data: [
                // randomScalingFactor(),
                // randomScalingFactor(),
                // randomScalingFactor(),
                // randomScalingFactor(),
                // randomScalingFactor(),
                // randomScalingFactor(),
                // randomScalingFactor()
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
            text: 'Chart.js Line Chart - Animation Progress Bar'
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

var progress = document.getElementById('animationProgress');

window.addEventListener('DOMContentLoaded', (event) => {
//window.onload = function() {
    var ctx = document.getElementById('myChart').getContext('2d');
    window.myLine = new Chart(ctx, config);
});

document.getElementById('renderBtn').addEventListener('click', function() {
    // config.data.datasets.forEach(function(dataset) {
    //     dataset.data = dataset.data.map(function() {
    //         return randomScalingFactor();
    //     });
    // });
    config.data.datasets.forEach(function(dataset) {
        dataset.data.pop();
    });
    // config.data.datasets.forEach(function(dataset) {
    //     dataset.data = dataset.data.map(function() {
    //         return randomScalingFactor();
    //     });
    // });
    config.data.datasets.data = [20000, 14000, 12000, 15000, 18000, 19000, 22000].slice(0);
    window.myLine.update();
});
