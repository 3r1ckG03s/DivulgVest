// Vibrate

$(document).on('click','#int',function(){
  navigator.vibrate(6000);
});

// Beep

$(document).on('click','#gps',function(){
  navigator.notification.beep(6000);
});