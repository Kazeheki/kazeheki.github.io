import { debounce } from "./debounce";
import { throttle } from "./throttle";

const skillsContentBase = document.getElementById("skills-content") as HTMLElement;

const q = document.getElementById("q")! as HTMLInputElement;
const skillElement = document.getElementById("list")!;
const emptyIndicatorElement = document.getElementById("empty-indicator")!;
const chips = skillsContentBase.querySelectorAll<HTMLButtonElement>(".chip")!;

const CATEGORY_ALL = "all";

let activeCategory = CATEGORY_ALL;

function _applySearch() {
    debugger;
    const term = q.value.trim().toLocaleLowerCase();

    let foundItems = 0;
    for (const li of skillElement.querySelectorAll<HTMLLIElement>("li")) {
        const itemCategory = li.dataset.category ?? "";
        const matchesCategory =
            _isActiveCategory(CATEGORY_ALL) || _isActiveCategory(itemCategory);
        const matchesTerm =
            !term
            || (li.dataset.name ?? "").trim().toLocaleLowerCase().includes(term)
            || itemCategory.trim().toLocaleLowerCase().includes(term);
        const itemVisible = matchesCategory && matchesTerm;
        li.hidden = !itemVisible;
        if (itemVisible) {
            foundItems++;
        }
    }
    emptyIndicatorElement.hidden = foundItems > 0;
}

function _isActiveCategory(category: string): boolean {
    return category === activeCategory;
}

const debouncedSearch = debounce(_applySearch, 200);
q.addEventListener("input", debouncedSearch);

const throttledSearch = throttle(_applySearch, 300);
function _selectNewChip(chip: HTMLButtonElement) {
    debugger;
    activeChip?.classList.remove(CLASS_ACTIVE);
    chip.classList.add(CLASS_ACTIVE);
    activeChip = chip;
    activeCategory = chip.dataset.content || CATEGORY_ALL;
    throttledSearch();
}

const CLASS_ACTIVE = "active";
let activeChip = chips.values().find(c => c.classList.contains(CLASS_ACTIVE));
chips.forEach((chip) => {
    chip.addEventListener("click", () => _selectNewChip(chip))
})

