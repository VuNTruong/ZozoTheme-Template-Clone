// Get the root CSS element
var r = document.querySelector(":root");

// The function to bring user to next page
function gotoNextPage(
  cardsElement,
  cardsCursorName,
  cardCurrentWidth,
  showingCardsArray,
  queueCardsArray,
  animationClassName
) {
  r.style.setProperty(cardsCursorName, `-${cardCurrentWidth}px`);

  // Pop the first element from cards queue array
  var poppedFirstElementFromCardsQueueArray = queueCardsArray[0];
  queueCardsArray.shift();

  // Push the popped first element from queue array
  // into showing cards array
  showingCardsArray.push(poppedFirstElementFromCardsQueueArray);

  // Reupdate list of cards
  reupdateListOfCards(cardsElement, showingCardsArray);

  // Animate
  cardsElement.classList.add(animationClassName);

  // Wait for the animation to end
  setTimeout(() => {
    // Remove the animation
    cardsElement.classList.remove(animationClassName);

    // Pop the first element in showing cards array
    var poppedFirstElementFromCardsShowingArray = showingCardsArray[0];
    showingCardsArray.shift();

    // Push the popped first element from cards showing array
    // into queue cards array
    queueCardsArray.push(poppedFirstElementFromCardsShowingArray);

    // Reupdate list of cards
    reupdateListOfCards(cardsElement, showingCardsArray);
  }, 200);
}

// The function to bring user to previous page
function gotoPreviousPage(
  cardsElement,
  cardsCursorName,
  cardCurrentWidth,
  showingCardsArray,
  queueCardsArray,
  animationClassName
) {
  r.style.setProperty(cardsCursorName, `-${cardCurrentWidth}px`);

  // Pop the last element in cards queue array
  var poppedLastElementFromCardsQueueArray = queueCardsArray.pop();

  // Push the popped last element from queue cards array
  // into showing cards array
  showingCardsArray.unshift(poppedLastElementFromCardsQueueArray);

  // Reupdate list of cards
  reupdateListOfCards(cardsElement, showingCardsArray);

  // Animate
  cardsElement.classList.add(animationClassName);

  // Wait for the animation to end
  setTimeout(() => {
    // Remove the animation
    cardsElement.classList.remove(animationClassName);

    // Pop the last element in showing cards array
    var poppedLastElementFromCardsShowingArray = showingCardsArray.pop();

    // Push the popped first element from showing cards array
    // into queue cards array
    queueCardsArray.unshift(poppedLastElementFromCardsShowingArray);
    // Reupdate list of cards
    // reupdateListOfCards();
  }, 200);
}

// The function to reupdate card layout
function reupdateListOfCards(cardsElement, showingCardsArray) {
  // Clear current child
  cardsElement.innerHTML = "";

  // Add all cards that will be shown to the list
  showingCardsArray.forEach((card) => {
    cardsElement.appendChild(card);
  });
}

// The function to adjust queue array and showing array
function adjustShowingAndQueueArray(
  numberOfShowingElements,
  fullElementsArray
) {
  var showingArray = [];
  var queueArray = [];

  for (let i = 0; i < numberOfShowingElements; i++) {
    showingArray.push(fullElementsArray[i]);
  }

  for (let i = numberOfShowingElements; i < fullElementsArray.length; i++) {
    queueArray.push(fullElementsArray[i]);
  }

  return {
    showingArray,
    queueArray,
  };
}

// The function to create HTML element from HTML string
function createElementFromHTML(htmlString) {
  var div = document.createElement("div");
  div.innerHTML = htmlString.trim();

  // Change this to div.childNodes to support multiple top-level nodes
  return div.firstChild;
}

export {
  gotoNextPage,
  gotoPreviousPage,
  adjustShowingAndQueueArray,
  createElementFromHTML,
};
