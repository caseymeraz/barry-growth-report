export default function CTASection() {
  return (
    <section id="next-step" className="py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="bg-gradient-to-br from-jd-green to-jd-blue rounded-3xl p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-jd-black mb-4">
              Ready to Own the California
              <br />
              Lemon Law Market?
            </h2>
            <p className="text-lg text-jd-black/80 max-w-2xl mx-auto mb-8">
              Let&apos;s discuss the findings in this report and map out a custom
              strategy for The Barry Law Firm. No pitch deck, no pressure -
              just a conversation about what&apos;s possible when you stop
              renting traffic and start building assets.
            </p>

            {/* Armon card */}
            <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg mb-8">
              <img
                src="https://jurisdigital.com/wp-content/uploads/ArmonHatcher.jpg.webp"
                alt="Armon Hatcher, Juris Digital"
                className="w-20 h-20 rounded-full object-cover shadow-md"
              />
              <div className="text-left">
                <p className="font-bold text-jd-black text-lg">Armon Hatcher</p>
                <p className="text-sm text-gray-600">
                  Growth Strategist, Juris Digital
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Specializing in plaintiff firm growth &amp; lemon law marketing
                </p>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold text-jd-black/70 mt-3">
                Your competitors are not waiting. The EV recall surge is happening now, and the firm that claims this space first will own it for years.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <img
            src="https://jurisdigital.com/wp-content/uploads/logo-dark.svg"
            alt="Juris Digital"
            className="h-6 mx-auto mb-4 opacity-50"
          />
          <p className="text-xs text-gray-400">
            Report generated on March 18, 2026 &middot; Data sources: Ahrefs,
            NHTSA, Google Search Console &middot; Prepared exclusively
            for The Barry Law Firm
          </p>
          <p className="text-xs text-gray-400 mt-1">
            &copy; 2026 Juris Digital. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
