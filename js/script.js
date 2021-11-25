// Client logo sliders
import * as clientLogosSliders from "./clientLogosSliders.js";
import * as latestNewsSliders from "./latestNewsSliders.js";
import * as clientFeedbackSliders from "./clientFeedbacksSliders.js";
import * as latestProjectSliders from "./latestProjectSlider.js";
import * as promoPageSliders from "./promoPageSlider.js";

/************** Import menu **************/
import * as menu from "./menu.js";
import * as elementsDropdownMenu from "./menus/elementsDropdownMenu.js";
import * as shopDropdownMenu from "./menus/shopDropdownMenu.js";
import * as blogDropdownMenu from "./menus/blogDropdownMenu.js";
import * as portfolioDropdownMenu from "./menus/portfolioDropdownMenu.js";
import * as featuresDropdownMenu from "./menus/featuresDropdownMenu.js";
import * as pagesDropdownMenu from "./menus/pagesDropdownMenu.js";
import * as headersDropdownMenu from "./menus/headersDropdownMenu.js";
import * as homeDropdownMenu from "./menus/homeDropdownMenu.js";

import * as colorChooser from "./menus/colorChooserMenu.js";
import * as utils from "./sliderUtils.js";

// This is to keep track of if the sticky header menu is being shown or not
var isShowingStickyHeader = false;

// This is to keep track of if header is being shown for mobile or not
var isShowingMobileHeader = false;

// Get the root CSS element
var r = document.querySelector(":root");

document.getElementById("go-previous-page-latest-news-button").onclick =
  latestNewsSliders.gotoPreviousPageLatestNewsCardsUpdated;

document.getElementById("go-forward-page-latest-news-button").onclick =
  latestNewsSliders.gotoNextPageLatestNewsCardsUpdated;

document.getElementById("go-previous-page-client-feedback-button").onclick =
  clientFeedbackSliders.gotoPreviousPageClientFeedbackCardsUpdated;

document.getElementById("go-forward-page-client-feedback-button").onclick =
  clientFeedbackSliders.gotoNextPageClientFeedbackCardsUpdated;

document.getElementById(
  "open-right-hamburger-menu-static-header-button"
).onclick = menu.openRightHamburgerMenu;

document.getElementById("right-hamburger-menu-area").onclick =
  menu.closeRightHamburgerMenu;

document.getElementById("go-previous-page-latest-project-button").onclick =
  latestProjectSliders.gotoPreviousPageLatestProjectCardsUpdated;

document.getElementById("go-forward-page-latest-project-button").onclick =
  latestProjectSliders.gotoNextPageLatestProjectCardsUpdated;

document.getElementById("go-previous-page-promo-page-button").onclick =
  promoPageSliders.gotoPreviousPagePromoPageCardsUpdated;

document.getElementById("go-forward-page-promo-page-button").onclick =
  promoPageSliders.gotoNextPagePromoPageCardsUpdated;

document.getElementById(
  "promo-page-area"
).onmouseover = mouseOverPromoAreaHandler;

document.getElementById(
  "promo-page-area"
).onmouseout = mouseOutPromoAreaHandler;

document.getElementsByTagName("BODY")[0].onscroll = scrollHandler;

document.getElementById("close-hamburger-menu-button").onclick =
  menu.closeRightHamburgerMenu;

document.getElementById(
  "open-left-hamburger-menu-button-static-header"
).onclick = menu.openLeftHamburgerMenu;

document.getElementById("left-hamburger-menu-area").onclick =
  menu.closeLeftHamburgerMenu;

document.getElementById("open-shopping-cart-static-header").onclick =
  menu.openShoppingCartMenu;

document.getElementById("shopping-cart-area").onclick =
  menu.closeShoppingCartMenu;

document.getElementById(
  "open-elements-menu-button-static-header"
).onmouseover = () => {
  utils.closeAllOpeningDropdownMenu();
  elementsDropdownMenu.openElementsDropdownMenu();
};

document.getElementById(
  "open-shop-menu-button-static-header"
).onmouseover = () => {
  utils.closeAllOpeningDropdownMenu();
  shopDropdownMenu.openShopDropdownMenu();
};

document.getElementById(
  "open-blog-menu-button-static-header"
).onmouseover = () => {
  utils.closeAllOpeningDropdownMenu();
  blogDropdownMenu.openBlogDropdownMenu();
};

document.getElementById(
  "open-portfolio-menu-button-static-header"
).onmouseover = () => {
  utils.closeAllOpeningDropdownMenu();
  portfolioDropdownMenu.openPortfolioDropdownMenu();
};

document.getElementById(
  "open-features-menu-button-static-header"
).onmouseover = () => {
  utils.closeAllOpeningDropdownMenu();
  featuresDropdownMenu.openFeaturesDropdownMenu();
};

