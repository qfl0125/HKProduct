$(document).ready(function($) {
   jsonToObject();
});
 

function objToDom(item){
            var dom="\
            <div class=\'item\'>\
                <a class=\'example-image-link\' href=\'images/pd/"+item.image+"\' data-lightbox=\'example-set\'\
                 data-title=\'"+item.description+"\'>\
                    <img class=\'example-image\' src=\'images/pd/"+item.image+"\' alt=\'\'/>\
                </a>\
                <div class=\'content-item\'><span class=\'time\'>\
                    <a class=\'btn btn-1\'>价格</a> <i class=\'fa fa-jpy\' aria-hidden=\'true\'></i>"+item.price+"</span>\
                    <h3 class=\'title-item\'><a href=\'#\'>"+item.name+"</a></h3>\
                    <p class=\'info\'>"+item.description+"</p>\
                    <ul class=\'list-inline\'>\
                        <li><a href=\'#\'><i class=\'fa fa-comment\'></i>"+item.meg+"</a></li>\
                        <li><a href=\'#\'><i class=\'fa fa-heart\'></i>"+item.heart+"</a></li>\
                    </ul>\
            </div>";
       return dom;
}

function jsonToObject() {
    $.getJSON("https://qfl0125.github.io/HKProduct/product/list.json",function (json,status) {
        var listData=new Array();
        for (var i = 0; i < json.length; i++) {
            listData.push(objToDom(json[i]));
        }
        //
       $('#container').append(listData);
        //
    });
}