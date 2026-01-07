import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Globe, TrendingUp, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import heroImage from "@/assets/hero-ifc-banner.png";
import aboutImage from "@/assets/ifc-team-event.jpg";
import financeImage from "@/assets/ifc-finance-infographic.png";

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

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.7 },
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.15,
    },
  },
  viewport: { once: true },
};

const Index = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroImageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <Layout>
      {/* Hero Section with Parallax */}
      <section 
        ref={heroRef}
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
      >
        {/* Background Image with Parallax */}
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: heroImageY, scale: heroScale }}
        >
          <img
            src={heroImage}
            alt="Global finance network"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary/90" />
        </motion.div>

        {/* Content */}
        <motion.div 
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          style={{ opacity: heroOpacity }}
        >
          <motion.p 
            className="text-accent font-medium text-sm uppercase tracking-wider mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            A Member of the World Bank Group
          </motion.p>
          <motion.h1 
            className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 text-balance max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            International Finance Corporation
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Driving Private Sector Growth in Emerging and Developing Markets
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button variant="hero" size="xl" asChild>
              <Link to="/services">
                Explore Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/about">Learn About IFC</Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <motion.div 
              className="w-1.5 h-3 bg-white/60 rounded-full"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary font-serif">
                  {stat.value}
                </p>
                <p className="text-muted-foreground mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="container-section">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeInUp}>
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
          </motion.div>
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="absolute -inset-4 bg-accent/10 rounded-2xl transform rotate-3" />
            <img
              src={aboutImage}
              alt="Global development and finance"
              className="relative rounded-xl shadow-lg w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Finance Impact Section with Infographic */}
      <section className="container-section bg-primary">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <img
              src={financeImage}
              alt="IFC Short-Term Finance - $12 billion impact"
              className="rounded-xl shadow-2xl w-full h-auto object-cover"
            />
          </motion.div>
          <motion.div {...fadeInUp} className="text-white">
            <p className="text-accent font-medium text-sm uppercase tracking-wider mb-4">
              Our Impact
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Short-Term Finance Solutions
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              IFC's trade and short-term finance programs provide critical support to 
              businesses in emerging markets, enabling cross-border trade and economic growth.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-white/10 p-4 rounded-lg">
                <p className="text-3xl font-bold text-accent">$12B</p>
                <p className="text-white/70 text-sm mt-1">Total Short-Term Finance</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <p className="text-3xl font-bold text-accent">$11B</p>
                <p className="text-white/70 text-sm mt-1">Own Account</p>
              </div>
            </div>
            <Button variant="hero" asChild>
              <Link to="/services">
                Explore Finance Solutions
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container-section bg-secondary">
        <motion.div 
          className="text-center mb-16"
          {...fadeInUp}
        >
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
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-background p-8 rounded-xl shadow-card hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
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
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          {...fadeInUp}
        >
          <Button variant="gold" size="lg" asChild>
            <Link to="/services">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </section>

      {/* Why Partner Section */}
      <section className="container-section">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          {...fadeInUp}
        >
          <p className="text-accent font-medium text-sm uppercase tracking-wider mb-4">
            Why Partner With Us
          </p>
          <h2 className="section-header inline-block border-0 pb-0 mb-8">
            Trusted Global Partnership
          </h2>

          <motion.div 
            className="grid sm:grid-cols-2 gap-4 text-left mb-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-4 p-4 rounded-lg bg-secondary"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-accent font-semibold text-sm">{index + 1}</span>
                </div>
                <p className="text-foreground font-medium">{reason}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div {...fadeInUp}>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Start Your Partnership
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <motion.section 
        className="bg-primary py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="font-serif text-3xl md:text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to Explore Opportunities?
          </motion.h2>
          <motion.p 
            className="text-white/70 text-lg mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            IFC works with partners across the globe to unlock private sector solutions 
            that drive sustainable development and economic resilience.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button variant="hero" size="lg" asChild>
              <Link to="/eligibility">Check Eligibility</Link>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>
    </Layout>
  );
};

export default Index;
