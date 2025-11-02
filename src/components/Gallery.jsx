export default function Gallery() {
  const photos = [
    'https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1502465771179-51f3535da42f?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1451748266019-4b5d0c0d1d48?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1505685296765-3a2736de412f?q=80&w=1600&auto=format&fit=crop',
  ];

  return (
    <section id="gallery" className="py-16 bg-neutral-950">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-amber-200 tracking-tight">Photo Gallery</h2>
        <p className="text-amber-100/70 mt-2 max-w-2xl">A glimpse of our cozy corners, artisanal coffees, fresh pours, and vibrant nights of live music.</p>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {photos.map((src, i) => (
            <div key={i} className="relative overflow-hidden rounded-lg group">
              <img
                src={src}
                alt={`Gallery ${i + 1}`}
                className="h-40 md:h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
