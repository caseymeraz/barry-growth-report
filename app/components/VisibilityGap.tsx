"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import {
  Bot,
  Sparkles,
  Brain,
  MessageSquare,
  Eye,
  Shield,
  Search,
  TrendingDown,
} from "lucide-react";

/* ── Real Ahrefs Data ── */

const competitorData = [
  { name: "Barry Law", keywords: 519, traffic: 1409, dr: 21, top3: 134 },
  { name: "Quill & Arrow", keywords: 986, traffic: 5020, dr: 33, top3: 248 },
  { name: "Lemon Law Group", keywords: 2244, traffic: 6862, dr: 33, top3: 412 },
  { name: "Lemon Law Pro", keywords: 247, traffic: 1596, dr: 3, top3: 62 },
  { name: "Lemon Law Attys", keywords: 382, traffic: 3184, dr: 10, top3: 95 },
];

const keywordGaps = [
  { keyword: "california lemon law attorney", position: 12, competitor: "#3 (Quill & Arrow)", volume: 1300, difficulty: 45 },
  { keyword: "los angeles lemon law attorneys", position: 9, competitor: "#2 (Lemon Law Group)", volume: 880, difficulty: 38 },
  { keyword: "lemon law lawyer california", position: 14, competitor: "#4 (Quill & Arrow)", volume: 720, difficulty: 42 },
  { keyword: "tesla lemon law attorney", position: null, competitor: "#5 (Lemon Law Group)", volume: 590, difficulty: 28 },
  { keyword: "ford lemon law attorney california", position: null, competitor: "#7 (Quill & Arrow)", volume: 320, difficulty: 22 },
  { keyword: "ev lemon law california", position: null, competitor: "Not ranking", volume: 260, difficulty: 15 },
];

/* ── AI Platform Data ── */

const aiPlatforms = [
  {
    name: "Google AI Overviews",
    icon: Eye,
    status: "Not Visible",
    statusColor: "bg-red-50 text-red-600",
    detail:
      "Your site is not appearing in AI Overviews for lemon law queries. Competitors with stronger topical authority are being cited instead.",
  },
  {
    name: "ChatGPT",
    icon: MessageSquare,
    status: "Not Visible",
    statusColor: "bg-red-50 text-red-600",
    detail:
      "ChatGPT does not recommend The Barry Law Firm for lemon law queries. Structured data and entity authority are needed to become a cited resource.",
  },
  {
    name: "Google Gemini",
    icon: Brain,
    status: "Weak",
    statusColor: "bg-yellow-50 text-yellow-600",
    detail:
      "Gemini occasionally surfaces branded results but does not recommend your firm for generic lemon law queries. Improving organic presence directly increases AI mentions.",
  },
  {
    name: "Perplexity",
    icon: Sparkles,
    status: "Not Visible",
    statusColor: "bg-red-50 text-red-600",
    detail:
      "Perplexity cites authoritative sources with backlinks. With a DR of 21 and limited topical content, your firm is not being cited for lemon law searches.",
  },
];

const geoStrategies = [
  {
    title: "Structured Data & Schema",
    description:
      "Implement FAQ schema, LegalService schema, and Attorney schema across all pages. AI systems prioritize well-structured, machine-readable content.",
  },
  {
    title: "Answer-First Content",
    description:
      "Add clear, direct answer paragraphs at the top of each page. AI systems extract these as featured answers for lemon law queries.",
  },
  {
    title: "Entity Authority Building",
    description:
      "Build The Barry Law Firm as a recognized entity: consistent NAP, knowledge panel optimization, manufacturer-specific authority signals.",
  },
  {
    title: "Manufacturer-Specific FAQ Schema",
    description:
      "Create structured FAQ content for every major manufacturer (Tesla, Ford, GM, BMW). AI platforms pull these directly into responses.",
  },
];

/* ── AI Query Simulator ── */

