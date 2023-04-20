import Link from "next/link";
import { useState } from "react";
import { onChangeGitName } from "../../src/event/onChangeGitName";

// 원하는 유저 정보를 가져와 보자
export default function App() {
  const [username, setUsername] = useState();
  const { onChangeGitHubName } = onChangeGitName(setUsername);
  return (
    <section>
      <label> userName</label>
      <input
        type="text"
        placeholder="userName입력"
        value={username}
        onChange={onChangeGitHubName}
        className="userInput"
      />
      <p>{username} 깃허브 검색하기</p>
      <Link href={`/githubProfile/users/${username}`}>
        <a>검색하기</a>
      </Link>
    </section>
  );
}
