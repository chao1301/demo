<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>Simple Map</title>
    <link rel="stylesheet" type="text/css" href="http://localhost:8086/demo/js/arcgis_js_api/library/3.14/3.14/dijit/themes/tundra/tundra.css"/>
    <link rel="stylesheet" type="text/css" href="http://localhost:8086/demo/js/arcgis_js_api/library/3.14/3.14/esri/css/esri.css" />
    <script type="text/javascript" src="http://localhost:8086/demo/js/arcgis_js_api/library/3.14/3.14/init.js"></script>
    <script type="text/javascript">
      dojo.require("esri.map");
      function init() {
        var myMap = new esri.Map("mapDiv");
        //note that if you do not have public Internet access then you will need to point this url to your own locally accessible cached service.
        var myTiledMapServiceLayer = new esri.layers.ArcGISDynamicMapServiceLayer("http://localhost:6080/arcgis/rest/services/中国/中国地图/MapServer");
        myMap.addLayer(myTiledMapServiceLayer);
        
        drawLine();
        
        
      }
      dojo.addOnLoad(init);
      
      //更具点划线
      function drawLine(){
    	  var line = new esri.geometry.Polyline({
    		   "paths": [[[-122.68,45.53], [-122.58,45.55],[-122.57,45.58],[-122.53,45.6]]],
    		   "spatialReference": { "wkid": 4326 }
    		});
    		var lineSymbol = new esri.symbol.CartographicLineSymbol(
    		  esri.symbol.CartographicLineSymbol.STYLE_SOLID,
    		  new dojo.Color("#0000FF"), 2,
    		  esri.symbol.CartographicLineSymbol.CAP_ROUND,
    		  esri.symbol.CartographicLineSymbol.JOIN_MITER, 5
    		);
    		var polyline = new esri.Graphic(line, lineSymbol);
    	  
      }
    </script>
  </head>
  <body class="tundra">
    <div id="mapDiv" style="width:900px; height:600px; border:1px solid #000;"></div>
  </body>
</html>