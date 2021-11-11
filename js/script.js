// This is to keep track of current page in promo pages
var currentPagePromoPages = 1;

// This is to keep track of current page in latest project pages
var currentPageLatestProjectPages = 1;

// This is to keep track of current page in client feedback pages
var currentPageClientFeedbackPages = 1;

// This is to keep track of current width of the promo page
var promoPageCurrentWidth = 0;

// This is to keep track of current width of the latest project card
var latestProjectCardCurrentWidth = 0;

// This is to keep track of current width of the client feedback card
var clientFeedbackCardCurrentWidth = 0;

// This is to keep track of number of pages in latest project pages
var numberOfPagesLatestProjectPages = 0;

// This is to keep track of number of cards per page in latest project pages
var numberOfCardsPerPageLatestProjectPages = 0;

// This is to keep track of number of pages in feedback pages
var numberOfPagesFeedbackPages = 0;

// This is to keep track of number of cards per page in feedback pages
var numberOfCardsPerPageFeedbackPages = 0;

// Get the root CSS element
var r = document.querySelector(":root");

//******************** Right hamburger menu *********************/
// The function to open right hamburger menu
function openRightHamburgerMenu() {
  // Get the page content, hamburger menu, hamburger menu area element
  var pageContent = document.getElementById("page-content");
  var hamburgerMenu = document.getElementById("right-hamburger-menu");
  var hamburgerMenuArea = document.getElementById("right-hamburger-menu-area");

  // Show the menu
  hamburgerMenu.classList.toggle("show");
  hamburgerMenuArea.classList.toggle("show");

  // Animate the menu
  hamburgerMenu.classList.add(
    "animate-slide-in-right-to-left-right-hamburger-menu"
  );
  pageContent.classList.add("animate-slide-out-right-to-left-page-content");

  // Remove the animation once they are done
  hamburgerMenu.addEventListener("animationend", (event) => {
    if (event.animationName == "slide-in-right-to-left-right-hamburger-menu") {
      hamburgerMenu.classList.remove(
        "animate-slide-in-right-to-left-right-hamburger-menu"
      );
    }
  });
  pageContent.addEventListener("animationend", (event) => {
    if (event.animationName == "slide-out-right-to-left-page-content") {
      pageContent.classList.remove(
        "animate-slide-out-right-to-left-page-content"
      );
      
      console.log("Page content pushed")

      // Push page content to the left
      r.style.setProperty("--page-content-left-margin", "-370px");
      r.style.setProperty("--page-content-right-margin", "370px");
    }
  });
}

// The function to close right hamburger menu
function closeRightHamburgerMenu() {
  // Get the page content, hamburger menu, hamburger menu are element
  var pageContent = document.getElementById("page-content");
  var hamburgerMenu = document.getElementById("right-hamburger-menu");
  var hamburgerMenuArea = document.getElementById("right-hamburger-menu-area");

  // Animate the menu out
  hamburgerMenu.classList.add(
    "animate-slide-out-left-to-right-right-hamburger-menu"
  );
  pageContent.classList.add("animate-slide-in-left-to-right-page-content");

  // Remove the animation once they are done
  pageContent.addEventListener("animationend", (event) => {
    if (event.animationName == "slide-in-left-to-right-page-content") {
      pageContent.classList.remove(
        "animate-slide-in-left-to-right-page-content"
      );

      // Pull page content back to the right
      r.style.setProperty("--page-content-left-margin", "0px");
      r.style.setProperty("--page-content-right-margin", "0px");
    }
  });
  hamburgerMenu.addEventListener("animationend", (event) => {
    if (event.animationName == "slide-out-left-to-right-right-hamburger-menu") {
      hamburgerMenu.classList.remove("show");
      hamburgerMenuArea.classList.remove("show");

      hamburgerMenu.classList.remove(
        "animate-slide-out-left-to-right-right-hamburger-menu"
      );
    }    
  })
}
//******************** Right hamburger menu *********************/

//******************** Promo pages *********************/
// The function to bring user to previous page in promo pages
function goBackPagePromoPages() {
  // Check and see if user is at first page or not
  if (currentPagePromoPages == 1) {
    // Call the function and take user to the last page
    gotoPagePromoPage(3);
  } else {
    // Call the function and take user to the previous page
    gotoPagePromoPage(currentPagePromoPages - 1);
  }
}

