import "./style.css";

import Movie from "./components/movie/Movie";
import MovieSection from "./components/movie/MovieSection";
import Movies from "./components/movie/Movies";

import FilterGenreItem from "./components/filter/FilterGenreItem";
import FilterLanguage from "./components/filter/FilterLanguage";
import FilterReleaseDates from "./components/filter/FilterReleaseDates";
import FilterGenres from "./components/filter/FilterGenres";
import { fetchApiData } from "./data";

document.addEventListener("DOMContentLoaded", function () {
  import("feather-icons").then((feather) => feather.replace());
  const navMenu = document.getElementById("nav-menu");
  const btnShowNavMenu = document.getElementById("btn-show-nav-menu");
  const btnHideNavMenu = document.getElementById("btn-hide-nav-menu");
  const filterWrapper = document.getElementById("filter-wrapper");
  const toggleFilter = document.getElementById("toggle-filter");

  toggleFilter.addEventListener("click", function () {
    filterWrapper.classList.toggle("scale-y-0");
    filterWrapper.classList.toggle("h-0");
  });

  btnShowNavMenu.addEventListener("click", function () {
    navMenu.classList.remove("translate-x-full");
  });

  btnHideNavMenu.addEventListener("click", function () {
    navMenu.classList.add("translate-x-full");
  });
});

customElements.define("movie-item", Movie);
customElements.define("movie-section", MovieSection);
customElements.define("movie-list", Movies);

customElements.define("filter-language", FilterLanguage);
customElements.define("filter-release-dates", FilterReleaseDates);
customElements.define("filter-genres", FilterGenres);
customElements.define("filter-genre-item", FilterGenreItem);
