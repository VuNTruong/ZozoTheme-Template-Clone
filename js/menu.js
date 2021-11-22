// This is to keep track of if the right hamburger menu is being shown or not
var isShowingRightHamburgerMenu = false;

// This is to keep track of if the sticky header menu is being shown or not
var isShowingStickyHeader = false;

// This is to keep track of if option panel is being shown or not
var isShowingOptionPanel = false;

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

      // Push page content to the left
      r.style.setProperty("--page-content-left-margin", "-370px");
      r.style.setProperty("--page-content-right-margin", "370px");
    }
  });

  isShowingRightHamburgerMenu = true;
}

// The function to close right hamburger menu
function closeRightHamburgerMenu() {
  // Get the page content, hamburger menu, hamburger menu area element
  var pageContent = document.getElementById("page-content");
  var hamburgerMenu = document.getElementById("right-hamburger-menu");
  var hamburgerMenuArea = document.getElementById("right-hamburger-menu-area");
  var stickyHeader = document.getElementById("sticky-header");

  // Animate the menu out
  hamburgerMenu.classList.add(
    "animate-slide-out-left-to-right-right-hamburger-menu"
  );
  pageContent.classList.add("animate-slide-in-left-to-right-page-content");
  // Only animate the sticky header if it is being shown
  if (isShowingStickyHeader) {
    stickyHeader.classList.add("animate-slide-in-left-to-right-sticky-header");
  }

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

      hamburgerMenu.classList.remove("animate-down");
    }
  });

  isShowingRightHamburgerMenu = false;
}
//******************** End Right hamburger menu *********************/

//******************** Left hamburger menu *********************/
// The function to open left hamburger menu
function openLeftHamburgerMenu() {
  // Get the hamburger menu, hamburger menu area element
  var hamburgerMenu = document.getElementById("left-hamburger-menu");
  var hamburgerMenuArea = document.getElementById("left-hamburger-menu-area");

  // Show the menu
  hamburgerMenu.classList.toggle("show");
  hamburgerMenuArea.classList.toggle("show");

  // Animate the menu in
  hamburgerMenu.classList.add(
    "animate-slide-in-left-to-right-left-hamburger-menu"
  );

  // Remove the animation once they are done
  hamburgerMenu.addEventListener("animationend", (event) => {
    if (event.animationName == "slide-in-left-to-right-left-hamburger-menu") {
      // Remove the animation
      hamburgerMenu.classList.remove(
        "animate-slide-in-left-to-right-left-hamburger-menu"
      );
    }
  });
}

// The function to close left hamburger menu
function closeLeftHamburgerMenu() {
  // Get the hamburger menu, hamburger menu area
  var hamburgerMenu = document.getElementById("left-hamburger-menu");
  var hamburgerMenuArea = document.getElementById("left-hamburger-menu-area");

  // Animate the menu out
  hamburgerMenu.classList.add(
    "animate-slide-out-right-to-left-left-hamburger-menu"
  );

  // Remove the animation once they are done
  hamburgerMenu.addEventListener("animationend", (event) => {
    if (event.animationName == "slide-out-right-to-left-left-hamburger-menu") {
      // Remove the animation
      hamburgerMenu.classList.remove(
        "animate-slide-out-right-to-left-left-hamburger-menu"
      );

      // Hide the menu
      hamburgerMenu.classList.remove("show");
      hamburgerMenuArea.classList.remove("show");
    }
  });
}
//******************** End Left hamburger menu *********************/

//******************** Shopping cart menu *********************/
// The function to open shopping cart menu
function openShoppingCartMenu() {
  // Get the shopping cart menu as well as its area
  var shoppingCartMenu = document.getElementById("shopping-cart-menu");
  var shoppingCartArea = document.getElementById("shopping-cart-area");

  shoppingCartMenu.classList.toggle("show");
  shoppingCartArea.classList.toggle("show");
}

// The function to close shopping cart menu
function closeShoppingCartMenu() {
  console.log("Close shopping cart menu");

  // Get the shopping cart menu as well as its area
  var shoppingCartMenu = document.getElementById("shopping-cart-menu");
  var shoppingCartArea = document.getElementById("shopping-cart-area");

  shoppingCartMenu.classList.remove("show");
  shoppingCartArea.classList.remove("show");
}
//******************** End Shopping cart menu *********************/

// The function to set show status of the sticky header
function setStickyHeaderShowStatus(showStatus) {
  isShowingStickyHeader = showStatus;
}

// The function to get show status of right hamburger menu
function getRightHamburgerMenuShowStatus() {
  return isShowingRightHamburgerMenu;
}

// The function to open header search bar
function openHeaderSearchBar() {
  r.style.setProperty("--header-menu-bar-display", "none");
  r.style.setProperty("--header-search-bar-display", "block");
}

// The function to close header search bar
function closeHeaderSearchBar() {
  r.style.setProperty("--header-menu-bar-display", "block");
  r.style.setProperty("--header-search-bar-display", "none");
}

// The function to open option panel
function openOptionPanel() {
  // Get the option panel
  var optionPanel = document.getElementById("option-panel");

  // Get the option panel toggle button
  var optionPanelToggle = document.getElementById("option-panel-toggle");

  // Add the animation to animate the menu out
  optionPanel.classList.add("animate-slide-to-right-option-panel");

  optionPanel.addEventListener("animationend", (event) => {
    if (event.animationName == "slide-to-right-option-panel") {
      // Remove the animation once the menu is animated out
      optionPanel.classList.remove("animate-slide-to-right-option-panel");
      r.style.setProperty("--option-panel-margin", "0px");
      optionPanelToggle.onclick = closeOptionPanel;
    }
  });
}

// The function to close option panel
function closeOptionPanel() {
  // Get the option panel
  var optionPanel = document.getElementById("option-panel");

  // Get the option panel toggle button
  var optionPanelToggle = document.getElementById("option-panel-toggle");

  // Add the animation to animate the menu in
  optionPanel.classList.add("animate-slide-to-left-option-panel");

  optionPanel.addEventListener("animationend", (event) => {
    if (event.animationName == "slide-to-left-option-panel") {
      // Remove the animation once the menu is animated in
      optionPanel.classList.remove("animate-slide-to-left-option-panel");
      r.style.setProperty("--option-panel-margin", "-274px");
      optionPanelToggle.onclick = openOptionPanel;
    }
  });
}

export {
  openRightHamburgerMenu,
  closeRightHamburgerMenu,
  openLeftHamburgerMenu,
  closeLeftHamburgerMenu,
  openShoppingCartMenu,
  closeShoppingCartMenu,
  setStickyHeaderShowStatus,
  openHeaderSearchBar,
  closeHeaderSearchBar,
  openOptionPanel,
  getRightHamburgerMenuShowStatus,
};
