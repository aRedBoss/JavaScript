"use strict";

document.getElementById("searchForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const query = document.getElementById("query").value.trim();
  if (!query) {
    console.error("Please enter a valid TV series name.");
    return;
  }

  const apiUrl = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`;

  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      document.getElementById("results").innerHTML = '';

      if (data.length === 0) {
        console.log("No results found. Try another query.");
      } else {
        data.forEach((item) => {
          const tvShow = item.show;

          const article = document.createElement('article');

          const showName = document.createElement('h2');
          showName.textContent = tvShow.name;
          article.appendChild(showName);

          const showLink = document.createElement('a');
          showLink.href = tvShow.url;
          showLink.target = "_blank";
          showLink.textContent = 'Go to details';
          article.appendChild(showLink);

          const showImage = document.createElement('img');
          showImage.src = tvShow.image?.medium || '';
          showImage.alt = tvShow.name || 'No image available';
          article.appendChild(showImage);

          const showSummary = document.createElement('div');
          showSummary.innerHTML = tvShow.summary?.replace(/<\/?[^>]+(>|$)/g, "") || 'No summary available.';
          article.appendChild(showSummary);

          document.getElementById("results").appendChild(article);
        });
      }
    })
    .catch((error) => {
      console.error("Error fetching data from the API:", error);
    });
});