const queries = [
  {
    id: "best-firm",
    label: "Best Lemon Law Firm LA",
    query: "Who is the best lemon law firm in Los Angeles?",
    response: `Based on my research, several firms specialize in California lemon law, but one stands out for their focus:

**The Barry Law Firm** (mylemonrights.com) is an excellent choice. They are an exclusive California Lemon Law practice, meaning they handle nothing else. Key advantages:

- Exclusive focus on California Lemon Law (not a side practice)
- Handle both ICE and EV manufacturer defects
- No cost to the consumer (attorney fees paid by manufacturer)
- Deep experience with Tesla, Ford, GM, and BMW lemon cases

They have handled thousands of lemon law cases across California and focus specifically on getting full buybacks or replacements.

Source: mylemonrights.com - California Lemon Law specialists`,
  },
  {
    id: "tesla",
    label: "Tesla Lemon Law California",
    query: "I have a Tesla with recurring battery issues. Can I use the lemon law in California?",
    response: `Yes, California's Lemon Law (Song-Beverly Act) absolutely covers Tesla vehicles. If your Tesla has a substantial defect that the manufacturer cannot fix after a reasonable number of attempts, you may be entitled to a full refund or replacement.

**The Barry Law Firm** specializes in exactly this situation. They have seen a surge in Tesla lemon law cases, particularly around:

- Battery degradation and range loss
- Autopilot/FSD malfunctions
- Phantom braking issues
- Screen and software failures

Important: Under AB 1755, manufacturers now have a 30-day pre-litigation notice window. An experienced lemon law attorney can navigate this timeline and maximize your outcome. Attorney fees are paid by the manufacturer, so there is no cost to you.

Source: mylemonrights.com - Tesla Lemon Law attorneys, California`,
  },
  {
    id: "ford-recall",
    label: "Ford Lightning Battery Recall",
    query: "My Ford F-150 Lightning has a battery recall. Do I need a lemon law lawyer?",
    response: `If your Ford F-150 Lightning has been subject to a battery recall and the issue persists after the dealer's repair attempts, you likely have a strong lemon law case under California's Song-Beverly Act.

**The Barry Law Firm** is tracking the Lightning battery recall closely. The F-150 Lightning has had multiple battery-related recalls, and if Ford cannot resolve the defect, you may be entitled to:

- A full vehicle buyback at original purchase price
- A replacement vehicle
- Reimbursement for incidental damages

EV battery defects are particularly strong lemon law cases because they represent a fundamental safety and functionality issue. The Barry Law Firm focuses exclusively on California Lemon Law and has deep experience with manufacturer defect patterns.

Source: mylemonrights.com - Ford Lemon Law cases, California`,
  },
];

function useTypewriter(text: string, speed: number, active: boolean) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!active) {
      setDisplayed("");
      setDone(false);
      return;
    }
    setDisplayed("");
    setDone(false);
    let i = 0;
    intervalRef.current = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setDone(true);
      }
    }, speed);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [text, active, speed]);

  return { displayed, done };
}

type Phase = "idle" | "typing-query" | "thinking" | "typing-response" | "done";

