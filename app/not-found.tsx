import Link from "next/link";
export default function NotFound() {
  return <main className="missing-page"><h1>Page unavailable</h1><p>Find a tour or return to the Sahas Tours homepage.</p><Link href="/" className="button button-primary">Back to home</Link></main>;
}
