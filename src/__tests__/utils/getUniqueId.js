/* getUniqueId 유틸리티 ----------------------------------------------------- */

// getUniqueId()                           →  'uuid-xxxxxxxR': 기본 7자리 임의의 수 + 영문 대/소문자 1개 접합
// getUniqueId({ prefix: 'EUID' })         →  'EUID-xxxxxxxq': 기본 7자리 임의의 수 + 영문 대/소문자 1개 접합
// getUniqueId({ digit: 10 })              →  'uuid-xxxxxxxxxxu': 10자리 임의의 수 + 영문 대/소문자 1개 접합
// getUniqueId({ prefix: 'likelion', 3 })  →  'likelion-xxxW': 3자리 임의의 수 + 영문 대/소문자 1개 접합
