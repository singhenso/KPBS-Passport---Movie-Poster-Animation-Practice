// Set the API key
// Enter in your API Key here
import { apiKey } from './config.js';

console.log('test');
// Set the base URL for the API
const baseUrl = "https://api.themoviedb.org/3";

// Set the endpoint to fetch data from
const endpoint = "/movie/popular";

// Construct the full URL for the API request
const apiUrl = `${baseUrl}${endpoint}?api_key=${apiKey}`;

// Fetch data from the API
fetch(apiUrl)
  .then((response) => response.json()) // Convert the response to a JSON object
  .then((data) => {
    console.log(data); // Log the data to the console for debugging purposes

    // Create a new <div> element to hold all the <ul> elements
    const seriesDiv = document.getElementById("series");

    for (let k = 0; k < 3; k++) {
      const ul = document.createElement("ul");
      ul.className =
        "MyEmptyListCta__container__block__container-parallax__shows-list";

      const usedImageUrls = []; // Array to keep track of used image URLs

      for (let i = 0; i < 10; i++) {
        let item; // Declare the item variable outside of the while loop

        do {
          item =
            data.results[
              Math.floor(Math.random() * Math.min(data.results.length, 30))
            ];
          // Get a random item from the data - caps at 30
        } while (
          usedImageUrls.includes(
            `https://image.tmdb.org/t/p/w500/${item.poster_path}`
          )
        ); // Check if the image URL has already been used

        usedImageUrls.push(
          `https://image.tmdb.org/t/p/w500/${item.poster_path}`
        ); // Add the image URL to the used items array

        // Get the image URL for the current item
        const imageUrl = `https://image.tmdb.org/t/p/w500/${item.poster_path}`;

        // Create a new <li> element with the image
        const li = document.createElement("li");

        const figure = document.createElement("figure");
        figure.className =
          "Image aspect-ratio--parent MyEmptyListCta__container__block__container-parallax__image";
        li.appendChild(figure);

        const ratioFrame = document.createElement("div");
        ratioFrame.className = "RatioFrame aspect-ratio--16x9";
        figure.appendChild(ratioFrame);

        const imageWrapper = document.createElement("div");
        imageWrapper.className = "Image__Wrapper aspect-ratio--child";
        figure.appendChild(imageWrapper);

        const picture = document.createElement("picture");
        imageWrapper.appendChild(picture);

        const img = document.createElement("img");
        img.src = imageUrl;
        picture.appendChild(img);

        // Add event listener to image
        img.addEventListener("click", () => {
          // Get modal elements
          const modal = document.getElementById("myModal");
          modal.classList.add("active");
          const modalImage = document.getElementById("modalImage");
          const modalTitle = document.getElementById("modalTitle");
          const modalOverview = document.getElementById("modalOverview");
          const modalReleaseDate = document.getElementById("modalReleaseDate");
          const modalRating = document.getElementById("modalRating");

          // Remove any existing star-rating element
          const existingRating = document.querySelector(".star-rating.active");
          if (existingRating) {
            existingRating.parentNode.removeChild(existingRating);
          }

          // Set modal content
          modalTitle.innerHTML = item.original_title;
          modalOverview.innerHTML = item.overview;
          modalReleaseDate.innerHTML = new Date(
            item.release_date
          ).toLocaleDateString("en-US");
          modalImage.innerHTML = `<img src="${imageUrl}" alt="${item.original_title}"/>`;

          // Create star rating
          const starRating = document.createElement("div");
          starRating.className = "star-rating";
          modalRating.appendChild(starRating);

          // Calculate the number of filled stars
          const rating = Math.round(item.vote_average / 2); // Divide by 2 since rating is out of 10, but we want out of 5
          const emptyStars = 5 - rating;

          // Add filled stars
          for (let i = 0; i < rating; i++) {
            const star = document.createElement("span");
            star.innerHTML = "&#9733;"; // Filled star
            starRating.appendChild(star);
          }

          // Add empty stars
          for (let i = 0; i < emptyStars; i++) {
            const star = document.createElement("span");
            star.innerHTML = "&#9734;"; // Empty star
            starRating.appendChild(star);
          }

          // Show modal
          modal.style.display = "block";

          // Add event listener to close button
          const closeBtn = document.getElementsByClassName("close")[0];
          closeBtn.addEventListener("click", () => {
            // Hide modal
            modal.style.display = "none";
            modal.classList.remove("active");

            starRating.parentNode.removeChild(starRating);
          });
        });

        ul.appendChild(li);
      }

      seriesDiv.appendChild(ul);
    }
  })
  .catch((error) => console.error(error)); // Log any errors to the console for debugging purposes
