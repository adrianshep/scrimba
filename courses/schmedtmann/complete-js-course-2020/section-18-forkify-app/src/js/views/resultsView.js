import View from './View.js';

class ResultsView extends View {
    _parentEl = document.querySelector('.results');

    _generateMarkup(result) {
        return this._data.map().join('');
    }

    _generateMarkupPreview() {
        return `
            <li class="preview">
                  <a class="preview__link" href="#${result.id}">
                    <figure class="preview__fig">
                      <img src="${result.image}" alt="${result.title}" />
                    </figure>
                    <div class="preview__data">
                      <h4 class="preview__title">${result.title}</h4>
                      <p class="preview__publisher">${result.publisher}</p>
                  </a>
                </li>
          `;
      }      
}

export default new ResultsView();
