import { FC } from 'react';
import Link from 'next/link';
import { pagesData } from '../utils/pagesData';

const pageData = pagesData();

const AlgoCards: FC = () => {
  return (
    <div className="flex flex-row flex-wrap h-full w-full gap-24 justify-center overflow-y-auto py-12 border-4 border-purple-800">
      {Object.entries(pageData).map(([key, value]) => (
        <Link
          href={value.link}
          key={key}
          className="w-96 h-2/6 border border-pink-600"
        >
          <div>{value.name} Algorithm</div>
        </Link>
      ))}
    </div>
  );
};

export default AlgoCards;
