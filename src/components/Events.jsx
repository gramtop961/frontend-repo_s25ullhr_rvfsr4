const sampleEvents = [
  {
    date: 'Every Friday',
    title: 'Live Acoustic Night',
    desc: 'Local artists set the mood with warm, unplugged sets from 8 PM.',
    tag: 'Music',
  },
  {
    date: 'First Saturday / Month',
    title: 'Open Mic & Poetry',
    desc: 'Step up to the mic or enjoy heartfelt readings and songs.',
    tag: 'Community',
  },
  {
    date: 'Next Sunday',
    title: 'Brunch & Jazz',
    desc: 'Slow morning, smooth coffee, and a mellow trio from 11 AM.',
    tag: 'Special',
  },
];

export default function Events() {
  return (
    <section id="events" className="py-16 bg-gradient-to-b from-neutral-950 to-neutral-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-amber-200 tracking-tight">Events</h2>
            <p className="text-amber-100/70 mt-2 max-w-2xl">We’re known for intimate live music nights and community gatherings. Mark your calendar and bring friends.</p>
          </div>
          <a href="#contact" className="hidden md:inline-block text-sm bg-amber-500 hover:bg-amber-400 text-neutral-900 px-4 py-2 rounded-md font-medium transition-colors">Book a table</a>
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-4">
          {sampleEvents.map((e, idx) => (
            <article key={idx} className="rounded-xl border border-white/10 bg-neutral-900/60 p-5 hover:border-amber-400/40 transition-colors">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-amber-300/80">{e.tag}</span>
                <span className="text-xs text-amber-100/70">{e.date}</span>
              </div>
              <h3 className="mt-3 text-xl font-semibold text-white">{e.title}</h3>
              <p className="mt-2 text-amber-100/80">{e.desc}</p>
              <div className="mt-4">
                <a href="#contact" className="text-amber-300 hover:text-amber-200 text-sm">Reserve a spot →</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
