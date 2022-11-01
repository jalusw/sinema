import { fetchApiData } from "../../data";

export default class Movie extends HTMLElement {
  constructor() {
    super();
  }

  set movie(movie) {
    this._movie = movie;
  }

  set genres(genres) {
    this._genres = genres;
  }

  connectedCallback() {
    this.innerHTML = `
    <a href="#" class="group block relative min-w-[150px] max-w-[200px] overflow-hidden" aria-label="${this._movie.original_title}">
      <img src="https://image.tmdb.org/t/p/w220_and_h330_face/${this._movie.poster_path}" class="rounded" loading="lazy" alt="" />
      <div class="absolute top-0 bottom-0 left-0 right-0 w-full h-full bg-[rgba(0,0,0,0.50)] z-[2] hidden group-hover:block"></div>
      <div class="absolute top-0  left-0  w-full h-full  py-1 px-2 flex flex-col justify-end scale-100 z-[3] translate-y-full group-hover:translate-y-0 transition duration-300">
        <b class="line-clamp-1 text-slate-100">${this._movie.original_title}</b>
        <p class="line-clamp-2 text-slate-200 text-sm">${this._movie.overview}</p>
        <p id="genres-wrapper" class="line-clamp-1 text-slate-200 text-xs mt-2" ></p>
      </div>
    </a>
    `;
    const genresWrapper = this.querySelector(`#genres-wrapper`);
    let genresString = "";
    let lastGenre = 0;
    for (let i = 0; i < this._movie.genre_ids.length - 1; i++) {
      genresString += this._genres[this._movie.genre_ids[i]] + ", ";
      lastGenre = i;
    }
    genresString +=
      this._genres[this._movie.genre_ids[lastGenre + 1]] ||
      this._genres[this._movie.genre_ids[lastGenre]];
    genresWrapper.textContent = genresString;
  }
}
