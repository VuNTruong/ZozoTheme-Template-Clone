import * as sliderUtils from "./sliderUtils.js";

// Get the root CSS element
var r = document.querySelector(":root");

// This is to keep track of current width of the latest news card
var latestNewsCardCurrentWidth = 0;

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

let latestNewsPageCardsQueue = [];
let latestNewsPageCardsShowing = [];

// The function to go to next page
function gotoNextPageLatestNewsCardsUpdated() {
  // Get the latest news cards element
  var latestNewsCardsElement = document.getElementsByClassName(
    "mgi__latest-news__cards"
  )[0];

  sliderUtils.gotoNextPage(
    latestNewsCardsElement,
    "--latest-news-page-cursor",
    latestNewsCardCurrentWidth,
    latestNewsPageCardsShowing,
    latestNewsPageCardsQueue,
    "animate-slide-latest-news-carousel"
  );
}

// The function to go to previous page
function gotoPreviousPageLatestNewsCardsUpdated() {
  // Get the latest news cards element
  var latestNewsCardsElement = document.getElementsByClassName(
    "mgi__latest-news__cards"
  )[0];

  sliderUtils.gotoPreviousPage(
    latestNewsCardsElement,
    "--latest-news-page-cursor",
    latestNewsCardCurrentWidth,
    latestNewsPageCardsShowing,
    latestNewsPageCardsQueue,
    "animate-slide-left-to-right-news-carousel"
  );
}

// The function to reupdate card layout
function reupdateCardLayout() {
  r.style.setProperty(
    "--latest-news-page-cursor",
    `-${latestNewsCardCurrentWidth}px`
  );
  r.style.setProperty("--latest-news-page-margin", "0px");
}

// The function to reupdate list of cards
function reupdateListOfCards() {
  // Get the latest news cards element
  var latestNewsCardsElement = document.getElementsByClassName(
    "mgi__latest-news__cards"
  )[0];

  // Clear current child
  latestNewsCardsElement.innerHTML = "";

  // Add all cards that will be shown to the list
  latestNewsPageCardsShowing.forEach((card) => {
    latestNewsCardsElement.appendChild(card);
  });
}

// The function to do initial set up
function latestNewsSliderInitialSetup() {
  updateShowingAndQueueArray(3);

  // Call the function to update list of cards in HTML
  reupdateListOfCards();

  // Call the function to adjust card's width accordingly
  adjustScreenSize();
}

// The function to create HTML element from HTML string
function createElementFromHTML(htmlString) {
  var div = document.createElement("div");
  div.innerHTML = htmlString.trim();

  // Change this to div.childNodes to support multiple top-level nodes
  return div.firstChild;
}

// Add a listener for when the window resizes
window.addEventListener("resize", adjustScreenSize);

// The function to adjust card's width accordingly
function adjustScreenSize() {
  // Update the number of latest news cards per page
  var numberOfLatestNewsCardsPerPage = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--number-of-latest-news-cards-per-page");

  // Get the latest news card element
  var latestNewsCardElement = document.getElementsByClassName(
    "mgi__latest-news__cards__card"
  )[0];

  // Get current width of the latest news card
  latestNewsCardCurrentWidth = latestNewsCardElement.clientWidth;

  // Adjust number of cards per page
  if (Number.isInteger(numberOfLatestNewsCardsPerPage)) {
    updateShowingAndQueueArray(numberOfLatestNewsCardsPerPage);
  }

  // Call the function to reupdate card layout
  reupdateCardLayout();
}

// The function to update queue array and showing array
function updateShowingAndQueueArray(numberOfShowingElements) {
  const showingCardsAndQueueCards = sliderUtils.adjustShowingAndQueueArray(
    numberOfShowingElements,
    latestNewsPageCards
  );

  latestNewsPageCardsShowing = showingCardsAndQueueCards.showingArray;
  latestNewsPageCardsQueue = showingCardsAndQueueCards.queueArray;
}

export {
  gotoNextPageLatestNewsCardsUpdated,
  gotoPreviousPageLatestNewsCardsUpdated,
  latestNewsSliderInitialSetup,
};
