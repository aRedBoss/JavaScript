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
        throw new Error("Network response was not OK");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Search Results:", data);

      data.forEach((item) => {
        console.log(`Name: ${item.show.name}`);
        console.log(`Genre(s): ${item.show.genres.join(", ")}`);
        console.log(`Summary: ${item.show.summary.replace(/<\/?[^>]+(>|$)/g, "")}`);
        console.log(`URL: ${item.show.url}`);
        console.log("------------------------");
      });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
});
