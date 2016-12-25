(function($V){
	'use strict';
	$V.RadialChart = $V.defineClass(
		null,   // class has no parent for now
		function RadialChart(config){
			// initialization and private variables
			var self = this;
				self.customText = function(path) {
				var p = path || 'data/dd.json';
				var c = 'age';
				return 'd3.json("'+p+'", function(d){\n\
                        \r  data = d.map(function(dd){\n\
                        \r      return dd.'+c+';\n\
                        \r  });\n\
                        \r  radialChart(data).exec();\n\
                        \r});';
			};
			self.advancedText = function () {
				return radialChart;
			};
			
			self.file = "VIS/RadialChart/useLayout.js";
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