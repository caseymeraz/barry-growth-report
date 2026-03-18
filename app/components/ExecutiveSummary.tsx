export default function ExecutiveSummary() {
  return (
    <section id="executive-summary" className="py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Header */}
        <div className="mb-12">
          <p className="text-sm font-semibold text-jd-blue uppercase tracking-wider mb-3">
            Growth Report
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-jd-black leading-tight mb-4">
            The Barry Law Firm
          </h1>
          <p className="text-lg text-gray-500">
            Prepared by Juris Digital &middot; March 18, 2026
          </p>
        </div>

        {/* Pull quote */}
        <div className="relative bg-jd-gray rounded-2xl p-8 sm:p-10 mb-12 border-l-4 border-jd-blue">
          <p className="text-xl sm:text-2xl font-semibold text-jd-black leading-relaxed italic">
            &ldquo;You reduced PPC spend from $90k/mo to $60k/mo with no drop in
            leads. That $30k/mo was waste. The question now is: what if you
            reinvested that into channels that compound over time?&rdquo;
          </p>
        </div>

        {/* Key metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <MetricCard
            label="Domain Rating"
            value="21"
            context="vs. 33 for quillarrowlaw.com"
            color="red"
          />
          <MetricCard
            label="Organic Traffic"
            value="1,409"
            subtext="/mo"
            context="vs. 6,862 for lemonlawgrouppartners.com"
            color="red"
          />
          <MetricCard
            label="PPC Waste Identified"
            value="$30K"
            subtext="/mo"
            context="$360K/yr that could fuel organic growth"
            color="blue"
          />
          <MetricCard
            label="Your Goal"
            value="63"
            subtext="cases/mo"
            context="Signed cases tracked and attributed to source"
            color="green"
          />
        </div>

        {/* Summary paragraph */}
        <div className="prose max-w-none">
          <p className="text-lg text-gray-700 leading-relaxed">
            The Barry Law Firm has built a strong reputation as California&apos;s
            go-to lemon law firm. But your digital presence doesn&apos;t reflect
            that position. Competitors with higher domain authority and deeper
            keyword portfolios are capturing the high-intent searches that drive
            signed cases. Your site ranks well for branded terms and generic car
            problem queries, but you&apos;re invisible on the money keywords:
            &quot;California lemon law attorney&quot; sits at #12, &quot;Los Angeles
            lemon law attorneys&quot; at #9. Meanwhile, the EV recall surge is
            creating a once-in-a-decade opportunity that no lemon law firm has
            claimed yet. This report lays out the path from reactive PPC
            dependence to proactive, compounding organic growth.
          </p>
        </div>
      </div>
    </section>
  );
}

function MetricCard({
  label,
  value,
  subtext,
  context,
  color,
}: {
  label: string;
  value: string;
  subtext?: string;
  context: string;
  color: "blue" | "red" | "green";
}) {
  const colorClasses = {
    blue: "border-jd-blue bg-cyan-50",
    red: "border-red-400 bg-red-50",
    green: "border-jd-green bg-green-50",
  };

  return (
    <div
      className={`stat-card rounded-xl border-t-4 p-6 ${colorClasses[color]}`}
    >
      <p className="text-sm font-medium text-gray-500 mb-1">{label}</p>
      <p className="text-4xl font-extrabold text-jd-black">
        {value}
        {subtext && (
          <span className="text-base font-medium text-gray-500 ml-1">
            {subtext}
          </span>
        )}
      </p>
      <p className="text-sm text-gray-500 mt-2">{context}</p>
    </div>
  );
}
