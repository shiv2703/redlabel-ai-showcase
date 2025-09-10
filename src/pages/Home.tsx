import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Scene3D from "@/components/3D/Scene3D";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* 3D Background */}
        <Scene3D 
          objects={[
            { position: [3, 0, -2], type: 'sphere', color: '#dc2626', speed: 0.8 },
            { position: [-4, 2, -1], type: 'box', color: '#b91c1c', speed: 1.2 },
            { position: [2, -1, -3], type: 'torus', color: '#f87171', speed: 0.6 },
            { position: [-2, -2, -2], type: 'sphere', color: '#ef4444', speed: 0.9 },
          ]}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/95 to-background/85" />
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Web Development
              <br />
              <span className="text-foreground">Meets AI Innovation</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up">
              We craft exceptional websites and deliver cutting-edge AI solutions that transform your business. 
              From concept to deployment, we're your technology partner.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up">
              <Link to="/services">
                <Button size="lg" className="bg-gradient-primary hover:shadow-glow-red transition-all duration-300 animate-pulse-glow">
                  Explore Services
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Get Started
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2 animate-fade-in">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-muted-foreground">Websites Delivered</div>
              </div>
              <div className="space-y-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="text-3xl font-bold text-primary">30+</div>
                <div className="text-muted-foreground">AI Solutions</div>
              </div>
              <div className="space-y-2 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-secondary relative">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground animate-fade-in">
            About <span className="text-primary">redlabel.ai</span>
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6 text-lg text-muted-foreground leading-relaxed animate-slide-up">
            <p>
              At redlabel.ai, we're passionate about creating digital experiences that make a difference. 
              Our team combines years of web development expertise with cutting-edge AI technology to 
              deliver solutions that drive real business results.
            </p>
            
            <p className="text-primary font-semibold">
              Ready to transform your business? Let's build something amazing together.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;