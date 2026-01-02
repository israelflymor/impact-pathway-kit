import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, AlertCircle, ClipboardList, FileSearch, Users, ThumbsUp, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const eligibilityCriteria = [
  {
    icon: CheckCircle,
    title: "Private Sector Ownership",
    description: "Projects must be sponsored or owned by private sector entities.",
  },
  {
    icon: CheckCircle,
    title: "Eligible Location",
    description: "Operations must be located in eligible emerging or developing markets.",
  },
  {
    icon: CheckCircle,
    title: "Financial Viability",
    description: "Projects must demonstrate clear financial and operational viability.",
  },
  {
    icon: CheckCircle,
    title: "Development Impact",
    description: "Clear potential for positive development outcomes and job creation.",
  },
  {
    icon: CheckCircle,
    title: "ESG Compliance",
    description: "Commitment to environmental and social sustainability standards.",
  },
];

const processSteps = [
  {
    step: 1,
    icon: ClipboardList,
    title: "Initial Inquiry",
    description: "Submit your project inquiry or investment proposal through our contact form.",
  },
  {
    step: 2,
    icon: FileSearch,
    title: "Eligibility Screening",
    description: "Our team conducts preliminary assessment of eligibility criteria.",
  },
  {
    step: 3,
    icon: Users,
    title: "Due Diligence",
    description: "Detailed analysis of financial, technical, and ESG aspects of your project.",
  },
  {
    step: 4,
    icon: ThumbsUp,
    title: "Internal Review",
    description: "Project undergoes internal review and approval processes.",
  },
  {
    step: 5,
    icon: DollarSign,
    title: "Disbursement",
    description: "Upon completion of all requirements, funding is disbursed as agreed.",
  },
];

const Eligibility = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent font-medium text-sm uppercase tracking-wider mb-4">
            Get Started
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Eligibility & Process
          </h1>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Learn about our eligibility requirements and the application process 
            for IFC investment and advisory support.
          </p>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="container-section">
        <div className="text-center mb-16">
          <p className="text-accent font-medium text-sm uppercase tracking-wider mb-4">
            Requirements
          </p>
          <h2 className="section-header inline-block border-0 pb-0">
            Eligibility Principles
          </h2>
          <p className="section-subheader mx-auto mt-4">
            Projects considered for IFC support are assessed based on the following criteria.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {eligibilityCriteria.map((criteria, index) => (
            <div
              key={index}
              className="flex gap-4 p-6 rounded-xl bg-card border border-border hover:border-accent transition-colors"
            >
              <criteria.icon className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">{criteria.title}</h3>
                <p className="text-sm text-muted-foreground">{criteria.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Application Process */}
      <section className="container-section bg-secondary">
        <div className="text-center mb-16">
          <p className="text-accent font-medium text-sm uppercase tracking-wider mb-4">
            How It Works
          </p>
          <h2 className="section-header inline-block border-0 pb-0">
            Application Process
          </h2>
          <p className="section-subheader mx-auto mt-4">
            A clear, structured pathway from initial inquiry to investment disbursement.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Progress line */}
            <div className="hidden md:block absolute left-1/2 top-12 bottom-12 w-0.5 bg-border transform -translate-x-1/2" />

            {processSteps.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-start gap-8 mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <div className="bg-background p-8 rounded-xl shadow-card">
                    <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-accent" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>

                {/* Step number */}
                <div className="hidden md:flex w-16 h-16 rounded-full bg-primary text-primary-foreground items-center justify-center font-bold text-xl flex-shrink-0 z-10">
                  {item.step}
                </div>

                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="container-section">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-xl p-8">
            <div className="flex gap-4">
              <AlertCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Important Notice</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Meeting eligibility criteria does not guarantee approval of financing or advisory support. 
                  All applications undergo rigorous due diligence and are subject to IFC's standard terms, 
                  conditions, and internal approval processes. Specific outcomes cannot be promised or guaranteed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Begin?
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
            Contact our team to discuss your project and explore potential partnership opportunities.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">
              Submit Your Inquiry
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Eligibility;
