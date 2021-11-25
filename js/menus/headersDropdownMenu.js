import * as utils from "./../sliderUtils.js";

// Get the root CSS element
var r = document.querySelector(":root");

//******************** Headers dropdown menu *********************/
// The function to open headers dropdown menu
function openHeadersDropdownMenu() {
  // Get the body element
  var body = document.getElementsByTagName("BODY")[0];

  // Make the headers button blue
  document
    .getElementById("open-headers-menu-button-static-header")
    .classList.add("mgi__header-options__option--blue");

  // Get the elements, shop, blog, portfolio, features, pages menu open button
  var elementsMenuOpenButton = document.getElementById(
    "open-elements-menu-button-static-header"
  );
  var shopMenuOpenButton = document.getElementById(
    "open-shop-menu-button-static-header"
  );
  var blogMenuOpenButton = document.getElementById(
    "open-blog-menu-button-static-header"
  );
  var portfolioMenuOpenButton = document.getElementById(
    "open-portfolio-menu-button-static-header"
  );
  var featuresMenuOpenButton = document.getElementById(
    "open-features-menu-button-static-header"
  );
  var pagesMenuOpenButton = document.getElementById(
    "open-pages-menu-button-static-header"
  );

  // Adjust margin of menu
  r.style.setProperty(
    "--dropdown-menu-margin",
    `calc(5% + 80px + 10rem + ${
      elementsMenuOpenButton.clientWidth +
      shopMenuOpenButton.clientWidth +
      blogMenuOpenButton.clientWidth +
      portfolioMenuOpenButton.clientWidth +
      featuresMenuOpenButton.clientWidth +
      pagesMenuOpenButton.clientWidth
    }px)`
  );

  // Create the menu element
  var menuElement = utils.createElementFromHTML(`
    <div id="headers-dropdown-menu" class="mgi__dropdown-menu__menu">
    <div
      class="mgi__dropdown-menu__menu__regular-menu mgi__dropdown-menu__menu__regular-menu--grid"
    >
      <div class="mgi__dropdown-menu__menu__regular-menu--grid__column">
        <p
          class="mgi__dropdown-menu__menu__regular-menu--grid__column__title"
        >
          HEADER TYPE
        </p>

        <div
          class="mgi__dropdown-menu__menu__regular-menu--grid__column__item"
        >
          <p
            class="mgi__dropdown-menu__menu__regular-menu--grid__column__item__text"
          >
            HEADER DEFAULT
          </p>
        </div>

        <div
          class="mgi__dropdown-menu__menu__regular-menu--grid__column__item"
        >
          <p
            class="mgi__dropdown-menu__menu__regular-menu--grid__column__item__text"
          >
            HEADER FULL WIDTH
          </p>
        </div>

        <div
          class="mgi__dropdown-menu__menu__regular-menu--grid__column__item"
        >
          <p
            class="mgi__dropdown-menu__menu__regular-menu--grid__column__item__text"
          >
            HEADER STATIC
          </p>
        </div>

        <div
          class="mgi__dropdown-menu__menu__regular-menu--grid__column__item"
        >
          <p
            class="mgi__dropdown-menu__menu__regular-menu--grid__column__item__text"
          >
            HEADER LOGO RIGHT
          </p>
        </div>

        <div
          class="mgi__dropdown-menu__menu__regular-menu--grid__column__item"
        >
          <p
            class="mgi__dropdown-menu__menu__regular-menu--grid__column__item__text"
          >
            HEADER LOGO CENTER
          </p>
        </div>

        <div
          class="mgi__dropdown-menu__menu__regular-menu--grid__column__item"
        >
          <p
            class="mgi__dropdown-menu__menu__regular-menu--grid__column__item__text"
          >
            HEADER DARK
          </p>
        </div>

        <div
          class="mgi__dropdown-menu__menu__regular-menu--grid__column__item"
        >
          <p
            class="mgi__dropdown-menu__menu__regular-menu--grid__column__item__text"
          >
            HEADER SEMI DARK
          </p>
        </div>

        <div
          class="mgi__dropdown-menu__menu__regular-menu--grid__column__item"
        >
          <p
            class="mgi__dropdown-menu__menu__regular-menu--grid__column__item__text"
          >
            HEADER DARK STICKY
          </p>
        </div>

        <div
          class="mgi__dropdown-menu__menu__regular-menu--grid__column__item"
        >
          <p
            class="mgi__dropdown-menu__menu__regular-menu--grid__column__item__text"
          >
            HEADER WITH DETAIL
          </p>
        </div>
      </div>

      <div class="mgi__dropdown-menu__menu__regular-menu--grid__column">
        <p
          class="mgi__dropdown-menu__menu__regular-menu--grid__column__title"
        >
          HEADER TYPE
        </p>

        <div
          class="mgi__dropdown-menu__menu__regular-menu--grid__column__item"
        >
          <p
            class="mgi__dropdown-menu__menu__regular-menu--grid__column__item__text"
          >
            HEADER LIGHT
          </p>
        </div>

        <div
          class="mgi__dropdown-menu__menu__regular-menu--grid__column__item"
        >
          <p
            class="mgi__dropdown-menu__menu__regular-menu--grid__column__item__text"
          >
            HEADER SEMI LIGHT
          </p>
        </div>

        <div
          class="mgi__dropdown-menu__menu__regular-menu--grid__column__item"
        >
          <p
            class="mgi__dropdown-menu__menu__regular-menu--grid__column__item__text"
          >
            HEADER LIGHT STICKY
          </p>
        </div>

        <div
          class="mgi__dropdown-menu__menu__regular-menu--grid__column__item"
        >
          <p
            class="mgi__dropdown-menu__menu__regular-menu--grid__column__item__text"
          >
            HEADER TRANSPARENT
          </p>
        </div>

        <div
          class="mgi__dropdown-menu__menu__regular-menu--grid__column__item"
        >
          <p
            class="mgi__dropdown-menu__menu__regular-menu--grid__column__item__text"
          >
            HEADER TOGGLE DETAILS
          </p>
        </div>

        <div
          class="mgi__dropdown-menu__menu__regular-menu--grid__column__item"
        >
          <p
            class="mgi__dropdown-menu__menu__regular-menu--grid__column__item__text"
          >
            HEADER SIDENAV
          </p>
        </div>

        <div
          class="mgi__dropdown-menu__menu__regular-menu--grid__column__item"
        >
          <p
            class="mgi__dropdown-menu__menu__regular-menu--grid__column__item__text"
          >
            HEADER BOXED
          </p>
        </div>

        <div
          class="mgi__dropdown-menu__menu__regular-menu--grid__column__item"
        >
          <p
            class="mgi__dropdown-menu__menu__regular-menu--grid__column__item__text"
          >
            HEADER ON PAGE MENU
          </p>
        </div>
      </div>
    </div>
  </div>
    `);

  // Append menu to the body
  body.appendChild(menuElement);

  document.getElementById(
    "headers-dropdown-menu"
  ).onmouseleave = closeHeadersDropdownMenu;
}

// The function to close headers dropdown menu
function closeHeadersDropdownMenu() {
  // Reference and remove the headers dropdown menu
  document.getElementById("headers-dropdown-menu").remove();

  // Make the headers button back to white
  document
    .getElementById("open-headers-menu-button-static-header")
    .classList.remove("mgi__header-options__option--blue");
}
//******************** End Headers dropdown menu *********************/

export { openHeadersDropdownMenu };
