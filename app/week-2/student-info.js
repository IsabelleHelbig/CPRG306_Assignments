import Link from "next/link";

export default function StudentInfo() {
  return (
    <div>
      <p>Isabelle Helbig</p>
      <Link
        href="https://github.com/IsabelleHelbig/cprg306-assignments"
        className="underline hover:text-blue-500"
      >
        My Github Repository
      </Link>
    </div>
  );
}
