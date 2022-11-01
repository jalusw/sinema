export default class FilterReleaseDates extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <div class="mt-4">
      <span class="text-slate-200">Release Dates</span>
      <div class="space-y-1 ">
        <div>
          <label for="filter-date-from" class="text-slate-300">From</label>
          <input type="date" id="filter-date-from" class="w-full bg-stone-800 text-slate-300 p-1 rounded shadow-sm cursor-pointer" />
        </div>
        <div>
          <label for="filter-date-to" class="text-slate-300">To</label>
          <input type="date" id="filter-date-to" class="w-full bg-stone-800 text-slate-300 p-1 rounded shadow-sm cursor-pointer" />
        </div>
      </div>
    </div>
    `;
    this.querySelector("#filter-date-from").addEventListener("change", (e) => {
      document
        .getElementById(this.getAttribute("data-target"))
        .setAttribute("data-filter-release-dates-from", e.target.value);
    });
    this.querySelector("#filter-date-to").addEventListener("change", (e) => {
      document
        .getElementById(this.getAttribute("data-target"))
        .setAttribute("data-filter-release-dates-to", e.target.value);
    });
  }
}
