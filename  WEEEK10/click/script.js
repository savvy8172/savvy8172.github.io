const catButton = document.querySelector("#cat-button");
console.log(cagButton);

const likes = document.querySelector("#likes");
console.log(likes);

let likeCount = 0;

catButton.addEventListener("click", increaseLikes);

function increaseLikes() {
// likeCount = likeCount + 1;
likeCount++;
console.log("I am clicked");
// likes.textContent = likeCount;
likes.innerHTML = `<h3>${likeCount} </h3>`;
}