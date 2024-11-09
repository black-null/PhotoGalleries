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
    /**
     * @type {HTMLDivElement}
     */
    let div = document.querySelector("#image");
    div.innerHTML = previewPic.getAttribute("alt");

    div.style.backgroundImage = "url('" + previewPic.getAttribute('src') + "')";
}

function unDo() {
    /**
     * @type {HTMLDivElement}
     */
    let div = document.querySelector("#image");
    div.innerHTML = "Hover over an image below to display here.";

    div.style.backgroundImage = "url('')";
}