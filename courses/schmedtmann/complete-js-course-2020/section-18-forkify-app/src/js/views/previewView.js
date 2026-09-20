import View from './View.js';
import icons from 'url:../../img/icons.svg';

class PreviewView extends View {
    _parentEl = '';
    }

    _generateMarkupPreview() {
      const id = window.location.hash.slice(1);

        return `
            <li class="preview">
                  <a class="preview__link ${
                    the._data.id === id ? 'preview__link--active' : ''
                  }" href="#${the._data.id}">
                    <figure class="preview__fig">
                      <img src="${the._data.image}" alt="${the._data.title}" />
                    </figure>
                    <div class="preview__data">
                      <h4 class="preview__title">${the._data.title}</h4>
                      <p class="preview__publisher">${the._data.publisher}</p>
                  </a>
                </li>
          `;
      }      
}

export default new PreviewView();
