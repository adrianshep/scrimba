import View from './View.js';

class ResultsView extends View {
    _parentEl = document.querySelector('.results');

    _generateMarkup(result) {
        return this._data.map().join('');
    }

    _generateMarkupPreview() {
        return `
            <li class="preview">
                  <a class="preview__link preview__link--active" href="#${result.id}">
                    <figure class="preview__fig">
                      <img src="src/img/test-1.jpg" alt="Test" />
                    </figure>
                    <div class="preview__data">
                      <h4 class="preview__title">Pasta with Tomato Cream ...</h4>
                      <p class="preview__publisher">The Pioneer Woman</p>
                      <div class="preview__user-generated">
                        <svg>
                          <use href="src/img/icons.svg#icon-user"></use>
                        </svg>
                      </div>
                    </div>
                  </a>
                </li>
          `;
      }      
}

export default new ResultsView();
