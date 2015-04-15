$(document).ready(function(){
  $('#getSpot').click(function(){
    var lat = $('#lat').val();
    var long = $('#long').val();
    console.log(lat, long);
    $.ajax(
      'http://nominatim.openstreetmap.org/reverse?format=json&lat='+lat+'&lon='+long+'&zoom=18&addressdetails=1',
    {
      method: "GET",
      success: function(data){
        console.log(data);
      },
      error: function(error){
        console.log(error);
      }
    })
  });
});
