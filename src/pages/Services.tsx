import { Link } from "react-router-dom";
import { ArrowRight, Briefcase, TrendingUp, FileText, Globe, Building, Leaf, Heart, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const investmentServices = [
  {
    icon: Briefcase,
    title: "Long-term Loans",
    description: "Flexible financing solutions with competitive terms for infrastructure and expansion projects.",
  },
  {
    icon: TrendingUp,
    title: "Equity Investments",
    description: "Direct equity participation in promising ventures across emerging markets.",
  },
  {
    icon: FileText,
    title: "Structured Finance",
    description: "Tailored financial instruments designed to meet complex project requirements.",
  },
  {
    icon: Globe,
    title: "Trade Finance",
    description: "Facilitating international trade through guarantees and credit enhancement.",
  },
];

const advisoryServices = [
  {
    icon: Building,
    title: "Business Advisory",
    description: "Strategic guidance for operational improvement and market expansion.",
  },
  {
    icon: Leaf,
    title: "ESG Advisory",
    description: "Environmental, social, and governance consulting for sustainable operations.",
  },
  {
    icon: Heart,
    title: "PPP Advisory",
    description: "Expert guidance on public-private partnership structures and implementation.",
  },
  {
    icon: Lightbulb,
    title: "Financial Sector",
    description: "Strengthening financial institutions and expanding access to capital.",
  },
];

const sectors = [
  { name: "Infrastructure", description: "Energy, transport, telecommunications" },
  { name: "Agribusiness", description: "Food production, processing, distribution" },
  { name: "Manufacturing", description: "Industrial production and value chains" },
  { name: "Health & Education", description: "Healthcare facilities, schools, training" },
  { name: "Financial Services", description: "Banks, insurance, microfinance" },
  { name: "Innovation", description: "Technology, digital transformation" },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent font-medium text-sm uppercase tracking-wider mb-4">
            What We Do
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Products & Services
          </h1>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            IFC delivers impact through an integrated approach that combines financial 
            investment, advisory support, and capital mobilization.
          </p>
        </div>
      </section>

      {/* Investment Services */}
      <section className="container-section">
        <div className="text-center mb-16">
          <p className="text-accent font-medium text-sm uppercase tracking-wider mb-4">
            Financial Solutions
          </p>
          <h2 className="section-header inline-block border-0 pb-0">
            Investment Services
          </h2>
          <p className="section-subheader mx-auto mt-4">
            Flexible financial products designed to meet the diverse needs of private 
            enterprises in developing markets.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {investmentServices.map((service, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-xl shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border"
            >
              <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-6">
                <service.icon className="w-7 h-7 text-accent" />
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
      </section>

      {/* Advisory Services */}
      <section className="container-section bg-secondary">
        <div className="text-center mb-16">
          <p className="text-accent font-medium text-sm uppercase tracking-wider mb-4">
            Expert Guidance
          </p>
          <h2 className="section-header inline-block border-0 pb-0">
            Advisory Services
          </h2>
          <p className="section-subheader mx-auto mt-4">
            Strategic consulting and technical assistance to strengthen businesses 
            and maximize development impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advisoryServices.map((service, index) => (
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
      </section>

      {/* Sector Expertise */}
      <section className="container-section">
        <div className="text-center mb-16">
          <p className="text-accent font-medium text-sm uppercase tracking-wider mb-4">
            Industry Focus
          </p>
          <h2 className="section-header inline-block border-0 pb-0">
            Sector Expertise
          </h2>
          <p className="section-subheader mx-auto mt-4">
            Deep expertise across priority industries driving economic development 
            and social progress.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-6 rounded-xl bg-card border border-border hover:border-accent transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                <span className="text-accent font-bold">{index + 1}</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{sector.name}</h3>
                <p className="text-sm text-muted-foreground">{sector.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
            Explore Partnership Opportunities
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
            Learn about eligibility requirements and start your application process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/eligibility">
                Check Eligibility
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
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

export default Services;
