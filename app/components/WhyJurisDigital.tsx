export default function WhyJurisDigital() {
  return (
    <section id="why-juris-digital" className="py-16 sm:py-20 bg-jd-gray">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-12">
        <SectionHeader
          number="05"
          title="Why Juris Digital"
          subtitle="We only do one thing: help law firms grow"
        />

        {/* Key differentiators */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <DiffCard
            title="75+ In-House Specialists"
            desc="No outsourcing. Strategy, design, development, content, and SEO are all done by legal marketing specialists under one roof."
          />
          <DiffCard
            title="Case-First Philosophy"
            desc="We measure success by signed cases, not rankings or traffic. Everything we do is reverse-engineered from your 63 cases/month goal."
          />
          <DiffCard
            title="No Network Conflicts"
            desc="We are independently owned. No PE firm dictating strategy. No shared clients in your market. Your growth is our only priority."
          />
          <DiffCard
            title="No Long-Term Contracts"
            desc="We earn your business every month. If we are not delivering results, you can leave. That is the way it should be."
          />
          <DiffCard
            title="You Own Everything"
            desc="Your website, your content, your data, your call tracking. We believe in earning retention through results, not vendor lock-in."
          />
          <DiffCard
            title="AI-Forward, Quality-First"
            desc="We leverage AI tools to work faster and smarter, but every piece of content is created and reviewed by legal marketing experts."
          />
        </div>

        {/* Migration Plan */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm mb-8">
          <h3 className="text-lg font-bold text-jd-black mb-2">Migration Plan: Zero Downtime</h3>
          <p className="text-sm text-gray-500 mb-6">Seamless transition from ConsultWebs with no ranking or lead disruption</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <MigrationCard
              step="1"
              title="Call Tracking Migration"
              desc="Move from Call Tracking Metrics to CallRail with full number porting. Zero lost attribution."
            />
            <MigrationCard
              step="2"
              title="Clio Grow Integration"
              desc="Connect CallRail to Clio Grow for seamless intake tracking. Every lead flows directly into your CRM."
            />
            <MigrationCard
              step="3"
              title="Website Migration"
              desc="New StoryBrand site built in parallel. Launch with 301 redirects preserving all existing link equity and rankings."
            />
            <MigrationCard
              step="4"
              title="Reporting Setup"
              desc="Monthly video walkthroughs, real-time dashboards, and lead-to-case attribution from day one."
            />
          </div>
        </div>

        {/* ConsultWebs comparison */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm mb-8">
          <h3 className="text-lg font-bold text-jd-black mb-4">
            ConsultWebs vs. Juris Digital
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-[600px] w-full text-sm">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-600">Factor</th>
                  <th className="text-center py-3 px-4 font-semibold text-red-600">ConsultWebs</th>
                  <th className="text-center py-3 px-4 font-semibold text-green-600">Juris Digital</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["PPC Strategy", "Spending $60K/mo (down from $90K) with no strategic reduction plan", "Systematic PPC reduction as organic grows, $30K/mo already identified as waste"],
                  ["SEO Approach", "Generic content, no manufacturer-specific strategy", "Manufacturer-specific content clusters (Tesla, Ford, GM), EV-first strategy"],
                  ["AI Search (GEO)", "No AI search strategy", "Dedicated GEO strategy: schema, entity authority, answer-first content"],
                  ["Brand Strategy", "Single attorney face, no StoryBrand", "No-face StoryBrand pivot, client-as-hero messaging"],
                  ["Call Tracking", "Call Tracking Metrics (limited)", "CallRail with Clio Grow integration, full attribution"],
                  ["EV Market", "Not targeting EV keywords", "EV recall surge content strategy, manufacturer-specific pages"],
                  ["Content Cadence", "Reactive, inconsistent", "Proactive monthly execution with editorial calendar"],
                  ["Reporting", "Standard reports", "Monthly video walkthroughs, lead-to-case attribution"],
                  ["Contract", "Locked in", "Month-to-month, no lock-in"],
                  ["Ownership", "Vendor-controlled", "You own everything"],
                ].map(([factor, current, jd], i) => (
                  <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium">{factor}</td>
                    <td className="py-3 px-4 text-center text-red-600 text-xs">{current}</td>
                    <td className="py-3 px-4 text-center text-green-700 font-medium text-xs">{jd}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Proof points */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm">
          <h3 className="text-lg font-bold text-jd-black mb-6">
            Results We&apos;ve Delivered
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <ProofCard
              firm="GJEL Accident Attorneys"
              result="200%"
              metric="increase in signed cases"
              detail="From struggling with organic visibility to dominating their California market"
            />
            <ProofCard
              firm="Moses & Rooth"
              result="200+"
              metric="qualified leads per month"
              detail="Built from scratch to market leadership in Orlando criminal defense"
            />
            <ProofCard
              firm="Thomas, Adams & Coffey"
              result="450+"
              metric="qualified leads per month"
              detail="Scaled from local firm to regional powerhouse through integrated digital strategy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function DiffCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <h4 className="font-bold text-jd-black mb-2">{title}</h4>
      <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
    </div>
  );
}

function MigrationCard({ step, title, desc }: { step: string; title: string; desc: string }) {
  return (
    <div className="text-center">
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-jd-green to-jd-blue flex items-center justify-center mx-auto mb-3">
        <span className="text-sm font-bold text-jd-black">{step}</span>
      </div>
      <h5 className="font-bold text-jd-black text-sm mb-1">{title}</h5>
      <p className="text-xs text-gray-600">{desc}</p>
    </div>
  );
}

function ProofCard({
  firm,
  result,
  metric,
  detail,
}: {
  firm: string;
  result: string;
  metric: string;
  detail: string;
}) {
  return (
    <div className="gradient-border rounded-xl p-6 bg-jd-gray">
      <p className="text-3xl font-extrabold text-jd-black">{result}</p>
      <p className="text-sm font-semibold text-gray-700">{metric}</p>
      <p className="text-sm font-bold text-jd-black mt-3">{firm}</p>
      <p className="text-xs text-gray-500 mt-1">{detail}</p>
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
