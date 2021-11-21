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

// This is to keep track of if the sticky header menu is being shown or not
var isShowingStickyHeader = false;

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

document.getElementById("open-right-hamburger-menu-sticky-header").onclick =
  menu.openRightHamburgerMenu;

document.getElementById("close-hamburger-menu-button").onclick =
  menu.closeRightHamburgerMenu;

document.getElementById(
  "open-left-hamburger-menu-button-sticky-header"
).onclick = menu.openLeftHamburgerMenu;

document.getElementById(
  "open-left-hamburger-menu-button-static-header"
).onclick = menu.openLeftHamburgerMenu;

document.getElementById("left-hamburger-menu-area").onclick =
  menu.closeLeftHamburgerMenu;

document.getElementById("open-shopping-cart-static-header").onclick =
  menu.openShoppingCartMenu;

document.getElementById("open-shopping-cart-sticky-header").onclick =
  menu.openShoppingCartMenu;

document.getElementById("shopping-cart-area").onclick =
  menu.closeShoppingCartMenu;

document.getElementById("open-elements-menu-button-static-header").onclick =
  elementsDropdownMenu.openElementsDropdownMenu;

document.getElementById("open-shop-menu-button-static-header").onclick =
  shopDropdownMenu.openShopDropdownMenu;

//******************** Handlers *********************/
// The function to handle event of when body is scrolled
function scrollHandler() {
  // Reference the sticky header menu bar
  var stickyHeaderMenuBar = document.getElementById("sticky-header");

  if (document.documentElement.scrollTop <= 80) {
    r.style.setProperty(
      "--shopping-cart-top-margin",
      `${80 - document.documentElement.scrollTop}px`
    );
  }

  // Show the sticky menu bar when user scrolls down to more than 80px
  if (document.documentElement.scrollTop > 81 && !isShowingStickyHeader) {
    r.style.setProperty("--shopping-cart-top-margin", "80px");

    // Animate the menu down
    stickyHeaderMenuBar.classList.add("animate-down");

    isShowingStickyHeader = true;
    menu.setStickyHeaderShowStatus(true);

    if (menu.getRightHamburgerMenuShowStatus()) {
      r.style.setProperty("--sticky-header-left-margin", "-370px");
      r.style.setProperty("--sticky-header-right-margin", "370px");
    }

    // Show sticky header menu bar
    r.style.setProperty("--sticky-header-menu-display", "block");
  } // Hide the sticky menu bar when user scrolls up to less than 80px
  else if (document.documentElement.scrollTop <= 80) {
    isShowingStickyHeader = false;
    menu.setStickyHeaderShowStatus(false);

    // Hide sticky header menu bar
    r.style.setProperty("--sticky-header-menu-display", "none");
  }
}

// The function to handle event of when user brings mouse inside the promo area
function mouseOverPromoAreaHandler() {
  // Show the promo icon
  r.style.setProperty("--promo-icon-display", "block");
}

// The function to handle event of when user brings mouse out of the promo area
function mouseOutPromoAreaHandler() {
  // Show the promo icon
  r.style.setProperty("--promo-icon-display", "none");
}
//******************** End Handlers *********************/

// Initial set up
window.onload = () => {
  clientLogosSliders.clientLogoSliderInitialSetUp();
  latestNewsSliders.latestNewsSliderInitialSetup();
  clientFeedbackSliders.clientFeedbackSliderInitialSetUp();
  latestProjectSliders.latestProjectSliderInitialSetUp();
  promoPageSliders.promoPageInitialSetUp();

  // Make sliders run automatically
  setInterval(latestProjectSliders.gotoNextPageLatestProjectCardsUpdated, 2000);
  setInterval(
    clientFeedbackSliders.gotoNextPageClientFeedbackCardsUpdated,
    2000
  );
  setInterval(clientLogosSliders.gotoNextPageClientLogoCardsUpdated, 2000);
  setInterval(latestNewsSliders.gotoNextPageLatestNewsCardsUpdated, 2000);
};
