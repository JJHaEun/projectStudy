import Link from "next/link";
import { useRouter } from "next/router";
import { stylePageNation } from "./pagenation.styles";

export default function PageNation({ user, repos }) {
  const router = useRouter();
  const { page = "1" } = router.query;
  return (
    <div className="repo-pagenation">
      <Link href={`/githubProfile/users/${user.name}?page=${Number(page) - 1}`}>
        <a>
          <button disabled={page === page && page === "1"}>Prev</button>
        </a>
      </Link>
      <Link href={`/githubProfile/users/${user.name}?page=${Number(page) + 1}`}>
        <a>
          <button disabled={repos.length < 10}>Next</button>
        </a>
      </Link>
      <style jsx>{stylePageNation}</style>
    </div>
  );
}
