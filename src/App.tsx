import { GoDaddyLogo } from './components/GoDaddyLogo';
import { WinnersDashboard } from './components/WinnersDashboard';
import { RaffleCard } from './components/RaffleCard';
import { RaffleWeek, Winner } from './types/raffle';
import week1Data from './data/week1.json';
import week2Data from './data/week2.json';
import week3Data from './data/week3.json';

function App() {
  const winners: Winner[] = [
    {
      name: 'Syed Ala Uddin',
      supervisor: 'Kalyan',
      department: 'International Hosting',
      week: 1,
      prizeAmount: 300,
    },
    {
      name: 'Dhanraj S',
      supervisor: 'Srikanth Janga',
      department: 'International Messaging - Hosting',
      week: 2,
      prizeAmount: 300,
    },
  ];

  const raffles: RaffleWeek[] = [
    {
      week: 1,
      status: 'completed',
      contestants: week1Data,
      winner: winners[0],
    },
    {
      week: 2,
      status: 'completed',
      contestants: week2Data,
      winner: winners[1],
    },
    {
      week: 3,
      status: 'active',
      contestants: week3Data,
    },
    {
      week: 4,
      status: 'coming_soon',
      drawDate: new Date('2025-12-09'),
      contestants: [],
    },
    {
      week: 5,
      status: 'coming_soon',
      drawDate: new Date('2025-12-16'),
      contestants: [],
    },
    {
      week: 6,
      status: 'coming_soon',
      drawDate: new Date('2025-12-23'),
      contestants: [],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <GoDaddyLogo className="w-48 h-auto" />
          </div>
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Golden Cart Raffle
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join our exciting weekly raffle for a chance to win $300! New winners announced every week.
          </p>
        </header>

        <div className="mb-12">
          <WinnersDashboard winners={winners} />
        </div>

        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
            Weekly Raffles
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {raffles.map((raffle) => (
            <RaffleCard key={raffle.week} raffle={raffle} />
          ))}
        </div>

        <footer className="mt-16 text-center text-gray-600">
          <p className="text-sm">
            Golden Cart Raffle • GoDaddy • Each winner receives $300
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
