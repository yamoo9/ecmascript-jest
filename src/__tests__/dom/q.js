/* q 유틸리티 ------------------------------------------------------------------- */

import { GlobalRegistrator } from '@happy-dom/global-registrator';

GlobalRegistrator.register();

describe('q 유틸리티 함수', () => {
  beforeAll(() => {
    document.body.innerHTML = /* html */ `
      <div id="test">
        <!-- 테스트 할 마크업 코드 작성 -->
      </div>
    `;
  });

  // q('#idName')
  // - getElementById 사용되어야 함.
  // - [1] null 아님. 
  // - [2] array 아님.
  
  // q('tagName')
  // - querySelectorAll 사용되어야 함.
  // - [1] null 아님. 
  // - [2] array 반환. 
  // - [3] length 확인. 

  // q('.className')
  // - querySelectorAll 사용되어야 함.
  // - [1] null 아님. 
  // - [2] array 반환. 
  // - [3] length 확인. 

  // q('[attributeName]')
  // - querySelectorAll 사용되어야 함.
  // - [1] null 아님. 
  // - [2] array 반환. 
  // - [3] length 확인. 

});
