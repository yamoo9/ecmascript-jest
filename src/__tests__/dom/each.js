/* each 유틸리티 ------------------------------------------------------------------- */

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

  // 배열(또는 DOM 노드리스트) 순환
  // each([], (item, index, array) => { ... })

  // 객체 순환
  // each({}, ([key, value], index, array) => { ... })

});
