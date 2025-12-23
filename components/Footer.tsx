export function Footer() {
  return (
    <footer className="bg-zinc-900 dark:bg-neutral-950 text-white py-12 mt-20 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-2xl font-heading font-bold mb-4 text-white">Pan-African Hub</h3>
          <p className="text-zinc-400">
            Educating the next generation about our shared history and future.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-white">Quick Links</h4>
          <ul className="space-y-2 text-zinc-400">
            <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
            <li><a href="/blog" className="hover:text-white transition-colors">Blog</a></li>
            <li><a href="/aes" className="hover:text-white transition-colors">AES</a></li>
            <li><a href="/russia-about" className="hover:text-white transition-colors">Russia About</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-white">Connect</h4>
          <div className="flex gap-4">
            {/* Social placeholders */}
            <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-amber-500 hover:text-white transition-colors text-white">
              X
            </div>
            <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-green-500 hover:text-white transition-colors text-white">
              In
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-border">
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-foreground/90 mb-4 uppercase tracking-wider">
            Sources & References
          </h4>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
            <a
              href="https://en.wikipedia.org/wiki/Alliance_of_Sahel_States#Foreign_partners_&_relations"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground underline transition-colors"
            >
              Wikipedia - AES Foreign Relations
            </a>
            <span className="text-muted-foreground/40">•</span>
            <a
              href="https://politicstoday.org/russia-deepens-ties-with-sahel-countries-in-military-talks/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground underline transition-colors"
            >
              Politics Today
            </a>
            <span className="text-muted-foreground/40">•</span>
            <a
              href="https://www.rt.com/africa/622913-moscow-assures-sahel-states-security-support/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground underline transition-colors"
            >
              RT Africa
            </a>
            <span className="text-muted-foreground/40">•</span>
            <a
              href="https://en.wikipedia.org/wiki/Africa_Corps_(Russia)"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground underline transition-colors"
            >
              Wikipedia - Africa Corps
            </a>
          </div>
        </div>
        <div className="text-center text-muted-foreground text-sm pt-4 border-t border-border">
          © {new Date().getFullYear()} Pan-African Educational Hub. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
