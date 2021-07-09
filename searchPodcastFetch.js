async function fetchPodcasts() {
  const response = await fetch("podcast.json");
  let podcasts = await response.json();

  podcasts["podcasts"].map((podcast) => {
    document.querySelector(".podcast-middle-container").innerHTML += `
    <div id="card">
    <img class="card-image" src="${podcast.url}" />
    <h3>${podcast.title}</h3>
    <h4>${podcast.genre}</h4>
    <div class="btn-listen">Listen</div>
    </div>
      `;
  });
}

document.querySelector(".input-genre").onclick = () => {
  fetchPodcasts();
  document.querySelector(".podcast-middle-container > p").style.display =
    "none";
};
