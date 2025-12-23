export function Footer() {
  return (
    <footer className="bg-zinc-900 dark:bg-neutral-950 text-white py-8 mt-12 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h3 className="text-xl font-heading font-bold mb-3 text-white">Pan-African Hub</h3>
          <p className="text-zinc-400 text-sm">
            Educating the next generation about our shared history and future.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-3 text-white text-sm">Quick Links</h4>
          <ul className="space-y-1.5 text-zinc-400 text-sm">
            <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
            <li><a href="/blog" className="hover:text-white transition-colors">Blog</a></li>
            <li><a href="/aes" className="hover:text-white transition-colors">AES</a></li>
            <li><a href="/russia-about" className="hover:text-white transition-colors">Russia About</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-3 text-white text-sm">Connect</h4>
          <div className="flex gap-3">
            {/* Social placeholders */}
            <div className="w-9 h-9 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-amber-500 hover:text-white transition-colors text-white text-sm">
              X
            </div>
            <div className="w-9 h-9 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-green-500 hover:text-white transition-colors text-white text-sm">
              In
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-8 pt-6 border-t border-zinc-800">
        <div className="mb-4">
          <h4 className="text-xs font-semibold text-white/90 mb-3 uppercase tracking-wider">
            Sources & References
          </h4>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-xs text-zinc-400">
            <a
              href="https://en.wikipedia.org/wiki/Alliance_of_Sahel_States#Foreign_partners_&_relations"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white underline transition-colors"
            >
              Wikipedia - AES Foreign Relations
            </a>
            <span className="text-zinc-600">•</span>
            <a
              href="https://politicstoday.org/russia-deepens-ties-with-sahel-countries-in-military-talks/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white underline transition-colors"
            >
              Politics Today
            </a>
            <span className="text-zinc-600">•</span>
            <a
              href="https://www.rt.com/africa/622913-moscow-assures-sahel-states-security-support/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white underline transition-colors"
            >
              RT Africa
            </a>
            <span className="text-zinc-600">•</span>
            <a
              href="https://en.wikipedia.org/wiki/Africa_Corps_(Russia)"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white underline transition-colors"
            >
              Wikipedia - Africa Corps
            </a>
          </div>
        </div>
        <div className="text-center text-zinc-500 text-xs pt-3 border-t border-zinc-800">
          © {new Date().getFullYear()} Pan-African Educational Hub. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
