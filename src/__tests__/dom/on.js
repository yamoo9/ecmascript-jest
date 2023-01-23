/* on 유틸리티 ------------------------------------------------------------------ */

import { GlobalRegistrator } from '@happy-dom/global-registrator';

GlobalRegistrator.register();

describe('on 유틸리티 함수', () => {
  beforeAll(() => {
    document.body.innerHTML = /* html */ `
      <div id="test">
        <!-- 테스트 할 마크업 코드 작성 -->
      </div>
    `;
  });

  // 이벤트 연결(구독)
  // on(eventType, selctor, listener)

  // 이벤트 연결 해제(구독 취소)
  // off(eventType, selctor, listener)
  
});
