import View from './View.js';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
    _parentEl = document.querySelector('.pagination');

    _generateMarkup() {
        const numPages = this._data.results.length / this._data.resultsPerPage

    }
}

export default new PaginationView();
