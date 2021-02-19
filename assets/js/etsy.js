

$(document).ready(function () {
    

    $.ajax({
        url: "https://openapi.etsy.com/v2/shops/ACraftyCarrot/listings/active.js?&includes=MainImage&api_key=uf11esagqu3i9npmikuc0oab",
        dataType: 'jsonp',
        success: function (data) {
            $("#loader").hide();
            $.each(data.results, function (i, result) {
                console.log(i);
                srcImage = result.MainImage.url_170x135;

                $("<div class='col-10 offset-1 col-sm-6 col-md-4 listings'>").appendTo("#listing")
                    
                    
                    .append($("<a href='" + result.url + "'></a>").append("<img src='" + srcImage + "'>"))
                    .append($("<div>").text(result.title))
                    .append($("<div>").text("Price: "  + result.price + result.currency_code))
                    .append($("<button class=' btn btn-secondary buy-button'>Buy Now<a href='"+ result.url +"'></a></button>"));
            });
        },
    });

});
