"use client";

import { useState } from "react";

export default function FunnelCalculator() {
  const [monthlyTraffic, setMonthlyTraffic] = useState(8000);
  const [visitorToLeadRate, setVisitorToLeadRate] = useState(4);
  const [leadToQualRate, setLeadToQualRate] = useState(35);
  const [qualToSignedRate, setQualToSignedRate] = useState(56);
  const [avgCaseValue] = useState(35000);

  const monthlyLeads = monthlyTraffic * (visitorToLeadRate / 100);
  const qualifiedLeads = monthlyLeads * (leadToQualRate / 100);
  const signedCases = qualifiedLeads * (qualToSignedRate / 100);
  const monthlyRevenue = signedCases * avgCaseValue;
  const annualRevenue = monthlyRevenue * 12;
  const ppcSavings = 360000;
  const monthlyInvestment = 20000;
  const annualInvestment = monthlyInvestment * 12;
  const roiMultiple = annualRevenue / annualInvestment;

  return (
    <section id="roi-calculator" className="py-16 sm:py-20 bg-jd-gray">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-12">
        <SectionHeader
          number="03"
          title="ROI Projection"
          subtitle="Back-solved from your 63 signed cases/month goal"
        />

        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
          {/* Case Type Presets */}
          <div className="mb-8">
            <p className="text-sm font-medium text-gray-500 mb-3">Quick Presets by Case Type</p>
            <div className="flex flex-wrap gap-2">
              {[
                { label: "Lemon Law (Standard)", traffic: 8000, vl: 4, lq: 35, qs: 56 },
                { label: "EV Lemon Law (Premium)", traffic: 5000, vl: 6, lq: 40, qs: 60 },
                { label: "Manufacturer Defect (Class)", traffic: 12000, vl: 3, lq: 25, qs: 50 },
              ].map((preset) => (
                <button
                  key={preset.label}
                  onClick={() => {
                    setMonthlyTraffic(preset.traffic);
                    setVisitorToLeadRate(preset.vl);
                    setLeadToQualRate(preset.lq);
                    setQualToSignedRate(preset.qs);
                  }}
                  className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                    monthlyTraffic === preset.traffic && visitorToLeadRate === preset.vl
                      ? "bg-gradient-to-r from-jd-green to-jd-blue text-jd-black border-transparent"
                      : "bg-white text-gray-600 border-gray-200 hover:border-jd-blue hover:text-jd-black"
                  }`}
                >
                  {preset.label}
                </button>
              ))}
            </div>
          </div>

          {/* Sliders */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <Slider
              label="Monthly Organic Traffic"
              value={monthlyTraffic}
              min={1000}
              max={20000}
              step={500}
              format={(v) => v.toLocaleString()}
              onChange={setMonthlyTraffic}
            />
            <Slider
              label="Visitor-to-Lead Rate"
              value={visitorToLeadRate}
              min={1}
              max={10}
              step={0.5}
              format={(v) => `${v}%`}
              onChange={setVisitorToLeadRate}
            />
            <Slider
              label="Lead-to-Qualified Rate"
              value={leadToQualRate}
              min={10}
              max={60}
              step={1}
              format={(v) => `${v}%`}
              onChange={setLeadToQualRate}
            />
            <Slider
              label="Qualified-to-Signed Rate"
              value={qualToSignedRate}
              min={20}
              max={80}
              step={1}
              format={(v) => `${v}%`}
              onChange={setQualToSignedRate}
            />
          </div>

          {/* Funnel visualization */}
          <div className="mb-10">
            <h3 className="text-lg font-bold text-jd-black mb-6 text-center">
              Monthly Lead Funnel
            </h3>
            <div className="flex flex-col items-center gap-3">
              <FunnelBar
                label="Website Visitors"
                value={monthlyTraffic.toLocaleString()}
                pct={100}
              />
              <Arrow />
              <FunnelBar
                label="Leads (Calls + Forms)"
                value={Math.round(monthlyLeads).toLocaleString()}
                pct={70}
              />
              <Arrow />
              <FunnelBar
                label="Qualified Leads"
                value={Math.round(qualifiedLeads).toLocaleString()}
                pct={45}
              />
              <Arrow />
              <FunnelBar
                label="Signed Cases"
                value={signedCases.toFixed(1)}
                pct={25}
                highlight
              />
            </div>
          </div>

          {/* PPC Savings Callout */}
          <div className="bg-gradient-to-r from-cyan-50 to-green-50 rounded-xl p-6 mb-8 border border-cyan-100">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="font-bold text-jd-black text-lg">PPC Savings Reinvestment</p>
                <p className="text-sm text-gray-600">
                  The $30K/mo you identified as PPC waste = $360K/yr. Redirected into organic and AI search,
                  this creates compounding returns instead of rented traffic.
                </p>
              </div>
              <div className="text-center shrink-0">
                <p className="text-3xl font-extrabold text-jd-black">${(ppcSavings / 1000).toFixed(0)}K</p>
                <p className="text-xs text-gray-500">Annual reinvestment</p>
              </div>
            </div>
          </div>

          {/* ROI Results */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
            <ResultCard
              label="Signed Cases/Mo"
              value={signedCases.toFixed(1)}
              sublabel={`Goal: 63 cases/month`}
            />
            <ResultCard
              label="Monthly Revenue"
              value={`$${Math.round(monthlyRevenue).toLocaleString()}`}
              sublabel={`${signedCases.toFixed(1)} cases x $${avgCaseValue.toLocaleString()}`}
            />
            <ResultCard
              label="Annual Revenue"
              value={`$${Math.round(annualRevenue).toLocaleString()}`}
              sublabel="Projected at maturity"
            />
            <ResultCard
              label="ROI Multiple"
              value={`${roiMultiple.toFixed(1)}x`}
              sublabel={`On $${monthlyInvestment.toLocaleString()}/mo investment`}
              highlight
            />
          </div>

          <div className="mt-8 bg-jd-gray rounded-xl p-6">
            <p className="text-sm text-gray-600 leading-relaxed">
              <span className="font-semibold">Note:</span> Lemon law case value
              reflects average attorney fee recovery from manufacturers ($35,000).
              The manufacturer pays your fees, not the client. These projections
              assume organic traffic building over months 6-12 with full maturity
              in year two. The sliders let you test conservative and optimistic
              scenarios.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Slider({
  label,
  value,
  min,
  max,
  step,
  format,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  format: (v: number) => string;
  onChange: (v: number) => void;
}) {
  return (
    <div>
      <label className="block text-xs font-medium text-gray-500 mb-2">
        {label}
      </label>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-[#14EEEE]"
      />
      <p className="text-xl font-bold text-jd-black mt-1">{format(value)}</p>
    </div>
  );
}

function FunnelBar({
  label,
  value,
  pct,
  highlight,
}: {
  label: string;
  value: string;
  pct: number;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-xl p-4 text-center transition-all ${
        highlight
          ? "bg-gradient-to-r from-jd-green/20 to-jd-blue/20 border-2 border-jd-blue/30"
          : "bg-gray-50"
      }`}
      style={{ width: `${pct}%`, minWidth: "200px" }}
    >
      <p className={`text-2xl font-extrabold text-jd-black ${highlight ? "text-3xl" : ""}`}>
        {value}
      </p>
      <p className="text-sm font-medium text-gray-600">{label}</p>
    </div>
  );
}

function Arrow() {
  return <div className="text-gray-300 text-xl">&darr;</div>;
}

function ResultCard({
  label,
  value,
  sublabel,
  highlight,
}: {
  label: string;
  value: string;
  sublabel: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-xl p-6 text-center ${
        highlight
          ? "bg-gradient-to-br from-jd-green/10 to-jd-blue/10 border-2 border-jd-blue/20"
          : "bg-jd-gray"
      }`}
    >
      <p className="text-sm font-medium text-gray-500 mb-1">{label}</p>
      <p className="text-3xl font-extrabold text-jd-black">{value}</p>
      <p className="text-xs text-gray-500 mt-2">{sublabel}</p>
    </div>
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
