import * as sliderUtils from "./sliderUtils.js";

// Get the root CSS element
var r = document.querySelector(":root");

// This is to keep track of current width of the client feedback card
var clientFeedbackCardCurrentWidth = 0;

// Array of client feedback cards strings
const clientFeedbackCardsStrings = [
  `<div class="mgi__client-feedback-cards__client-feedback-card">
    <img
      class="mgi__client-feedback-cards__client-feedback-card__quote-icon"
      src="icons/quote-icon.png"
    />
    <div
      class="mgi__client-feedback-cards__client-feedback-card__content"
    >
      <p
        class="mgi__client-feedback-cards__client-feedback-card__content__feedback-content"
      >
        Duis aute irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur
      </p>

      <p
        class="mgi__client-feedback-cards__client-feedback-card__content__client-bio"
      >
        Djokovic
      </p>

      <p
        class="mgi__client-feedback-cards__client-feedback-card__content__client-org"
      >
        Amazon
      </p>
    </div>
  </div>`,

  `<div class="mgi__client-feedback-cards__client-feedback-card">
  <img
    class="mgi__client-feedback-cards__client-feedback-card__quote-icon"
    src="icons/quote-icon.png"
  />
  <div
    class="mgi__client-feedback-cards__client-feedback-card__content"
  >
    <p
      class="mgi__client-feedback-cards__client-feedback-card__content__feedback-content"
    >
      Duis aute irure dolor in reprehenderit in voluptate velit
      esse cillum dolore eu fugiat nulla pariatur
    </p>

    <p
      class="mgi__client-feedback-cards__client-feedback-card__content__client-bio"
    >
      Federer
    </p>

    <p
      class="mgi__client-feedback-cards__client-feedback-card__content__client-org"
    >
      Microsoft
    </p>
  </div>
</div>`,

  `<div class="mgi__client-feedback-cards__client-feedback-card">
<img
  class="mgi__client-feedback-cards__client-feedback-card__quote-icon"
  src="icons/quote-icon.png"
/>
<div
  class="mgi__client-feedback-cards__client-feedback-card__content"
>
  <p
    class="mgi__client-feedback-cards__client-feedback-card__content__feedback-content"
  >
    Duis aute irure dolor in reprehenderit in voluptate velit
    esse cillum dolore eu fugiat nulla pariatur
  </p>

  <p
    class="mgi__client-feedback-cards__client-feedback-card__content__client-bio"
  >
    Nadal
  </p>

  <p
    class="mgi__client-feedback-cards__client-feedback-card__content__client-org"
  >
    Airbus
  </p>
</div>
</div>`,

  `<div class="mgi__client-feedback-cards__client-feedback-card">
<img
  class="mgi__client-feedback-cards__client-feedback-card__quote-icon"
  src="icons/quote-icon.png"
/>
<div
  class="mgi__client-feedback-cards__client-feedback-card__content"
>
  <p
    class="mgi__client-feedback-cards__client-feedback-card__content__feedback-content"
  >
    Duis aute irure dolor in reprehenderit in voluptate velit
    esse cillum dolore eu fugiat nulla pariatur
  </p>

  <p
    class="mgi__client-feedback-cards__client-feedback-card__content__client-bio"
  >
    Auger Aliassime
  </p>

  <p
    class="mgi__client-feedback-cards__client-feedback-card__content__client-org"
  >
    Boeing
  </p>
</div>
</div>`,

  `<div class="mgi__client-feedback-cards__client-feedback-card">
<img
  class="mgi__client-feedback-cards__client-feedback-card__quote-icon"
  src="icons/quote-icon.png"
/>
<div
  class="mgi__client-feedback-cards__client-feedback-card__content"
>
  <p
    class="mgi__client-feedback-cards__client-feedback-card__content__feedback-content"
  >
    Duis aute irure dolor in reprehenderit in voluptate velit
    esse cillum dolore eu fugiat nulla pariatur
  </p>

  <p
    class="mgi__client-feedback-cards__client-feedback-card__content__client-bio"
  >
    Shapovalov
  </p>

  <p
    class="mgi__client-feedback-cards__client-feedback-card__content__client-org"
  >
    Delta
  </p>
</div>
</div>`,
];

// Array of client feedback cards (can be appended to DOM elements)
let clientFeedbackCards = [];

// Populate array of client feedback cards
clientFeedbackCardsStrings.forEach((clientFeedbackCardsString) => {
  clientFeedbackCards.push(createElementFromHTML(clientFeedbackCardsString));
});

// Array of cards that are in a queue
let clientFeedbackCardsQueue = [clientFeedbackCards[3], clientFeedbackCards[4]];

