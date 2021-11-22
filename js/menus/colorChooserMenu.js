// Get the root CSS element
var r = document.querySelector(":root");

function setUpColorChooser() {
  document.getElementById("mgi__color-chooser-color1").onclick = () => {
    changeMainThemeColor("#1abc9c");
  };

  document.getElementById("mgi__color-chooser-color2").onclick = () => {
    changeMainThemeColor("#006b63");
  };

  document.getElementById("mgi__color-chooser-color3").onclick = () => {
    changeMainThemeColor("#336e7b");
  };

  document.getElementById("mgi__color-chooser-color4").onclick = () => {
    changeMainThemeColor("#e67e22");
  };

  document.getElementById("mgi__color-chooser-color5").onclick = () => {
    changeMainThemeColor("#ff6a30");
  };

  document.getElementById("mgi__color-chooser-color6").onclick = () => {
    changeMainThemeColor("#eaab00");
  };

  document.getElementById("mgi__color-chooser-color7").onclick = () => {
    changeMainThemeColor("#37479d");
  };

  document.getElementById("mgi__color-chooser-color8").onclick = () => {
    changeMainThemeColor("#3498db");
  };

  document.getElementById("mgi__color-chooser-color9").onclick = () => {
    changeMainThemeColor("#32c5d2");
  };

  document.getElementById("mgi__color-chooser-color10").onclick = () => {
    changeMainThemeColor("#5893dd");
  };

  document.getElementById("mgi__color-chooser-color11").onclick = () => {
    changeMainThemeColor("#e7505a");
  };

  document.getElementById("mgi__color-chooser-color12").onclick = () => {
    changeMainThemeColor("#cdb083");
  };
}

// The function to change main theme color
function changeMainThemeColor(colorCode) {
  r.style.setProperty("--main-theme-color", colorCode);
}

export { setUpColorChooser };
