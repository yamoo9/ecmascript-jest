/* view 유틸리티 ---------------------------------------------------------------- */

import { GlobalRegistrator } from '@happy-dom/global-registrator';
import { createView } from '../../lib/dom/view.js';

GlobalRegistrator.register();

describe('on 유틸리티 함수', () => {
  let testElement;
  let cardView;
  let cardViewData = {
    title: 'React 펀드멘탈',
    description: 'React 애플리케이션 및 라이브러리를 빌드하는 데 필요한 기본 개념을 배웁니다.',
    image: {
      src: 'react-fundamentals.webp',
      alt: 'React Fundamentals',
    },
    link: {
      href: '/react-fundamentals',
      text: 'React fundamentals',
    },
  };

  beforeAll(() => {
    document.body.innerHTML = /* html */ `
      <div id="test">
        <!-- createView 렌더링 결과 출력 -->
      </div>
    `;

    testElement = document.getElementById('test');

    cardView = createView({
      element: testElement,
      data: cardViewData,
      template() {
        const { title, description, image, link } = this.data;
  
        return /* html */`
          <div class="card">
            <img src="${image.src}" class="card-img" alt="${image.alt}" />
            <div class="card-body">
              <h5 class="card-title">${title}</h5>
              <p class="card-text">${description}</p>
              <a href="${link.href}" class="card-link">${link.text}</a>
            </div>    
          </div>
        `;
      }
    });
  
    cardView.render();
  });

  test('cardView 엘리먼트 렌더링', () => {
    const cardElement = document.querySelector('.card');
    expect(cardElement.parentNode).toBe(testElement);
  });

  test('데이터 → cardView 이미지 src, alt 렌더링', () => {
    const cardImage = document.querySelector('.card-img');
    expect(cardImage.getAttribute('src')).toBe(cardViewData.image.src);
    expect(cardImage.getAttribute('alt')).toBe(cardViewData.image.alt);
  });
  
  test('데이터 → cardView 헤드라인, 디스크립션 콘텐츠 렌더링', () => {
    const cardHeadline = document.querySelector('.card-title');
    const cardDescription = document.querySelector('.card-text');
    expect(cardHeadline.textContent).toBe(cardViewData.title);
    expect(cardDescription.textContent).toBe(cardViewData.description);
  });

  test('데이터 → cardView 링크 href, 콘텐츠 렌더링', () => {
    const cardLink = document.querySelector('.card-link');
    expect(cardLink.getAttribute('href')).toBe(cardViewData.link.href);
    expect(cardLink.textContent).toBe(cardViewData.link.text);
  });
  
});
