/* fetchData 유틸리티 ----------------------------------------------------------- */

// 비동기 테스트 (Promise / Async function)

// fetchData(ENDPOINT)           →  `GET` Request
// fetchData(ENDPOINT, options)  →  `POST` Request
// fetchData(ENDPOINT, options)  →  `PUT` Request
// fetchData(ENDPOINT, options)  →  `DELETE` Request

// 파사드(Facade) 패턴

// fetchData.create(ENDPOINT, body)  →  `GET` Request
// fetchData.read(ENDPOINT)          →  `POST` Request
// fetchData.update(ENDPOINT, body)  →  `PUT` Request
// fetchData.delete(ENDPOINT)        →  `DELETE` Request