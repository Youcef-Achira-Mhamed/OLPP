boolSidebar = true;
const divChapters = document.querySelector(".div-chapters");
const arrow = document.querySelector(".image-arrow");
const container = document.querySelector(".container");
const leftContainer = document.querySelector(".left-container");
const currentVidio = document.querySelector(".current-vidio");
function chaptersAnimation() {
  console.log("Arrow clicked!");
  if (boolSidebar) {
    divChapters.style.display = "none";
    container.style.gridTemplateColumns = "1fr 60px";
    arrow.style.transform = "rotate(180deg)";
    leftContainer.style.gridTemplateRows = "700px 1fr";
    currentVidio.style.top = "10px";
  } else {
    divChapters.style.display = "flex";
    container.style.gridTemplateColumns = "2fr 1fr";
    arrow.style.transform = "rotate(0deg)";
    leftContainer.style.gridTemplateRows = "550px 1fr";
    currentVidio.style.top = "5%";
  }
  boolSidebar = !boolSidebar;
}
function likeComment(id) {
  const reaction = document.getElementById(id);
  reaction.innerHTML = `
  <div id=${id}>
                  <figure class="like">
                    <img
                      src="../resources/heart-n-red.png"
                      alt="300"
                      width="30px"
                      onclick="likeComment(${id})"
                    />
                    <figcaption>100</figcaption>
                  </figure>
                  <figure class="unlike">
                    <img
                      src="../resources/heart-b-empty.png"
                      alt="45"
                      width="30px"
                      onclick="unlikeComment(${id})"
                    />
                    <figcaption>50</figcaption>
                  </figure>
                  </div>
    `;
  console.log("succsdfsdf");
}
function unlikeComment(id) {
  const reaction = document.getElementById(id);
  console.log("succsdfsdf2");
  reaction.innerHTML = `
  <div id=${id}>
                  <figure class="like">
                    <img
                      src="../resources/heart-n-empty.png"
                      alt="99"
                      width="30px"
                      onclick="likeComment(${id})"
                    />
                    <figcaption>100</figcaption>
                  </figure>
                  <figure class="unlike">
                    <img
                      src="../resources/heart-b-black.png"
                      alt="100"
                      width="30px"
                      onclick="unlikeComment(${id})"
                    />
                    <figcaption>50</figcaption>
                  </figure>
                  </div>
    `;
  console.log("succsdfsdf3");
}
