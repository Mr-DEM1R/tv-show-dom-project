//You can edit ALL of the code here
/* function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  rootElem.textContent = `Got ${episodeList.length} episode(s)`;
} */

//window.onload = setup;

/* const promise1= new Promise((resolve, reject) => {
  resolve('data')
})
console.log(promise1) */

/// SECOND ONE

const ROOT = document.getElementById("root");
const SHOWS = getAllShows();

function startPage() {
  SHOWS.forEach((show) => {
    const CARD = document.createElement("div");
    CARD.className = 'show-card'
    const showName = document.createElement('h1');
    showName.innerText = show.name
    const image = document.createElement('img');
    image.src = show.image.medium
    const summary = document.createElement('p');
    summary.innerText = show.summary;
    CARD.appendChild(showName);
    CARD.appendChild(image)
    CARD.appendChild(summary);
    ROOT.appendChild(CARD)

  });
}

window.onload = startPage();
