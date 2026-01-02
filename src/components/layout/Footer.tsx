import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <span className="text-primary-foreground font-serif font-bold text-xl">IFC</span>
              </div>
              <div>
                <p className="text-sm font-semibold leading-tight">International Finance</p>
                <p className="text-sm font-semibold leading-tight">Corporation</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              A Member of the World Bank Group. Driving private sector growth in emerging and developing markets.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "About IFC", path: "/about" },
                { label: "What We Do", path: "/services" },
                { label: "Eligibility", path: "/eligibility" },
                { label: "Contact Us", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-6 text-lg">Our Services</h4>
            <ul className="space-y-3">
              {[
                "Investment Services",
                "Advisory Services",
                "Trade Finance",
                "Blended Finance",
              ].map((service) => (
                <li key={service}>
                  <span className="text-sm text-primary-foreground/70">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-6 text-lg">Contact</h4>
            <address className="not-italic text-sm text-primary-foreground/70 space-y-3">
              <p>2121 Pennsylvania Avenue, NW</p>
              <p>Washington, DC 20433</p>
              <p>United States</p>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>© {currentYear} International Finance Corporation. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-primary-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-primary-foreground transition-colors">
                Terms of Use
              </Link>
              <Link to="/disclaimer" className="hover:text-primary-foreground transition-colors">
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
