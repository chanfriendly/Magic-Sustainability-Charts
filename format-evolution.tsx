import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const FormatTimeline = () => {
  const formatData = [
    {
      year: 1993,
      formats: [
        { name: "Type 1 (Vintage)", type: "official", support: "high", active: true },
        { name: "Type 2 (Standard)", type: "official", support: "high", active: true }
      ]
    },
    {
      year: 1995,
      formats: [
        { name: "Type 1.5 (Legacy)", type: "official", support: "medium", active: true }
      ]
    },
    {
      year: 1996,
      formats: [
        { name: "Ice Age Block", type: "official", support: "medium", active: false, endYear: 2008 }
      ]
    },
    {
      year: 2000,
      formats: [
        { name: "Extended", type: "official", support: "high", active: false, endYear: 2013 }
      ]
    },
    {
      year: 2003,
      formats: [
        { name: "Elder Dragon Highlander (EDH)", type: "community", support: "low", active: true }
      ]
    },
    {
      year: 2009,
      formats: [
        { name: "Commander (formerly EDH)", type: "official", support: "high", active: true },
        { name: "Pauper", type: "community", support: "low", active: true }
      ]
    },
    {
      year: 2011,
      formats: [
        { name: "Modern", type: "official", support: "high", active: true }
      ]
    },
    {
      year: 2013,
      formats: [
        { name: "Tiny Leaders", type: "community", support: "low", active: false, endYear: 2016 }
      ]
    },
    {
      year: 2016,
      formats: [
        { name: "Frontier", type: "community", support: "low", active: false, endYear: 2019 },
        { name: "Oathbreaker", type: "community", support: "medium", active: true }
      ]
    },
    {
      year: 2019,
      formats: [
        { name: "Pioneer", type: "official", support: "high", active: true },
        { name: "Brawl", type: "official", support: "medium", active: true },
        { name: "Historic", type: "digital", support: "high", active: true }
      ]
    },
    {
      year: 2020,
      formats: [
        { name: "Commander Legends Limited", type: "official", support: "medium", active: true }
      ]
    },
    {
      year: 2022,
      formats: [
        { name: "Explorer", type: "digital", support: "high", active: true },
        { name: "Alchemy", type: "digital", support: "high", active: true }
      ]
    }
  ];

  return (
    <div className="space-y-8 p-4">
      <Card>
        <CardHeader>
          <CardTitle>Evolution of Magic: The Gathering Formats (1993-2024)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative">
            {formatData.map((yearData, index) => (
              <div key={yearData.year} className="mb-8">
                <div className="flex items-start">
                  <div className="w-20 font-bold text-lg">{yearData.year}</div>
                  <div className="flex-1">
                    {yearData.formats.map((format, fIndex) => (
                      <div 
                        key={format.name}
                        className={`mb-4 p-4 rounded-lg ${
                          format.type === 'official' 
                            ? 'bg-blue-50 border-l-4 border-blue-500'
                            : format.type === 'community'
                            ? 'bg-green-50 border-l-4 border-green-500'
                            : 'bg-purple-50 border-l-4 border-purple-500'
                        }`}
                      >
                        <h3 className="font-semibold text-lg">{format.name}</h3>
                        <div className="flex space-x-4 text-sm mt-2">
                          <span className={`px-2 py-1 rounded ${
                            format.type === 'official' 
                              ? 'bg-blue-100 text-blue-800'
                              : format.type === 'community'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-purple-100 text-purple-800'
                          }`}>
                            {format.type}
                          </span>
                          <span className={`px-2 py-1 rounded ${
                            format.support === 'high'
                              ? 'bg-green-100 text-green-800'
                              : format.support === 'medium'
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-gray-100 text-gray-800'
                          }`}>
                            {format.support} support
                          </span>
                          {!format.active && (
                            <span className="px-2 py-1 rounded bg-red-100 text-red-800">
                              Ended {format.endYear}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Format Evolution Trends</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Key Observations:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Initial focus on tournament formats (Type 1, Type 2)</li>
                <li>Community formats tend to emerge during periods of stable competitive play</li>
                <li>Commander's success led to increased support for casual formats</li>
                <li>Digital formats emerged with Arena's popularity</li>
                <li>Recent trend toward format specialization (Alchemy, Explorer)</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FormatTimeline;