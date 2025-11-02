import Navbar from './components/Navbar';
import Gallery from './components/Gallery';
import Events from './components/Events';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-amber-50 scroll-smooth">
      <Navbar />

      <section id="home" className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.15),transparent_60%)] pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 pt-28 pb-20 md:pt-36 md:pb-28 relative">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-amber-200">
                Cozy Corner Pub & Café
              </h1>
              <p className="mt-4 text-amber-100/80 text-lg md:text-xl max-w-prose">
                A warm, neighborhood spot for craft beer, specialty coffee, and live music nights. Come for the brews, stay for the vibe.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#events" className="bg-amber-500 hover:bg-amber-400 text-neutral-900 px-5 py-2.5 rounded-md font-medium transition-colors">See events</a>
                <a href="#gallery" className="border border-amber-300/40 hover:border-amber-300 text-amber-200 px-5 py-2.5 rounded-md font-medium transition-colors">Photo gallery</a>
              </div>
              <div className="mt-8 text-amber-100/70 text-sm">
                • Freshly pulled espresso • Rotating taps • House cocktails • Small bites
              </div>
            </div>
            <div>
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1532635241-17e820acc59f?q=80&w=1800&auto=format&fit=crop"
                  alt="Cozy pub interior with warm lighting"
                  className="w-full h-[320px] md:h-[420px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Gallery />
      <Events />
      <Contact />

      <footer className="border-t border-white/10 bg-neutral-950">
        <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-amber-100/70">© {new Date().getFullYear()} Cozy Corner Pub & Café</p>
          <p className="text-amber-100/60 text-sm">Follow us on social for the latest pours and playlists.</p>
        </div>
      </footer>
    </div>
  );
}
