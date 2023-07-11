const tagsContainer = document.querySelector('.categories.list');
const cardContainer = document.querySelector('.our-works__list');
const cards = [...cardContainer.children];

let currentTagValue;

console.log(tagsContainer);

tagsContainer.addEventListener('click', onCategoriesClick);

function onCategoriesClick(e) {
    if (e.target.nodeName !== 'BUTTON') {
        return;
    }

    const currentActiveBtn = document.querySelector('.categories__btn--active');

    // if (currentActiveBtn) {
    //     currentActiveBtn.classList.remove("categories__btn--active");
    // }

    currentActiveBtn?.classList.remove("categories__btn--active");  

    const nextActiveBtn = e.target;
    currentTagValue = nextActiveBtn.dataset.value;    
    nextActiveBtn.classList.add('categories__btn--active');
    
    if (currentTagValue === "all") {
        renderMarkup(cards);
        return;
    }
   
    const sortedEls = showElements(cards, currentTagValue);
    renderMarkup(sortedEls);   
}

function showElements(elements, value) {
    if (elements.length === 0) {
        return;
    }

    return elements.filter(element => element.dataset.value === value);
}

function renderMarkup(data) {
    cardContainer.innerHTML = "";
    cardContainer.append(...data);
}