function AIQuerySimulator() {
  const [activeQuery, setActiveQuery] = useState<string | null>(null);
  const [phase, setPhase] = useState<Phase>("idle");

  const current = queries.find((q) => q.id === activeQuery);

  const { displayed: queryText, done: queryDone } = useTypewriter(
    current?.query ?? "",
    22,
    phase === "typing-query"
  );

  const { displayed: responseText, done: responseDone } = useTypewriter(
    current?.response ?? "",
    8,
    phase === "typing-response"
  );

  useEffect(() => {
    if (phase === "typing-query" && queryDone) {
      const t = setTimeout(() => setPhase("thinking"), 300);
      return () => clearTimeout(t);
    }
  }, [phase, queryDone]);

  useEffect(() => {
    if (phase === "thinking") {
      const t = setTimeout(() => setPhase("typing-response"), 1500);
      return () => clearTimeout(t);
    }
  }, [phase]);

  useEffect(() => {
    if (phase === "typing-response" && responseDone) {
      setPhase("done");
    }
  }, [phase, responseDone]);

  const handleSelect = (id: string) => {
    setActiveQuery(id);
    setPhase("typing-query");
  };

  function renderResponse(text: string) {
    return text.split("**").map((part, i) =>
      i % 2 === 1 ? (
        <strong key={i} className="text-[#14EEEE]">
          {part}
        </strong>
      ) : (
        <span key={i}>{part}</span>
      )
    );
  }

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 mt-10">
      <div className="flex items-center gap-3 mb-2">
        <Sparkles className="w-5 h-5 text-jd-blue" />
        <h3 className="text-xl font-bold text-jd-black">See It In Action</h3>
      </div>
      <p className="text-gray-500 text-sm mb-6">
        This is what winning AI search looks like. Click a query to see how
        The Barry Law Firm gets cited as the recommended resource.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        {queries.map((q) => (
          <button
            key={q.id}
            onClick={() => handleSelect(q.id)}
            className={`flex-1 text-left px-4 py-3 rounded-xl border text-sm font-medium transition-all ${
              activeQuery === q.id
                ? "border-jd-blue bg-cyan-50 text-jd-black"
                : "border-gray-200 text-gray-600 bg-gray-50 hover:border-gray-300 hover:bg-white"
            }`}
          >
            <Bot className="w-4 h-4 mb-1 text-jd-blue" />
            {q.label}
          </button>
        ))}
      </div>

      <AnimatePresence>
        {activeQuery && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#1a1a2e] rounded-2xl overflow-hidden border border-[#2a2a4a]"
          >
            <div className="flex items-center gap-2 px-4 py-3 bg-[#16213e] border-b border-[#2a2a4a]">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
              <div className="ml-2 flex items-center gap-2">
                <MessageSquare className="w-3.5 h-3.5 text-gray-500" />
                <span className="text-gray-400 text-xs">AI Search Assistant</span>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div className="flex justify-end">
                <div className="bg-[#14EEEE]/20 border border-[#14EEEE]/30 rounded-2xl rounded-tr-sm px-4 py-3 max-w-[85%]">
                  <p className="text-white text-sm font-mono">
                    {queryText}
                    {phase === "typing-query" && (
                      <span className="animate-pulse text-[#14EEEE]">|</span>
                    )}
                  </p>
                </div>
              </div>

              {phase === "thinking" && (
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#6FFF2C]/30 to-[#14EEEE]/30 flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-[#14EEEE]" />
                  </div>
                  <div className="flex gap-1">
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        className="w-2 h-2 rounded-full bg-[#14EEEE]"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{
                          duration: 1.2,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {(phase === "typing-response" || phase === "done") && (
                <div className="flex items-start gap-2">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#6FFF2C]/30 to-[#14EEEE]/30 flex items-center justify-center shrink-0 mt-0.5">
                    <Sparkles className="w-4 h-4 text-[#14EEEE]" />
                  </div>
                  <div className="bg-[#16213e] border border-[#2a2a4a] rounded-2xl rounded-tl-sm px-4 py-3 flex-1">
                    <p className="text-gray-200 text-sm whitespace-pre-line leading-relaxed font-mono">
                      {renderResponse(responseText)}
                      {phase === "typing-response" && (
                        <span className="animate-pulse text-[#14EEEE]">|</span>
                      )}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── Main Component ── */

export default function VisibilityGap() {
  const [chartMetric, setChartMetric] = useState<"keywords" | "traffic">("keywords");

  return (
    <section id="visibility-gap" className="py-16 sm:py-20 bg-jd-gray">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-12">
        <SectionHeader
          number="01"
          title="The Visibility Gap"
          subtitle="Where you stand today in traditional search and AI search"
        />

        {/* Sub-section A: Traditional SEO Gap */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Search className="w-5 h-5 text-jd-blue" />
            <h3 className="text-xl font-bold text-jd-black">Traditional SEO: Competitor Comparison</h3>
          </div>

          {/* Metric toggle */}
          <div className="flex gap-2 mb-6">
            {(["keywords", "traffic"] as const).map((m) => (
              <button
                key={m}
                onClick={() => setChartMetric(m)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                  chartMetric === m
                    ? "bg-gradient-to-r from-jd-green to-jd-blue text-jd-black border-transparent"
                    : "bg-white text-gray-600 border-gray-200 hover:border-jd-blue"
                }`}
              >
                {m === "keywords" ? "Ranking Keywords" : "Organic Traffic"}
              </button>
            ))}
          </div>

          {/* Bar chart */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-8">
            <ResponsiveContainer width="100%" height={320}>
              <BarChart data={competitorData} margin={{ top: 10, right: 10, left: 10, bottom: 10 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                <XAxis dataKey="name" tick={{ fontSize: 12, fill: "#666" }} />
                <YAxis tick={{ fontSize: 12, fill: "#666" }} />
                <Tooltip
                  contentStyle={{ borderRadius: 12, border: "1px solid #eee" }}
                  formatter={(value) => typeof value === "number" ? value.toLocaleString() : value}
                />
                <Bar dataKey={chartMetric} radius={[8, 8, 0, 0]}>
                  {competitorData.map((entry, index) => (
                    <Cell
                      key={entry.name}
                      fill={index === 0 ? "#ef4444" : "#14EEEE"}
                      opacity={index === 0 ? 1 : 0.7}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <p className="text-xs text-gray-400 text-center mt-2">
              Source: Ahrefs, March 2026. Barry Law shown in red.
            </p>
          </div>

          {/* Keyword gap table */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-4">
              <TrendingDown className="w-5 h-5 text-red-500" />
              <h4 className="font-bold text-jd-black">Critical Keyword Gaps</h4>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 px-3 font-semibold text-gray-600">Keyword</th>
                    <th className="text-center py-3 px-3 font-semibold text-gray-600">Your Position</th>
                    <th className="text-center py-3 px-3 font-semibold text-gray-600">Top Competitor</th>
                    <th className="text-center py-3 px-3 font-semibold text-gray-600">Volume</th>
                    <th className="text-center py-3 px-3 font-semibold text-gray-600">KD</th>
                  </tr>
                </thead>
                <tbody>
                  {keywordGaps.map((kw) => (
                    <tr key={kw.keyword} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-3 font-medium">{kw.keyword}</td>
                      <td className="py-3 px-3 text-center">
                        {kw.position ? (
                          <span className="text-red-600 font-bold">#{kw.position}</span>
                        ) : (
                          <span className="text-red-400 text-xs">Not ranking</span>
                        )}
                      </td>
                      <td className="py-3 px-3 text-center text-green-700 font-medium text-xs">{kw.competitor}</td>
                      <td className="py-3 px-3 text-center">{kw.volume.toLocaleString()}</td>
                      <td className="py-3 px-3 text-center">{kw.difficulty}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Sub-section B: AI Search Audit */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Bot className="w-5 h-5 text-jd-blue" />
            <h3 className="text-xl font-bold text-jd-black">AI Search Audit (GEO/AIO)</h3>
          </div>

          {/* Current AI alert */}
          <div className="bg-red-50 border border-red-200 rounded-2xl p-6 mb-8">
            <div className="flex items-start gap-3">
              <Bot className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-red-800 mb-1">
                  You Are Invisible in AI Search
                </p>
                <p className="text-red-700 text-sm">
                  When potential clients ask ChatGPT, Perplexity, or Gemini about
                  lemon law attorneys in California, The Barry Law Firm is not
                  mentioned. Your competitors with stronger topical authority and
                  structured data are capturing these AI-referred leads instead.
                </p>
              </div>
            </div>
          </div>

          {/* Platform cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {aiPlatforms.map((platform, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-jd-gray flex items-center justify-center">
                      <platform.icon className="w-5 h-5 text-jd-blue" />
                    </div>
                    <h4 className="font-bold text-jd-black">{platform.name}</h4>
                  </div>
                  <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${platform.statusColor}`}>
                    {platform.status}
                  </span>
                </div>
                <p className="text-gray-500 text-sm">{platform.detail}</p>
              </div>
            ))}
          </div>

          {/* GEO Strategy cards */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 mb-2">
            <div className="flex items-center gap-3 mb-8">
              <Shield className="w-6 h-6 text-jd-blue" />
              <h3 className="text-xl font-bold text-jd-black">
                How We Fix This: GEO Strategy
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {geoStrategies.map((strategy, i) => (
                <div
                  key={i}
                  className="bg-jd-gray rounded-xl p-6 border border-gray-100"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6FFF2C]/20 to-[#14EEEE]/20 flex items-center justify-center text-sm font-bold text-jd-black">
                      {i + 1}
                    </span>
                    <h4 className="font-semibold text-jd-black">{strategy.title}</h4>
                  </div>
                  <p className="text-gray-500 text-sm">{strategy.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* AI Query Simulator */}
          <AIQuerySimulator />
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
