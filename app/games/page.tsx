import Link from 'next/link';

export default function page() {
  return (
    <div className="flex flex-col items-center p-14">
      <h1 className="mb-16 text-3xl font-semibold">GameList</h1>
      <Link href="/games/tictactoe">Tic Tac Toe</Link>
    </div>
  );
}
