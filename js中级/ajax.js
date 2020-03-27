function ajaxGet(url,callback){
  // 第一步创建 XMLHttpRequest
var xmlhttp;
if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp = new XMLHttpRequest();
}
else {// code for IE6, IE5
  xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}
//第二步 发送请求
xmlhttp.open("GET", url, true);
xmlhttp.send();
//第三步 接收返回值
xmlhttp.onreadystatechange = function () {
  if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    var thisRes = JSON.parse(xmlhttp.responseText)
    callback(thisRes)
  }
}
}