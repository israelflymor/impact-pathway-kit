import { Link } from "react-router-dom";
import { ArrowRight, Globe, TrendingUp, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import heroImage from "@/assets/hero-global.jpg";
import aboutImage from "@/assets/about-development.jpg";

const stats = [
  { value: "180+", label: "Member Countries" },
  { value: "100+", label: "Countries Served" },
  { value: "$30B+", label: "Annual Investments" },
  { value: "65+", label: "Years of Impact" },
];

const services = [
  {
    icon: TrendingUp,
    title: "Investment Services",
    description: "Long-term loans, equity investments, and structured finance solutions for sustainable growth.",
  },
  {
    icon: Users,
    title: "Advisory Services",
    description: "Business advisory, ESG consulting, and public-private partnership guidance.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Operations across Africa, Asia, Latin America, Europe, and the Middle East.",
  },
  {
    icon: Shield,
    title: "Risk Management",
    description: "Guarantees, risk-sharing facilities, and trade finance solutions.",
  },
];

const reasons = [
  "Member of the World Bank Group",
  "Strong governance and compliance framework",
  "Decades of emerging market experience",
  "Long-term, impact-driven investment approach",
  "Trusted partner to governments and institutions",
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Global finance network"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary/90" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent font-medium text-sm uppercase tracking-wider mb-4 animate-fade-in-up">
            A Member of the World Bank Group
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 animate-fade-in-up animation-delay-100 text-balance max-w-4xl mx-auto">
            International Finance Corporation
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 animate-fade-in-up animation-delay-200">
            Driving Private Sector Growth in Emerging and Developing Markets
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-300">
            <Button variant="hero" size="xl" asChild>
              <Link to="/services">
                Explore Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/about">Learn About IFC</Link>
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/60 rounded-full" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary font-serif">
                  {stat.value}
                </p>
                <p className="text-muted-foreground mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="container-section">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-accent font-medium text-sm uppercase tracking-wider mb-4">
              Who We Are
            </p>
            <h2 className="section-header border-0 pb-0">
              About IFC
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              The International Finance Corporation (IFC) is the largest global development 
              institution focused exclusively on the private sector in emerging and developing 
              economies. As a member of the World Bank Group, IFC partners with businesses, 
              financial institutions, and governments to support sustainable economic growth.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Founded in 1956 and owned by over 180 member countries, IFC operates in more 
              than 100 countries, combining global expertise with local insight to create 
              markets and enable long-term development outcomes.
            </p>
            <Button variant="navy" asChild>
              <Link to="/about">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-accent/10 rounded-2xl transform rotate-3" />
            <img
              src={aboutImage}
              alt="Global development and finance"
              className="relative rounded-xl shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container-section bg-secondary">
        <div className="text-center mb-16">
          <p className="text-accent font-medium text-sm uppercase tracking-wider mb-4">
            What We Do
          </p>
          <h2 className="section-header inline-block border-0 pb-0">
            Investment & Advisory Solutions
          </h2>
          <p className="section-subheader mx-auto mt-4">
            IFC delivers impact through an integrated approach that combines financial 
            investment, advisory support, and capital mobilization.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-background p-8 rounded-xl shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="gold" size="lg" asChild>
            <Link to="/services">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="container-section">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-accent font-medium text-sm uppercase tracking-wider mb-4">
            Why Partner With Us
          </p>
          <h2 className="section-header inline-block border-0 pb-0 mb-8">
            Trusted Global Partnership
          </h2>

          <div className="grid sm:grid-cols-2 gap-4 text-left mb-12">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 rounded-lg bg-secondary"
              >
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-accent font-semibold text-sm">{index + 1}</span>
                </div>
                <p className="text-foreground font-medium">{reason}</p>
              </div>
            ))}
          </div>

          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">
              Start Your Partnership
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Explore Opportunities?
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
            IFC works with partners across the globe to unlock private sector solutions 
            that drive sustainable development and economic resilience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/eligibility">Check Eligibility</Link>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
