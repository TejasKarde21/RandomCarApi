
console.log("hello");
const main = document.getElementById("cardSection");

const getRandomCar = () => {

    main.innerHTML = "";


    const url = "https://api.unsplash.com/photos/random?client_id=s1-0b32jAzB3Abq4AJ6VJi6pOelJbCp6Q7Ash-aY_zo&query=car";

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            // Create a new div for each car
            const innerDiv = document.createElement("div");
            innerDiv.classList.add("car-card"); // You can add a CSS class for styling
            main.appendChild(innerDiv);
            innerDiv.classList.add("border");

            // Create an image element and set its source to the full URL from the API
            const carImg = document.createElement("img");
            carImg.src = data.urls.full;
            innerDiv.appendChild(carImg);
            carImg.classList.add("img");

            // Create a paragraph for the description and set its text content to the alt description
            const description = document.createElement("p");
            
            // Truncate the description to 50 characters and append "..." if it's longer
            const truncatedDescription = data.alt_description.length > 50
                ? data.alt_description.slice(0, 50) + "..."
                : data.alt_description;

            description.textContent = truncatedDescription;
            innerDiv.appendChild(description);

            
            
            
            description.classList.add("des");

            // Create a span for the ID and set its text content to the photo ID
            const idSpan = document.createElement("span");
            idSpan.innerText = `id:-${data.id} ` ;
            innerDiv.appendChild(idSpan);
            idSpan.classList.add("id");

            // Create an h4 element for the user's first name
            const userName = document.createElement("h4");
            userName.textContent =`Owner Name:-${data.user.first_name}` ;
            innerDiv.appendChild(userName);
            userName.classList.add("userName");

            // Create an image element for the user's profile picture
            const profileImg = document.createElement("img");
            profileImg.src = data.user.profile_image.large;
            innerDiv.appendChild(profileImg);
            profileImg.classList.add("userPic");
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
}

getRandomCar();

const searchBtn = document.getElementById("search_btn");


searchBtn.addEventListener("click",(e)=>{
     e.preventDefault();
     main.innerHTML = "";

     getRandomCar();
});


console.log("hello");