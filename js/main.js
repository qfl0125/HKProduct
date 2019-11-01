$(document).ready(function($) {
    "use strict";
    $('#container').append(getList).pinto({
        itemWidth:230,
        gapX:10,
        gapY:10,
        onItemLayout: function($item, column, position) {
        }
    });

    
    $("#pintoInit").click(function(){
        $('#container').pinto();
    });
    
    $("#pintoDestroy").click(function(){
        $('#container').pinto("destroy");
    });

});
 function getList(product){
        var item="<div class='item'><a class='example-image-link' href='images/pd/xhx.png' data-lightbox='example-set' data-title='Click the right half of the image to move forward.'><img class='example-image' src='images/pd/xhx.png' alt='/></a><div class='content-item'><span class='time'><a class='btn btn-1'>价格</a> <i class='fa fa-jpy' aria-hidden='true'></i>528</span><h3 class='title-item'><a href='#'>绣花绣水乳套装</a></h3><p class='info'>干皮敏感肌可用,巨好吸收啊,可以提亮肤色</p><ul class='list-inline'><li><a href='#'><i class='fa fa-comment'></i> 260</a></li><li><a href='#'><i class='fa fa-heart'></i> 260</a></li></ul></div>";

        var list=new Array();
        list.push(item);
         list.push(item);
          list.push(item);
           list.push(item);
        return list;
      console.log("I LOVE YOU!");
}