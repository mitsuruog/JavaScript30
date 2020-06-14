const endpoint = "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

async function main() {
  const cities = await fetch(endpoint).then(blob => blob.json());

  // https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function findMaches(wordToMatch) {
    const regexp = new RegExp(wordToMatch, "gi");
    return cities.filter(place => {
      return place.city.match(regexp) || place.state.match(regexp);
    });
  }

  function displayMatches(e) {
    const {
      value
    } = e.currentTarget;
    const html = findMaches(value)
      .map(place => {
        const regexp = new RegExp(value, "gi");
        const cityName = place.city.replace(regexp, `<span class="hl">${value}</span>`);
        const stateName = place.state.replace(regexp, `<span class="hl">${value}</span>`);
        return `
          <li>
            <span class="name">${cityName}, ${stateName}</span>
            <span class="population">${numberWithCommas(place.population)}</span>
          </li>
        `
      }).join("");
    suggestions.innerHTML = html;
  }

  const searchInput = document.querySelector(".search");
  const suggestions = document.querySelector(".suggestions");

  searchInput.addEventListener("input", displayMatches);
}

main();