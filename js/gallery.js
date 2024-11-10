const BG_IMAGE = "url('')";
const TEXT = "Hover over an image below to display here.";

/* Add the new function for adding the tabfocus attribute

a. Add a console.log message to make sure that your event triggers

b. Write a for loop to loop through each image

c. Add the tabindex attributes
*/

function addTabIndex() {
    console.log("Event triggered!");
    /**
     * @type {NodeListOf<HTMLImageElement>}
     */
    let images = document.querySelectorAll(".preview");
    images.forEach((img) => img.setAttribute("tabindex", 0));
}

/**
 * @param {HTMLImageElement} previewPic
 */
function upDate(previewPic) {
    const div = document.querySelector("#image");
    div.innerHTML = previewPic.getAttribute("alt");
    div.style.backgroundImage = `url('${previewPic.getAttribute("src")}')`;
}

function unDo() {
    /**
     * @type {HTMLDivElement}
     */
    const div = document.querySelector("#image");
    div.innerHTML = TEXT;
    div.style.backgroundImage = BG_IMAGE;
}
