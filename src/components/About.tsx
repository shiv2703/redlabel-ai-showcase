import VideoBackground from "@/components/VideoBackground";
import RevealOnScroll from "@/components/RevealOnScroll";
const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground text-center animate-fade-in">
            About <span className="text-primary">Us</span>
          </h2>
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              We are a diverse team of engineers and researchers with roots at USC and SRM, united by a mission to harness technology for real-world impact. Our expertise spans Artificial Intelligence, Virtual Reality, Software Engineering, and Web Development, giving us the unique ability to tackle challenges from multiple perspectives.
            </p>
            <p>
              By combining academic rigor with hands-on product experience, we create solutions that are both innovative and practical—whether it’s building AI algorithms for EV charging optimization, designing immersive VR applications, or developing scalable software platforms. Together, we bring the perfect blend of creativity, technical depth, and entrepreneurial spirit needed to engineer the future.
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg bg-card/70 backdrop-blur-sm border border-border hover:shadow-glow-red transition-all duration-300 hover:scale-105 animate-fade-in">
              <div className="text-2xl font-bold text-primary mb-2">Multidisciplinary</div>
              <div className="text-muted-foreground">Experts across AI, VR, software, and web</div>
            </div>
            <div className="p-6 rounded-lg bg-card/70 backdrop-blur-sm border border-border hover:shadow-glow-red transition-all duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-2xl font-bold text-primary mb-2">Research + Engineering</div>
              <div className="text-muted-foreground">Academic depth combined with practical product delivery</div>
            </div>
            <div className="p-6 rounded-lg bg-card/70 backdrop-blur-sm border border-border hover:shadow-glow-red transition-all duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="text-2xl font-bold text-primary mb-2">Future-Ready</div>
              <div className="text-muted-foreground">We don’t just follow trends; we create them</div>
            </div>
          </div>

          {/* 3D Showcases: Web Development and AI Solutions */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Web Development 3D Block */}
            <div className="relative overflow-hidden rounded-xl border border-border bg-card/60 backdrop-blur-sm p-6">
              <div className="relative h-56 md:h-72 rounded-lg overflow-hidden">
                <VideoBackground className="absolute inset-0" src={"/videos/web-dev.mp4"} />
              </div>
              <div className="mt-4">
                <div className="text-xl font-semibold text-foreground">Web Development</div>
                <p className="text-muted-foreground text-sm mt-1">Modern, responsive, and scalable web experiences.</p>
              </div>
            </div>

            {/* AI Solutions 3D Block */}
            <div className="relative overflow-hidden rounded-xl border border-border bg-card/60 backdrop-blur-sm p-6">
              <div className="relative h-56 md:h-72 rounded-lg overflow-hidden">
                <VideoBackground className="absolute inset-0" src={"/videos/ai-solutions.mp4"} />
              </div>
              <div className="mt-4">
                <div className="text-xl font-semibold text-foreground">AI Solutions</div>
                <p className="text-muted-foreground text-sm mt-1">Agentic AI, NL→SQL, and decision optimization.</p>
              </div>
            </div>
          </div>

          <div className="mt-20">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Our Vision</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Technology should do more than just exist—it should elevate human experience. We aim to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Develop AI-powered solutions that make systems smarter, faster, and more reliable.</li>
              <li>Build immersive VR applications that bridge the gap between digital and physical worlds.</li>
              <li>Deliver scalable web and software platforms for businesses of tomorrow.</li>
            </ul>
          </div>

          <div className="mt-20">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Innovation Spotlight: Agentic AI</h3>
            <p className="text-lg text-muted-foreground mb-8">
              At the heart of our work lies Agentic AI—platforms that combine advanced language models, intelligent data pipelines, and optimization algorithms to deliver real-world impact. We don’t just integrate AI; we make it practical, intuitive, and useful.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 rounded-lg bg-card/70 backdrop-blur-sm border border-border">
                <h4 className="text-xl font-semibold text-foreground mb-2">Natural Language to SQL</h4>
                <p className="text-muted-foreground">Ask: “Show me last quarter’s sales by region” — get instant, accurate database results without writing a single query.</p>
              </div>
              <div className="p-6 rounded-lg bg-card/70 backdrop-blur-sm border border-border">
                <h4 className="text-xl font-semibold text-foreground mb-2">AI-Powered Knowledge Platforms</h4>
                <p className="text-muted-foreground">Upload documents and ask questions in plain English with precise, context-aware answers.</p>
              </div>
              <div className="p-6 rounded-lg bg-card/70 backdrop-blur-sm border border-border">
                <h4 className="text-xl font-semibold text-foreground mb-2">Conversational Interfaces</h4>
                <p className="text-muted-foreground">Turn your site into an interactive assistant that guides users and boosts conversions.</p>
              </div>
              <div className="p-6 rounded-lg bg-card/70 backdrop-blur-sm border border-border">
                <h4 className="text-xl font-semibold text-foreground mb-2">Decision Optimization Agents</h4>
                <p className="text-muted-foreground">From energy to logistics, agents simulate scenarios and recommend the best actions.</p>
              </div>
              <div className="p-6 rounded-lg bg-card/70 backdrop-blur-sm border border-border md:col-span-2">
                <h4 className="text-xl font-semibold text-foreground mb-2">Content Intelligence</h4>
                <p className="text-muted-foreground">Generate reports, summaries, and tailored content—like weekly sales pipeline overviews or instant customer history briefs.</p>
              </div>
            </div>
          </div>

          <div className="mt-20 text-center">
            <p className="text-primary font-semibold">
              Our mission: build AI copilots for every workflow—helping businesses move faster, serve customers better, and unlock new opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;