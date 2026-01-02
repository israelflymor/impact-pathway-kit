import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import heroImage from "@/assets/hero-global.jpg";

const featuredArticle = {
  id: 1,
  title: "IFC Announces $2 Billion Climate Investment Initiative for Emerging Markets",
  excerpt: "A landmark commitment to accelerate clean energy transitions and support sustainable infrastructure development across developing economies.",
  category: "Climate Finance",
  date: "December 28, 2024",
  readTime: "5 min read",
  image: heroImage,
};

const articles = [
  {
    id: 2,
    title: "Strengthening Financial Inclusion in Sub-Saharan Africa",
    excerpt: "New partnerships aim to expand access to banking services for over 50 million underserved individuals and small businesses.",
    category: "Financial Inclusion",
    date: "December 20, 2024",
    readTime: "4 min read",
  },
  {
    id: 3,
    title: "Supporting Women Entrepreneurs in South Asia",
    excerpt: "IFC's Women Banking initiative provides tailored financing solutions and business advisory services to women-led enterprises.",
    category: "Gender Equality",
    date: "December 15, 2024",
    readTime: "3 min read",
  },
  {
    id: 4,
    title: "Infrastructure Investment Drives Economic Growth in Latin America",
    excerpt: "Strategic investments in transportation and logistics infrastructure create jobs and improve regional connectivity.",
    category: "Infrastructure",
    date: "December 10, 2024",
    readTime: "6 min read",
  },
  {
    id: 5,
    title: "Digital Transformation in Healthcare Delivery",
    excerpt: "Technology-enabled healthcare solutions expand access to quality medical services in remote and underserved communities.",
    category: "Health",
    date: "December 5, 2024",
    readTime: "4 min read",
  },
  {
    id: 6,
    title: "Sustainable Agriculture Practices Boost Food Security",
    excerpt: "Climate-smart agricultural techniques help farmers increase yields while reducing environmental impact.",
    category: "Agribusiness",
    date: "November 28, 2024",
    readTime: "5 min read",
  },
  {
    id: 7,
    title: "Renewable Energy Projects Transform Rural Communities",
    excerpt: "Solar and wind energy investments provide reliable electricity to previously off-grid regions, enabling economic development.",
    category: "Energy",
    date: "November 20, 2024",
    readTime: "4 min read",
  },
];

const categories = [
  "All",
  "Climate Finance",
  "Financial Inclusion",
  "Infrastructure",
  "Health",
  "Agribusiness",
  "Energy",
  "Gender Equality",
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const News = () => {
  return (
    <Layout>
      {/* Hero Section with Parallax */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <div className="absolute inset-0 bg-primary" />
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url(${heroImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p 
            className="text-accent font-medium text-sm uppercase tracking-wider mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Stay Informed
          </motion.p>
          <motion.h1 
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            News & Updates
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Latest insights on IFC initiatives, development impact stories, and sector expertise
          </motion.p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="bg-secondary py-6 sticky top-20 z-40 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  index === 0
                    ? "bg-primary text-primary-foreground"
                    : "bg-background text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="container-section">
        <motion.div 
          className="grid lg:grid-cols-2 gap-8 items-center"
          {...fadeInUp}
        >
          <div className="relative overflow-hidden rounded-2xl group">
            <img
              src={featuredArticle.image}
              alt={featuredArticle.title}
              className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full mb-3">
                Featured
              </span>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-4 text-muted-foreground text-sm mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">
                <Tag className="w-3.5 h-3.5" />
                {featuredArticle.category}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {featuredArticle.date}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {featuredArticle.readTime}
              </span>
            </div>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 leading-tight">
              {featuredArticle.title}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              {featuredArticle.excerpt}
            </p>
            <Button variant="navy" size="lg">
              Read Full Article
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Articles Grid */}
      <section className="container-section bg-secondary">
        <motion.div 
          className="text-center mb-12"
          {...fadeInUp}
        >
          <h2 className="section-header inline-block border-0 pb-0">
            Latest Articles
          </h2>
          <p className="section-subheader mx-auto mt-4">
            Explore our latest development impact stories and sector insights
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          {articles.map((article, index) => (
            <motion.article
              key={article.id}
              className="bg-background rounded-xl overflow-hidden shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Tag className="w-8 h-8 text-primary" />
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                  <span className="px-2 py-0.5 bg-accent/20 text-accent-foreground rounded text-xs font-medium">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {article.date}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {article.readTime}
                  </span>
                  <button className="text-primary font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          {...fadeInUp}
        >
          <Button variant="gold" size="lg">
            Load More Articles
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </section>

      {/* Newsletter CTA */}
      <section className="container-section">
        <motion.div 
          className="bg-primary rounded-2xl p-8 md:p-12 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-4">
            Stay Updated on IFC Initiatives
          </h2>
          <p className="text-white/70 max-w-xl mx-auto mb-8">
            Subscribe to receive the latest news, development impact stories, and insights directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-accent"
            />
            <Button variant="hero" size="lg">
              Subscribe
            </Button>
          </div>
        </motion.div>
      </section>
    </Layout>
  );
};

export default News;
