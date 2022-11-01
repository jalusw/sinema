import { fetchApiData } from "../../data";

export default class MovieSection extends HTMLElement {
  constructor() {
    super();
  }

  async renderMovies() {
    const movies = await fetchApiData(this.getAttribute("data-path"));
    for (let movie of movies.data.results) {
      const movieElement = document.createElement("movie-item");
      movieElement.movie = movie;
      this.querySelector("#wrapper").appendChild(movieElement);
    }
  }

  connectedCallback() {
    this.innerHTML = `
      <h2 class="text-slate-300 font-bold">${this.getAttribute(
        "data-title"
      )}</h2>
      <div id="wrapper" class="flex space-x-3 overflow-x-scroll mt-2 pb-2 scrollbar-thin scrollbar-thumb-red-900 scrollbar-track-stone-900 "></div>
    `;
    this.renderMovies();
  }
}
