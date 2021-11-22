import * as utils from "./../sliderUtils.js";

// Get the root CSS element
var r = document.querySelector(":root");

//******************** Shop dropdown menu *********************/
// The function to open shop dropdown menu
function openShopDropdownMenu() {
  // Get the body element
  var body = document.getElementsByTagName("BODY")[0];

  // Make the shop button blue
  document
    .getElementById("open-shop-menu-button-static-header")
    .classList.add("mgi__header-options__option--blue");

  // Get the elements menu open button (to the right of this menu which will be the margin for this menu as well)
  var elementsMenuOpenButton = document.getElementById(
    "open-elements-menu-button-static-header"
  );

  // Adjust margin of menu
  r.style.setProperty(
    "--dropdown-menu-margin",
    `calc(5% + 80px + 2.4rem + ${elementsMenuOpenButton.clientWidth}px)`
  );

  // Create the menu element
  var menuElement = utils.createElementFromHTML(`
  <div id="shop-dropdown-menu" class="mgi__dropdown-menu__menu ">
    <div class="mgi__dropdown-menu__menu__regular-menu">
        <div class="mgi__dropdown-menu__menu__regular-menu__item">
        <div class="mgi__dropdown-menu__menu__regular-menu__item__content">
            <p class="mgi__dropdown-menu__menu__regular-menu__item__content__text">3 COLUMNS</p>
        </div>
        </div>

        <div class="mgi__dropdown-menu__menu__regular-menu__item">
        <div class="mgi__dropdown-menu__menu__regular-menu__item__content">
            <p class="mgi__dropdown-menu__menu__regular-menu__item__content__text">4 COLUMNS</p>
        </div>
        </div>

        <div class="mgi__dropdown-menu__menu__regular-menu__item">
        <div class="mgi__dropdown-menu__menu__regular-menu__item__content">
            <p class="mgi__dropdown-menu__menu__regular-menu__item__content__text">5 COLUMNS</p>
        </div>
        </div>

        <div class="mgi__dropdown-menu__menu__regular-menu__item">
        <div class="mgi__dropdown-menu__menu__regular-menu__item__content">
            <p class="mgi__dropdown-menu__menu__regular-menu__item__content__text">6 COLUMNS</p>
        </div>
        </div>

        <div class="mgi__dropdown-menu__menu__regular-menu__item">
        <div class="mgi__dropdown-menu__menu__regular-menu__item__content">
            <p class="mgi__dropdown-menu__menu__regular-menu__item__content__text">WITH SIDEBAR</p>
        </div>
        </div>

        <div class="mgi__dropdown-menu__menu__regular-menu__item">
        <div class="mgi__dropdown-menu__menu__regular-menu__item__content">
            <p class="mgi__dropdown-menu__menu__regular-menu__item__content__text">SHOP PAGE</p>
        </div>
        <div class="mgi__dropdown-menu__menu__regular-menu__item__icon">
            <i class="fas fa-chevron-right"></i>
        </div>
        </div>

        <div class="mgi__dropdown-menu__menu__regular-menu__item">
        <div class="mgi__dropdown-menu__menu__regular-menu__item__content">
            <p class="mgi__dropdown-menu__menu__regular-menu__item__content__text">SHOP SINGLE</p>
        </div>
        </div>
    </div>
    </div>
    `);

  // Create the menu area element
  var menuAreaElement = utils.createElementFromHTML(`
      <div id="shop-dropdown-menu-area" class="mgi__dropdown-menu__areas"></div>
    `);

  // Append menu into the body
  body.appendChild(menuElement);
  body.appendChild(menuAreaElement);

  document.getElementById(
    "shop-dropdown-menu-area"
  ).onclick = closeShopDropdownMenu;
}

// The function to close shop dropdown menu
function closeShopDropdownMenu() {
  // Reference and remove the shop dropdown menu area
  document.getElementById("shop-dropdown-menu-area").remove();

  // Reference and remove the shop dropdown menu
  document.getElementById("shop-dropdown-menu").remove();

  // Make the shop button white again
  document
    .getElementById("open-shop-menu-button-static-header")
    .classList.remove("mgi__header-options__option--blue");
}
//******************** End Shop dropdown menu *********************/

export { openShopDropdownMenu };
