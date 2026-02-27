import View from './View.js';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
    _parentEl = document.querySelector('.pagination');

    _generateMarkup() {
        const curPage = this._data.page;
        const numPages = Math.ceil(this._data.results.length / this._data.resultsPerPage);

        if(curPage === 1 && numPages > 1) {
            return 'page 1, others';
            }

        if(curPage === numPages && numPages > 1) {
            return `
                <button class="btn--inline pagination__btn--next">
                    <span>Page ${curPage + 1}</span>
                    <svg class="search__icon">
                        <use href="${icons}#icon-arrow-right"></use>
                </svg>
                </button>
            `;
        }

        if(curPage < numPages) {
            return `
                <button class="btn--inline pagination__btn--prev">
                    <svg class="search__icon">
                        <use href="${icons}#icon-arrow-left"></use>
                    </svg>
                    <span>${curPage - 1}</span>
                </button>
            `;
        }

        return 'only 1 page'
    }
}

export default new PaginationView();
