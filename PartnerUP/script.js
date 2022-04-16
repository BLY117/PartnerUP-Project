function gasloc(){
    var icon = new H.map.Icon(svgGasMarkup);
    var avglat = 0;
    var avglng = 0;

      
    coords = {lat: 10.660655, lng: -61.508803},
    marker = new H.map.Marker(coords, {icon: icon});
    map.addObject(marker);
    avglat = avglat + 10.660655
    avglng = avglng + -61.508803

    coords = {lat: 10.656812, lng: -61.513975},
    marker = new H.map.Marker(coords, {icon: icon});
    map.addObject(marker);
    avglat = avglat + 10.656812
    avglng = avglng + -61.513975

    coords = {lat: 10.662775, lng: -61.519672},
    marker = new H.map.Marker(coords, {icon: icon});
    map.addObject(marker);
    avglat = avglat + 10.662775
    avglng = avglng + -61.519672

    coords = {lat: 10.658897, lng: -61.523818},
    marker = new H.map.Marker(coords, {icon: icon});
    map.addObject(marker);
    avglat = avglat + 10.658897
    avglng = avglng + -61.523818

    avglat = avglat/4;
    avglng = avglng/4;

    coords = {lat: avglat, lng: avglng},
    map.setZoom(15);
    map.setCenter(coords);
}

function img4Hover() {
    document.getElementById('gasStation').style.width = "83%";
    document.getElementById('gasStation').style.right = "7%";
    document.getElementById('gasStation').style.top = "6%";
}
function img4Out() {
    document.getElementById('gasStation').style.width = "36%";
    document.getElementById('gasStation').style.right = "3%";
    document.getElementById('gasStation').style.top = "16%";
}

function policeloc(){
    var icon = new H.map.Icon(svgPoliceMarkup);
    var avglat = 0;
    var avglng = 0;
    
    coords = {lat: 10.650222, lng: -61.504319},
    marker = new H.map.Marker(coords, {icon: icon});
    map.addObject(marker);
    avglat = avglat + 10.650222
    avglng = avglng + -61.504319

    coords = {lat: 10.652442, lng: -61.512172},
    marker = new H.map.Marker(coords, {icon: icon});
    map.addObject(marker);
    avglat = avglat + 10.652442
    avglng = avglng + -61.512172

    coords = {lat: 10.661894, lng: -61.521201},
    marker = new H.map.Marker(coords, {icon: icon});
    map.addObject(marker);
    avglat = avglat + 10.661894
    avglng = avglng + -61.521201

    coords = {lat: 10.670276, lng: -61.508905},
    marker = new H.map.Marker(coords, {icon: icon});
    map.addObject(marker);
    avglat = avglat + 10.670276
    avglng = avglng + -61.508905

    avglat = avglat/4;
    avglng = avglng/4;

    coords = {lat: avglat, lng: avglng},
    map.setZoom(14);
    map.setCenter(coords);
}



function img7Hover() {
    document.getElementById('station').style.width = "83%";
    document.getElementById('station').style.right = "7%";
    document.getElementById('station').style.top = "6%";
}
function img7Out() {
    document.getElementById('station').style.width = "36%";
    document.getElementById('station').style.right = "3%";
    document.getElementById('station').style.top = "16%";
}

function myLocation() {
    var icon = new H.map.Icon(svgUserMarkup),
    coords = {lat: 10.6603, lng: -61.5086},
    marker = new H.map.Marker(coords, {icon: icon});
    map.addObject(marker);
    map.setCenter(coords);
}

function getLocation() {

  var location = document.getElementById("location").value;
  
  if (location == "Friend 1"){
    f1();
  } else if (location == "Friend 2"){
    f2();
  } else if (location == "Friend 3"){
    f3();
  } else if (location == "Friend 4"){
    f4();
  } else if (location == "Friend 5"){
    f5();
  } else if (location == "Friend 6"){
    f6();
  } else if (location == "Friend 7"){
    f7();
  }
}

function f1() {
    var icon = new H.map.Icon(svgMarkup),
    coords = {lat: 10.620624, lng: -61.258264},
    marker = new H.map.Marker(coords, {icon: icon});
    map.addObject(marker);
    map.setCenter(coords);
}

function f1H() {
    document.getElementById('friend1').style.width = "83%";
    document.getElementById('friend1').style.right = "7%";
    document.getElementById('friend1').style.top = "6%";
    document.getElementById('friend1').src = "https://cdn.glitch.global/071a6fe7-aaff-49e4-938b-d8341097a8ae/1.gif?v=1649311963601";
}

function f1O() {
    document.getElementById('friend1').style.width = "36%";
    document.getElementById('friend1').style.right = "3%";
    document.getElementById('friend1').style.top = "16%";
    document.getElementById('friend1').src = "https://cdn.glitch.global/071a6fe7-aaff-49e4-938b-d8341097a8ae/p1-removebg-preview.png?v=1649333383707";
} 

function f2() {
    var icon = new H.map.Icon(svgMarkup),
    coords = {lat: 10.621109, lng: -61.315513},
    marker = new H.map.Marker(coords, {icon: icon});
    map.addObject(marker);
    map.setCenter(coords);
}

function f2H() {
    document.getElementById('friend2').style.width = "83%";
    document.getElementById('friend2').style.right = "7%";
    document.getElementById('friend2').style.top = "6%";
    document.getElementById('friend2').src = "https://cdn.glitch.global/071a6fe7-aaff-49e4-938b-d8341097a8ae/2.gif?v=1649311963084";
}

