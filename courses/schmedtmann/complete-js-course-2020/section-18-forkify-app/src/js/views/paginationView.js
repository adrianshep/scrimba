import View from './View.js';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
    _parentEl = document.querySelector('.pagination');

    _generateMarkup() {
        const numPages = Math.ceil(this._data.results.length / this._data.resultsPerPage);

        if(this._data.page === 1 && numPages > 1) {
            return 'page 1, others';
            }
    }
}

export default new PaginationView();
