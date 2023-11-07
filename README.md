# Soomgo Frontend Assignment

이 프로젝트는 [Create React App](https://github.com/facebook/create-react-app) 를 통해 만들었습니다.\
[yarn](https://yarnpkg.com/)을 Package Manager 로 사용하였습니다.

## Before Start

### `yarn install`

프로젝트를 실행하기 전에 먼저 `yarn install` 을 통해 의존성을 설치해주세요.

## Available Scripts

### `yarn start`

프로젝트를 development mode 로 실행합니다.\
[http://localhost:3000](http://localhost:3000) 에서 확인할 수 있습니다.

### `yarn test`

프로젝트의 test 를 실행합니다.

test 작성을 위해 [react-testing-library](https://testing-library.com/docs/react-testing-library/intro/) 를 사용하였습니다.\
테스트는 `src/__tests__` 에서 확인할 수 있습니다.

### `yarn build`

프로젝트를 production mode 로 빌드합니다.\
`build` 폴더에 빌드 결과물이 생성됩니다.

### `npm run eject`

Create React App 의 내부 dependency 를 eject 합니다.

## Project Structure

프로젝트의 코드는 `src` 폴더에 위치합니다.

프로젝트의 스타일링을 위해 [tailwindcss](https://tailwindcss.com/) 를 사용하였습니다.\
[prettier](https://prettier.io/) 를 사용하여 코드를 포맷팅하였습니다.\
프로젝트의 라우팅을 구성하기 위해 [react-router-dom](https://reactrouter.com/en/main) 을 사용하였습니다.

### `src/__tests__`

프로젝트의 test 를 작성하는 폴더입니다.

### `src/assets`

프로젝트에서 사용하는 이미지 등의 asset 을 저장하는 폴더입니다.

### `src/components`

프로젝트의 컴포넌트를 작성하는 폴더입니다.

### `src/hooks`

프로젝트에서 사용하는 custom hook 을 작성하는 폴더입니다.

Server data 의 데이터를 처리하고 동기화하기 위해 [@tanstack/react-query](https://tanstack.com/query/latest) 를 사용하였습니다.\
`src/hooks/query` 에서 query 를 생성하는 함수를 작성하였습니다.

`src/hooks/store` 에서 redux store 를 사용하기 위한 custom hook 을 작성하였습니다.

### `src/lib`

프로젝트에서 사용하는 library 를 작성하는 폴더입니다.

`src/lib/test.tsx` 에서 jest 환경에서 memory router 를 사용하기 위한 renderWithRouter 함수를 작성하였습니다.

### `src/pages`

프로젝트의 페이지를 작성하는 폴더입니다.

### `src/remotes`

프로젝트에서 사용하는 remote api 를 작성하는 폴더입니다.

http 통신을 위해 [axios](https://axios-http.com/kr/docs/intro) 를 사용하였습니다.\
api 를 호출하는 함수는 `src/remotes/index.ts` 에 작성되어 있습니다.

axios instance 를 생성하는 함수는 `src/remotes/http.ts` 에 작성되어 있습니다.

### `src/store`

프로젝트에서 사용하는 redux store 를 작성하는 폴더입니다.

redux store 를 생성하는 함수는 `src/store/index.ts` 에 작성되어 있습니다.

### `src/router.tsx`

프로젝트의 router 를 작성하는 파일입니다.

### `src/App.tsx`

프로젝트의 root component 입니다.
