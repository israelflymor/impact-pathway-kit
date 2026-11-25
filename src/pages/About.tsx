import { Link } from "react-router-dom";
import { ArrowRight, Target, Globe, Users, Award, Building, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import aboutImage from "@/assets/about-development.jpg";

const values = [
  {
    icon: Target,
    title: "Impact-Driven",
    description: "Focused on creating measurable development outcomes that improve lives and strengthen economies.",
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description: "Combining international expertise with deep local knowledge across emerging markets.",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "Working collaboratively with governments, businesses, and communities to achieve shared goals.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Maintaining the highest standards of governance, compliance, and professional conduct.",
  },
  {
    icon: Building,
    title: "Private Sector Focus",
    description: "Exclusively dedicated to strengthening private enterprise as an engine of growth.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "Integrating environmental and social considerations into all investment decisions.",
  },
];

const milestones = [
  { year: "1956", event: "IFC founded as part of the World Bank Group" },
  { year: "1961", event: "First investment in Latin America" },
  { year: "1989", event: "Launch of advisory services program" },
  { year: "2000", event: "Expanded focus on sustainability and ESG" },
  { year: "2010", event: "Record investment commitments reached" },
  { year: "Present", event: "Operating in 100+ countries globally" },
];

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent font-medium text-sm uppercase tracking-wider mb-4">
            About IFC
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Who We Are
          </h1>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            The largest global development institution focused exclusively on the 
            private sector in emerging and developing economies.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container-section">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="section-header">Our Story</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                The International Finance Corporation (IFC) is a member of the World Bank 
                Group and the largest global development institution focused exclusively 
                on the private sector in emerging and developing economies.
              </p>
              <p>
                Founded in 1956 and owned by over 180 member countries, IFC operates in 
                more than 100 countries, combining global expertise with local insight to 
                create markets and enable long-term development outcomes.
              </p>
              <p>
                We partner with businesses, financial institutions, and governments to 
                support sustainable economic growth, reduce poverty, and improve living 
                standards around the world.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-accent/10 rounded-2xl transform -rotate-3" />
            <img
              src={aboutImage}
              alt="IFC Development Impact"
              className="relative rounded-xl shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="container-section bg-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-accent font-medium text-sm uppercase tracking-wider mb-4">
            Our Purpose
          </p>
          <h2 className="section-header inline-block border-0 pb-0 mb-8">
            Mission and Mandate
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            IFC's mandate is to promote private sector development in markets where 
            access to capital and expertise remains limited. By mobilizing private 
            investment and delivering targeted advisory services, IFC helps create jobs, 
            strengthen institutions, and foster inclusive economic growth.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="container-section">
        <div className="text-center mb-16">
          <p className="text-accent font-medium text-sm uppercase tracking-wider mb-4">
            What Drives Us
          </p>
          <h2 className="section-header inline-block border-0 pb-0">
            Our Core Values
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-xl shadow-card hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <value.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="container-section bg-secondary">
        <div className="text-center mb-16">
          <p className="text-accent font-medium text-sm uppercase tracking-wider mb-4">
            Our Journey
          </p>
          <h2 className="section-header inline-block border-0 pb-0">
            Key Milestones
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:transform md:-translate-x-1/2" />

            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"} pl-12 md:pl-0`}>
                  <div className="bg-background p-6 rounded-xl shadow-card">
                    <span className="text-accent font-bold text-lg">{milestone.year}</span>
                    <p className="text-foreground mt-2">{milestone.event}</p>
                  </div>
                </div>
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background md:transform md:-translate-x-1/2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
            Partner With IFC
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
            Discover how IFC can support your business growth and development goals.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default About;
