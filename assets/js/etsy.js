const baseURL = "https://openapi.etsy.com/v2/listings/active?api_key=uf11esagqu3i9npmikuc0oab";

var xhr = new XMLHttpRequest();
var data;

xhr.open("GET", baseURL);
xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
xhr.send();

function setData(jsonData) {
    data = jsonData;
}

xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        setData(JSON.parse(this.responseText));
    };
}

console.log(data);