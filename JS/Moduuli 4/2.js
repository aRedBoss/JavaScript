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
      console.log(`Search Results for "${query}":`, data);

      if (data.length === 0) {
        console.log("No results found. Try another query.");
      } else {
        data.forEach((item, index) => {
          console.log(`Result ${index + 1}:`);
          console.log(`- Name: ${item.show.name}`);
          console.log(`- Genre(s): ${item.show.genres.join(", ") || "N/A"}`);
          console.log(
            `- Summary: ${item.show.summary?.replace(/<\/?[^>]+(>|$)/g, "") || "No summary available."}`
          );
          console.log(`- Official Site: ${item.show.officialSite || "N/A"}`);
          console.log(`- TVMaze Link: ${item.show.url}`);
          console.log("-----------------------------");
        });
      }
    })
    .catch((error) => {
      console.error("Error fetching data from the API:", error);
    });
});
