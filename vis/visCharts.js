/**
 * Created by Omar on 12/22/2016.
 */


barChartObj = new $V.BarChart();
barChartScript = "<script type='text/javascript' src='" + barChartObj.getScript() + "'></script>";

window.onload = function () {
    $("body").append(barChartScript);
};