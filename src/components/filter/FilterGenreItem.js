export default class FilterGenreItem extends HTMLElement {
  constructor() {
    super();
  }
  set genre(genre) {
    this._genre = genre;
  }
  connectedCallback() {
    this.innerHTML = `
      <label class="inline-block text-slate-200 bg-stone-600 py-1 px-2 rounded relative cursor-pointer hover:bg-red-800 transition duration-300 ">
        <input id="filter-genre-${this._genre.id}" type="checkbox" class=" absolute opacity-0"/>
        <span>${this._genre.name}</span>
      </label>
    `;

    this.querySelector(`#filter-genre-${this._genre.id}`).addEventListener(
      "change",
      (e) => {
        this.querySelector("label").classList.toggle("bg-red-600");
        this.querySelector("label").classList.toggle("bg-stone-600");
        const target = document.getElementById(
          this.getAttribute("data-target")
        );
        const targetFilterGenres = target.getAttribute("data-filter-genres");
        if (e.target.checked) {
          if (targetFilterGenres === null || targetFilterGenres === "") {
            return target.setAttribute("data-filter-genres", this._genre.id);
          }
          return target.setAttribute(
            "data-filter-genres",
            `${targetFilterGenres || ""},${this._genre.id}`
          );
        }
        let genresResult = [];
        for (let genre of targetFilterGenres.split(",")) {
          if (genre !== this._genre.id + "") genresResult.push(genre);
        }
        target.setAttribute("data-filter-genres", genresResult.join(","));
      }
    );
  }
}
