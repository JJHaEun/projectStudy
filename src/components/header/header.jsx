import Link from "next/link";
import { useState } from "react";
import { IoLogoGithub } from "react-icons/io";
import { onChangeGitName } from "../../event/onChangeGitName";
import { onSubmitSearch } from "../../event/onSubmitSearch";
import { HeaderStyles } from "./header.styles";

export default function Header() {
  const [username, setUsername] = useState("");
  const { onChangeGitHubName } = onChangeGitName(setUsername);
  const { onSubmit } = onSubmitSearch(setUsername, username);
  return (
    <>
      <section>
        <section className="header-wrap">
          <IoLogoGithub color="white" />
          <form className="header-search-form" onSubmit={onSubmit}>
            <input type="text" value={username} onChange={onChangeGitHubName} />
          </form>
          <nav className="header-nav">
            <Link href="https://github.com/pulls">
              <a>Pull requests</a>
            </Link>
            <Link href="https://github.com/issues">
              <a>Issues</a>
            </Link>
            <Link href="https://github.com/marketplace">
              <a>Marketplace</a>
            </Link>
            <Link href="https://github.com/explore">
              <a>Explore</a>
            </Link>
          </nav>
        </section>
      </section>
      <style jsx>{HeaderStyles}</style>
    </>
  );
}
