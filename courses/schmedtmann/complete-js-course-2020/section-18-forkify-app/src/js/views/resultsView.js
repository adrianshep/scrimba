import View from './View.js';
import icons from 'url:../../img/icons.svg';

class ResultsView extends View {
    _parentEl = document.querySelector('.results');
    _errorMessage = 'No recipe found for your query! Please try again ;)';
    _message = '';

    _generateMarkup(result) {
        return this._data.map(result => previewView.reader(result, false)).join('');
    }
}

export default new ResultsView();
