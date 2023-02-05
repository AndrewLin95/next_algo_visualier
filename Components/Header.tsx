import Link from 'next/link';
import { pagesData } from '../utils/pagesData';

const pageData = pagesData();

const Header = () => {
  return (
    <div className="w-full h-14 flex flex-row justify-between items-center px-5 border-2 border-red-800">
      <div>
        <Link href="/">Algo Visualizer</Link>
      </div>
      <div className="flex flex-row gap-3">
        {Object.entries(pageData).map(([key, value]) => (
          <Link href={value.link} key={key}>
            <div>{value.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
