export default function BrandStrategy() {
  return (
    <section id="brand-strategy" className="py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-12">
        <SectionHeader
          number="04"
          title="Brand Strategy: The No-Face Pivot"
          subtitle="From David Barry's portrait to a boutique StoryBrand experience"
        />

        {/* The Pivot Narrative */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 mb-10">
          <h3 className="text-lg font-bold text-jd-black mb-4">The Pivot</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            The current site leads with David Barry as the face of the firm. That
            worked for the early years, but scaling to 63 cases/month requires a
            different approach. The StoryBrand framework makes the client the hero
            and the firm the guide. The homepage should open with the
            client&apos;s problem (a defective vehicle ruining their life) and
            position The Barry Law Firm as the trusted guide who has solved this
            problem thousands of times. No single attorney portrait. Instead:
            the firm&apos;s collective expertise, case results, and
            manufacturer-specific authority.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-red-50 rounded-xl p-5 border border-red-100">
              <h4 className="font-bold text-red-700 mb-3">Current Approach</h4>
              <ul className="space-y-2 text-sm text-red-600">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">&#x2717;</span>
                  Hero image = David Barry portrait
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">&#x2717;</span>
                  Messaging leads with the firm, not the client
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">&#x2717;</span>
                  Generic lemon law content, not manufacturer-specific
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">&#x2717;</span>
                  Single-personality brand limits scalability
                </li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-xl p-5 border border-green-100">
              <h4 className="font-bold text-green-700 mb-3">StoryBrand Approach</h4>
              <ul className="space-y-2 text-sm text-green-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">&#x2713;</span>
                  Hero = client peace of mind + resolved vehicle
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">&#x2713;</span>
                  Client is the hero, firm is the guide
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">&#x2713;</span>
                  Manufacturer-specific landing pages (Tesla, Ford, GM)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">&#x2713;</span>
                  Boutique firm brand scales beyond any one person
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 3-Phase Roadmap */}
        <div className="space-y-8">
          <Phase
            number="1"
            title="Foundation"
            timeline="0-90 Days"
            color="from-jd-green to-emerald-400"
            items={[
              {
                title: "Technical SEO Overhaul",
                desc: "Schema markup (LegalService, Attorney, FAQPage), site speed optimization, XML sitemap, and internal linking architecture. This is the foundation everything else builds on.",
              },
              {
                title: "AIO/GEO Preparation",
                desc: "Structured data, answer-first content blocks, and entity authority signals. Get The Barry Law Firm recognized as a trusted entity by AI platforms.",
              },
              {
                title: "CallRail Migration",
                desc: "Move from Call Tracking Metrics to CallRail. Every call and form submission tracked and attributed to its source. Integrate with Clio Grow for seamless intake.",
              },
              {
                title: "StoryBrand Website Redesign",
                desc: "New site positioning the client as the hero. Manufacturer-specific landing pages, case results, trust signals. Mobile-first, sub-2-second loads.",
              },
              {
                title: "Core Money Page Optimization",
                desc: "Rewrite and optimize the critical conversion pages: California Lemon Law Attorney, Los Angeles Lemon Law, and practice area pages. Target the #12 and #9 rankings.",
              },
              {
                title: "Google Business Profile Optimization",
                desc: "Complete optimization with accurate categories, service areas, photo strategy, and Q&A content. Foundation for local pack visibility.",
              },
            ]}
          />

          <Phase
            number="2"
            title="Manufacturer Content Blitz"
            timeline="90-180 Days"
            color="from-jd-blue to-cyan-400"
            items={[
              {
                title: "Ford Lightning Content Cluster",
                desc: "Comprehensive content covering Lightning battery recalls, fire risks, buyback process, and lemon law eligibility. Target 'ford lightning lemon law' and related terms.",
              },
              {
                title: "Tesla Cybertruck & Model Y Pages",
                desc: "Dedicated pages for Tesla-specific defects: Autopilot failures, phantom braking, battery degradation, panel gaps. Capture the 'tesla lemon law' search cluster.",
              },
              {
                title: "GM Ultium Platform Hub",
                desc: "Lyriq, Blazer EV, Equinox EV content. GM's Ultium battery platform has widespread issues. Build the definitive resource for GM EV lemon law cases.",
              },
              {
                title: "AB 1755 Resource Center",
                desc: "Build the definitive guide to California's 30-day pre-litigation notice requirement. No competitor has this content. Capture high-intent searches at the decision point.",
              },
              {
                title: "Digital PR & Link Building",
                desc: "EV recall commentary for legal publications, manufacturer defect expert quotes for news outlets. Real links from authoritative sources to boost DR from 21 to 30+.",
              },
              {
                title: "Review Generation Strategy",
                desc: "Systematic collection from past and current clients. Automated follow-ups. Target: 10+ new Google reviews per month.",
              },
            ]}
          />

          <Phase
            number="3"
            title="Market Dominance"
            timeline="180+ Days"
            color="from-purple-500 to-jd-blue"
            items={[
              {
                title: "AI Search Presence",
                desc: "With entity authority, structured data, and deep content in place, The Barry Law Firm starts appearing in ChatGPT, Perplexity, and Google AI Overviews for lemon law queries.",
              },
              {
                title: "63 Signed Cases/Month",
                desc: "Organic traffic, AI referrals, local pack visibility, and a conversion-optimized website working together. PPC budget can be further reduced as organic compounds.",
              },
              {
                title: "Category Ownership: EV Lemon Law",
                desc: "No other firm will have the content depth, authority, or AI presence for EV lemon law. The Barry Law Firm becomes the definitive resource in this category.",
              },
              {
                title: "Statewide Expansion",
                desc: "With California locked down, expand content to cover national EV defect trends. Drive referral relationships from out-of-state attorneys handling similar cases.",
              },
            ]}
          />
        </div>
      </div>
    </section>
  );
}

function Phase({
  number,
  title,
  timeline,
  color,
  items,
}: {
  number: string;
  title: string;
  timeline: string;
  color: string;
  items: { title: string; desc: string }[];
}) {
  return (
    <div className="relative">
      <div className={`bg-gradient-to-r ${color} rounded-2xl p-6 sm:p-8 text-white mb-6`}>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-xl font-extrabold">
            {number}
          </div>
          <div>
            <h3 className="text-2xl font-extrabold">{title}</h3>
            <p className="text-white/80 font-medium">{timeline}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pl-4 sm:pl-8">
        {items.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <h4 className="font-bold text-jd-black mb-2">{item.title}</h4>
            <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
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
