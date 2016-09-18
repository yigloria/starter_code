$(document).ready(start);

function start() {
  $('#submit-btn').on('click',changeCtImage);

}

function changeCtImage(e) {
  e.preventDefault();
  var cityType = $('#city-type').val();
  var newYork = ["New York", "New York City", "NYC"];
  var sanFran = ["San Francisco", "SF", "Bay Area"];
  var losAngeles = ["Los Angeles", "LA", "LAX"];
  var austin = ["Austin", "ATX"];
  var sydney = ["Sydney", "SYD"];
  $('#mainContainer').removeClass();
 if (jQuery.inArray(cityType,newYork) != -1){
   $('#mainContainer').attr('class','nyc');
 }else if (jQuery.inArray(cityType,sanFran) != -1){
   $('#mainContainer').addClass('sf');
 }else if (jQuery.inArray(cityType,losAngeles) != -1){
   $('#mainContainer').addClass('la');


 }else if(jQuery.inArray(cityType, austin) != -1){
   $('#mainContainer').addClass('austin');

 }else if(jQuery.inArray(cityType, sydney) != -1){
   $('#mainContainer').addClass('sydney');

 }else{
   alert("Please Enter a Valid City Name");
 }

}
