import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 className="text-3xl">CPRG 306: Web Development 2 - Assignments</h1>
      <Link href="./week-2/" className="underline hover:text-blue-500">
        Week 2 Assignment
      </Link>
    </main>
  );
}
