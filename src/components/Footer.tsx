import Image from "next/image";

export default function Footer() {
  return (
    <footer id="contact" className="footer-bg text-[#B7BECF] pt-16 pb-7">
      <div className="wrap">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 mb-12">
          <div>
            <div className="flex items-center gap-[10px] mb-4">
              <Image
                src="/footer-logo.png"
                alt="Total Driveways and Patios"
                width={200}
                height={68}
                className="w-[200px] h-auto object-contain"
              />
            </div>
            <p className="max-w-[32ch] text-sm leading-relaxed">
              Family-run driveway, patio and landscaping specialists serving Barnsley and South Yorkshire, established 2026.
            </p>
          </div>
          <div>
            <h5 className="text-white font-heading text-sm tracking-[.06em] uppercase mb-[18px]">Services</h5>
            <ul className="space-y-[11px] text-sm">
              <li><a href="/services/block-paving" className="hover:text-white transition-colors">Block Paving</a></li>
              <li><a href="/services/resin-driveways" className="hover:text-white transition-colors">Resin Driveways</a></li>
              <li><a href="/services/tarmac-driveways" className="hover:text-white transition-colors">Tarmac Driveways</a></li>
              <li><a href="/services/patios" className="hover:text-white transition-colors">Patios</a></li>
              <li><a href="/services/landscaping" className="hover:text-white transition-colors">Landscaping</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-heading text-sm tracking-[.06em] uppercase mb-[18px]">Company</h5>
            <ul className="space-y-[11px] text-sm">
              <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Reviews</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#quote" className="hover:text-white transition-colors">Get a quote</a></li>
              <li><a href="/privacy-policy" className="hover:text-white transition-colors">Privacy policy</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-heading text-sm tracking-[.06em] uppercase mb-[18px]">Contact</h5>
            <ul className="space-y-[11px] text-sm">
              <li><a href="tel:08009949855" className="hover:text-white transition-colors">0800 994 9855</a></li>
              <li>Barnsley &amp; South Yorkshire</li>
              <li>Mon–Fri, 8am–5pm</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 flex justify-between flex-wrap gap-3 text-[13px] text-[#8891A5]">
          <span>&copy; 2026 Total Driveways and Patios. All rights reserved.</span>
          <span>Website design with <span style={{color: "#C79A3C"}}>♥</span> by <a href="https://www.tradesgrow.co.uk/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Trades Grow</a></span>
        </div>
      </div>
    </footer>
  );
}
