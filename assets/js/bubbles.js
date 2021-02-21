


$(document).ready(function () {


$("#charcoal-bubble").on({
    mouseenter: function () {
        $("#charcoal-bubble").html("<p>I can create portraits or landscapes using only charcoal to create beautiful black and white images</p>");
        
    },

    mouseleave: function () {
        $("#charcoal-bubble").html(`<h3>Charcoal</h3>
                    <div id='mixedmedia_img'><img src='assets/images/medusa.jpg'></div>`);
    }
},);
        

$("#acrylic-bubble").on({
    mouseenter: function () {
        $("#acrylic-bubble").html("<p>I can create framed artwork to add a pop of colour to a room. I am also happy to paint murals insitu for nurseries etc.</p>");
        
    },

    mouseleave: function () {
        $("#acrylic-bubble").html(`<h3>Acrylic</h3>
                    <div id="pencil_img"><img src="assets/images/image10.JPG"></div>`);
    }
},);

$("#mixedmedia-bubble").on({
    mouseenter: function () {
        $("#mixedmedia-bubble").html("<p>Using a mixture of any of the following I can create canvases, framed artwork or cards: paint, charcoal, inks, textiles or watercolour</p>");
        
    },

    mouseleave: function () {
        $("#mixedmedia-bubble").html(`<h3>Mixed Media</h3>
                    <div id="charcoal_img"><img src="assets/images/fish.jpg"></div>`);
    }
}, );


$("#pencil-bubble").on({
    mouseenter: function () {
        $("#pencil-bubble").html("<p>Using coloured pencils I am able to create unique artwork to your specification. I specialise in Japanese cartoon artwork which can also be then printed onto textiles.</p>");
        
    },

    mouseleave: function () {
        $("#pencil-bubble").html(`<h3>Pencil</h3>
                    <div id="acrylic_img"><img src="assets/images/laputa robot.jpg"></div>`);
    }
}, );});