function f2O() {
    document.getElementById('friend2').style.width = "36%";
    document.getElementById('friend2').style.right = "3%";
    document.getElementById('friend2').style.top = "16%";
    document.getElementById('friend2').src = "https://cdn.glitch.global/071a6fe7-aaff-49e4-938b-d8341097a8ae/p2-removebg-preview.png?v=1649333383996";
}

function f3() {
    var icon = new H.map.Icon(svgMarkup),
    coords = {lat: 10.553719, lng: -61.370916},
    marker = new H.map.Marker(coords, {icon: icon});
    map.addObject(marker);
    map.setCenter(coords);
}

function f3H() {
    document.getElementById('friend3').style.width = "83%";
    document.getElementById('friend3').style.right = "7%";
    document.getElementById('friend3').style.top = "6%";
    document.getElementById('friend3').src = "https://cdn.glitch.global/071a6fe7-aaff-49e4-938b-d8341097a8ae/3.gif?v=1649311963227";
}

function f3O() {
    document.getElementById('friend3').style.width = "36%";
    document.getElementById('friend3').style.right = "3%";
    document.getElementById('friend3').style.top = "16%";
    document.getElementById('friend3').src = "https://cdn.glitch.global/071a6fe7-aaff-49e4-938b-d8341097a8ae/p3-removebg-preview.png?v=1649333383222";
}

function f4() {
    var icon = new H.map.Icon(svgMarkup),
    coords = {lat: 10.521906, lng: -61.402674},
    marker = new H.map.Marker(coords, {icon: icon});
    map.addObject(marker);
    map.setCenter(coords);
}

function f4H() {
    document.getElementById('friend4').style.width = "83%";
    document.getElementById('friend4').style.right = "7%";
    document.getElementById('friend4').style.top = "6%";
    document.getElementById('friend4').src = "https://cdn.glitch.global/071a6fe7-aaff-49e4-938b-d8341097a8ae/4.gif?v=1649311963168";
}

function f4O() {
    document.getElementById('friend4').style.width = "36%";
    document.getElementById('friend4').style.right = "3%";
    document.getElementById('friend4').style.top = "16%";
    document.getElementById('friend4').src = "https://cdn.glitch.global/071a6fe7-aaff-49e4-938b-d8341097a8ae/p4-removebg-preview.png?v=1649333383222";
}

function f5() {
    var icon = new H.map.Icon(svgMarkup),
    coords = {lat: 10.579959, lng: -61.334267},
    marker = new H.map.Marker(coords, {icon: icon});
    map.addObject(marker);
    map.setCenter(coords);
}

function f5H() {
    document.getElementById('friend5').style.width = "83%";
    document.getElementById('friend5').style.right = "7%";
    document.getElementById('friend5').style.top = "6%";
    document.getElementById('friend5').src = "https://cdn.glitch.global/071a6fe7-aaff-49e4-938b-d8341097a8ae/5.gif?v=1649311963481";
}

function f5O() {
    document.getElementById('friend5').style.width = "36%";
    document.getElementById('friend5').style.right = "3%";
    document.getElementById('friend5').style.top = "16%";
    document.getElementById('friend5').src = "https://cdn.glitch.global/071a6fe7-aaff-49e4-938b-d8341097a8ae/p5-removebg-preview.png?v=1649333383633";
}

function f6() {
    var icon = new H.map.Icon(svgMarkup),
    coords = {lat: 10.649389, lng: -61.496401},
    marker = new H.map.Marker(coords, {icon: icon});
    map.addObject(marker);
    map.setCenter(coords);
}

function f6H() {
    document.getElementById('friend6').style.width = "83%";
    document.getElementById('friend6').style.right = "7%";
    document.getElementById('friend6').style.top = "6%";
    document.getElementById('friend6').src = "https://cdn.glitch.global/071a6fe7-aaff-49e4-938b-d8341097a8ae/6.gif?v=1649311963398";
}

function f6O() {
    document.getElementById('friend6').style.width = "36%";
    document.getElementById('friend6').style.right = "3%";
    document.getElementById('friend6').style.top = "16%";
    document.getElementById('friend6').src = "https://cdn.glitch.global/071a6fe7-aaff-49e4-938b-d8341097a8ae/p6-removebg-preview.png?v=1649333383546";
}

function f7() {
    var icon = new H.map.Icon(svgMarkup),
    coords = {lat: 10.645361, lng: -61.401418},
    marker = new H.map.Marker(coords, {icon: icon});
    map.addObject(marker);
    map.setCenter(coords);
}

function f7H() {
    document.getElementById('friend7').style.width = "83%";
    document.getElementById('friend7').style.right = "7%";
    document.getElementById('friend7').style.top = "6%";
    document.getElementById('friend7').src = "https://cdn.glitch.global/071a6fe7-aaff-49e4-938b-d8341097a8ae/7.gif?v=1649311963546";
}

function f7O() {
    document.getElementById('friend7').style.width = "36%";
    document.getElementById('friend7').style.right = "3%";
    document.getElementById('friend7').style.top = "16%";
    document.getElementById('friend7').src = "https://cdn.glitch.global/071a6fe7-aaff-49e4-938b-d8341097a8ae/p7-removebg-preview.png?v=1649333383222";
}

window.onclick = function(event) {
  var modal = document.getElementById("hyperModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

