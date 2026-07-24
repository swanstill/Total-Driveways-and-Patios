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
                width={180}
                height={60}
                className="w-[180px] h-auto object-contain"
              />
            </div>
            <p className="max-w-[32ch] text-sm leading-relaxed">
              Family-run driveway, patio and landscaping specialists serving Cardiff and South Wales since 1990.
            </p>
          </div>
          <div>
            <h5 className="text-white font-heading text-sm tracking-[.06em] uppercase mb-[18px]">Services</h5>
            <ul className="space-y-[11px] text-sm">
              <li><a href="#services" className="hover:text-white transition-colors">Block Paving</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Resin Driveways</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Tarmac Driveways</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Patios</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Landscaping</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-heading text-sm tracking-[.06em] uppercase mb-[18px]">Company</h5>
            <ul className="space-y-[11px] text-sm">
              <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Reviews</a></li>
              <li><a href="#quote" className="hover:text-white transition-colors">Get a quote</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy policy</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-heading text-sm tracking-[.06em] uppercase mb-[18px]">Contact</h5>
            <ul className="space-y-[11px] text-sm">
              <li><a href="tel:07722151231" className="hover:text-white transition-colors">07722 151231</a></li>
              <li>Cardiff &amp; South Wales</li>
              <li>Mon–Fri, 8am–5pm</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 flex justify-between flex-wrap gap-3 text-[13px] text-[#8891A5]">
          <span>&copy; 2026 Total Driveways and Patios. All rights reserved.</span>
          <span>Family-run since 1990 · Rated 4.8 on Google</span>
        </div>
      </div>
    </footer>
  );
}
