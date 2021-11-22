import * as utils from "./../sliderUtils.js";

// Get the root CSS element
var r = document.querySelector(":root");

//******************** Blog dropdown menu *********************/
// The function to open blog dropdown menu
function openBlogDropdownMenu() {
  // Get the body element
  var body = document.getElementsByTagName("BODY")[0];

  // Make the blog button blue
  document
    .getElementById("open-blog-menu-button-static-header")
    .classList.add("mgi__header-options__option--blue");

  // Get the elements, shop menu open button
  var elementsMenuOpenButton = document.getElementById(
    "open-elements-menu-button-static-header"
  );
  var shopMenuOpenButton = document.getElementById(
    "open-shop-menu-button-static-header"
  );

  // Adjust margin of menu
  r.style.setProperty(
    "--dropdown-menu-margin",
    `calc(5% + 80px + 4rem + ${
      elementsMenuOpenButton.clientWidth + shopMenuOpenButton.clientWidth
    }px)`
  );

  // Create the menu element
  var menuElement = utils.createElementFromHTML(
    `
    <div id="blog-dropdown-menu" class="mgi__dropdown-menu__menu">
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
            MASONRY LAYOUT
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
            CLASSIC LAYOUT
          </p>
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
            TIMELINE LAYOUT
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
            WITH SIDEBAR
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
            SINGLE LAYOUT
          </p>
        </div>
        <div class="mgi__dropdown-menu__menu__regular-menu__item__icon">
          <i class="fas fa-chevron-right"></i>
        </div>
      </div>
    </div>
  </div>
    `
  );

  // Create the menu area element
  var menuAreaElement = utils.createElementFromHTML(
    `<div id="blog-dropdown-menu-area" class="mgi__dropdown-menu__areas"></div>`
  );

  // Append menu into the body
  body.appendChild(menuElement);
  body.appendChild(menuAreaElement);

  document.getElementById(
    "blog-dropdown-menu-area"
  ).onclick = closeBlogDropdownMenu;
}

// The function to close blog dropdown menu
function closeBlogDropdownMenu() {
  // Reference and remove the blog dropdown menu area
  document.getElementById("blog-dropdown-menu-area").remove();

  // Reference and remove the blog dropdown menu
  document.getElementById("blog-dropdown-menu").remove();

  // Make the blog button back to white
  document
    .getElementById("open-blog-menu-button-static-header")
    .classList.remove("mgi__header-options__option--blue");
}
//******************** End Blog dropdown menu *********************/

export { openBlogDropdownMenu };
