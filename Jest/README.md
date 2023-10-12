# 2023-10-13

## jest swiper css 호출시 에러뜨는 현상
```bash
Unexpected token '.' ~~
```

### 조치
#### styleMock.js 생성

```javascript
// tests/jest/__mocks__/styleMock.js
export default {}
```

```javascript
// jest.config.js
module.exports = {
  moduleNameMapper: {
    // 아래 부분 추가
    '\\.(css|less)$': '<rootDir>/tests/jest/__mocks__/styleMock.js'
  }
}
```

## 에러2
