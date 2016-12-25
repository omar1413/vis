(function($V){
	'use strict';
	$V.SimpleChart = $V.defineClass(
		null,   // class has no parent for now
		function SimpleChart(config){
			// initialization and private variables
			var self = this;
			self.advancedUser = false;
			self.customText = function(path) {
				var p = path || 'data/data2.json';
				return 'simpleChart().json("'+p+'");';
			};
			self.advancedText = function () {
				return simpleChart;
			};
			self.file = "VIS/SimpleChart/simpleChart.js";
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
				console.log("1"  + status);
				var self = this;
				self.advancedUser = status;
			}

		}
	);
})(VAQUA);