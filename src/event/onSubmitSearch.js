import { useRouter } from "next/router";

export const onSubmitSearch = (setUsername, username) => {
  const router = useRouter();
  const onSubmit = (event) => {
    event.preventDefault();
    // router을 사용해 이동시에는 새로고침되는데 방지위함...?
    if (typeof username === null || typeof username === undefined) {
      return alert("없는 유저입니다");
    } else {
      router.push(`/githubProfile/users/${username}`);
      setUsername("");
    }
  };
  return {
    onSubmit,
  };
};
