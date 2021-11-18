import * as sliderUtils from "./sliderUtils.js";

// Get the root CSS element
var r = document.querySelector(":root");

// This is to keep track of current width of client logo card
var clientLogoCardCurrentWidth = 0;

// Array of client logo cards strings
const clientLogoCardsStrings = [
  `<img
        class="mgi__client-logo-cards__client-logo-card"
        src="clientLogos/1.png"
    />`,
  `<img
        class="mgi__client-logo-cards__client-logo-card"
        src="clientLogos/2.png"
    />`,
  `<img
        class="mgi__client-logo-cards__client-logo-card"
        src="clientLogos/3.png"
    />`,
  `<img
        class="mgi__client-logo-cards__client-logo-card"
        src="clientLogos/4.png"
    />`,
  `<img
        class="mgi__client-logo-cards__client-logo-card"
        src="clientLogos/5.png"
    />`,
  `<img
        class="mgi__client-logo-cards__client-logo-card"
        src="clientLogos/6.png"
    />`,
  `<img
        class="mgi__client-logo-cards__client-logo-card"
        src="clientLogos/7.png"
    />`,
  `<img
        class="mgi__client-logo-cards__client-logo-card"
        src="clientLogos/8.png"
    />`,
  `<img
        class="mgi__client-logo-cards__client-logo-card"
        src="clientLogos/9.png"
    />`,
  `<img
        class="mgi__client-logo-cards__client-logo-card"
        src="clientLogos/10.png"
    />`,
];

// Array of client logo cards (can be appended to DOM elements)
let clientLogosCards = [];

//Populate array of client logo cards
clientLogoCardsStrings.forEach((clientLogoCardsString) => {
  clientLogosCards.push(createElementFromHTML(clientLogoCardsString));
});

// Array of cards that are in a queue
let clientLogoCardsQueue = [];

// Array of cards that are being shown
let clientLogoCardsShowing = [];

// The function to go to next page
function gotoNextPageClientLogoCardsUpdated() {
  // Get the client logo cards element
  var clientLogoCardsElement = document.getElementsByClassName(
    "mgi__client-logo-cards"
  )[0];

  sliderUtils.gotoNextPage(
    clientLogoCardsElement,
    "--client-logo-page-cursor",
    clientLogoCardCurrentWidth,
    clientLogoCardsShowing,
    clientLogoCardsQueue,
    "animate-slide-client-logo-carousel"
  );
}

// The function to go to previous page
function gotoPreviousPageClientLogoCardsUpdated() {
  // Get the client logo cards element
  var clientLogoCardsElement = document.getElementsByClassName(
    "mgi__client-logo-cards"
  )[0];

  sliderUtils.gotoPreviousPage(
    clientLogoCardsElement,
    "--client-logo-page-cursor",
    clientLogoCardCurrentWidth,
    clientLogoCardsShowing,
    clientLogoCardsQueue,
    "animate-slide-left-to-right-client-logo-carousel"
  );
}

// The function to do initial set up for client logo slider
function clientLogoSliderInitialSetUp() {
  updateShowingAndQueueArray(7);

  // Call the function to update list of cards in HTML
  reupdateListOfCards();

  // Call the function to adjust card's width accordingly
  adjustScreenSize();
}

// The function to reupdate card layout
function reupdateListOfCards() {
  // Get client logo cards element
  var clientLogoCardsElement = document.getElementsByClassName(
    "mgi__client-logo-cards"
  )[0];

  // Clear current child
  clientLogoCardsElement.innerHTML = "";

  // Add all cards that will be shown to the list
  clientLogoCardsShowing.forEach((card) => {
    clientLogoCardsElement.appendChild(card);
  });
}

// The function to reupdate card layout
function reupdateCardLayout() {
  r.style.setProperty(
    "--client-logo-page-cursor",
    `-${clientLogoCardCurrentWidth}px`
  );
  r.style.setProperty("--client-logo-page-margin", "0px");

  // Reupdate list of cards to be shown so that it is ready for transition
  reupdateListOfCards();
}

// Add a listener for when the window resizes
window.addEventListener("resize", adjustScreenSize);

// The function to adjust card's width accordingly
function adjustScreenSize() {
  // Update the number of client logo cards per page
  var numberOfClientLogoCardsPerPage = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--number-of-client-logos-cards-per-page");

  // Get the client logo card element
  var clientLogoCardElement = document.getElementsByClassName(
    "mgi__client-logo-cards__client-logo-card"
  )[0];

  // Get current width of the client logo card
  clientLogoCardCurrentWidth = clientLogoCardElement.clientWidth;

  // Adjust number of cards per page
  if (Number.isInteger(numberOfClientLogoCardsPerPage)) {
    updateShowingAndQueueArray(numberOfClientLogoCardsPerPage);
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
    clientLogosCards
  );

  clientLogoCardsShowing = showingCardsAndQueueCards.showingArray;
  clientLogoCardsQueue = showingCardsAndQueueCards.queueArray;
}

export {
  gotoNextPageClientLogoCardsUpdated,
  gotoPreviousPageClientLogoCardsUpdated,
  clientLogoSliderInitialSetUp,
};
