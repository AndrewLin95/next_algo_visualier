import Link from 'next/link';

const Header = () => {
  return (
    <div className="w-full h-12 flex flex-row justify-between items-center px-5 border-2 border-red-800">
      <div>Algo Visualizer</div>
      <div className="flex flex-row gap-3">
        <Link href="/sort">Sort</Link>
        <Link href="/search">Search</Link>
      </div>
    </div>
  );
};

export default Header;
