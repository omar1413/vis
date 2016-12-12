(function($V){
	'use strict';
	$V.BarChart = $V.defineClass(
		null,   // class has no parent for now
		function BarChart(config){
			// initialization and private variables
			var self = this;
			self.text = 'barChart().tsv("data.tsv");';
			self.file = "VIS/BarChart/barChart.js";
		},
		{
			//public methods
			getText: function(){
				var self = this;
				return self.text;
			},
			getScript: function(){
				var self = this;
				return self.file; 
			}

		}
	);
})(VAQUA);