/* styled 유틸리티 -------------------------------------------------------------- */

import { GlobalRegistrator } from '@happy-dom/global-registrator';

GlobalRegistrator.register();

describe('styled 유틸리티 함수', () => {
  beforeAll(() => {
    document.body.innerHTML = /* html */ `
      <div id="test">
        <!-- 테스트 할 마크업 코드 작성 -->
      </div>
    `;
  });

  // HTML 요소 스타일링 API
  // styled`${HTMLElement} ...`

  // 커링 함수 활용 API
  // styled(HTMLElement)`...`
  
});
