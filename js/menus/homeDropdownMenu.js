import * as utils from "./../sliderUtils.js";

// Get the root CSS element
var r = document.querySelector(":root");

//******************** Home dropdown menu *********************/
// The function to open home dropdown menu
function openHomeDropdownMenu() {
  // Get the body element
  var body = document.getElementsByTagName("BODY")[0];

  // Make the home button blue
  document
    .getElementById("open-home-menu-button-static-header")
    .classList.add("mgi__header-options__option--blue");

  // Get the elements, shop, blog, portfolio, features, pages, headers open menu button
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
  var pageHeadersOpenButton = document.getElementById(
    "open-headers-menu-button-static-header"
  );

  // Adjust margin of menu
  r.style.setProperty(
    "--dropdown-menu-margin",
    `calc(5% + 80px + 11.6rem + ${
      elementsMenuOpenButton.clientWidth +
      shopMenuOpenButton.clientWidth +
      blogMenuOpenButton.clientWidth +
      portfolioMenuOpenButton.clientWidth +
      featuresMenuOpenButton.clientWidth +
      pagesMenuOpenButton.clientWidth +
      pageHeadersOpenButton.clientWidth
    }px)`
  );

  // Create the menu element
  var menuElement = utils.createElementFromHTML(`
  <div id="home-dropdown-menu" class="mgi__dropdown-menu__menu">
  <div class="mgi__dropdown-menu__menu__regular-menu">
    <div class="mgi__dropdown-menu__menu__regular-menu__item">
      <div class="mgi__dropdown-menu__menu__regular-menu__item__content">
        <p
          class="mgi__dropdown-menu__menu__regular-menu__item__content__text"
        >
          HOME CORPORATE
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
          HOME AGENCY
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
          HOME PORTFOLIO
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
          LANDING PAGE
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
          HOME SHOP
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
          HOME BLOG
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
          HOME ONE PAGE
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
          HOME INDUSTRIES
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
          HOME BUSINESS
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
          HOME FLAT DESIGN
        </p>
      </div>
    </div>

    <div class="mgi__dropdown-menu__menu__regular-menu__item">
      <div class="mgi__dropdown-menu__menu__regular-menu__item__content">
        <p
          class="mgi__dropdown-menu__menu__regular-menu__item__content__text"
        >
          HOME MATERIAL DESIGN
        </p>
      </div>
    </div>

    <div class="mgi__dropdown-menu__menu__regular-menu__item">
      <div class="mgi__dropdown-menu__menu__regular-menu__item__content">
        <p
          class="mgi__dropdown-menu__menu__regular-menu__item__content__text"
        >
          HOME APP
        </p>
      </div>
    </div>

    <div class="mgi__dropdown-menu__menu__regular-menu__item">
      <div class="mgi__dropdown-menu__menu__regular-menu__item__content">
        <p
          class="mgi__dropdown-menu__menu__regular-menu__item__content__text"
        >
          HOME EVENTS
        </p>
      </div>
    </div>

    <div class="mgi__dropdown-menu__menu__regular-menu__item">
      <div class="mgi__dropdown-menu__menu__regular-menu__item__content">
        <p
          class="mgi__dropdown-menu__menu__regular-menu__item__content__text"
        >
          HOME FREELANCER
        </p>
      </div>
    </div>
  </div>
</div>
  `);

  // Append menu to the body
  body.appendChild(menuElement);

  document.getElementById(
    "home-dropdown-menu"
  ).onmouseleave = closeHomeDropdownMenu;
}

// THe function to close home dropdown menu
function closeHomeDropdownMenu() {
  // Reference and remove the home dropdown menu
  document.getElementById("home-dropdown-menu").remove();
  
  // Make the home button back to white
  document
    .getElementById("open-home-menu-button-static-header")
    .classList.remove("mgi__header-options__option--blue");
}
//******************** End Home dropdown menu *********************/

export { openHomeDropdownMenu };
