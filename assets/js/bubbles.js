
function checkMediaQuery(){
    if(window.matchMedia("(max-width:900px)").matches){
    $("#charcoal_img").hover(function(){
    $("#charcoal_bubble").toggle();
    });
}else if(window.matchMedia("(min-width:900px)").matches){
var div2= document.getElementById("mixedmedia-bubble");
var oldmixedmedia= div2.innerHTML; 

$("#charcoal_img").mouseleave(function(){
$("#mixedmedia-bubble").empty().append(oldmixedmedia);
}
);
$("#charcoal_img").mouseenter(function(){
    $("#mixedmedia-bubble").empty().append("<p>I can create acrylic</p>");

}
);}}



window.addEventListener('resize',checkMediaQuery);

$("#acrylic_img").hover(function(){
    $("#acrylic_bubble").toggle();

}
);

$("#pencil_img").hover(function(){
    $("#pencil_bubble").toggle();

}
);

$("#charcoal_img").hover(function(){
    $("#charcoal_bubble").toggle();

}
);

$("#mixedmedia_img").hover(function(){
    $("#mixedmedia_bubble").toggle();

}
);




var div= document.getElementById("pencil-bubble");
var oldpencil= div.innerHTML; 

$("#acrylic_img").mouseleave(function(){
    
    $("#pencil-bubble").empty().append(oldpencil);

}
);

$("#acrylic_img").mouseenter(function(){
    $("#pencil-bubble").empty().append("<p>I can create acrylic</p>");

}
);

var div1= document.getElementById("acrylic-bubble");
var oldacrylic= div1.innerHTML; 

$("#pencil_img").mouseleave(function(){
    
    $("#acrylic-bubble").empty().append(oldacrylic);

}
);

$("#pencil_img").mouseenter(function(){
    $("#acrylic-bubble").empty().append("<p>I can create acrylic</p>");

}
);
