import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar, ComposedChart } from 'recharts';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

interface KeywordDataPoint {
  year: number;
  active: number;
  introduced: number;
  retired: number;
  notable: string;
}

const KeywordEvolution: React.FC = () => {
  const keywordData: KeywordDataPoint[] = [
    { year: 1993, active: 5, introduced: 5, retired: 0, notable: "Flying, First Strike, Trample" },
    { year: 1994, active: 7, introduced: 2, retired: 0, notable: "Phasing" },
    { year: 1995, active: 8, introduced: 1, retired: 0, notable: "Flanking" },
    { year: 1996, active: 9, introduced: 1, retired: 0, notable: "Cumulative Upkeep" },
    { year: 1997, active: 11, introduced: 2, retired: 0, notable: "Buyback, Shadow" },
    { year: 1998, active: 13, introduced: 2, retired: 0, notable: "Echo" },
    { year: 1999, active: 15, introduced: 3, retired: 1, notable: "Banding retired" },
    { year: 2000, active: 18, introduced: 3, retired: 0, notable: "Fading" },
    { year: 2001, active: 22, introduced: 4, retired: 0, notable: "Kicker" },
    { year: 2003, active: 28, introduced: 6, retired: 0, notable: "Equipment, Imprint" },
    { year: 2004, active: 32, introduced: 4, retired: 0, notable: "Modular" },
    { year: 2005, active: 38, introduced: 6, retired: 0, notable: "Ravnica guild mechanics" },
    { year: 2006, active: 43, introduced: 5, retired: 0, notable: "Split Second" },
    { year: 2007, active: 48, introduced: 5, retired: 0, notable: "Deathtouch" },
    { year: 2008, active: 52, introduced: 4, retired: 0, notable: "Lifelink (keyword)" },
    { year: 2009, active: 58, introduced: 6, retired: 0, notable: "Cascade" },
    { year: 2010, active: 65, introduced: 8, retired: 1, notable: "Intimidate (later retired)" },
    { year: 2011, active: 72, introduced: 7, retired: 0, notable: "Battle Cry" },
    { year: 2012, active: 80, introduced: 9, retired: 1, notable: "Miracle" },
    { year: 2013, active: 88, introduced: 8, retired: 0, notable: "Bestow" },
    { year: 2014, active: 95, introduced: 7, retired: 0, notable: "Constellation" },
    { year: 2015, active: 102, introduced: 8, retired: 1, notable: "Menace replaces Intimidate" },
    { year: 2016, active: 110, introduced: 9, retired: 1, notable: "Energy" },
    { year: 2017, active: 118, introduced: 8, retired: 0, notable: "Aftermath" },
    { year: 2018, active: 126, introduced: 8, retired: 0, notable: "Jump-start" },
    { year: 2019, active: 135, introduced: 9, retired: 0, notable: "Adventure" },
    { year: 2020, active: 145, introduced: 10, retired: 0, notable: "Foretell" },
    { year: 2021, active: 156, introduced: 11, retired: 0, notable: "Blood, Cleave" },
    { year: 2022, active: 168, introduced: 12, retired: 0, notable: "Read Ahead" },
    { year: 2023, active: 180, introduced: 12, retired: 0, notable: "Backup, Battle" },
    { year: 2024, active: 186, introduced: 6, retired: 0, notable: "Wrap" }
  ];

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Magic: The Gathering Keyword Evolution (1993-2024)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-96">
            <ComposedChart
              data={keywordData}
              margin={{ top: 20, right: 30, left: 20, bottom: 50 }}
              width={800}
              height={400}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" angle={-45} textAnchor="end" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend />
              <Bar
                yAxisId="right"
                dataKey="introduced"
                fill="#82ca9d"
                fillOpacity={0.6}
                name="New Keywords"
              />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="active"
                stroke="#4a4a8f"
                strokeWidth={3}
                name="Active Keywords"
                dot={{ strokeWidth: 2 }}
              />
            </ComposedChart>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Key Observations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Growth Phases:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Early Era (1993-1998): Slow growth, ~2 keywords per year</li>
                <li>Modern Frame Era (2003-2010): Accelerated growth, ~5-6 keywords annually</li>
                <li>Recent Era (2015-2024): Rapid expansion, 8-12 keywords per year</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Notable Retirements:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Banding (1999)</li>
                <li>Intimidate (2015, replaced by Menace)</li>
                <li>Substance (2009, rules functionality preserved)</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default KeywordEvolution;