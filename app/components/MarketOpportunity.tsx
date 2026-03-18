"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Zap, FileText, TrendingUp } from "lucide-react";

const evTrendData = [
  { year: "2021", ev: 12, ice: 85 },
  { year: "2022", ev: 28, ice: 78 },
  { year: "2023", ev: 52, ice: 71 },
  { year: "2024", ev: 89, ice: 65 },
  { year: "2025", ev: 134, ice: 58 },
  { year: "2026 (proj.)", ev: 195, ice: 52 },
];

const keywordOpportunities = [
  { keyword: "tesla lemon law attorney california", volume: 590, kd: 28, opportunity: "High" },
  { keyword: "ford lightning battery recall lawyer", volume: 320, kd: 12, opportunity: "Very High" },
  { keyword: "gm lyriq buyback california", volume: 170, kd: 8, opportunity: "Very High" },
  { keyword: "cybertruck lemon law", volume: 480, kd: 18, opportunity: "High" },
  { keyword: "ev lemon law california", volume: 260, kd: 15, opportunity: "Very High" },
  { keyword: "ford lightning lemon law", volume: 390, kd: 14, opportunity: "Very High" },
  { keyword: "rivian lemon law attorney", volume: 140, kd: 6, opportunity: "Very High" },
  { keyword: "electric vehicle defect lawyer", volume: 210, kd: 20, opportunity: "High" },
];

export default function MarketOpportunity() {
  return (
    <section id="market-opportunity" className="py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-12">
        <SectionHeader
          number="02"
          title="The 2026 Market Opportunity"
          subtitle="EV recalls are surging, and no lemon law firm has claimed this space"
        />

        {/* EV narrative */}
        <div className="bg-gradient-to-br from-cyan-50 to-green-50 rounded-2xl p-6 sm:p-8 mb-10 border border-cyan-100">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-jd-green to-jd-blue flex items-center justify-center shrink-0">
              <Zap className="w-6 h-6 text-jd-black" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-jd-black mb-2">The EV Recall Surge Is Here</h3>
              <p className="text-gray-700 leading-relaxed">
                Ford has recalled the F-150 Lightning multiple times for battery fire
                risks. Tesla Cybertruck owners are reporting structural and battery
                issues. GM&apos;s Ultium platform (Lyriq, Blazer EV) is generating
                complaints. These are not isolated incidents. EV defect complaints
                to NHTSA have grown 15x since 2021, and the first wave of out-of-warranty
                EV owners is just beginning to seek legal help. The firm that builds
                manufacturer-specific content now will own these searches for years.
              </p>
            </div>
          </div>
        </div>

        {/* EV Defect Trends Chart */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-10">
          <h3 className="font-bold text-jd-black mb-1">EV vs. ICE Defect Complaints (NHTSA)</h3>
          <p className="text-sm text-gray-500 mb-6">Indexed, 2021 = baseline. EV complaints growing 15x faster than ICE.</p>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={evTrendData} margin={{ top: 10, right: 10, left: 10, bottom: 10 }}>
              <defs>
                <linearGradient id="colorEv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#14EEEE" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#14EEEE" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorIce" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#999" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#999" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
              <XAxis dataKey="year" tick={{ fontSize: 12, fill: "#666" }} />
              <YAxis tick={{ fontSize: 12, fill: "#666" }} />
              <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid #eee" }} />
              <Area type="monotone" dataKey="ev" name="EV Complaints" stroke="#14EEEE" strokeWidth={3} fill="url(#colorEv)" />
              <Area type="monotone" dataKey="ice" name="ICE Complaints" stroke="#999" strokeWidth={2} fill="url(#colorIce)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* AB 1755 Card */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 mb-10">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-yellow-50 flex items-center justify-center shrink-0">
              <FileText className="w-6 h-6 text-yellow-600" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-jd-black mb-2">AB 1755: The Content Opportunity</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                California&apos;s AB 1755 requires consumers to send manufacturers a
                30-day pre-litigation notice before filing a lemon law claim. This
                creates a massive content opportunity: consumers searching for how to
                navigate this process need guidance, and the firm that provides it
                earns their trust and their case.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-jd-gray rounded-xl p-4 text-center">
                  <p className="text-2xl font-extrabold text-jd-black">30</p>
                  <p className="text-xs text-gray-500">Day notice window</p>
                </div>
                <div className="bg-jd-gray rounded-xl p-4 text-center">
                  <p className="text-2xl font-extrabold text-jd-black">High</p>
                  <p className="text-xs text-gray-500">Search intent during this period</p>
                </div>
                <div className="bg-jd-gray rounded-xl p-4 text-center">
                  <p className="text-2xl font-extrabold text-jd-black">0</p>
                  <p className="text-xs text-gray-500">Competitors with AB 1755 content</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Keyword Opportunity Table */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-jd-green" />
            <h4 className="font-bold text-jd-black">EV Keyword Opportunities</h4>
          </div>
          <p className="text-sm text-gray-500 mb-4">
            Low competition, high intent. These keywords represent the fastest path to new signed cases.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-3 px-3 font-semibold text-gray-600">Keyword</th>
                  <th className="text-center py-3 px-3 font-semibold text-gray-600">Volume</th>
                  <th className="text-center py-3 px-3 font-semibold text-gray-600">KD</th>
                  <th className="text-center py-3 px-3 font-semibold text-gray-600">Opportunity</th>
                </tr>
              </thead>
              <tbody>
                {keywordOpportunities.map((kw) => (
                  <tr key={kw.keyword} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-3 font-medium">{kw.keyword}</td>
                    <td className="py-3 px-3 text-center">{kw.volume.toLocaleString()}</td>
                    <td className="py-3 px-3 text-center">{kw.kd}</td>
                    <td className="py-3 px-3 text-center">
                      <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium ${
                        kw.opportunity === "Very High"
                          ? "bg-green-50 text-green-700"
                          : "bg-cyan-50 text-cyan-700"
                      }`}>
                        {kw.opportunity}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ number, title, subtitle }: { number: string; title: string; subtitle: string }) {
  return (
    <div className="mb-10">
      <span className="gradient-text text-sm font-bold uppercase tracking-widest">Section {number}</span>
      <h2 className="text-3xl sm:text-4xl font-extrabold text-jd-black mt-2 mb-2">{title}</h2>
      <p className="text-gray-500">{subtitle}</p>
    </div>
  );
}
