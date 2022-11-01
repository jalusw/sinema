import { fetchApiData } from "../../data";

export default class FilerLanguage extends HTMLElement {
  constructor() {
    super();
  }

  async renderOptions() {
    const languages = await fetchApiData("configuration/languages");
    for (let language of languages.data) {
      const languageOption = document.createElement("option");
      languageOption.value = language.iso_639_1;
      languageOption.textContent = language.english_name;
      this.querySelector("#filter-language").appendChild(languageOption);
    }
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="mt-5">
      <label for="filter-language" class="text-slate-200">Language</label>
      <select id="filter-language" class="w-full p-2 mt-1 shadow-sm rounded bg-stone-800 text-slate-300 cursor-pointer ">
        <option>None</option>
      </select>
    </div>`;
    this.renderOptions();
    this.querySelector("#filter-language").addEventListener("change", (e) => {
      document
        .getElementById(this.getAttribute("data-target"))
        .setAttribute("data-filter-language", e.target.value);
    });
  }
}
