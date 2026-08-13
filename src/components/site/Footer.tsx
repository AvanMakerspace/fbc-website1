import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/fbc-logo.jpg.asset.json";

export function Footer() {
  return (
    <footer className="surface-ink">
      <div className="h-1 spectrum-rule" />
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <img
            src={logo.url}
            alt="Free Block Creatives logo"
            width={72}
            height={72}
            loading="lazy"
            className="size-18 rounded-full object-cover"
          />
          <p className="mt-4 max-w-xs text-sm opacity-80">
            A refugee-led arts, livelihoods and community development collective based in Kakuma 2,
            Kakuma Refugee Camp, Kenya. Established 2025.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.18em] opacity-70">Reach us</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <Mail className="size-4 shrink-0" />
              <a href="mailto:freeblockcreatives@gmail.com" className="hover:underline">
                freeblockcreatives@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="size-4 shrink-0" />
              <a href="tel:+254117472014" className="hover:underline">
                +254 117 472 014
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="size-4 shrink-0" />
              Kakuma 2, Kakuma Refugee Camp, Kenya
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.18em] opacity-70">Explore</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href="#about" className="opacity-80 hover:opacity-100">
                About us
              </a>
            </li>
            <li>
              <a href="#programs" className="opacity-80 hover:opacity-100">
                Programs &amp; activities
              </a>
            </li>
            <li>
              <a href="#structure" className="opacity-80 hover:opacity-100">
                Structure &amp; safeguarding
              </a>
            </li>
            <li>
              <a href="#contact" className="opacity-80 hover:opacity-100">
                Partner with us
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-6xl border-t border-white/10 px-5 py-6 text-xs opacity-60">
        © {new Date().getFullYear()} Free Block Creatives. Refugee-led. Community-driven.
      </div>
    </footer>
  );
}
