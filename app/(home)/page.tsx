import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center p-28">
      <h1 className="mb-72 text-4xl font-extrabold">Devil&apos;s Park Games</h1>
      <Link
        href="/games"
        className="text-xl p-2 rounded-xl border-2 border-sky-200 hover:bg-sky-400 hover:text-gray-200 transition-colors duration-300"
      >
        게임하러 가기
      </Link>
    </main>
  );
}
