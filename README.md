### 깃허브 유저 정보 받아오기

https://api.github.com/users/username

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
