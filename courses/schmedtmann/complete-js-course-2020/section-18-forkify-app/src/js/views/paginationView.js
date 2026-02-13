import View from './View.js';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
    _parentEl = document.querySelector('.pagination');

    _generateMarkup() {
        const numPages = Math.ceil(this._data.results.length / this._data.resultsPerPage);

        if(this._data.page === 1 && numPages > 1) {
            return 'page 1, others';
            }

        if(this._data.page === numPages && numPages > 1) {
            return `
                <button class="btn--inline pagination__btn--prev">
                    <svg class="search__icon">
                        <use href="src/img/icons.svg#icon-arrow-left"></use>
                    </svg>
                <span>Page 1</span>
            </button>
        `;

        }

        if(this._data.page < numPages) {
            return 'other page'
        }

        return 'only 1 page'
    }
}

export default new PaginationView();