document.getElementById(
  "open-pages-menu-button-static-header"
).onmouseover = () => {
  utils.closeAllOpeningDropdownMenu();
  pagesDropdownMenu.openPagesDropdownMenu();
};

document.getElementById(
  "open-headers-menu-button-static-header"
).onmouseover = () => {
  utils.closeAllOpeningDropdownMenu();
  headersDropdownMenu.openHeadersDropdownMenu();
};

document.getElementById(
  "open-home-menu-button-static-header"
).onmouseover = () => {
  utils.closeAllOpeningDropdownMenu();
  homeDropdownMenu.openHomeDropdownMenu();
};

// Array.from(
//   document.getElementsByClassName("mgi__header-options")
// )[0].onmouseleave = () => {
//   utils.closeAllOpeningDropdownMenu();
// };

document.getElementById("open-header-search-bar-button").onclick =
  menu.openHeaderSearchBar;

document.getElementById("close-header-search-bar").onclick =
  menu.closeHeaderSearchBar;

document.getElementById("option-panel-toggle").onclick = menu.openOptionPanel;

document.getElementById("scroll-top-button").onclick = scrollToTopFunction;

//******************** Handlers *********************/
// The function to handle event of when body is scrolled
function scrollHandler() {
  if (document.documentElement.scrollTop <= 80) {
    r.style.setProperty(
      "--shopping-cart-top-margin",
      `${80 - document.documentElement.scrollTop}px`
    );
  }

  // Get the header menu bar element
  var headerMenuBar = document.getElementById("header-menu-bar");
  var headerSearchBar = document.getElementById("header-search-bar");

  // Get the scroll top button
  var scrollTopButton = document.getElementById("scroll-top-button");

  // Show the sticky menu bar when user scrolls down to more than 80px
  if (document.documentElement.scrollTop > 81 && !isShowingStickyHeader) {
    isShowingStickyHeader = true;
    r.style.setProperty("--shopping-cart-top-margin", "80px");

    headerMenuBar.classList.add("mgi__header--sticky");
    headerMenuBar.classList.add("animate-down");
    headerSearchBar.classList.add("mgi__header--sticky");
    headerSearchBar.classList.add("animate-down");

    scrollTopButton.style.opacity = 1;

    formatHeader();
  } // Hide the sticky menu bar when user scrolls up to less than 80px
  else if (document.documentElement.scrollTop <= 80) {
    isShowingStickyHeader = false;

    headerMenuBar.classList.remove("mgi__header--sticky");
    headerMenuBar.classList.remove("animate-down");
    headerSearchBar.classList.remove("mgi__header--sticky");
    headerSearchBar.classList.remove("animate-down");

    scrollTopButton.style.opacity = 0;

    formatHeader();
  }
}

// The function to handle event of when user brings mouse inside the promo area
function mouseOverPromoAreaHandler() {
  // Show the promo icon
  r.style.setProperty("--promo-icon-display", "1");
}

// The function to handle event of when user brings mouse out of the promo area
function mouseOutPromoAreaHandler() {
  // Show the promo icon
  r.style.setProperty("--promo-icon-display", "0");
}
//******************** End Handlers *********************/

// When the user clicks on the button, scroll to the top of the document
function scrollToTopFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// The function to check and see how should header be formatted
function formatHeader() {
  if (
    (isShowingMobileHeader && isShowingStickyHeader) ||
    (!isShowingMobileHeader && isShowingStickyHeader)
  ) {
    r.style.setProperty("--header-background-color", "white");
    r.style.setProperty("--header-text-color", "black");
  } else if (isShowingMobileHeader && !isShowingStickyHeader) {
    r.style.setProperty("--header-background-color", "black");
    r.style.setProperty("--header-text-color", "white");
  } else {
    r.style.setProperty("--header-background-color", "transparent");
    r.style.setProperty("--header-text-color", "white");
  }
}

// Initial set up
window.addEventListener("resize", () => {
  if (window.innerWidth <= 940) {
    isShowingMobileHeader = true;

    formatHeader();
  } else {
    isShowingMobileHeader = false;

    formatHeader();
  }
});

window.onload = () => {
  clientLogosSliders.clientLogoSliderInitialSetUp();
  latestNewsSliders.latestNewsSliderInitialSetup();
  clientFeedbackSliders.clientFeedbackSliderInitialSetUp();
  latestProjectSliders.latestProjectSliderInitialSetUp();
  promoPageSliders.promoPageInitialSetUp();
  colorChooser.setUpColorChooser();

  // Make sliders run automatically
  setInterval(latestProjectSliders.gotoNextPageLatestProjectCardsUpdated, 2000);
  setInterval(
    clientFeedbackSliders.gotoNextPageClientFeedbackCardsUpdated,
    2000
  );
  setInterval(clientLogosSliders.gotoNextPageClientLogoCardsUpdated, 2000);
  setInterval(latestNewsSliders.gotoNextPageLatestNewsCardsUpdated, 2000);
};
