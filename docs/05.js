!function(a){function b(){var b=a.range(10).map(function(a,b){return{v:Math.random()}}),c=a.select("a-scene").selectAll("a-entity").data(b),d=c.enter().append("a-entity").attr("rotation",function(a,c){return"0 "+360/b.length*c+" 0"});d.append("a-box").attr("color","red").attr("width",1).attr("height",function(a,b){return a.v}).attr("depth",.5).attr("position",function(a,b){return"0 "+a.v/2+" -5"}),c.select("a-box").attr("height",function(a,b){return a.v}),d.append("a-text").attr("value",function(a){return parseInt(10*a.v)}).attr("color","black").attr("position",function(a){return"-0.1 1.5 -2"}).attr("visible",!1),c.on("mouseenter",function(){a.select(this).select("a-text").attr("visible",!0)}),c.on("mouseleave",function(){a.select(this).select("a-text").attr("visible",!1)})}setInterval(b,5e3),b()}(window.d3);