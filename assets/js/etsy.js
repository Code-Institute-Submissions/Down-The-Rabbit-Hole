


function getlistings() {
	$(document).ready(function(){

$.getJSON(`https://openapi.etsy.com/v2/shops/ACraftyCarrot/listings/active.js?&includes=MainImage&api_key=uf11esagqu3i9npmikuc0oab`, function(data){
	
	   		
	   		$.each(data.results, function(i, result)
	   		{	
	
	   			srcImage = result.MainImage.url_170x135; 
	   						   									
	  			$("#listing")
	  				.append($("<a href='" + result.url + "'></a>").append("<img src='" + srcImage + "'>"))  				
	  				.append($("<div>").text(result.title))
	  				.append($("<div>").text("$" + result.price));
               });
        });
    });
}
		