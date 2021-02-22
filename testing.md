<h4>Manual Testing</h4>

<h3>Manual Testing of User Stories</h3>
<ol>
<li>I would like to be able to browse and purchase items that are for sale by the artist.</li>
<ul>
<li>From the home page, there is a quick link to "My Shop" from where all of the current items for sale are displayed. By clicking on the "Buy Now" button, the items can be purchase via the Etsy website.<br>
<img src="assets/images/MyShop.JPG"</li>
</ul>
<li>I would like to be able to see a gallery of artwork created by the artist to see if the styles and designs are what I am looking for.</li>
<ul>
<li>When the homepage loads, it is easy to see where to access the gallery. By clicking on the "My Artwork" link, it takes the user directly to a gallery of many different types of art created by the artist. There are also examples of her work on the Homepage which are one of the first things that are seen when the page loads.<br>
<img src="assets/images/artwork.JPG"></li>
</ul>
<li>As a local customer, I would like to be able to easily find the address and location of the artists studio so I can view the artwork in person. </li>
<ul>
<li>From the homepage, it is a simple navigation to the "Contact Me" page where the address is provided. The location of the studio is also visually represented on Google Maps.<br>
<img src="assets/images/map.JPG"</li>
</ul> 
<li>I would like to be able to contact the artist for personalised artwork and for a quote.</li>
<ul>
<li>It is easy to see where, as a user, you would find these details. Clicking on the "Contact Me" link takes you straight to the page where the contact form can be completed. The contact form asks for details of the artwork required by the user. There is also the option to call the artist which is displayed boldly on the same page. Also, the footer of each page displays a link to the contact form.<br>
<img src="assets/images/form.JPG"></li>
</ul>
<li>I would like to be able to follow the artist on social media so I can keep up to date with new artwork that is available.</li>
<ul>
<li>An easy link in the footer of each page will direct you to the artist's Instagram page and allows you to follow them.<br>
<img src="assets/images/footer.JPG"></li>
</ul>
<li>I would like to be able to navigate between the webpages without having to return to the homepage.</li>
<ul>
<li>Each page has the same header which has links to each page on the website, therefore you can navigate to any page from any location on the website.</li>
</ul>
</ol>

<h3>Manual Testing of key aspects of the website</h3>
I manually tested the following to make sure they worked as designed:

<h5>Navbar</h5>
<ul>
<li>Viewing the Navbar from each of the four pages, it looks identical.</li>
<li>There are four options: Home, My Artwork, My Shop, Contact Me.</li>
<li>Clicking on the Home link will takes you to the index.html page.</li>
<li>Clicking on the My Artwork link takes you to the myartwork.html page.</li>
<li>Clicking on the My Shop link takes you to the myshop.html page.</li>
<li>Clicking on the Contact Me link takes you to the contactme.html page.</li>
</ul>

<h5>Link to Instagram</h5>
<ul>
<li>Scroll to the footer and the link is displayed in the form of the Instagram icon.</li>
<li>Upon clicking on the link, a new tab is opened and the artist's Instagram page is displayed.</li>
</ul>

<h5>Contact Form</h5>
<ul>
<li>Click on the "Contact Me" link.</li>
<li>Submitting the form without a name is not permitted. A warning appears "Please fill in this field".</li>
<li>After entering a name and trying to submit, a warning "Please fill in this field" appears below the phone number box.</li>
<li>After entering a phone number and trying to submit, a warning "Please fill in this field" appears below the emaill address box.</li>
<li>After entering an emaill address and trying to submit, a warning "Please fill in this field" appears below the requirements box.</li>
<li>Therefore the form cannot be submitted without all of the required items.</li>
<li>When all of the sections of the forms are completed, and upon clicking the "Send me your request" button, the details are emailed to the email address I have entered in emailJS.</li>
<li>Once the button has been clicked and the details sent successfully, the form will reset to its original state i.e. the input boxes are blank.</li>
</ul>

<h5>Loading the Etsy API and loader GIF</h5>
<ul>
<li>After clicking on the My Shop link, the page starts to load.</li>
<li>Before the JavaScript is loaded, the header and footer appear and so does the loader GIF to show the user that further information will be displayed.</li>
<li>Once the information from the API is loaded onto the page, the loader GIF is removed.</li>
</ul>

<h5>Etsy API Data - does the data parse correctly?</h5>
<ul>
<li>Once the JavaScript is run, the following data should have been retrieved from the API: Listing title, listing image, listing currency, listing price & listing url.</li>
<li>The image is displayed as a 170x135px image and is also used as a link to the listing url on Etsy</li>
<li>The listing title is displayed below along with the price and currency code.</li>
<li>The button titled "Buy Now" uses the listing url to provide a link to the listing on Etsy which opens in a new tab.</li>
</ul>

