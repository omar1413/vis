(function($V){
	'use strict';
	$V.BarChart = $V.defineClass(
		null,   // class has no parent for now
		function BarChart(config){
			// initialization and private variables
			var self = this;
			self.advancedUser = false;
			self.customText = function(path) {
				var p = path || 'data/data.tsv';   // set default data file if no file is passed as argument
				return 'barChart().tsv("'+p+'");';
			};
			self.advancedText = function () {
				return barChart;
			};
			self.file = "VIS/BarChart/barChart.js";
		},
		{
			//public methods
			getText: function(){
				var self = this;
				console.log(self.advancedUser + "//////////")
				if(!self.advancedUser) {
					return self.customText();
				}
				else{
					return self.advancedText();
				}
			},
			getScript: function(){
				var self = this;
				return self.file; 
			},
			setAdvanced : function (status) {
				if(!arguments.length) return;
				console.log("2"  + status);
				var self = this;
				self.advancedUser = status;
			}

		}
	);
})(VAQUA);