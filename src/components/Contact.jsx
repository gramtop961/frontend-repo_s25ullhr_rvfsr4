export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-neutral-950">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-amber-200 tracking-tight">Contact</h2>
        <p className="text-amber-100/70 mt-2 max-w-2xl">Questions, bookings, or private events? Reach out — we’d love to host you.</p>

        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div>
              <h3 className="text-white font-semibold">Visit Us</h3>
              <p className="text-amber-100/80">123 Cozy Lane, Old Town</p>
            </div>
            <div>
              <h3 className="text-white font-semibold">Hours</h3>
              <ul className="text-amber-100/80">
                <li>Mon–Thu: 8 AM – 10 PM</li>
                <li>Fri: 8 AM – Midnight</li>
                <li>Sat: 9 AM – Midnight</li>
                <li>Sun: 9 AM – 8 PM</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold">Contact</h3>
              <p className="text-amber-100/80">(555) 123-4567</p>
              <p className="text-amber-100/80">hello@cozycorner.pub</p>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden border border-white/10">
            <iframe
              title="Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019966330901!2d-122.41941548468125!3d37.77492977975908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sCozy%20Corner!5e0!3m2!1sen!2sus!4v1700000000000"
              width="100%"
              height="320"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
