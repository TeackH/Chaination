import { useState } from 'react';
import Link from 'next/link';

interface CampaignCardProps {
  imageUrl: string;
  title: string;
  description: string;
  duration: string;
  goal: number;
  currentAmount: number;
}

const CampaignBar = ({ goal, currentAmount }: { goal: number, currentAmount: number }) => {
  const percentage = currentAmount / goal * 100;

  return (
    <div className="bg-gray-200 rounded-full w-full">
      <div className="bg-indigo-500 text-xs leading-none py-1 text-center text-white rounded-full" style={{ width: `${percentage}%` }}>
        {percentage}%
      </div>
    </div>
  );
};

const CampaignCard = ({ imageUrl, title, description, goal, currentAmount, duration }: CampaignCardProps) => {
  const [current, setCurrent] = useState(currentAmount);

  const handleDonate = () => {
    setCurrent(current + 10); // Donate 10 units
  };

  return (
    <div className="flex-grow w-full md:w-full p-4">
      <Link href={`/campaign/${title}`}>
      <div className="bg-white shadow-md hover:shadow-lg rounded-md overflow-hidden">
        <img src={imageUrl} alt={title} className="w-full h-85 object-cover" />
        <div className="p-4">
          <h2 className="text-lg font-medium mb-2">{title}</h2>
          <p className="text-gray-500 text-sm">{duration}</p>
          <p className="text-sm text-gray-500 mb-4">{description}</p>
          <CampaignBar goal={goal} currentAmount={current} />
          <div className="flex justify-between mt-4">
            <div className="text-gray-500 text-sm">목표 모금액: {goal}ETH</div>
            <div className="text-gray-500 text-sm">{goal - current}ETH 남음</div>
          </div>
          <button onClick={handleDonate} className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500">
            기부하기
          </button>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default CampaignCard;