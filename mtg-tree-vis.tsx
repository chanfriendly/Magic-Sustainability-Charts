import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

// Simple SVG icons as components
const TreeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12 text-green-600">
    <path 
      fill="currentColor"
      d="M12 2 L12 3 Q12 6 14 8 Q16 10 16 13 Q16 16 12 20 Q8 16 8 13 Q8 10 10 8 Q12 6 12 3 L12 2"
    />
    <rect x="11" y="20" width="2" height="3" fill="currentColor" />
    <path 
      fill="currentColor"
      d="M12 6 Q12 8 13 9 Q14 10 14 12 Q14 14 12 16 Q10 14 10 12 Q10 10 11 9 Q12 8 12 6"
      opacity="0.7"
    />
  </svg>
);

const FactoryIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 text-blue-600">
    <path 
      fill="currentColor"
      d="M12 2L3 9v13h18V9l-9-7zm0 3l5 4v11H7V9l5-4z"
    />
  </svg>
);

const CoinIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 text-yellow-600">
    <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.2" />
    <path 
      fill="currentColor"
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
    />
    <path 
      fill="currentColor"
      d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z"
    />
  </svg>
);

const MTGEnvironmentalImpact = () => {
  const annualData = {
    lowEstimate: 23760,
    highEstimate: 36570,
    cardsBillions: {
      standard: 11.5,
      supplemental: 2.5,
      commander: 0.45,
      secretLair: 0.15
    }
  };

  const totalCards = Object.values(annualData.cardsBillions).reduce((a, b) => a + b, 0);

  return (
    <div className="space-y-8 p-4">
      {/* Main impact card */}
      <Card className="bg-white">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Annual Magic: The Gathering Card Production Impact
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center space-y-6">
            {/* Tree visualization */}
            <div className="grid grid-cols-5 gap-2 w-full place-items-center">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="flex flex-col items-center">
                  <TreeIcon />
                  <span className="text-sm mt-2">≈ 484,000 cards</span>
                </div>
              ))}
            </div>
            
            {/* Key statistics */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-8">
              <div className="p-6 bg-green-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Trees Required Annually</h3>
                <p className="text-3xl font-bold text-green-700">
                  {annualData.lowEstimate.toLocaleString()} - {annualData.highEstimate.toLocaleString()}
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Based on estimated annual card production
                </p>
              </div>
              
              <div className="p-6 bg-blue-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Total Cards Produced</h3>
                <p className="text-3xl font-bold text-blue-700">
                  {totalCards.toFixed(1)}B
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Billion cards per year
                </p>
              </div>
            </div>

            {/* Product breakdown */}
            <div className="w-full mt-8">
              <h3 className="text-xl font-semibold mb-4">Production Breakdown</h3>
              <div className="space-y-4">
                {Object.entries(annualData.cardsBillions).map(([product, amount]) => (
                  <div key={product} className="flex items-center">
                    <div className="w-32 text-gray-600 capitalize">
                      {product}
                    </div>
                    <div className="flex-1 h-6 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-blue-500"
                        style={{
                          width: `${(amount / totalCards) * 100}%`
                        }}
                      />
                    </div>
                    <div className="w-24 text-right text-gray-600">
                      {amount.toFixed(1)}B cards
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Compare to familiar scales */}
      <Card>
        <CardHeader>
          <CardTitle>To Put This In Perspective</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
              <TreeIcon />
              <p className="text-center text-sm">
                One tree produces enough paper for about 484,000 Magic cards
              </p>
            </div>
            <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
              <FactoryIcon />
              <p className="text-center text-sm">
                Daily production would fill approximately 2 Olympic swimming pools
              </p>
            </div>
            <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
              <CoinIcon />
              <p className="text-center text-sm">
                The retail value of annual production exceeds $1 billion
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MTGEnvironmentalImpact;