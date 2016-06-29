
var map = new maptalks.Map('map', {
  center: [121.48542888885189, 31.228541533313702],
  zoom: 14,
  baseLayer: new maptalks.TileLayer('base', {
    urlTemplate: '$(urlTemplate)',
    subdomains: $(subdomains)
  })
});

var layer = new maptalks.VectorLayer('vector');
map.addLayer(layer);

var rect = new maptalks.Rectangle([121.485428, 31.228541], 1000, 800, {
    symbol:{
        'lineColor' : '#6fa8dc',
        'polygonPatternFile' : 'http://icons.iconarchive.com/icons/icons-land/vista-map-markers/32/Map-Marker-Marker-Outside-Azure-icon.png',
        'polygonOpacity' : 1
    }
});
layer.addGeometry(rect);