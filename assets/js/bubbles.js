

/*var div= document.getElementById("mixedmedia-bubble");
var div3= document.getElementById("charcoal-bubble");
var div4= document.getElementById("pencil-bubble");
var div5= document.getElementById("acrylic-bubble");
var oldmixedmedia= div.innerHTML; 
var oldcharcoal= div3.innerHTML;
var oldpencil= div4.innerHTML;
var oldacrylic= div5.innerHTML;*/

$(document).ready(function () {


$("#charcoal_img").mouseenter(function(){
    $("#mixedmedia-bubble").empty().append("<p>I can create portraits or landscapes using only charcoal to create beautiful black and white images</p>");

}
);

$("#charcoal_img").mouseleave(function(){
$("#mixedmedia-bubble").empty().append(`<h3>Mixed Media</h3>
                    <div id='mixedmedia_img'><img src='assets/images/fish.jpg'></div>`);
});
        




$("#mixedmedia_img").mouseenter(function(){
    console.log("media enter");
    $("#charcoal-bubble").empty().append("<p>Using a mixture of any of the following I can create canvases, framed artwork or cards: paint, charcoal, inks, textiles or watercolour</p>");
}
);

$("#mixedmedia_img").mouseleave(function(){
$("#charcoal-bubble").empty().append(`<h3>Charcoal</h3>
                    <div id="charcoal_img"><img src="assets/images/medusa.jpg"></div>`);
}
);



$("#acrylic_img").mouseenter(function(){
    console.log("ACRYLIC ENTER");
    $("#pencil-bubble").empty().append("<p>I can create framed artwork to add a pop of colour to a room. I am also happy to paint murals insitu for nurseries etc.</p>");
}
);

$("#acrylic_img").mouseleave(function(){
$("#pencil-bubble").empty().append(`<h3>Pencil</h3>
                    <div id="pencil_img"><img src="assets/images/laputa robot.jpg"></div>`);
}
);


$("#pencil_img").mouseenter(function(){
    console.log("PENCIL ENTER");
    $("#acrylic-bubble").empty().append("<p>Using coloured pencils I am able to create unique artwork to your specification. I specialise in Japanese cartoon artwork which can also be then printed onto textiles.</p>");
}
);

$("#pencil_img").mouseleave(function(){
$("#acrylic-bubble").empty().append(`<h3>Acrylic</h3>
                    <div id="acrylic_img"><img src="assets/images/image10.JPG"></div>`);
}
);
});



//window.addEventListener('resize',checkMediaQuery);








