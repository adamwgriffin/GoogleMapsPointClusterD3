// DOM Ready
document.addEventListener("DOMContentLoaded", function(event) {

  // Create the Google Map.
  window.map = new google.maps.Map(document.getElementById('map'), {
    zoom: 6,
    center: new google.maps.LatLng(37.76487, -122.41948)
  });

  // Construct PointCluster Object
  // @params{object}
  var pc = new PointCluster({
    map: map, // Pass in your map intance.
    clusterRange: 100, // clusterRange is the pixel grid to cluster. Smaller = more clusters / Larger = less clusters.
    threshold: 100, // Threshold is the number of results before showing markers,
    clusterRgba: '255, 0, 102, .8', // Change the background of the cluster icon. RGBA only.
    clusterBorder: '5px solid #dcdcdc', // Change the border around the icon. HEX only.
    polygonStrokeColor: '#0f0f0e', // Polygon stroke color.
    polygonStrokeOpacity: '0.5', // Polygon stroke opacity.
    polygonStrokeWeight: '4',// Polygon stroke weight.
    polygonFillColor: '#0f0f0e', // Polygom fill color.
    polygonFillOpacity: '0.2' // Polygon fill color.
  });

  // Map idle listener.
  google.maps.event.addListenerOnce(map, 'idle', function() {

    // Get data with d3 JSON call. You can obviously use whatever you please to grab your data.
    d3.json('example.json', function(error, res) {

      // Set the collection of location objects.
      pc.setCollection(res.data.result_list);

      // Print clusters
      pc.print();

    });

  });

});
