import Link from "next/link";

export default function Home() {
  return (
    <main className="p-5">
      <h1 className="text-3xl mb-3">
        CPRG 306: Web Development 2 - Assignments
      </h1>
      <ul>
        <li>
          <Link href="./week-2/" className="underline hover:text-blue-500">
            Week 2 Assignment
          </Link>
        </li>
        <li>
          <Link href="./week-3/" className="underline hover:text-blue-500">
            Week 3 Assignment
          </Link>
        </li>
        <li>
          <Link href="./week-4/" className="underline hover:text-blue-500">
            Week 4 Assignment
          </Link>
        </li>
        <li>
          <Link href="./week-5/" className="underline hover:text-blue-500">
            Week 5 Assignment
          </Link>
        </li>
        <li>
          <Link href="./week-6/" className="underline hover:text-blue-500">
            Week 6 Assignment
          </Link>
        </li>
        <li>
          <Link href="./week-7/" className="underline hover:text-blue-500">
            Week 7 Assignment
          </Link>
        </li>
        <li>
          <Link href="./week-8/" className="underline hover:text-blue-500">
            Week 8 Assignment
          </Link>
        </li>
        <li>
          <Link href="./week-9/" className="underline hover:text-blue-500">
            Week 9 Assignment
          </Link>
        </li>
        <li>
          <Link href="./week-10/" className="underline hover:text-blue-500">
            Week 10 Assignment
          </Link>
        </li>
      </ul>
    </main>
  );
}
