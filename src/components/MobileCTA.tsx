export default function MobileCTA() {
  return (
    <div className="fixed left-0 right-0 bottom-0 z-60 bg-white border-t border-border p-[10px_16px] flex gap-[10px] shadow-[0_-8px_20px_-10px_rgba(0,0,0,.2)] sm:hidden">
      <a href="#quote" className="btn btn-primary flex-1 justify-center !py-[12px] !px-[18px] !text-sm">
        Get a free quote
      </a>
      <a href="tel:07722151231" className="btn btn-outline flex-1 justify-center !py-[12px] !px-[18px] !text-sm">
        Call now
      </a>
    </div>
  );
}
