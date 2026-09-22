import View from './View.js';
import previewView from './previewView.js';
import icons from 'url:../../img/icons.svg';

class BookmarksView extends View {
    _parentEl = document.querySelector('.bookmarks_list');
    _errorMessage = 'No bookmarks yet. Find a nice recipe and bookmark it ;)';
    _message = '';

    _generateMarkup(result) {
        return this._data.map(bookmark => previewView.reader(bookmark, false)).join('');
    } 
  }

export default new BookmarksView();
