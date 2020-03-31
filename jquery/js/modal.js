$.fn.extend({
  fellow:function(obj){
    var defaultObj = {
      type:"默认"
    }
    $.extend(defaultObj,obj);
    var modalBtn = $('<button class="btn">'+defaultObj.type+'</button>');
    var modalHtml =$( '<div class="mosk">'+
                      '<div class="box">'+
                        '<div class="box-header">'+
                          '<span class="titlt">'+defaultObj.type+'</span>'+
                          '<span class="close">X</span>'+
                        '</div>'+
                        '<div class="box-content">'+
                          '<span>'+defaultObj.type+'内容</span>'+
                        '</div>'+
                      '</div></div>')
    $(this).append(modalBtn);  
    $(this).append(modalHtml);                
    $(modalBtn).click(function(){
      $(modalHtml).show();
    })
    $(".close").click(function(){
      $(modalHtml).hide();
    })                
  }
})