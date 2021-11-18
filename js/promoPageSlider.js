import * as sliderUtils from "./sliderUtils.js";

// Get the root CSS element
var r = document.querySelector(":root");

// This is to keep track of current width of the promo page card
var promoPageCardCurrentWidth = 0;

// This is to keep track of current page number that is being shown
var currentShowingPageNumber = 1;

// Array of promo page cards strings
const promoPageCardsStrings = [
  `<div class="mgi__promo__promo-pages__promo-page">
    <p class="mgi__promo-title">WE ARE CREATIVE</p>
    <p class="mgi__promo-text">
      We believe in Simple, Creative & Flexible Design Standards.
      Unlimited features, elements and fast and friendly support
      gives ultimate website to boom your business.
    </p>
    <button class="mgi__button">LEARN MORE</button>
  </div>`,

  `<div class="mgi__promo__promo-pages__promo-page">
  <p class="mgi__promo-title">WE ARE SIMPLE</p>
  <p class="mgi__promo-text">
    We believe in Simple, Creative & Flexible Design Standards.
    Unlimited features, elements and fast and friendly support
    gives ultimate website to boom your business.
  </p>
  <button class="mgi__button">LEARN MORE</button>
</div>`,

  `<div class="mgi__promo__promo-pages__promo-page">
<p class="mgi__promo-title">WE ARE POWERFUL</p>
<p class="mgi__promo-text">
  We believe in Simple, Creative & Flexible Design Standards.
  Unlimited features, elements and fast and friendly support
  gives ultimate website to boom your business.
</p>
<button class="mgi__button">LEARN MORE</button>
</div>`,
];

// Array of promo page cards (can be appended to DOM elements)
let promoPageCards = [];

// Populate array of promo page cards
promoPageCardsStrings.forEach((promoPageCardsString) => {
  promoPageCards.push(sliderUtils.createElementFromHTML(promoPageCardsString));
});

// Array of cards that are in a queue
let promoPageCardsQueue = [promoPageCards[1], promoPageCards[2]];

// Array of cards that are being shown
let promoPageCardsShowing = [promoPageCards[0]];

// The function to go to next page
function gotoNextPagePromoPageCardsUpdated() {
  if (currentShowingPageNumber == promoPageCards.length) {
    currentShowingPageNumber = 1;
  }

  // Get the promo pages cards element
  var promoPagesCardsElement = document.getElementsByClassName(
    "mgi__promo__promo-pages"
  )[0];

  sliderUtils.gotoNextPage(
    promoPagesCardsElement,
    "--promo-page-cursor",
    promoPageCardCurrentWidth,
    promoPageCardsShowing,
    promoPageCardsQueue,
    "animate-slide-promo-page-carousel"
  );
}

// The function to go to previous page
function gotoPreviousPagePromoPageCardsUpdated() {
  if (currentShowingPageNumber == 1) {
    currentShowingPageNumber = promoPageCards.length;
  }

  // Get the promo pages cards element
  var promoPagesCardsElement = document.getElementsByClassName(
    "mgi__promo__promo-pages"
  )[0];

  sliderUtils.gotoPreviousPage(
    promoPagesCardsElement,
    "--promo-page-cursor",
    promoPageCardCurrentWidth,
    promoPageCardsShowing,
    promoPageCardsQueue,
    "animate-slide-left-to-right-promo-page-carousel"
  );
}

// The function to reupdate card layout
function reupdateCardLayout() {
  r.style.setProperty("--promo-page-cursor", `-${promoPageCardCurrentWidth}px`);
  r.style.setProperty("--promo-page-margin", "0px");
}

// The function to reupdate list of cards
function reupdateListOfCards() {
  // Get the promo page cards element
  var promoPageCardsElement = document.getElementsByClassName(
    "mgi__promo__promo-pages"
  )[0];

  // Clear current child
  promoPageCardsElement.innerHTML = "";

  // Add all cards that will be shown to the list
  promoPageCardsShowing.forEach((card) => {
    promoPageCardsElement.append(card);
  });
}

// The function to do initial set up
function promoPageInitialSetUp() {
  var promoPagingButtonsArea = document.getElementById(
    "promo-paging-buttons-area"
  );

  for (let i = 0; i < promoPageCards.length; i++) {
    promoPagingButtonsArea.appendChild(
      sliderUtils.createElementFromHTML(`
        <div
          class="mgi__promo__paging-buttons__paging-button__area"
          id="promo-paging-button-${i + 1}"
        >
          <button
            id="paging-page-${i + 1}-button-inner"
            class="mgi__promo__paging-buttons__paging-button__area__button"
          ></button>
        </div>
      `)
    );

    document.getElementById(
      `paging-page-${i + 1}-button-inner`
    ).onclick = () => {
      gotoSpecifiedPage(i + 1);
    };
  }

  // The promo pages area will only show 1 page at a time
  updateShowingAndQueueArray(1);

  // Call the function to update list of cards in HTML
  reupdateListOfCards();

  // Call the function to adjust cards width accordingly
  adjustScreenSize();
}

// The function to take user to a specified page
function gotoSpecifiedPage(destinationPage) {
  // Get the page difference
  var pageDifference = destinationPage - currentShowingPageNumber;

  // Step
  let step;

  for (let i = 0; i < promoPageCards.length; i++) {
    document.getElementById(`promo-paging-button-${i + 1}`).style.borderColor =
      "transparent";
  }

  console.log(currentShowingPageNumber);

  // If current page number is less than destination page number, user is
  // going to next page
  if (pageDifference > 0) {
    // Step
    step = pageDifference;

    for (let i = 0; i < step; i++) {
      setTimeout(() => {
        gotoNextPagePromoPageCardsUpdated();
      }, 200);
    }

    currentShowingPageNumber = currentShowingPageNumber + step;

    document.getElementById(
      `promo-paging-button-${currentShowingPageNumber}`
    ).style.borderColor = "white";
  } else if (pageDifference < 0) {
    // Step
    step = -pageDifference;

    for (let i = 0; i < step; i++) {
      setTimeout(() => {
        gotoPreviousPagePromoPageCardsUpdated();
      }, 200);
    }

    currentShowingPageNumber = currentShowingPageNumber - step;

    document.getElementById(
      `promo-paging-button-${currentShowingPageNumber}`
    ).style.borderColor = "white";
  }
}

// The function to adjust card's width accordingly
function adjustScreenSize() {
  // Get the promo page card element
  var promoPageCardElement = document.getElementsByClassName(
    "mgi__promo__promo-pages__promo-page"
  )[0];

  // Get current width of the promo page card
  promoPageCardCurrentWidth = promoPageCardElement.clientWidth;

  // Call the function to reupdate card layout
  reupdateCardLayout();
}

// The function to update queue array and showing array
function updateShowingAndQueueArray(numberOfShowingElements) {
  const showingCardsAndQueueCards = sliderUtils.adjustShowingAndQueueArray(
    numberOfShowingElements,
    promoPageCards
  );

  promoPageCardsShowing = showingCardsAndQueueCards.showingArray;
  promoPageCardsQueue = showingCardsAndQueueCards.queueArray;
}

export {
  gotoPreviousPagePromoPageCardsUpdated,
  gotoNextPagePromoPageCardsUpdated,
  promoPageInitialSetUp,
};
