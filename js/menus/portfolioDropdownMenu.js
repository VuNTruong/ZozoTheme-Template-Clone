import * as utils from "./../sliderUtils.js";

// Get the root CSS element
var r = document.querySelector(":root");

//******************** Portfolio dropdown menu *********************/
// The function to open portfolio dropdown menu
function openPortfolioDropdownMenu() {
  // Get the body element
  var body = document.getElementsByTagName("BODY")[0];

  // Make the portfolio button blue
  document
    .getElementById("open-portfolio-menu-button-static-header")
    .classList.add("mgi__header-options__option--blue");

  // Get the elements, shop, blog menu open button
  var elementsMenuOpenButton = document.getElementById(
    "open-elements-menu-button-static-header"
  );
  var shopMenuOpenButton = document.getElementById(
    "open-shop-menu-button-static-header"
  );
  var blogMenuOpenButton = document.getElementById(
    "open-blog-menu-button-static-header"
  );

  // Adjust margin of the menu
  r.style.setProperty(
    "--dropdown-menu-margin",
    `calc(5% + 80px + 5.6rem + ${
      elementsMenuOpenButton.clientWidth +
      shopMenuOpenButton.clientWidth +
      blogMenuOpenButton.clientWidth
    }px)`
  );

  // Create the menu element
  var menuElement = utils.createElementFromHTML(`
  <div id="portfolio-dropdown-menu" class="mgi__dropdown-menu__menu">
  <div class="mgi__dropdown-menu__menu__regular-menu">
    <div class="mgi__dropdown-menu__menu__regular-menu__item">
      <div class="mgi__dropdown-menu__menu__regular-menu__item__content">
        <p
          class="mgi__dropdown-menu__menu__regular-menu__item__content__text"
        >
          GRID LAYOUT
        </p>
      </div>
      <div class="mgi__dropdown-menu__menu__regular-menu__item__icon">
        <i class="fas fa-chevron-right"></i>
      </div>
    </div>

    <div class="mgi__dropdown-menu__menu__regular-menu__item">
      <div class="mgi__dropdown-menu__menu__regular-menu__item__content">
        <p
          class="mgi__dropdown-menu__menu__regular-menu__item__content__text"
        >
          GRID NO GUTTER
        </p>
      </div>
      <div class="mgi__dropdown-menu__menu__regular-menu__item__icon">
        <i class="fas fa-chevron-right"></i>
      </div>
    </div>

    <div class="mgi__dropdown-menu__menu__regular-menu__item">
      <div class="mgi__dropdown-menu__menu__regular-menu__item__content">
        <p
          class="mgi__dropdown-menu__menu__regular-menu__item__content__text"
        >
          CLASSIC STYLE
        </p>
      </div>
      <div class="mgi__dropdown-menu__menu__regular-menu__item__icon">
        <i class="fas fa-chevron-right"></i>
      </div>
    </div>

    <div class="mgi__dropdown-menu__menu__regular-menu__item">
      <div class="mgi__dropdown-menu__menu__regular-menu__item__content">
        <p
          class="mgi__dropdown-menu__menu__regular-menu__item__content__text"
        >
          LIST LAYOUT
        </p>
      </div>
    </div>

    <div class="mgi__dropdown-menu__menu__regular-menu__item">
      <div class="mgi__dropdown-menu__menu__regular-menu__item__content">
        <p
          class="mgi__dropdown-menu__menu__regular-menu__item__content__text"
        >
          GRID WITH SIDEBAR
        </p>
      </div>
    </div>

    <div class="mgi__dropdown-menu__menu__regular-menu__item">
      <div class="mgi__dropdown-menu__menu__regular-menu__item__content">
        <p
          class="mgi__dropdown-menu__menu__regular-menu__item__content__text"
        >
          SINGLE LAYOUT
        </p>
      </div>
      <div class="mgi__dropdown-menu__menu__regular-menu__item__icon">
        <i class="fas fa-chevron-right"></i>
      </div>
    </div>
  </div>
</div>
  `);

  // Create the menu area element
  var menuAreaElement = utils.createElementFromHTML(`
  <div id="portfolio-dropdown-menu-area" class="mgi__dropdown-menu__areas"></div>
  `);

  // Append menu into the body
  body.appendChild(menuElement);
  body.appendChild(menuAreaElement);

  document.getElementById(
    "portfolio-dropdown-menu-area"
  ).onclick = closePortfolioDropdownMenu;
}

// The function to close portfolio dropdown menu
function closePortfolioDropdownMenu() {
  // Reference and remove the portfolio dropdown menu area
  document.getElementById("portfolio-dropdown-menu-area").remove();

  // Reference and remove the portfolio dropdown menu
  document.getElementById("portfolio-dropdown-menu").remove();

  // Make the portfolio button back to white
  document
    .getElementById("open-portfolio-menu-button-static-header")
    .classList.remove("mgi__header-options__option--blue");
}
//******************** End Portfolio dropdown menu *********************/

export { openPortfolioDropdownMenu };
