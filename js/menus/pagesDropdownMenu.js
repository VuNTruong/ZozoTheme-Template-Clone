import * as utils from "./../sliderUtils.js";

// Get the root CSS element
var r = document.querySelector(":root");

//******************** Pages dropdown menu *********************/
// The function to open page dropdown menu
function openPagesDropdownMenu() {
  // Get the body element
  var body = document.getElementsByTagName("BODY")[0];

  // Make the pages button blue
  document
    .getElementById("open-pages-menu-button-static-header")
    .classList.add("mgi__header-options__option--blue");

  // Get the elements, shop, blog, portfolio, features menu open button
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

  // Adjust margin of menu
  r.style.setProperty(
    "--dropdown-menu-margin",
    `calc(5% + 80px + 8.8rem + ${
      elementsMenuOpenButton.clientWidth +
      shopMenuOpenButton.clientWidth +
      blogMenuOpenButton.clientWidth +
      portfolioMenuOpenButton.clientWidth +
      featuresMenuOpenButton.clientWidth
    }px)`
  );

  // Create the menu element
  var menuElement = utils.createElementFromHTML(`
  <div id="pages-dropdown-menu" class="mgi__dropdown-menu__menu">
  <div
  class="mgi__dropdown-menu__menu__wide-menu"
>
  <div class="mgi__dropdown-menu__menu__wide-menu__column">
    <p class="mgi__dropdown-menu__menu__wide-menu__column__title">
      PAGE LAYOUT
    </p>

    <div class="mgi__dropdown-menu__menu__wide-menu__column__item">
      <div
        class="mgi__dropdown-menu__menu__wide-menu__column__item__left"
      >
        <i class="far fa-check-circle"></i>
      </div>

      <div
        class="mgi__dropdown-menu__menu__wide-menu__column__item__right"
      >
        <p
          class="mgi__dropdown-menu__menu__wide-menu__column__item__right__text"
        >
          ABOUT US 1
        </p>
      </div>
    </div>

    <div class="mgi__dropdown-menu__menu__wide-menu__column__item">
      <div
        class="mgi__dropdown-menu__menu__wide-menu__column__item__left"
      >
        <i class="far fa-check-circle"></i>
      </div>

      <div
        class="mgi__dropdown-menu__menu__wide-menu__column__item__right"
      >
        <p
          class="mgi__dropdown-menu__menu__wide-menu__column__item__right__text"
        >
          ABOUT US 2
        </p>
      </div>
    </div>

    <div class="mgi__dropdown-menu__menu__wide-menu__column__item">
      <div
        class="mgi__dropdown-menu__menu__wide-menu__column__item__left"
      >
        <i class="far fa-check-circle"></i>
      </div>

      <div
        class="mgi__dropdown-menu__menu__wide-menu__column__item__right"
      >
        <p
          class="mgi__dropdown-menu__menu__wide-menu__column__item__right__text"
        >
          ABOUT US 3
        </p>
      </div>
    </div>

    <div class="mgi__dropdown-menu__menu__wide-menu__column__item">
      <div
        class="mgi__dropdown-menu__menu__wide-menu__column__item__left"
      >
        <i class="far fa-check-circle"></i>
      </div>

      <div
        class="mgi__dropdown-menu__menu__wide-menu__column__item__right"
      >
        <p
          class="mgi__dropdown-menu__menu__wide-menu__column__item__right__text"
        >
          ABOUT ME
        </p>
      </div>
    </div>

    <div class="mgi__dropdown-menu__menu__wide-menu__column__item">
      <div
        class="mgi__dropdown-menu__menu__wide-menu__column__item__left"
      >
        <i class="far fa-check-circle"></i>
      </div>

      <div
        class="mgi__dropdown-menu__menu__wide-menu__column__item__right"
      >
        <p
          class="mgi__dropdown-menu__menu__wide-menu__column__item__right__text"
        >
          SERVICES 1
        </p>
      </div>
    </div>

    <div class="mgi__dropdown-menu__menu__wide-menu__column__item">
      <div
        class="mgi__dropdown-menu__menu__wide-menu__column__item__left"
      >
        <i class="far fa-check-circle"></i>
      </div>

      <div
        class="mgi__dropdown-menu__menu__wide-menu__column__item__right"
      >
        <p
          class="mgi__dropdown-menu__menu__wide-menu__column__item__right__text"
        >
          SERVICES 2
        </p>
      </div>
    </div>

    <div class="mgi__dropdown-menu__menu__wide-menu__column__item">
      <div
        class="mgi__dropdown-menu__menu__wide-menu__column__item__left"
      >
        <i class="far fa-check-circle"></i>
      </div>

      <div
        class="mgi__dropdown-menu__menu__wide-menu__column__item__right"
      >
        <p
          class="mgi__dropdown-menu__menu__wide-menu__column__item__right__text"
        >
          SERVICES 3
        </p>
      </div>
    </div>
  </div>

  <div class="mgi__dropdown-menu__menu__wide-menu__column">
    <p class="mgi__dropdown-menu__menu__wide-menu__column__title">
      PAGE LAYOUT
    </p>

    <div class="mgi__dropdown-menu__menu__wide-menu__column__item">
      <div
        class="mgi__dropdown-menu__menu__wide-menu__column__item__left"
      >
        <i class="far fa-check-circle"></i>
      </div>

      <div
        class="mgi__dropdown-menu__menu__wide-menu__column__item__right"
      >
        <p
          class="mgi__dropdown-menu__menu__wide-menu__column__item__right__text"
        >
          CONTACT 1
        </p>
      </div>
    </div>

    <div class="mgi__dropdown-menu__menu__wide-menu__column__item">
      <div
        class="mgi__dropdown-menu__menu__wide-menu__column__item__left"
      >
        <i class="far fa-check-circle"></i>
      </div>

      <div
        class="mgi__dropdown-menu__menu__wide-menu__column__item__right"
      >
        <p
          class="mgi__dropdown-menu__menu__wide-menu__column__item__right__text"
        >
          CONTACT 2
        </p>
      </div>
    </div>

    <div class="mgi__dropdown-menu__menu__wide-menu__column__item">
      <div
        class="mgi__dropdown-menu__menu__wide-menu__column__item__left"
      >
        <i class="far fa-check-circle"></i>
      </div>

      <div
        class="mgi__dropdown-menu__menu__wide-menu__column__item__right"
      >
        <p
          class="mgi__dropdown-menu__menu__wide-menu__column__item__right__text"
        >
          CONTACT 3
        </p>
      </div>
    </div>

    <div class="mgi__dropdown-menu__menu__wide-menu__column__item">
      <div
        class="mgi__dropdown-menu__menu__wide-menu__column__item__left"
      >
        <i class="far fa-check-circle"></i>
      </div>

      <div
        class="mgi__dropdown-menu__menu__wide-menu__column__item__right"
      >
        <p
          class="mgi__dropdown-menu__menu__wide-menu__column__item__right__text"
        >
          HOW IT WORKS?
        </p>
      </div>
    </div>

    <div class="mgi__dropdown-menu__menu__wide-menu__column__item">
      <div
        class="mgi__dropdown-menu__menu__wide-menu__column__item__left"
      >
        <i class="far fa-check-circle"></i>
      </div>

      <div
        class="mgi__dropdown-menu__menu__wide-menu__column__item__right"
      >
        <p
          class="mgi__dropdown-menu__menu__wide-menu__column__item__right__text"
        >
          TEAM
        </p>
      </div>
    </div>

    <div class="mgi__dropdown-menu__menu__wide-menu__column__item">
      <div
        class="mgi__dropdown-menu__menu__wide-menu__column__item__left"
      >
        <i class="far fa-check-circle"></i>
      </div>

      <div
        class="mgi__dropdown-menu__menu__wide-menu__column__item__right"
      >
        <p
          class="mgi__dropdown-menu__menu__wide-menu__column__item__right__text"
        >
          TESTIMONIALS
        </p>
      </div>
    </div>

    <div class="mgi__dropdown-menu__menu__wide-menu__column__item">
      <div
        class="mgi__dropdown-menu__menu__wide-menu__column__item__left"
      >
        <i class="far fa-check-circle"></i>
      </div>

      <div
        class="mgi__dropdown-menu__menu__wide-menu__column__item__right"
      >
        <p
          class="mgi__dropdown-menu__menu__wide-menu__column__item__right__text"
        >
          CAREER
        </p>
      </div>
    </div>
  </div>

  <div class="mgi__dropdown-menu__menu__wide-menu__column">
    <p class="mgi__dropdown-menu__menu__wide-menu__column__title">
      PAGE LAYOUT
    </p>

    <div class="mgi__dropdown-menu__menu__wide-menu__column__item">
      <div
        class="mgi__dropdown-menu__menu__wide-menu__column__item__left"
      >
        <i class="far fa-check-circle"></i>
      </div>

      <div
        class="mgi__dropdown-menu__menu__wide-menu__column__item__right"
      >
        <p
          class="mgi__dropdown-menu__menu__wide-menu__column__item__right__text"
        >
          FAQ
        </p>
      </div>
    </div>

    <div class="mgi__dropdown-menu__menu__wide-menu__column__item">
      <div
        class="mgi__dropdown-menu__menu__wide-menu__column__item__left"
      >
        <i class="far fa-check-circle"></i>
      </div>

      <div
        class="mgi__dropdown-menu__menu__wide-menu__column__item__right"
      >
        <p
          class="mgi__dropdown-menu__menu__wide-menu__column__item__right__text"
        >
          FAQ 2
        </p>
      </div>
    </div>

    <div class="mgi__dropdown-menu__menu__wide-menu__column__item">
      <div
        class="mgi__dropdown-menu__menu__wide-menu__column__item__left"
      >
        <i class="far fa-check-circle"></i>
      </div>

      <div
        class="mgi__dropdown-menu__menu__wide-menu__column__item__right"
      >
        <p
          class="mgi__dropdown-menu__menu__wide-menu__column__item__right__text"
        >
          FULL WIDTH
        </p>
      </div>
    </div>

    <div class="mgi__dropdown-menu__menu__wide-menu__column__item">
      <div
        class="mgi__dropdown-menu__menu__wide-menu__column__item__left"
      >
        <i class="far fa-check-circle"></i>
      </div>

      <div
        class="mgi__dropdown-menu__menu__wide-menu__column__item__right"
      >
        <p
          class="mgi__dropdown-menu__menu__wide-menu__column__item__right__text"
        >
          FULL WIDTH WIDE
        </p>
      </div>
    </div>

    <div class="mgi__dropdown-menu__menu__wide-menu__column__item">
      <div
        class="mgi__dropdown-menu__menu__wide-menu__column__item__left"
      >
        <i class="far fa-check-circle"></i>
      </div>

      <div
        class="mgi__dropdown-menu__menu__wide-menu__column__item__right"
      >
        <p
          class="mgi__dropdown-menu__menu__wide-menu__column__item__right__text"
        >
          LEFT SIDEBAR
        </p>
      </div>
    </div>

    <div class="mgi__dropdown-menu__menu__wide-menu__column__item">
      <div
        class="mgi__dropdown-menu__menu__wide-menu__column__item__left"
      >
        <i class="far fa-check-circle"></i>
      </div>

      <div
        class="mgi__dropdown-menu__menu__wide-menu__column__item__right"
      >
        <p
          class="mgi__dropdown-menu__menu__wide-menu__column__item__right__text"
        >
          RIGHT SIDEBAR
        </p>
      </div>
    </div>

    <div class="mgi__dropdown-menu__menu__wide-menu__column__item">
      <div
        class="mgi__dropdown-menu__menu__wide-menu__column__item__left"
      >
        <i class="far fa-check-circle"></i>
      </div>

      <div
        class="mgi__dropdown-menu__menu__wide-menu__column__item__right"
      >
        <p
          class="mgi__dropdown-menu__menu__wide-menu__column__item__right__text"
        >
          BOTH SIDEBAR
        </p>
      </div>
    </div>
  </div>

  <div class="mgi__dropdown-menu__menu__wide-menu__column">
    <p class="mgi__dropdown-menu__menu__wide-menu__column__title">
      PAGE LAYOUT
    </p>

    <div class="mgi__dropdown-menu__menu__wide-menu__column__item">
      <div
        class="mgi__dropdown-menu__menu__wide-menu__column__item__left"
      >
        <i class="far fa-check-circle"></i>
      </div>

      <div
        class="mgi__dropdown-menu__menu__wide-menu__column__item__right"
      >
        <p
          class="mgi__dropdown-menu__menu__wide-menu__column__item__right__text"
        >
          BOXED LAYOUT
        </p>
      </div>
    </div>

    <div class="mgi__dropdown-menu__menu__wide-menu__column__item">
      <div
        class="mgi__dropdown-menu__menu__wide-menu__column__item__left"
      >
        <i class="far fa-check-circle"></i>
      </div>

      <div
        class="mgi__dropdown-menu__menu__wide-menu__column__item__right"
      >
        <p
          class="mgi__dropdown-menu__menu__wide-menu__column__item__right__text"
        >
          LOGIN
        </p>
      </div>
    </div>

    <div class="mgi__dropdown-menu__menu__wide-menu__column__item">
      <div
        class="mgi__dropdown-menu__menu__wide-menu__column__item__left"
      >
        <i class="far fa-check-circle"></i>
      </div>

      <div
        class="mgi__dropdown-menu__menu__wide-menu__column__item__right"
      >
        <p
          class="mgi__dropdown-menu__menu__wide-menu__column__item__right__text"
        >
          REGISTRATION
        </p>
      </div>
    </div>

    <div class="mgi__dropdown-menu__menu__wide-menu__column__item">
      <div
        class="mgi__dropdown-menu__menu__wide-menu__column__item__left"
      >
        <i class="far fa-check-circle"></i>
      </div>

      <div
        class="mgi__dropdown-menu__menu__wide-menu__column__item__right"
      >
        <p
          class="mgi__dropdown-menu__menu__wide-menu__column__item__right__text"
        >
          404
        </p>
      </div>
    </div>

    <div class="mgi__dropdown-menu__menu__wide-menu__column__item">
      <div
        class="mgi__dropdown-menu__menu__wide-menu__column__item__left"
      >
        <i class="far fa-check-circle"></i>
      </div>

      <div
        class="mgi__dropdown-menu__menu__wide-menu__column__item__right"
      >
        <p
          class="mgi__dropdown-menu__menu__wide-menu__column__item__right__text"
        >
          SITE MAP
        </p>
      </div>
    </div>

    <div class="mgi__dropdown-menu__menu__wide-menu__column__item">
      <div
        class="mgi__dropdown-menu__menu__wide-menu__column__item__left"
      >
        <i class="far fa-check-circle"></i>
      </div>

      <div
        class="mgi__dropdown-menu__menu__wide-menu__column__item__right"
      >
        <p
          class="mgi__dropdown-menu__menu__wide-menu__column__item__right__text"
        >
          COMING SOON
        </p>
      </div>
    </div>

    <div class="mgi__dropdown-menu__menu__wide-menu__column__item">
      <div
        class="mgi__dropdown-menu__menu__wide-menu__column__item__left"
      >
        <i class="far fa-check-circle"></i>
      </div>

      <div
        class="mgi__dropdown-menu__menu__wide-menu__column__item__right"
      >
        <p
          class="mgi__dropdown-menu__menu__wide-menu__column__item__right__text"
        >
          MAINTENANCE
        </p>
      </div>
    </div>
  </div>
</div>
  </div>
  `);

  // Append menu to the body
  body.appendChild(menuElement);

  document.getElementById(
    "pages-dropdown-menu"
  ).onmouseleave = closePagesDropdownMenu;
}

// The function to close pages dropdown menu
function closePagesDropdownMenu() {
  // Reference and remove the pages dropdown menu
  document.getElementById("pages-dropdown-menu").remove();

  // Make the pages button back to white
  document
    .getElementById("open-pages-menu-button-static-header")
    .classList.remove("mgi__header-options__option--blue");
}
//******************** End Pages dropdown menu *********************/

export { openPagesDropdownMenu };
