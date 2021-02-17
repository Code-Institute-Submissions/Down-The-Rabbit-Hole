// function getlistings() {

// Replace ./data.json with your JSON feed
// fetch(`https://cors-anywhere.herokuapp.com/https://openapi.etsy.com/v2/shops/ACraftyCarrot/listings/active.js?&includes=MainImage&api_key=uf11esagqu3i9npmikuc0oab`, {
// mode: 'no-cors',
//    headers: {
//        "Origin": "https://8000-indigo-spoonbill-9h7fyvlr.ws-eu03.gitpod.io/",
//        "Access-Control-Request-Method": "GET",
//        'Access-Control-Allow-Origin':'https://8000-indigo-spoonbill-9h7fyvlr.ws-eu03.gitpod.io/',
//    }
// })
// .then((response) => {
//    console.log(response.json());
// })
// .then((data) => {
// Work with JSON data here
//  console.log(data)
// })
// .catch((err) => {
// Do something for an error here
//  })
// header('Access-Control-Allow-Origin: *');
// $.ajaxSetup({
//   headers : {   
//     'Access-Control-Allow-Origin' : '*'
//   }
// });
// $.getJSON(`https://cors-anywhere.herokuapp.com/https://openapi.etsy.com/v2/shops/ACraftyCarrot/listings/active.js?&includes=MainImage&api_key=uf11esagqu3i9npmikuc0oab`, function(data){


// 	   		$.each(data.results, function(i, result)
// 	   		{	
//                 console.log(i);
// 	   			srcImage = result.MainImage.url_170x135; 

// 	  			$("#listing")
// 	  				.append($("<a href='" + result.url + "'></a>").append("<img src='" + srcImage + "'>"))  				
// 	  				.append($("<div>").text(result.title))
// 	  				.append($("<div>").text("$" + result.price));
//                });
//         });
//   });
// }


$(document).ready(function () {

    $.ajax({
        url: "https://openapi.etsy.com/v2/shops/ACraftyCarrot/listings/active.js?&includes=MainImage&api_key=uf11esagqu3i9npmikuc0oab",
        dataType: 'jsonp',
        success: function (data) {
            $.each(data.results, function (i, result) {
                console.log(i);
                srcImage = result.MainImage.url_170x135;

                $("#listing")
                    .append($("<a href='" + result.url + "'></a>").append("<img src='" + srcImage + "'>"))
                    .append($("<div>").text(result.title))
                    .append($("<div>").text("$" + result.price));
            });
        },
    });


    /*
 $.getJSON(`https://openapi.etsy.com/v2/shops/ACraftyCarrot/listings/active.js?&includes=MainImage&api_key=uf11esagqu3i9npmikuc0oab&format=jsonp&jsonp=?`,function(data){
        console.log(data);
	   		
 	   		$.each(data.results, function(i, result)
 	   		{	
                 console.log(i);
 	   			srcImage = result.MainImage.url_170x135; 
	   						   									
	  			$("#listing")
	  				.append($("<a href='" + result.url + "'></a>").append("<img src='" + srcImage + "'>"))  				
 	  				.append($("<div>").text(result.title))
 	  				.append($("<div>").text("$" + result.price));
                });
         });
*/

});
