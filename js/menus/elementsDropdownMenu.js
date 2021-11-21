import * as utils from "./../sliderUtils.js";

// Get the root CSS element
var r = document.querySelector(":root");

//******************** Elements dropdown menu *********************/
// The function to open elements dropdown menu
function openElementsDropdownMenu() {
  // Get the body element
  var body = document.getElementsByTagName("BODY")[0];

  // Make the elements button blue
  document.getElementById(
    "open-elements-menu-button-static-header"
  ).style.color = "#3498db";

  // This menu will be on the very right
  r.style.setProperty("--dropdown-menu-margin", `calc(5% + 80px + 2.4rem)`);

  // Create the menu element
  var menuElement = utils.createElementFromHTML(`
    <div id="element-dropdown-menu" class="mgi__dropdown-menu__menu">
    <div id="elements-dropdown-menu" class="mgi__dropdown-menu__menu__wide-menu">
      <div class="mgi__dropdown-menu__menu__wide-menu__column">
        <p class="mgi__dropdown-menu__menu__wide-menu__column__title">
          ELEMENT 1
        </p>
  
        <div class="mgi__dropdown-menu__menu__wide-menu__column__item">
          <div class="mgi__dropdown-menu__menu__wide-menu__column__item__left">
            <i class="fa fa-navicon menu-icon"></i>
          </div>
  
          <div class="mgi__dropdown-menu__menu__wide-menu__column__item__right">
            <p
              class="mgi__dropdown-menu__menu__wide-menu__column__item__right__text"
            >
              ACCORDION
            </p>
          </div>
        </div>
  
        <div class="mgi__dropdown-menu__menu__wide-menu__column__item">
          <div class="mgi__dropdown-menu__menu__wide-menu__column__item__left">
            <i class="fa fa-exclamation-triangle menu-icon"></i>
          </div>
  
          <div class="mgi__dropdown-menu__menu__wide-menu__column__item__right">
            <p
              class="mgi__dropdown-menu__menu__wide-menu__column__item__right__text"
            >
              ALERT
            </p>
          </div>
        </div>
  
        <div class="mgi__dropdown-menu__menu__wide-menu__column__item">
          <div class="mgi__dropdown-menu__menu__wide-menu__column__item__left">
            <i class="fa fa-magic menu-icon"></i>
          </div>
  
          <div class="mgi__dropdown-menu__menu__wide-menu__column__item__right">
            <p
              class="mgi__dropdown-menu__menu__wide-menu__column__item__right__text"
            >
              ANIMATIONS
            </p>
          </div>
        </div>
  
        <div class="mgi__dropdown-menu__menu__wide-menu__column__item">
          <div class="mgi__dropdown-menu__menu__wide-menu__column__item__left">
            <i class="fas fa-play-circle"></i>
          </div>
  
          <div class="mgi__dropdown-menu__menu__wide-menu__column__item__right">
            <p
              class="mgi__dropdown-menu__menu__wide-menu__column__item__right__text"
            >
              BUTTONS
            </p>
          </div>
        </div>
  
        <div class="mgi__dropdown-menu__menu__wide-menu__column__item">
          <div class="mgi__dropdown-menu__menu__wide-menu__column__item__left">
            <i class="far fa-image"></i>
          </div>
  
          <div class="mgi__dropdown-menu__menu__wide-menu__column__item__right">
            <p
              class="mgi__dropdown-menu__menu__wide-menu__column__item__right__text"
            >
              CAROUSEL
            </p>
          </div>
        </div>
  
        <div class="mgi__dropdown-menu__menu__wide-menu__column__item">
          <div class="mgi__dropdown-menu__menu__wide-menu__column__item__left">
            <i class="fas fa-chart-area"></i>
          </div>
  
          <div class="mgi__dropdown-menu__menu__wide-menu__column__item__right">
            <p
              class="mgi__dropdown-menu__menu__wide-menu__column__item__right__text"
            >
              CHARTS
            </p>
          </div>
        </div>
  
        <div class="mgi__dropdown-menu__menu__wide-menu__column__item">
          <div class="mgi__dropdown-menu__menu__wide-menu__column__item__left">
            <i class="fab fa-slideshare"></i>
          </div>
  
          <div class="mgi__dropdown-menu__menu__wide-menu__column__item__right">
            <p
              class="mgi__dropdown-menu__menu__wide-menu__column__item__right__text"
            >
              CLIENTS
            </p>
          </div>
        </div>
      </div>
  
      <div class="mgi__dropdown-menu__menu__wide-menu__column">
        <p class="mgi__dropdown-menu__menu__wide-menu__column__title">
          ELEMENT 2
        </p>
  
        <div class="mgi__dropdown-menu__menu__wide-menu__column__item">
          <div class="mgi__dropdown-menu__menu__wide-menu__column__item__left">
            <i class="far fa-clock"></i>
          </div>
  
          <div class="mgi__dropdown-menu__menu__wide-menu__column__item__right">
            <p
              class="mgi__dropdown-menu__menu__wide-menu__column__item__right__text"
            >
              COUNTERS
            </p>
          </div>
        </div>
  
        <div class="mgi__dropdown-menu__menu__wide-menu__column__item">
          <div class="mgi__dropdown-menu__menu__wide-menu__column__item__left">
            <i class="fas fa-arrows-alt-h"></i>
          </div>
  
          <div class="mgi__dropdown-menu__menu__wide-menu__column__item__right">
            <p
              class="mgi__dropdown-menu__menu__wide-menu__column__item__right__text"
            >
              SEPARATORS
            </p>
          </div>
        </div>
  
        <div class="mgi__dropdown-menu__menu__wide-menu__column__item">
          <div class="mgi__dropdown-menu__menu__wide-menu__column__item__left">
            <i class="fas fa-check-square"></i>
          </div>
  
          <div class="mgi__dropdown-menu__menu__wide-menu__column__item__right">
            <p
              class="mgi__dropdown-menu__menu__wide-menu__column__item__right__text"
            >
              FORMS
            </p>
          </div>
        </div>
  
        <div class="mgi__dropdown-menu__menu__wide-menu__column__item">
          <div class="mgi__dropdown-menu__menu__wide-menu__column__item__left">
            <i class="fas fa-map"></i>
          </div>
  
          <div class="mgi__dropdown-menu__menu__wide-menu__column__item__right">
            <p
              class="mgi__dropdown-menu__menu__wide-menu__column__item__right__text"
            >
              GOOGLE MAPS
            </p>
          </div>
        </div>
  
        <div class="mgi__dropdown-menu__menu__wide-menu__column__item">
          <div class="mgi__dropdown-menu__menu__wide-menu__column__item__left">
            <i class="fas fa-space-shuttle"></i>
          </div>
  
          <div class="mgi__dropdown-menu__menu__wide-menu__column__item__right">
            <p
              class="mgi__dropdown-menu__menu__wide-menu__column__item__right__text"
            >
              HEADINGS
            </p>
          </div>
        </div>
  
        <div class="mgi__dropdown-menu__menu__wide-menu__column__item">
          <div class="mgi__dropdown-menu__menu__wide-menu__column__item__left">
            <i class="fas fa-info-circle"></i>
          </div>
  
          <div class="mgi__dropdown-menu__menu__wide-menu__column__item__right">
            <p
              class="mgi__dropdown-menu__menu__wide-menu__column__item__right__text"
            >
              ICONS
            </p>
          </div>
        </div>
  
        <div class="mgi__dropdown-menu__menu__wide-menu__column__item">
          <div class="mgi__dropdown-menu__menu__wide-menu__column__item__left">
            <i class="fas fa-square"></i>
          </div>
  
          <div class="mgi__dropdown-menu__menu__wide-menu__column__item__right">
            <p
              class="mgi__dropdown-menu__menu__wide-menu__column__item__right__text"
            >
              ICON BOX
            </p>
          </div>
        </div>
      </div>
  
      <div class="mgi__dropdown-menu__menu__wide-menu__column">
        <p class="mgi__dropdown-menu__menu__wide-menu__column__title">
          ELEMENT 3
        </p>
  
        <div class="mgi__dropdown-menu__menu__wide-menu__column__item">
          <div class="mgi__dropdown-menu__menu__wide-menu__column__item__left">
            <i class="fab fa-fonticons"></i>
          </div>
  
          <div class="mgi__dropdown-menu__menu__wide-menu__column__item__right">
            <p
              class="mgi__dropdown-menu__menu__wide-menu__column__item__right__text"
            >
              ICON LIST
            </p>
          </div>
        </div>
  
        <div class="mgi__dropdown-menu__menu__wide-menu__column__item">
          <div class="mgi__dropdown-menu__menu__wide-menu__column__item__left">
            <i class="fas fa-images"></i>
          </div>
  
          <div class="mgi__dropdown-menu__menu__wide-menu__column__item__right">
            <p
              class="mgi__dropdown-menu__menu__wide-menu__column__item__right__text"
            >
              IMAGE STYLES
            </p>
          </div>
        </div>
  
        <div class="mgi__dropdown-menu__menu__wide-menu__column__item">
          <div class="mgi__dropdown-menu__menu__wide-menu__column__item__left">
            <i class="fas fa-plus-circle"></i>
          </div>
  
          <div class="mgi__dropdown-menu__menu__wide-menu__column__item__right">
            <p
              class="mgi__dropdown-menu__menu__wide-menu__column__item__right__text"
            >
              LIGHT BOX
            </p>
          </div>
        </div>
  
        <div class="mgi__dropdown-menu__menu__wide-menu__column__item">
          <div class="mgi__dropdown-menu__menu__wide-menu__column__item__left">
            <i class="fas fa-list"></i>
          </div>
  
          <div class="mgi__dropdown-menu__menu__wide-menu__column__item__right">
            <p
              class="mgi__dropdown-menu__menu__wide-menu__column__item__right__text"
            >
              LIST AND PANELS
            </p>
          </div>
        </div>
  
        <div class="mgi__dropdown-menu__menu__wide-menu__column__item">
          <div class="mgi__dropdown-menu__menu__wide-menu__column__item__left">
            <i class="fas fa-star-half-alt"></i>
          </div>
  
          <div class="mgi__dropdown-menu__menu__wide-menu__column__item__right">
            <p
              class="mgi__dropdown-menu__menu__wide-menu__column__item__right__text"
            >
              OVERLAY BOX
            </p>
          </div>
        </div>
  
        <div class="mgi__dropdown-menu__menu__wide-menu__column__item">
          <div class="mgi__dropdown-menu__menu__wide-menu__column__item__left">
            <i class="fas fa-minus-square"></i>
          </div>
  
          <div class="mgi__dropdown-menu__menu__wide-menu__column__item__right">
            <p
              class="mgi__dropdown-menu__menu__wide-menu__column__item__right__text"
            >
              OVERLAY BUTTONS
            </p>
          </div>
        </div>
  
        <div class="mgi__dropdown-menu__menu__wide-menu__column__item">
          <div class="mgi__dropdown-menu__menu__wide-menu__column__item__left">
            <i class="fas fa-bars"></i>
          </div>
  
          <div class="mgi__dropdown-menu__menu__wide-menu__column__item__right">
            <p
              class="mgi__dropdown-menu__menu__wide-menu__column__item__right__text"
            >
              PAGINATION
            </p>
          </div>
        </div>
      </div>
  
      <div class="mgi__dropdown-menu__menu__wide-menu__column">
        <p class="mgi__dropdown-menu__menu__wide-menu__column__title">
          ELEMENT 4
        </p>
  
        <div class="mgi__dropdown-menu__menu__wide-menu__column__item">
          <div class="mgi__dropdown-menu__menu__wide-menu__column__item__left">
            <i class="fas fa-chart-pie"></i>
          </div>
  
          <div class="mgi__dropdown-menu__menu__wide-menu__column__item__right">
            <p
              class="mgi__dropdown-menu__menu__wide-menu__column__item__right__text"
            >
              PIE CHART
            </p>
          </div>
        </div>
  
        <div class="mgi__dropdown-menu__menu__wide-menu__column__item">
          <div class="mgi__dropdown-menu__menu__wide-menu__column__item__left">
            <i class="fas fa-tags"></i>
          </div>
  
          <div class="mgi__dropdown-menu__menu__wide-menu__column__item__right">
            <p
              class="mgi__dropdown-menu__menu__wide-menu__column__item__right__text"
            >
              PRICING BOX
            </p>
          </div>
        </div>
  
        <div class="mgi__dropdown-menu__menu__wide-menu__column__item">
          <div class="mgi__dropdown-menu__menu__wide-menu__column__item__left">
            <i class="fa fa-th-large menu-icon"></i>
          </div>
  
          <div class="mgi__dropdown-menu__menu__wide-menu__column__item__right">
            <p
              class="mgi__dropdown-menu__menu__wide-menu__column__item__right__text"
            >
              RESPONSIVE GRID
            </p>
          </div>
        </div>
  
        <div class="mgi__dropdown-menu__menu__wide-menu__column__item">
          <div class="mgi__dropdown-menu__menu__wide-menu__column__item__left">
            <i class="fas fa-table"></i>
          </div>
  
          <div class="mgi__dropdown-menu__menu__wide-menu__column__item__right">
            <p
              class="mgi__dropdown-menu__menu__wide-menu__column__item__right__text"
            >
              TABLES
            </p>
          </div>
        </div>
  
        <div class="mgi__dropdown-menu__menu__wide-menu__column__item">
          <div class="mgi__dropdown-menu__menu__wide-menu__column__item__left">
            <i class="fas fa-folder"></i>
          </div>
  
          <div class="mgi__dropdown-menu__menu__wide-menu__column__item__right">
            <p
              class="mgi__dropdown-menu__menu__wide-menu__column__item__right__text"
            >
              TABS
            </p>
          </div>
        </div>
  
        <div class="mgi__dropdown-menu__menu__wide-menu__column__item">
          <div class="mgi__dropdown-menu__menu__wide-menu__column__item__left">
            <i class="fas fa-comment-dots"></i>
          </div>
  
          <div class="mgi__dropdown-menu__menu__wide-menu__column__item__right">
            <p
              class="mgi__dropdown-menu__menu__wide-menu__column__item__right__text"
            >
              MODAL POPUP
            </p>
          </div>
        </div>
  
        <div class="mgi__dropdown-menu__menu__wide-menu__column__item">
          <div class="mgi__dropdown-menu__menu__wide-menu__column__item__left">
            <i class="fas fa-tag"></i>
          </div>
  
          <div class="mgi__dropdown-menu__menu__wide-menu__column__item__right">
            <p
              class="mgi__dropdown-menu__menu__wide-menu__column__item__right__text"
            >
              TOOL TIP
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
    `);

  // Create the menu area element
  var menuAreaElement = utils.createElementFromHTML(
    `<div id="elements-dropdown-menu-area" class="mgi__dropdown-menu__areas"></div>`
  );

  // Append menu to the body
  body.appendChild(menuElement);
  body.appendChild(menuAreaElement);

  document.getElementById(
    "elements-dropdown-menu-area"
  ).onclick = closeElementsDropdownMenu;
}

// The function to close elements dropdown menu
function closeElementsDropdownMenu() {
  // Reference and remove the elements dropdown menu area
  document.getElementById("elements-dropdown-menu-area").remove();

  // Reference and remove the elements dropdown menu
  document.getElementById("elements-dropdown-menu").remove();

  // Make the elements button white
  document.getElementById(
    "open-elements-menu-button-static-header"
  ).style.color = "white";
}
//******************** End elements dropdown menu *********************/

export { openElementsDropdownMenu };
