
barChartObj = new $V.BarChart();
barChartScript = "<script type='text/javascript' src='" + barChartObj.getScript() + "'></script>";

simpleChartObj = new $V.SimpleChart();
simpleChartScript = "<script type='text/javascript' src='" + simpleChartObj.getScript() + "'></script>";

radialChartObj = new $V.RadialChart();
radialChartScript = "<script type='text/javascript' src='" + radialChartObj.getScript() + "'></script>";

window.onload = function () {
    $("body").append(barChartScript);
    $("body").append(simpleChartScript);
    $("body").append(radialChartScript);
};