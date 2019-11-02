$(document).ready(function($) {
    "use strict";
    $('#container').append(jsonToObject()).pinto({
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
 function objToDom(item){
        var item="<div class='item'>\
             <a class='example-image-link' href=images/pd/"+item.image+" data-lightbox='example-set' data-title="+item.description+">\
               <img class='example-image' src=images/pd/"+item.image+" alt=''/>\
            </a>\
            <div class='content-item'><span class='time'>\
                <a class='btn btn-1'>价格</a>\
                <i class='fa fa-jpy' aria-hidden='true'></i>"+item.price+"</span><h3 class='title-item'>\
                <a href='#'>"+item.name+"</a></h3><p class='info'>"+item.description+"</p>\
                <ul class='list-inline'>\
                     <li><a href='#'><i class='fa fa-comment'></i>"+item.meg+"</a></li>\
                     <li><a href='#'><i class='fa fa-heart'></i> "+item.heart+"</a></li>\
                </ul>\
            </div>";
       console.log()
       return item;
}

function jsonToObject() {
    $.getJSON("../product/list.json",function (data) {
        var listData=new Array();
        console.log("jsonToObject----data:"+data)
        listData.push(data.forEach(objToDom(item)));
        return listData;
    })
}