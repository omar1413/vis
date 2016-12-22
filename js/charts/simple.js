(function($V){
	'use strict';
	$V.SimpleChart = $V.defineClass(
		null,   // class has no parent for now
		function SimpleChart(config){
			// initialization and private variables
			var self = this;
			self.text = function(path) { 
				var p = path || 'data/data2.json';
				return 'simpleChart().json("'+p+'");';
			};
			self.file = "VIS/SimpleChart/simpleChart.js";
		},
		{
			//public methods
			getText: function(){
				var self = this;
				return self.text();
			},
			getScript: function(){
				var self = this;
				return self.file; 
			}

		}
	);
})(VAQUA);