<h5>Home Page JavaScript - Charcoal, Pencil, Mixed Media & Acrylic</h5>
<ul>
<li>When hovering over each div for these four items the contents should change to display more information about each media type.</li>
<li>Hovering over each of the four divs does remove the original image and contents of the div and replaces them with more information.</li>
<li>When the mouse is moved outside the div, the contents revert back to the original html contents.</li>
<li>This method works for all screen sizes as although on smaller screens, there may not be a mouse present i.e. on a tablet or phone, if no mouse present the action still works when the div's are clicked on.</li>
</ul>

<h5>Different Screen Sizes</h5>
<ul>
<li>On a mobile device</li>
<ul>
<li>The navbar links have been condensed into a toggle container to take up less space on the page. The header height has also been reduced to allow more of the page to be seen.</li>
<li>On the Home page, two images are visible underneath the header to ensure the pictures are not cropped and fill the width.</li>
<li>The About Me and Media sections are now stacked on top of each other to enable the viewer to read the information easily.</li>
<li>On the Artwork page, the images are displayed one to a row to allow the user to see each picture clearly.</li>
<li>On the Shop page, the listing items are also displayed on to a row so that the descriptions and images can be clearly seen.</li>
<li>On the Contact page, the form is now displayed above the map and contact details so that the user can read all the information and see the map clearly.</li>
<li>The two sections in the footer have been placed on top of each other for viewing ease.</li>
</ul>
<li>On a tablet</li>
<ul>
<li>The navbar links are now displayed horizontally underneath the website name and are easily visible from every page.</li>
<li>Three images are now placed side by side to fill the width of the homepage.</li>
<li>The About Me and Media sections are still stacked on top of each other as they include a lot of text which is easier to read when the width of the div is increased.</li>
<li>The Artwork page now shows a width of three images which makes it easier to view all of the gallery images at the same time. </li>
<li>The Shop page, now shows two of the listing items to a row to ensure the width of the screen is filled.</li>
<li>The Contact page now shows the form and map side by side.</li>
<li>The footer sections are now placed next to each other to ensure the full width of the footer is filld with content.</li>
</ul>
<li>On a desktop</li>
<ul>
<li>The navigation links are visible horizontally spaced underneath the page heading. </li>
<li>Four images of equal size are now displayed underneath the header on the homepage. These create a full width banner to attract attention.</li></li>
<li>The About Me and Media sections are placed next to each other to make use of the width of the screen.</li>
<li>On the Artwork page, the images are now four to a row to fill the width of the page and provide a gallery style effect.</li>
<li>On the Shop page, the listings are still two to a row as when three were placed next to each other, the descriptions were difficult to read.</li>
<li>The Contact page shows the form and map in the same row to fill the width of the page.</li>
<li>The footer details are spaced out evenly over the width of the footer.</li>
</ul>
</ul>

<h3>Bugs Discovered</h3>
Here are details of bugs that were discovered during manual testing and how they were rectified.

<ul>
<li>Etsy API</li>
<ul>
<li>When first implementing the Etsy API into my project, the GET JSON call was being blocked by CORS policy. See image below.</li>
<img src="assets/images/api-error.JPG">
<li>I tried to get around this by using a header and (Access-Control-Allow-Origin: *) however the API data was still being blocked.</li>
<li>After speaking to "Tutor Support" they advised using an ajax call and jsonp to call the data, which solved the CORS policy issue.</li>
</ul>

<li>Bubbles.js</li>
<ul>
<li>My inital idea for the charcoal, pencil, acrylic & mixed media blocks was that when the mouse hovered over one of the divs, the div next to it would be filled with the information.</li>
<li>The original code was written for each div as below:</li>
<img src="assets/images/bubblejs.JPG">
<li>Despite not logging any errors in the console, it appeared that only the first two divs to be hovered over worked.</li>
<li>After speaking to "Tutor Support" they suggested changing the function to affect the same div rather than the div next to it.</li>
<li>This fixed the issu described.</li>
</ul>

<li>EmailJS Reset</li>
<ul>
<li>Initially, when the contact form was filled in and submitted, the data in the fields did not clear.</li>
<li>After reviewing the JavaScript code in sendEmail.js I realised that the "document.getElementById("myForm").reset();" was actually outside the function.</li>
<li>By moving this inside the function and only when "success" was logged in the console, the form was reset once the form was successfully submitted.</li>
</ul>
</ul>
