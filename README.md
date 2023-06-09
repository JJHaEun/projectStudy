## Next.js

- 학습이유
  - Next에 대해 잘 알고 싶어서 학습을 시작하게 되었다.
  - 이론을 읽고 클론코딩을 하며 학습하고있다.

### 깃허브 유저 정보 받아오기

https://api.github.com/users/${username}

- isomorphic-unfetch 와 axios는 둘다 클라이언트와 서버의 환경 모두에서 작동한다고 한다.
- getServerSideProps실습을 위해 이번에는 isomorphic-unfetch사용해 보도록 했다.

1.  getServerSideProps로 서버측에서 props를 받아온다.
    - 페이지를 요청시마다 실행되며 이것을 통해 페이지로 전달해 준 데이터를 서버에서 랜더링한다.
      서버에서 실행되니 콘솔 출력도 브라우저가 아니라 터미널에서 된다.
2.  fetch를 사용하여 깃허브 유저 정보를 불러오는데 이 요청은 항상 에러가 발생할 경우를 대비해 try, catch로 묶어 주는 것이 좋다.
3.  코드가 200으로 정상 작동했다면 json함수를 실행해 유저 정보 객체를 얻는다.

---

#### getStaticProps

getServerSideProps와는 다르게 빌드시에 데이터를 불러온다. - 그리고 그 데이터를 json으로 저장해 사용하기 때문에 일관된 데이터를 보여줄 수 있다.

---

#### getInitialProps

Next의 9.3버전 이전부터 서버 사이드 데이터 패치를 위해 사용되었던 아이.
이후 버전에서는 getServerSideProps나 getStaticProps를 사용하는것을 권장한다.

둘의 차이는 getInitialProps의 경우에는 초기 랜더링 시에는 서버에서 데이터를 불러오지만, 클라이언트측 내비게이션을 사용한다면 클라이언트 측에서 데이터를 불러온다.
getServerSideProps는 서버에서만 데이터를 불러온다

---

#### 😽 styled-jsx사용해보기.

next에 기본적으로 적용되는 styled-jsx를 사용해 스타일링을 해보자
단점: emotion과는 다르게 네스팅(안에 집어넣는것)이 불가능하다.
즉, 어떤 태그 안의 태그를 선택해 스타일링 하는것이 불가능 하다는것.
따라서 특정 태그가 하나라면 태그 이름을 사용하고, 아니라면 id나 className 선택자를 주어 스타일을 적용하였다.

#### 깃허브 레파지토리 불러오기

https://api.github.com/users/${username}/repos?sort=updated&page=1&per_page=10

- sort는 정렬기준을 의미. 정렬기준은 업데이트를 기준으로 함.
- per_page는 페이지당 받게 될 레파지토리 개수

---

코드를 작성하면서 a태그의 target속성을 알게 되었다.

#### target 속성

- \_self : 연결문서를 클릭한 창에서 연다 - 기본값(default)
- -blank : 연결문서를 새 창에서 연다
- \_top : 가장 상위 창에서 연다.(전체 브라우저 창에서 작동..?)
- frame name : 부모창에 iframe태그로 영역을 만들어 놓으면
  자식창에서 링크된 내용이 부모의 iframe영역에 나타난다.

frame name의 경우 iframe의 name속성의 값과 자식의 a태그의 target의 값이 동일해야한다.

#### rel 속성

rel => 해당 태그와의 관계를 의미한다.

- noreferrer : 요청을 받는 쪽에서 해당 요청이 어디서 왔는지 알 수 없다.
  target 속성이 \_blank인 링크를 클릭했을 시 새 탭에서 페이지가 열리는데 , 이때 window.opener 라는 자바스크립트 속성을 이용해 연쪽의 window 객체에 부분적으로 접근 할 수 있다.
  이것을 막기위해 사용되는 rel 속성의 값중 하나이다.

---

#### 날짜 형식 만들기

- 일단 먼저 함수를 commons에 만들어 넣고 import해 사용해 보았다.
- 깃허브 형식으로 a day ago처럼 만들기 위해 좀 더 쉽게 사용할 수 있는 라이브러리를 사용한다.
- moment는 크기가 크기에 조금 가벼운 date-fns를 사용해본다.
- date-fns는 함수형태로 필요한 함수를 import해 사용하면 된다!!

🧑‍💻 사용법

```js
formatDistance(new Date(el.updated_at), new Date(), { addSuffix: true });
```

- formatDistance로 두 날짜간의 차이를 리턴해주며, addSuffix 가 true면 a day ago 형식으로 나오게 된다.
- 첫번째 인자로는 수정된 날짜가 , 두번째 인자로는 현재 시간대가 들어가서 둘의 차이가 계산되며,
  addSuffix로 몇 분 전 이라는것이 표현된다!!
