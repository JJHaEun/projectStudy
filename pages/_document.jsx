import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <>
      <Html lang="ko">
        <Head>
          <meta name="title" content="깃허브 레파지토리" />
          <meta name="description" content="깃허브 레파지토리 리스트입니다" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    </>
  );
}
