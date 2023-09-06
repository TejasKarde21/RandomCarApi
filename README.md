# RandomCarApi

HTML Element Selection:

const main = document.getElementById("cardSection");: This line selects an HTML element with the ID "cardSection" and assigns it to the main variable. This element is where the random car images will be displayed.
getRandomCar Function:

This function is responsible for fetching random car images and displaying them on the webpage.
Clearing the Main Element:

main.innerHTML = "";: Before fetching and displaying a new random car image, this line clears the content of the main element. This ensures that the previous image and information are removed before adding the new one.
API Request:

fetch(url): This initiates an HTTP request to the Unsplash API using the specified url.
Handling the API Response:
.then((response) => response.json()): This chain of .then functions handles the API response. It first converts the response to JSON format.
.then((data) => { ... }): Inside this function, the JSON data received from the API is processed.

Creating DOM Elements:
Several DOM elements are created dynamically within the getRandomCar function to display the image and related information. These elements include a div for the image container, an img element for the car image, a p element for the description, a span for the ID, an h4 for the owner's name, and an img element for the owner's profile picture.
Displaying Data:
The image's URL, alt description, photo ID, owner's name, and owner's profile picture URL are fetched from the API response and assigned to their respective elements.
Adding CSS Classes:
CSS classes are added to these elements using classList.add to apply styling or facilitate further CSS styling.
Error Handling:
.catch((error) => { ... }): This part handles errors that may occur during the API request. If an error occurs, it logs the error message to the console.
Initial Invocation:

getRandomCar();: This line invokes the getRandomCar function when the page loads, initially displaying a random car image.
Event Listener:
searchBtn.addEventListener("click", (e) => { ... });: This code sets up an event listener on a button with the ID "search_btn." When the button is clicked, it prevents the default form submission behavior (due to e.preventDefault()) and calls the getRandomCar function again. This allows users to fetch and display a new random car image when they click the "Search" button.
