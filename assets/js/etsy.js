
/*function fetchEtsyInformation(){
$.when(
        $.getJSON(`https://openapi.etsy.com/v2/shops/ACraftyCarrot/listings/active.js?api_key=uf11esagqu3i9npmikuc0oab`),
       
    ).then(
        function(firstResponse, secondResponse) {
            var profile = firstResponse[0];
            var listings = secondResponse[0];
            $("#profile").html(findUserProfile(profile));
            $("#listing").html(findAllFeaturedListings(listings));
        },)}

$(document).ready(fetchEtsyInformation);




function populateSection(shopSectionID) {
    $.ajax({
        url:"https://openapi.etsy.com/v2/shops/EmmasRabbitHole/listings/active.js?api_key=uf11esagqu3i9npmikuc0oab",
        dataType:'jsonp',
        success:function(response){
            for(i=0; i<response.results.length; i++){
                if(response.results[i].shop_section_id == shopsectionID){
                    $("#shop").append('<div style="display: inline-block"><a target="_blank" href= "resp.results[i].url"> + <img src="'+ resp.results[i].MainImage.url_170x135 + '"></img></a></div>');
                }
            }
        }
    });
};

$(document).ready(populateSection);

function findAllShopListingsActive(listings){
    return `
    <h2>${listings.shop_id}</h2>
    <div>Listings: ${listings.page}</div>
    `
}

function fetchEtsyInformation(event){
    $.when(
        $.getJSON(`https://openapi.etsy.com/v2/shops/ACraftyCarrot/listings/active.js?api_key=uf11esagqu3i9npmikuc0oab`)
    ).then(
        function(response){
            var listingsData = response;
            $("#listings").html(findAllShopListingsActive(listingsData));
        }
    );
}

$(document).ready(function(){
    fetchEtsyInformation();
});
*/

function listingsInformationHTML(listings) {
    return `
       <div class="listings">
            <div>
            <p>Title: ${listings.title} <br> Description: ${listings.description}</p>
        </div>`;
}



function fetchEtsyInformation(event){
    $.when(
        $.getJSON(`https://openapi.etsy.com/v2/shops/ACraftyCarrot/listings/active.js?api_key=uf11esagqu3i9npmikuc0oab`)
    ).then(
        function(firstResponse) {
            var listingsData = firstResponse[0];
            $("#listings").html(listingsInformationHTML(listingsData));
            
        })}