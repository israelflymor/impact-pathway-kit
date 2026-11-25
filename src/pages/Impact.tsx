import { useState } from "react";
import { Search, Users, ShieldCheck, Store, BookOpen } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const items = [
  { category: "Researchers", title: "Dr. Leila Mensah", subtitle: "Abuse Detection at National Scale", metric: "18M users protected", icon: ShieldCheck },
  { category: "Publications", title: "Safer Authentication Field Study", subtitle: "Passkeys for low-bandwidth networks", metric: "14 peer-reviewed outputs", icon: BookOpen },
  { category: "Small Businesses", title: "Mbare Market Collective", subtitle: "Digital pipeline transformation", metric: "310 jobs retained", icon: Store },
  { category: "Researchers", title: "Privacy Engineering Lab", subtitle: "Privacy-preserving election tools", metric: "9 countries reached", icon: Users },
];

const Impact = () => {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const filtered = items.filter((item) => (category === "All" || item.category === category) && `${item.title} ${item.subtitle}`.toLowerCase().includes(query.toLowerCase()));
  return (
    <>
      <section className="bg-primary py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-accent">Impact & Fellows</p>
          <h1 className="font-serif text-4xl font-bold text-white md:text-6xl">Ideas reaching people.</h1>
          <p className="mt-5 max-w-2xl text-lg text-white/70">Funded researchers, publications, and small businesses turning grant capital into durable outcomes.</p>
        </div>
      </section>
      <section className="container-section">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">{["All", "Researchers", "Publications", "Small Businesses"].map((item) => <Button key={item} size="sm" variant={category === item ? "navy" : "outline"} onClick={() => setCategory(item)}>{item}</Button>)}</div>
          <div className="relative w-full md:w-72"><Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" /><Input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search impact" className="pl-10" /></div>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {filtered.map((item) => (
            <Card key={item.title}><CardContent className="p-7"><div className="flex items-start justify-between gap-5"><div><Badge variant="secondary">{item.category}</Badge><h2 className="mt-5 font-serif text-2xl font-semibold text-primary">{item.title}</h2><p className="mt-2 text-muted-foreground">{item.subtitle}</p></div><item.icon className="h-8 w-8 shrink-0 text-accent" /></div><p className="mt-7 border-t border-border pt-5 text-sm font-semibold text-accent">{item.metric}</p></CardContent></Card>
          ))}
        </div>
      </section>
    </>
  );
};

export default Impact;
