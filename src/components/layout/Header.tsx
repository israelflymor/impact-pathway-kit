import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Impact & Fellows", path: "/impact" },
  { label: "Eligibility", path: "/eligibility" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const programItems = [
  { label: "All Programs", path: "/programs", description: "Browse the grant portfolio" },
  { label: "Secure the Internet", path: "/programs/secure-the-internet", description: "Applied tech & security" },
  { label: "SMB Boost", path: "/programs/smb-boost", description: "Digital growth grants" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-serif font-bold text-xl">AG</span>
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-foreground leading-tight">Apex Grants</p>
              <p className="text-sm font-semibold text-foreground leading-tight">& Innovation</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-3 xl:gap-5">
            <Link
              to="/"
              className={`text-xs xl:text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === "/" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Home
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className={`flex items-center gap-1 text-xs xl:text-sm font-medium transition-colors hover:text-primary ${
                location.pathname.startsWith("/programs") ? "text-primary" : "text-muted-foreground"
              }`}>
                Programs
                <ChevronDown className="h-3.5 w-3.5" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-64 p-2">
                {programItems.map((item) => (
                  <DropdownMenuItem key={item.path} asChild>
                    <Link to={item.path} className="cursor-pointer rounded-md px-3 py-2.5">
                      <span>
                        <span className="block font-semibold">{item.label}</span>
                        <span className="mt-0.5 block text-xs text-muted-foreground">{item.description}</span>
                      </span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            {navItems.map((item) => (
              item.path === "/" ? null : (
              <Link
                key={item.path}
                to={item.path}
                className={`text-xs xl:text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === item.path
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
              )
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button variant="gold" asChild>
              <Link to="/eligibility">Check Eligibility</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-background border-b border-border animate-fade-in">
          <nav className="max-w-7xl mx-auto px-4 py-6 space-y-4">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={`block text-base font-medium ${location.pathname === "/" ? "text-primary" : "text-muted-foreground"}`}
            >
              Home
            </Link>
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Programs</p>
              {programItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block pl-3 text-base font-medium ${
                    location.pathname === item.path ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            {navItems.map((item) => (
              item.path === "/" ? null : (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block text-base font-medium transition-colors hover:text-primary ${
                  location.pathname === item.path
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
              )
            ))}
            <Button variant="gold" className="w-full mt-4" asChild>
              <Link to="/eligibility" onClick={() => setIsMenuOpen(false)}>
                Check Eligibility
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
