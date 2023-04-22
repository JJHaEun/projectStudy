import Link from "next/link";
import { useRouter } from "next/router";

export default function PageNationButton({ user, repos }) {
  const router = useRouter();
  console.log(router.query);
  const { page } = router.query;
  console.log(":", page);

  return (
    <>
      <div className="repo-pagination">
        <Link href={`/users/${user.login}?page=${Number(page) - 1}`}>
          <a>
            <button disabled={page === page || page === "1"}>Prev</button>
          </a>
        </Link>
        <Link
          href={`/users/${user.login}?page=${
            page !== undefined && Number(page) + 1
          }`}
        >
          <a>
            <button disabled={repos.length < 10}>Next</button>
          </a>
        </Link>
      </div>
    </>
  );
}
