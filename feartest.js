const sources = [
  "./pictures/scar9.jfif",
  "./pictures/scary1.jfif",
  "./pictures/scary2.jfif",
  "./pictures/scary3.jfif",
  "./pictures/scary4.jfif",
  "./pictures/scary5.jfif",
  "./pictures/scary6.jfif",
  "./pictures/scary8.jfif",
  "./pictures/scary7.jfif",
  "./pictures/scary10.jfif",
];

const button = document.getElementById("circle");
let scarecounter = getRandomInt(50, 1);
button.addEventListener("click", (event) => {
  console.log(event.target.innerText);
  const counter = parseInt(event.target.innerText) + 1;
  event.target.innerText = counter;
  if (counter == scarecounter) {
    console.log("boo");
    event.target.innerText = 0;
    const body = document.getElementsByTagName("body")[0];
    const image = document.createElement("img");
    image.className = "imageclass";
    const randomIdx = Math.floor(Math.random() * sources.length);
    image.src = sources[randomIdx];
    body.appendChild(image);
    setTimeout(() => {
      image.remove();
    }, 2000);
    scarecounter = getRandomInt(50, 1);
    console.log(randomIdx, sources[randomIdx]);
  }
});
function getRandomInt(range, offset) {
  return Math.floor(Math.random() * range) + offset;
}
