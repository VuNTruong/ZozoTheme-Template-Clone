// This is to keep track of current page in promo pages
var currentPagePromoPages = 1;

// This is to keep track of current page in latest project pages
var currentPageLatestProjectPages = 1;

// This is to keep track of current page in client feedback pages
var currentPageClientFeedbackPages = 1;

// This is to keep track of current width of the latest project card
var latestProjectCardCurrentWidth = 0;

// This is to keep track of current width of the client feedback card
var clientFeedbackCardCurrentWidth = 0;

// Get the root CSS element
var r = document.querySelector(":root");

// The function to navigate user in promo pages
function gotoPagePromoPage(pageNumber) {
  // Update current page
  currentPagePromoPages = pageNumber;

  // Update cursor
  r.style.setProperty(
    "--promo-page-cursor",
    `-${screen.width * (pageNumber - 1)}px`
  );
}

//******************** Latest project pages *********************/
// The function to bring user to previous page in latest project pages
function goBackPageLatestProjectPage() {
  // Update current page
  currentPageLatestProjectPages = currentPageLatestProjectPages - 1;

  // Update cursor
  r.style.setProperty(
    "--latest-project-page-cursor",
    `-${
      (latestProjectCardCurrentWidth + 10) * (currentPageLatestProjectPages - 1)
    }px`
  );
}

// The function to bring user to next page in latest project pages
function goForwardPageLatestProjectPage() {
  // Update current page
  currentPageLatestProjectPages = currentPageLatestProjectPages + 1;

  // Update cursor
  r.style.setProperty(
    "--latest-project-page-cursor",
    `-${
      (latestProjectCardCurrentWidth + 10) * (currentPageLatestProjectPages - 1)
    }px`
  );
}
//******************** Latest project pages *********************/

//******************** Client feedback pages *********************/
// The function to bring user to previous page in client feedback pages
function goBackPageClientFeedbackPages() {
  // Update current page
  currentPageClientFeedbackPages = currentPageClientFeedbackPages - 1;

  // Update cursor
  r.style.setProperty(
    "--client-feedback-page-cursor",
    `-${
      (clientFeedbackCardCurrentWidth + 20) *
      (currentPageClientFeedbackPages - 1)
    }px`
  );

  console.log(
    (clientFeedbackCardCurrentWidth + 20) * (currentPageClientFeedbackPages - 1)
  );
}

// The function to bring user to next page in client feedback pages
function goForwardPageClientFeedbackPages() {
  // Update current page
  currentPageClientFeedbackPages = currentPageClientFeedbackPages + 1;

  // Update cursor
  r.style.setProperty(
    "--client-feedback-page-cursor",
    `-${
      (clientFeedbackCardCurrentWidth + 20) *
      (currentPageClientFeedbackPages - 1)
    }px`
  );
}
//******************** Client feedback pages *********************/

// The function to handle event of when body is scrolled
function scrollHandler() {
  // Reference the sticky header menu bar
  var stickyHeaderMenuBar = document.getElementById("sticky-header-menu-bar");

  if (document.body.scrollTop > 81 || document.documentElement.scrollTop > 81) {
    // Animate the menu down
    stickyHeaderMenuBar.classList.add("animate-down");

    // Show sticky header menu bar
    r.style.setProperty("--sticky-header-menu-display", "block");
  } else {
    // Hide sticky header menu bar
    r.style.setProperty("--sticky-header-menu-display", "none");
  }
}

// The function to get width of screen
function getScreenWidth() {
  // Update page width for promo pages container
  r.style.setProperty("--promo-page-width", `${window.innerWidth}px`);

  // Get the latest project card element
  var latestProjectCardElement = document.getElementsByClassName(
    "latest-project-card"
  )[0];

  // Get the client feedback card element
  var clientFeedbackCardElement = document.getElementsByClassName(
    "client-feedback-cards__client-feedback-card"
  )[0];

  console.log(clientFeedbackCardElement.clientWidth);

  // Update current width of the latest project card in JS
  latestProjectCardCurrentWidth = latestProjectCardElement.clientWidth;

  // Update current width of the client feedback card in JS
  clientFeedbackCardCurrentWidth = clientFeedbackCardElement.clientWidth;
}

// Add a listener for when the window resizes
window.addEventListener("resize", getScreenWidth);

window.onload = () => {
  getScreenWidth();

  // Reference the scroll area
  var promoScrollArea = this.document.getElementsByClassName(
    "promo__scroll-area"
  )[0];

  // Add event listener to the scroll area so that it will know when user scrolls
  promoScrollArea.addEventListener("touchstart", handleTouchStart, false);
  promoScrollArea.addEventListener("touchmove", handleTouchMove, false);
};

//*********** Handle swipe event ***********/
var xDown = null;
var yDown = null;

function getTouches(evt) {
  return (
    evt.touches || evt.originalEvent.touches // browser API
  ); // jQuery
}

function handleTouchStart(evt) {
  const firstTouch = getTouches(evt)[0];
  xDown = firstTouch.clientX;
  yDown = firstTouch.clientY;
}

function handleTouchMove(evt) {
  if (!xDown || !yDown) {
    return;
  }

  var xUp = evt.touches[0].clientX;
  var yUp = evt.touches[0].clientY;

  var xDiff = xDown - xUp;
  var yDiff = yDown - yUp;

  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    /*most significant*/
    if (xDiff > 10) {
      /* right swipe */
      if (currentPagePromoPages == 3) {
        gotoPagePromoPage(1);
      } else {
        gotoPagePromoPage(currentPagePromoPages + 1);
      }
    } else if (xDiff < -10) {
      /* left swipe */
      if (currentPagePromoPages == 1) {
        gotoPagePromoPage(3);
      } else {
        gotoPagePromoPage(currentPagePromoPages - 1);
      }
    }
  } else {
    if (yDiff > 0) {
      /* down swipe */
      console.log("Swipe down");
    } else {
      /* up swipe */
      console.log("Swipe up");
    }
  }
  /* reset values */
  xDown = null;
  yDown = null;
}
//*********** End handle swipe event ***********/
