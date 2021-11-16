// Get the root CSS element
var r = document.querySelector(":root");

// Array of latest news cards strings
const latestNewsPageCardsStrings = [
  `<div class="mgi__latest-news__cards__card">
      <img src="blogImages/t1.jpg" />
      <div class="mgi__latest-news__cards__card__content">
          <p class="mgi__latest-news__cards__card__content__title">
          Wordpress Installation Docs
          </p>
          <p
          class="mgi__latest-news__cards__card__content__date-created"
          >
          Aug 23rd, 2016
          </p>
      </div>
      </div>`,

  `<div class="mgi__latest-news__cards__card">
          <img src="blogImages/t4.jpg" />
          <div class="mgi__latest-news__cards__card__content">
          <p class="mgi__latest-news__cards__card__content__title">
              ChangLog For ZozoThemes
          </p>
          <p
              class="mgi__latest-news__cards__card__content__date-created"
          >
              Aug 3rd, 2016
          </p>
          </div>
      </div>`,

  `<div class="mgi__latest-news__cards__card">
          <img src="blogImages/t5.jpg" />
          <div class="mgi__latest-news__cards__card__content">
          <p class="mgi__latest-news__cards__card__content__title">
              Latest app update
          </p>
          <p
              class="mgi__latest-news__cards__card__content__date-created"
          >
              Aug 3rd, 2016
          </p>
          </div>
      </div>`,

  `<div class="mgi__latest-news__cards__card">
          <img src="blogImages/t3.jpeg" />
          <div class="mgi__latest-news__cards__card__content">
          <p class="mgi__latest-news__cards__card__content__title">
              How to Slide PSD files?
          </p>
          <p
              class="mgi__latest-news__cards__card__content__date-created"
          >
              Aug 3rd, 2016
          </p>
          </div>
      </div>`,

  `<div class="mgi__latest-news__cards__card">
          <img src="blogImages/t2.jpg" />
          <div class="mgi__latest-news__cards__card__content">
          <p class="mgi__latest-news__cards__card__content__title">
              Make your website more fast
          </p>
          <p
              class="mgi__latest-news__cards__card__content__date-created"
          >
              Aug 12th, 2016
          </p>
          </div>
      </div>`,
];

// Array of latest news cards (can be appended to DOM elements)
let latestNewsPageCards = [];

// Populate array of latest news cards
latestNewsPageCardsStrings.forEach((latestNewsCardsString) => {
  latestNewsPageCards.push(createElementFromHTML(latestNewsCardsString));
});

// Array of cards that are in a queue
let latestNewsPageCardsQueue = [latestNewsPageCards[3], latestNewsPageCards[4]];

// Array of cards that are being shown
let latestNewsPageCardsShowing = [
  latestNewsPageCards[0],
  latestNewsPageCards[1],
  latestNewsPageCards[2],
];

// The function to go to next page
function gotoNextPageLatestNewsCardsUpdated() {
  // Get the latest news cards element
  var latestNewsCardsElement = document.getElementsByClassName(
    "mgi__latest-news__cards"
  )[0];

  r.style.setProperty("--latest-news-page-cursor", "-391px");

  // Pop the first element in latest news pages cards queue array
  var poppedFirstElementFromCardsQueueArray = latestNewsPageCardsQueue[0];
  latestNewsPageCardsQueue.shift();

  // Push the popped first element from latest news pages cards queue array
  // into latest news page cards showing
  latestNewsPageCardsShowing.push(poppedFirstElementFromCardsQueueArray);

  // Reupdate list of cards to be shown so that it will be ready for transition
  reupdateListOfCards();

  // Animate
  latestNewsCardsElement.classList.add("animate-slide-latest-news-carousel");

  // The animation will run for 200ms. Hence, we will wait until it ends to reupdate
  // list of cards
  setTimeout(() => {
    // Remove the animation
    latestNewsCardsElement.classList.remove(
      "animate-slide-latest-news-carousel"
    );

    // Pop the first element in latest news pages cards showing array
    var poppedFirstElementFromCardsShowingArray = latestNewsPageCardsShowing[0];
    latestNewsPageCardsShowing.shift();

    // Push the popped first element from latest news pages cards showing array
    // into latest news page cards queue
    latestNewsPageCardsQueue.push(poppedFirstElementFromCardsShowingArray);

    // Reupdate list of cards
    reupdateListOfCards();
  }, 200);
}

// The function to go to previous page
function gotoPreviousPageLatestNewsCardsUpdated() {
  // Get the latest news cards element
  var latestNewsCardsElement = document.getElementsByClassName(
    "mgi__latest-news__cards"
  )[0];

  r.style.setProperty("--latest-news-page-cursor", "-391px");

  // Pop the last element in latest news pages cards queue array
  var poppedLastElementFromCardsQueueArray = latestNewsPageCardsQueue.pop();

  // Push the popped last element from latest news pages cards queue array
  // into latest news page cards showing
  latestNewsPageCardsShowing.splice(0, 0, poppedLastElementFromCardsQueueArray);

  // Reupdate list of cards to be shown so that it is ready for transition
  reupdateListOfCards();

  // Animate
  latestNewsCardsElement.classList.add(
    "animate-slide-right-to-left-news-carousel"
  );

  // The animation will run for 200ms. Hence, we will wait until it ends
  // before reupdatting list of cards
  setTimeout(() => {
    // Remove the animation
    latestNewsCardsElement.classList.remove(
      "animate-slide-right-to-left-news-carousel"
    );

    // Pop the last element in latest news pages cards showing array
    var poppedLastElementFromCardsShowingArray = latestNewsPageCardsShowing.pop();

    // Push the popped first element from latest news pages showing array
    // into latest news page cards queue
    latestNewsPageCardsQueue.splice(
      0,
      0,
      poppedLastElementFromCardsShowingArray
    );

    // Reupdate list of cards
    reupdateListOfCards();
  }, 1000);
}

// The function to reupdate list of cards
function reupdateListOfCards() {
  // Get the latest news cards element
  var latestNewsCardsElement = document.getElementsByClassName(
    "mgi__latest-news__cards"
  )[0];

  latestNewsCardsElement.innerHTML = "";

  // Add all cards that will be shown to the list
  latestNewsPageCardsShowing.forEach((card) => {
    latestNewsCardsElement.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  reupdateListOfCards();
});

// The function to create HTML element from HTML string
function createElementFromHTML(htmlString) {
  var div = document.createElement("div");
  div.innerHTML = htmlString.trim();

  // Change this to div.childNodes to support multiple top-level nodes
  return div.firstChild;
}
