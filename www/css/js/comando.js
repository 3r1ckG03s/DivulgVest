// Vibrate

$(document).on('click', '#int', function () {
  navigator.vibrate(6000);
});

// Beep

$(document).on('click', '#gps', function () {
  navigator.notification.beep(3);
});

//Mapa Local etec

//Código para exibir o mapa
$(document).on('click', '#gps', function () {
  window.onload = function () {

    //configurando plugin de notificações
    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
      console.log(navigator.notification);
    }

   L.mapquest.key = 'VuATH4WRuwVc1ZJUa2GyU3oOaDiljlOr';

      var map = L.mapquest.map('map', {
        //Configurando coordenadas recebidas pelo gps
        center: [-24.1201408, -46.6753722],
        layers: L.mapquest.tileLayer('map'),
        zoom: 12
      });

      map.addControl(L.mapquest.control());
      
  }
});