var mess=new Array(
  "Проектируем ",
  "Строим ",
  "Согласовываем ");
 
 var txtcol = "#fff";
 var lastcol = "#C0C0C0";
 var pause = 1500;
 var speed = 100;
 var i = i_str = 0;
 var msg = msgpre = msgafter = "";
 
 function get_text() {
  msgpre = mess[i].substring(0, i_str-1);
  msgafter = mess[i].substring(i_str-1, i_str);
  msg = "<span style='position: relative; color:" + txtcol + "; font-family: inherit;'>" + msgpre + "<span style='color:" + lastcol + "; font-family: inherit;'>" + msgafter +
  "</span></span>";
 }
 
 function go() {
 if (i_str<=mess[i].length-1) {
  i_str++;
  get_text();
  if (document.all) typewriter.innerHTML = msg;
  else if (document.layers) {
   document.typewriter.document.write(msg);
   document.typewriter.document.close();
  }
  else document.getElementById("typewriter").innerHTML = msg;
  var timer = setTimeout("go()", speed);
 }
 else {
  clearTimeout(timer);
  var timer = setTimeout("changemess()", pause);
 }
 }
 
 function changemess() {
  i++;
  i_str = 0;
  if (i>mess.length-1) i = 0;
  go();
 }

 go();