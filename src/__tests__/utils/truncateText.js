/* truncateText 유틸리티 -------------------------------------------------------- */

let message = `
  Jest 테스팅 프레임워크를 학습합니다. 
  테스트 도구 설문 결과는 Testing - The State of JS 2022에서 확인할 수 있습니다.
`.trim().replace(/\n\s+/g, '');

// truncateText(message)      →  기본 60자 + '...' = 글자 길이 63자
// truncateText(message, 46)  →  46자 + '...' = 글자 길이 49자
// truncateText('123456789', 10)  →  글자 길이 9자 ('...' 출력 ❌)
