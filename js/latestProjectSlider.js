import * as sliderUtils from "./sliderUtils.js";

// Get the root CSS element
var r = document.querySelector(":root");

// This is to keep track of current width of the latest project card
var latestProjectCardCurrentWidth = 0;

// Array of latest project cards strings
const latestProjectCardsStrings = [
  `<div class="mgi__latest-project-card">
    <img
      class="mgi__latest-project-card__image"
      src="images/latest-project-1.jpeg"
    />
    <h3>Wifi Creator</h3>
    <p class="mgi__latest-project-card-text">Branding</p>
  </div>`,

  `<div class="mgi__latest-project-card">
  <img
    class="mgi__latest-project-card__image"
    src="images/latest-project-2.jpeg"
  />
  <h3>Ohio Shopper</h3>
  <p class="mgi__latest-project-card-text">Photographer</p>
</div>`,

  `<div class="mgi__latest-project-card">
<img
  class="mgi__latest-project-card__image"
  src="images/latest-project-3.jpeg"
/>
<h3>Expert Book Seller</h3>
<p class="mgi__latest-project-card-text">Branding</p>
</div>`,

  `<div class="mgi__latest-project-card">
<img
  class="mgi__latest-project-card__image"
  src="images/latest-project-4.jpeg"
/>
<h3>Limtop Creation</h3>
<p class="mgi__latest-project-card-text">Art</p>
</div>`,

  `<div class="mgi__latest-project-card">
<img
  class="mgi__latest-project-card__image"
  src="images/latest-project-5.jpg"
/>
<h3>Orion Studio</h3>
<p class="mgi__latest-project-card-text">Web Design</p>
</div>`,
];

// Array of latest project cards (can be appended to DOM elements)
let latestProjectCards = [];

// Populate array of latest project cards
latestProjectCardsStrings.forEach((latestProjectCardsString) => {
  latestProjectCards.push(createElementFromHTML(latestProjectCardsString));
});

// Array of cards that are in a queue
let latestProjectCardsQueue = [];

// Array of cards that are being shown
let latestProjectCardsShowing = [];

// The function to go to next page
function gotoNextPageLatestProjectCardsUpdated() {
  // Get the latest project cards element
  var latestProjectCardsElement = document.getElementsByClassName(
    "mgi__latest-project-cards"
  )[0];

  sliderUtils.gotoNextPage(
    latestProjectCardsElement,
    "--latest-project-page-cursor",
    latestProjectCardCurrentWidth,
    latestProjectCardsShowing,
    latestProjectCardsQueue,
    "animate-slide-latest-project-carousel"
  );
}

// The function to go to previous page
function gotoPreviousPageLatestProjectCardsUpdated() {
  // Get the latest project cards element
  var latestProjectCardsElement = document.getElementsByClassName(
    "mgi__latest-project-cards"
  )[0];

  sliderUtils.gotoPreviousPage(
    latestProjectCardsElement,
    "--latest-project-page-cursor",
    latestProjectCardCurrentWidth,
    latestProjectCardsShowing,
    latestProjectCardsQueue,
    "animate-slide-left-to-right-latest-project-carousel"
  );
}

// The function to reupdate card layout
function reupdateCardLayout() {
  r.style.setProperty(
    "--latest-project-page-cursor",
    `-${latestProjectCardCurrentWidth}px`
  );
  r.style.setProperty("--latest-project-page-margin", "0px");
}

// The function to reupdate list of cards
function reupdateListOfCards() {
  // Get the latest project cards element
  var latestProjectCardsElement = document.getElementsByClassName(
    "mgi__latest-project-cards"
  )[0];

  // Clear current child
  latestProjectCardsElement.innerHTML = "";

  // Add all cards that will be shown to the list
  latestProjectCardsShowing.forEach((card) => {
    latestProjectCardsElement.append(card);
  });
}

// The function to do initial set up
function latestProjectSliderInitialSetUp() {
  updateShowingAndQueueArray(4);

  // Call the function to update list of cards in HTML
  reupdateListOfCards();

  // Call the function to adjust cards width accordingly
  adjustScreenSize();
}

// The function to adjust card's width accordingly
function adjustScreenSize() {
  // Update the number of latest project cards per page
  var numberOfLatestProjectCardsPerPage = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--number-of-latest-project-cards-per-page");

  // Get the latest project card element
  var latestProjectCardElement = document.getElementsByClassName(
    "mgi__latest-project-card"
  )[0];

  // Get current width of the latest project card
  latestProjectCardCurrentWidth = latestProjectCardElement.clientWidth;

  // Adjust number of cards per page
  if (Number.isInteger(numberOfLatestProjectCardsPerPage)) {
    updateShowingAndQueueArray(numberOfLatestProjectCardsPerPage);
  }

  // Call the function to reupdate card layout
  reupdateCardLayout();
}

// The function to create HTML element from HTML string
function createElementFromHTML(htmlString) {
  var div = document.createElement("div");
  div.innerHTML = htmlString.trim();

  // Change this to div.childNodes to support multiple top-level nodes
  return div.firstChild;
}

// The function to update queue array and showing array
function updateShowingAndQueueArray(numberOfShowingElements) {
  const showingCardsAndQueueCards = sliderUtils.adjustShowingAndQueueArray(
    numberOfShowingElements,
    latestProjectCards
  );

  latestProjectCardsShowing = showingCardsAndQueueCards.showingArray;
  latestProjectCardsQueue = showingCardsAndQueueCards.queueArray;
}

export {
  gotoNextPageLatestProjectCardsUpdated,
  gotoPreviousPageLatestProjectCardsUpdated,
  latestProjectSliderInitialSetUp,
};