// The function to bring user to next page in promo pages
function goForwardPagePromoPages() {
  // Check and see if user is at last page or not
  if (currentPagePromoPages == 3) {
    // Call the function and take user to the first page
    gotoPagePromoPage(1);
  } else {
    // Call the function and take user to the next page
    gotoPagePromoPage(currentPagePromoPages + 1);
  }
}

// The function to navigate user in promo pages
function gotoPagePromoPage(pageNumber) {
  // Update current page
  currentPagePromoPages = pageNumber;

  // Update cursor
  r.style.setProperty(
    "--promo-page-cursor",
    `${promoPageCurrentWidth * (2 - currentPagePromoPages) * 2}px`
  );
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
//******************** Promo pages *********************/

//******************** Latest project pages *********************/
// The function to bring user to previous page in latest project pages
function goBackPageLatestProjectPage() {
  // Check and see if user is at the first page or not
  if (currentPageLatestProjectPages == 1) {
    // Call the function and take user to the last page
    gotoSpecifiedLatestProjectPage(numberOfPagesLatestProjectPages);
  } else {
    // Call the function and take user to the previous page
    gotoSpecifiedLatestProjectPage(currentPageLatestProjectPages - 1);
  }
}

// The function to bring user to next page in latest project pages
function goForwardPageLatestProjectPage() {
  // Check and see if user is at the last page or not
  if (currentPageLatestProjectPages == numberOfPagesLatestProjectPages) {
    // Call the function and take user back to the first page
    gotoSpecifiedLatestProjectPage(1);
  } else {
    // Call the function and take user to the next page
    gotoSpecifiedLatestProjectPage(currentPageLatestProjectPages + 1);
  }
}

// The function to take user to a specified latest project page
function gotoSpecifiedLatestProjectPage(pageNumber) {
  // Update current page
  currentPageLatestProjectPages = pageNumber;

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
  // Check to see if user is at the first page or not
  if (currentPageClientFeedbackPages == 1) {
    // Call the function and take user to the last page
    gotoSpecifiedClientFeedbackPage(numberOfPagesFeedbackPages);
  } else {
    // Call the function and take user to the previous page
    gotoSpecifiedClientFeedbackPage(currentPageClientFeedbackPages - 1);
  }
}

// The function to bring user to next page in client feedback pages
function goForwardPageClientFeedbackPages() {
  // Check to see if user is at the last page or not
  if (currentPageClientFeedbackPages == numberOfPagesFeedbackPages) {
    // Call the function and take user to the first page
    gotoSpecifiedClientFeedbackPage(1);
  } else {
    // Call the function and take user to the next page
    gotoSpecifiedClientFeedbackPage(currentPageClientFeedbackPages + 1);
  }
}

// The function to take user to a specified client feedback page
function gotoSpecifiedClientFeedbackPage(pageNumber) {
  // Update current page
  currentPageClientFeedbackPages = pageNumber;

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
  var stickyHeaderMenuBar = document.getElementById(
    "mgi__sticky-header-menu-bar"
  );

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
function adjustScreenSize() {
  // Get the latest project card element
  var latestProjectCardElement = document.getElementsByClassName(
    "mgi__latest-project-card"
  )[0];

  // Get the client feedback card element
  var clientFeedbackCardElement = document.getElementsByClassName(
    "mgi__client-feedback-cards__client-feedback-card"
  )[0];

  // Get the promo page element
  var promoPageElement = document.getElementsByClassName(
    "mgi__promo__scroll-area"
  )[0];

  // Update current width of the latest project card in
  latestProjectCardCurrentWidth = latestProjectCardElement.clientWidth;

  // Update current width of the client feedback card in
  clientFeedbackCardCurrentWidth = clientFeedbackCardElement.clientWidth;

  // Update current width of the promo page
  promoPageCurrentWidth = promoPageElement.clientWidth;

  // Update page width for promo pages container
  r.style.setProperty("--promo-page-width", `${promoPageCurrentWidth}px`);

  // Update number of latest project cards per page
  numberOfCardsPerPageLatestProjectPages = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--number-of-latest-project-cards-per-page");

  // Update number of latest projects pages
  numberOfPagesLatestProjectPages =
    5 - numberOfCardsPerPageLatestProjectPages + 1;

  // Update number of feedback cards per page
  numberOfCardsPerPageFeedbackPages = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--number-of-feedback-cards-per-page");

  // Update number of feedback pages
  numberOfPagesFeedbackPages = 5 - numberOfCardsPerPageFeedbackPages + 1;
}

// Add a listener for when the window resizes
window.addEventListener("resize", adjustScreenSize);

window.onload = () => {
  adjustScreenSize();
};
