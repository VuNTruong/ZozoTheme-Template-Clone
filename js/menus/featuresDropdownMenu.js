import * as utils from "./../sliderUtils.js";

// Get the root CSS element
var r = document.querySelector(":root");

//******************** Features dropdown menu *********************/
// The function to open features dropdown menu
function openFeaturesDropdownMenu() {
  // Get the body element
  var body = document.getElementsByTagName("BODY")[0];

  // Get the elements, shop, blog, portfolio menu open button
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

  // Make the features button blue
  document.getElementById(
    "open-features-menu-button-static-header"
  ).style.color = "#3498db";

  // Adjust margin of menu
  r.style.setProperty(
    "--dropdown-menu-margin",
    `calc(5% + 80px + 7.2rem + ${
      elementsMenuOpenButton.clientWidth +
      shopMenuOpenButton.clientWidth +
      blogMenuOpenButton.clientWidth +
      portfolioMenuOpenButton.clientWidth
    }px)`
  );

  // Create the menu element
  var menuElement = utils.createElementFromHTML(`
  <div id="features-dropdown-menu" class="mgi__dropdown-menu__menu">
  <div class="mgi__dropdown-menu__menu__regular-menu">
    <div class="mgi__dropdown-menu__menu__regular-menu__item">
      <div class="mgi__dropdown-menu__menu__regular-menu__item__content">
        <p
          class="mgi__dropdown-menu__menu__regular-menu__item__content__text"
        >
          PAGE TITLE
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
          FOOTER
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
          BACKGROUND
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
          TIMELINE
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
          PAGINATION
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
          IMAGE GALLERY
        </p>
      </div>
    </div>

    <div class="mgi__dropdown-menu__menu__regular-menu__item">
      <div class="mgi__dropdown-menu__menu__regular-menu__item__content">
        <p
          class="mgi__dropdown-menu__menu__regular-menu__item__content__text"
        >
          VIDEO GALLERY
        </p>
      </div>
    </div>

    <div class="mgi__dropdown-menu__menu__regular-menu__item">
      <div class="mgi__dropdown-menu__menu__regular-menu__item__content">
        <p
          class="mgi__dropdown-menu__menu__regular-menu__item__content__text"
        >
          FULL RTL DEMO
        </p>
      </div>
    </div>
  </div>
</div>
  `);

  // Create the menu area element
  var menuAreaElement = utils.createElementFromHTML(`
  <div id="features-dropdown-menu-area" class="mgi__dropdown-menu__areas"></div>
  `);

  // Append menu into the body
  body.appendChild(menuElement);
  body.appendChild(menuAreaElement);

  document.getElementById(
    "features-dropdown-menu-area"
  ).onclick = closeFeaturesDropdownMenu;
}

// The function to close features dropdown menu
function closeFeaturesDropdownMenu() {
  // Reference and remove the features dropdown menu area
  document.getElementById("features-dropdown-menu-area").remove();

  // Reference and remove the features dropdown menu
  document.getElementById("features-dropdown-menu").remove();

  // Make the features button back to white
  document.getElementById(
    "open-features-menu-button-static-header"
  ).style.color = "white";
}
//******************** End Features dropdown menu *********************/

export { openFeaturesDropdownMenu };
