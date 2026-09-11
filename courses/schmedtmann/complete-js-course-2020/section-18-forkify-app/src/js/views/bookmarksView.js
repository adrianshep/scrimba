import View from './View.js';
import icons from 'url:../../img/icons.svg';

class BookmarksView extends View {
    _parentEl = document.querySelector('.bookmarks_list');
    _errorMessage = 'No bookmarks yet. Find a nice recipe and bookmark it ;)';
    _message = '';

    _generateMarkup(result) {
        return this._data.map().join('');
    } 
  }

export default new BookmarksView();
