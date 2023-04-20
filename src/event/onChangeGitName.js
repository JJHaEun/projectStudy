export const onChangeGitName = (setUsername) => {
  const onChangeGitHubName = (event) => {
    setUsername(event.target.value);
  };
  return {
    onChangeGitHubName,
  };
};
