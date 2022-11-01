import { fetchApiData } from "../../data";

export default class FilterGenres extends HTMLElement {
  constructor() {
    super();
  }

  async renderGenres() {
    const genres = await fetchApiData("genre/movie/list");
    const genresMap = {};
    for (let genre of genres.data.genres) {
      genresMap[genre.id] = genre.name;
      const genreItem = document.createElement("filter-genre-item");
      genreItem.genre = genre;
      genreItem.setAttribute("data-target", this.getAttribute("data-target"));
      this.querySelector("#list-genre").appendChild(genreItem);
    }
    localStorage.setItem("genres", JSON.stringify(genresMap));
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="mt-4">
      <span class="text-slate-200">Genres</span>
      <div id="list-genre" class="flex flex-wrap gap-x-3 gap-y-2 mt-2"></div>
    </div>
    `;
    this.renderGenres();
  }
}
