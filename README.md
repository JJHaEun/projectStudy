### 깃허브 유저 정보 받아오기

https://api.github.com/users/username

- isomorphic-unfetch 와 axios는 둘다 클라이언트와 서버의 환경 모두에서 작동한다고 한다.
- getServerSideProps실습을 위해 이번에는 isomorphic-unfetch사용해 보도록 했다.

1.  getServerSideProps로 서버측에서 props를 받아온다.
    - 페이지를 요청시마다 실행되며 이것을 통해 페이지로 전달해 준 데이터를 서버에서 랜더링한다.
      서버에서 실행되니 콘솔 출력도 브라우저가 아니라 터미널에서 된다.
2.  fetch를 사용하여 깃허브 유저 정보를 불러오는데 이 요청은 항상 에러가 발생할 경우를 대비해 try, catch로 묶어 주는 것이 좋다.
3.  코드가 200으로 정상 작동했다면 json함수를 실행해 유저 정보 객체를 얻는다.
