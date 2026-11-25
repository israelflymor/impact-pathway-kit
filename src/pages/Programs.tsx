import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ArrowRight, ShieldCheck, Store, Globe2, Code2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ApplyGrantDialog } from "@/components/grants/ApplyGrantDialog";

const programs = [
  { title: "Secure the Internet RFP", category: "Cybersecurity & Privacy", track: "Applied Tech & Security", status: "Accepting Proposals", funding: "$50k–$100k", deadline: "February 28, 2027", icon: ShieldCheck, path: "/programs/secure-the-internet" },
  { title: "SMB Digital Boost", category: "Small Business Growth", track: "SMB Digital Growth", status: "Rolling", funding: "$2k–$10k", deadline: "Rolling admission", icon: Store, path: "/programs/smb-boost" },
  { title: "Emerging Market Safety Lab", category: "Emerging Markets", track: "Applied Tech & Security", status: "Under Review", funding: "$50k–$100k", deadline: "June 15, 2027", icon: Globe2, path: "/programs/secure-the-internet" },
  { title: "Open Source Trust Fund", category: "Open Source", track: "Applied Tech & Security", status: "Accepting Proposals", funding: "Up to $100k", deadline: "March 31, 2027", icon: Code2, path: "/programs/secure-the-internet" },
];

const categories = ["All", "Cybersecurity & Privacy", "Small Business Growth", "Emerging Markets", "Open Source"];

const Programs = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const filtered = programs.filter((program) =>
    (category === "All" || program.category === category) &&
    `${program.title} ${program.track} ${program.category}`.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <section className="bg-primary py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-accent">Grant portfolio</p>
          <h1 className="font-serif text-4xl font-bold text-white md:text-6xl">Find the right grant.</h1>
          <p className="mt-5 max-w-2xl text-lg text-white/70">Explore open calls for applied security research and resilient local business growth.</p>
        </div>
      </section>
      <section className="container-section">
        <div className="mb-10 flex flex-col gap-5 border-b border-border pb-8">
          <div className="relative max-w-lg">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search programs" className="pl-10" />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((item) => (
              <Button key={item} size="sm" variant={category === item ? "navy" : "outline"} onClick={() => setCategory(item)}>{item}</Button>
            ))}
          </div>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {filtered.map((program) => (
            <Card key={program.title} className="transition-transform hover:-translate-y-1">
              <CardContent className="p-7">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary"><program.icon className="h-6 w-6" /></div>
                  <Badge variant={program.status === "Accepting Proposals" ? "default" : "secondary"}>{program.status}</Badge>
                </div>
                <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-accent">{program.track}</p>
                <h2 className="mt-2 font-serif text-2xl font-semibold text-primary">{program.title}</h2>
                <div className="mt-6 grid grid-cols-2 gap-4 border-t border-border pt-5">
                  <div><p className="text-xs text-muted-foreground">Funding tier</p><p className="mt-1 font-semibold">{program.funding}</p></div>
                  <div><p className="text-xs text-muted-foreground">Deadline</p><p className="mt-1 font-semibold">{program.deadline}</p></div>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button variant="outline" asChild><Link to={program.path}>View program <ArrowRight /></Link></Button>
                  <ApplyGrantDialog grantName={program.title} variant="hero" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
};

export default Programs;
