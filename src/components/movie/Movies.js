import { fetchApiData } from "../../data";

export default class Movies extends HTMLElement {
  constructor() {
    super();
    this.currentPage = 1;
  }

  async renderMovies() {
    let parameterString = "";
    parameterString +=
      (this.getAttribute("data-filter-language") || "") &&
      `&with_original_language=${this.getAttribute("data-filter-language")}`;
    parameterString +=
      (this.getAttribute("data-filter-release-dates-from") || "") &&
      `&release_date.gte=${this.getAttribute(
        "data-filter-release-dates-from"
      )}`;
    parameterString +=
      (this.getAttribute("data-filter-release-dates-to") || "") &&
      `&release_date.lte=${this.getAttribute("data-filter-release-dates-to")}`;
    parameterString +=
      (this.getAttribute("data-filter-genres") || "") &&
      `&with_genres=${this.getAttribute("data-filter-genres")}`;
    parameterString += `&page=${this.currentPage}`;
    const movies = await fetchApiData("discover/movie", parameterString);
    this.render(movies);
  }

  render(movies) {
    for (let movie of movies.data.results) {
      const movieElement = document.createElement("movie-item");
      movieElement.movie = movie;
      this.querySelector("#wrapper").appendChild(movieElement);
    }
  }

  reRender() {
    this.querySelector("#wrapper").innerHTML = "";
    this.renderMovies();
  }

  static get observedAttributes() {
    return [
      "data-filter-language",
      "data-filter-release-dates-from",
      "data-filter-release-dates-to",
      "data-filter-genres",
    ];
  }

  attributeChangedCallback() {
    this.reRender();
  }

  connectedCallback() {
    this.renderMovies();

    this.innerHTML = `
      <div id="wrapper" class="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-3 w-full mt-2"></div>
      <button type="button" id="load-more-button" class="bg-red-700  p-2 shadow-sm block mx-auto  rounded shadow-sm px-4 mt-9  text-white hover:bg-red-800 transition duration-300">Load More</button>
    `;

    this.querySelector("#load-more-button").addEventListener("click", () => {
      this.currentPage++;
      this.renderMovies();
    });
  }
}
