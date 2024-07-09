import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav>
        <Link href="/">home</Link>
        <Link href="/recipes">recipes</Link>
      </nav>
    </header>
  );
}