// Array of cards that are being shown
let clientFeedbackCardsShowing = [
  clientFeedbackCards[0],
  clientFeedbackCards[1],
  clientFeedbackCards[2],
];

// The function to go to next page
function gotoNextPageClientFeedbackCardsUpdated() {
  // Get the client feedback cards element
  var clientFeedbackCardsElement = document.getElementsByClassName(
    "mgi__client-feedback-cards"
  )[0];

  console.log(clientFeedbackCardCurrentWidth);

  sliderUtils.gotoNextPage(
    clientFeedbackCardsElement,
    "--client-feedback-page-cursor",
    clientFeedbackCardCurrentWidth,
    clientFeedbackCardsShowing,
    clientFeedbackCardsQueue,
    "animate-slide-client-feedback-carousel"
  );
}

// The function to go to previous page
function gotoPreviousPageClientFeedbackCardsUpdated() {
  // Get the client feedback cards element
  var clientFeedbackCardsElement = document.getElementsByClassName(
    "mgi__client-feedback-cards"
  )[0];

  sliderUtils.gotoPreviousPage(
    clientFeedbackCardsElement,
    "--client-feedback-page-cursor",
    clientFeedbackCardCurrentWidth,
    clientFeedbackCardsShowing,
    clientFeedbackCardsQueue,
    "animate-slide-left-to-right-client-feedback-carousel"
  );
}

// The function to create HTML element from HTML string
function createElementFromHTML(htmlString) {
  var div = document.createElement("div");
  div.innerHTML = htmlString.trim();

  // Change this to div.childNodes to support multiple top-level nodes
  return div.firstChild;
}

// The function to do initial set up for client feedback slider
function clientFeedbackSliderInitialSetUp() {
  // Call the function to update list of cards in HTML
  reupdateListOfCards();

  // Call the function to adjust card's width accordingly
  adjustScreenSize();
}

// The function to reupdate list of cards
function reupdateListOfCards() {
  // Get the client feedback cards element
  var clientFeedbackCardsElement = document.getElementsByClassName(
    "mgi__client-feedback-cards"
  )[0];

  // Clear current child
  clientFeedbackCardsElement.innerHTML = "";

  // Add all cards that will be shown to the list
  clientFeedbackCardsShowing.forEach((card) => {
    clientFeedbackCardsElement.appendChild(card);
  });
}

// The function to update card layout
function reupdateCardLayout() {
  r.style.setProperty(
    "--client-feedback-page-cursor",
    `-${clientFeedbackCardCurrentWidth}px`
  );
  r.style.setProperty("--client-feedback-page-margin", "0px");

  // Reupdate list of cards to be shown so that it is ready for transitionn
  reupdateListOfCards();
}

// The function to update width of cards accordingly
function adjustScreenSize() {
  // Update number of client feedback cards per page
  var numberOfClientFeedbackCardsPerPage = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--number-of-feedback-cards-per-page");

  // Get the client feedback card element
  var clientFeedbackCardElement = document.getElementsByClassName(
    "mgi__client-feedback-cards__client-feedback-card"
  )[0];

  // Get current width of the client feedback card
  clientFeedbackCardCurrentWidth = clientFeedbackCardElement.clientWidth;

  // Adjust number of cards per page
  if (numberOfClientFeedbackCardsPerPage == 3) {
    clientFeedbackCardsQueue = [clientFeedbackCards[3], clientFeedbackCards[4]];

    clientFeedbackCardsShowing = [
      clientFeedbackCards[0],
      clientFeedbackCards[1],
      clientFeedbackCards[2],
    ];
  } else if (numberOfClientFeedbackCardsPerPage == 2) {
    clientFeedbackCardsQueue = [
      clientFeedbackCards[2],
      clientFeedbackCards[3],
      clientFeedbackCards[4],
    ];

    clientFeedbackCardsShowing = [
      clientFeedbackCards[0],
      clientFeedbackCards[1],
    ];
  } else if (numberOfClientFeedbackCardsPerPage == 1) {
    clientFeedbackCardsQueue = [
      clientFeedbackCards[1],
      clientFeedbackCards[2],
      clientFeedbackCards[3],
      clientFeedbackCards[4],
    ];

    clientFeedbackCardsShowing = [clientFeedbackCards[0]];
  }

  // Call the function to reupdate card layout
  reupdateCardLayout();
}

export {
  gotoNextPageClientFeedbackCardsUpdated,
  gotoPreviousPageClientFeedbackCardsUpdated,
  clientFeedbackSliderInitialSetUp,
};
