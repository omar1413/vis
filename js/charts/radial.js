(function($V){
	'use strict';
	$V.RadialChart = $V.defineClass(
		null,   // class has no parent for now
		function RadialChart(config){
			// initialization and private variables
			var self = this;
			self.text = function(path, column){
				var p = path || 'data/dd.json';
				var c = column || 'age';
				var text = 'd3.json("'+p+'", function(d){\n\
                        \r  data = d.map(function(dd){\n\
                        \r      return dd.'+c+';\n\
                        \r  });\n\
                        \r  radialChart(data).exec();\n\
                        \r});';
   				return text;

               };
			
			self.file = "VIS/RadialChart/useLayout.js";
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