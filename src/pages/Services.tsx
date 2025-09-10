import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Scene3D from "@/components/3D/Scene3D";

const Services = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* 3D Background */}
        <Scene3D 
          objects={[
            { position: [3, 1, -2], type: 'box', color: '#dc2626', speed: 0.7 },
            { position: [-3, -1, -1], type: 'sphere', color: '#b91c1c', speed: 1.1 },
            { position: [0, 2, -3], type: 'torus', color: '#f87171', speed: 0.5 },
          ]}
        />
        
        <div className="absolute inset-0 bg-gradient-radial" />
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-fade-in">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up">
            We combine creative design with advanced technology to deliver exceptional results
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            
            {/* Web Development Service */}
            <Card className="group hover:shadow-glow-red transition-all duration-500 border-border/50 bg-card/50 backdrop-blur-sm hover:scale-105 animate-fade-in">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 animate-float shadow-glow-red">
                  <span className="text-2xl">💻</span>
                </div>
                <CardTitle className="text-2xl text-foreground group-hover:text-primary transition-colors">
                  Web Development
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Custom websites that drive results
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  From stunning landing pages to complex web applications, we build responsive, 
                  fast, and SEO-optimized websites that convert visitors into customers.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Responsive Design
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Performance Optimization
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    SEO Integration
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    E-commerce Solutions
                  </li>
                </ul>
                <div className="pt-4">
                  <Button className="w-full bg-gradient-primary hover:shadow-glow-red transition-all duration-300">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* AI Solutions Service */}
            <Card className="group hover:shadow-glow-red transition-all duration-500 border-border/50 bg-card/50 backdrop-blur-sm hover:scale-105 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 animate-float shadow-glow-red" style={{ animationDelay: '2s' }}>
                  <span className="text-2xl">🤖</span>
                </div>
                <CardTitle className="text-2xl text-foreground group-hover:text-primary transition-colors">
                  AI Solutions
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Intelligent automation for your business
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Harness the power of artificial intelligence to automate processes, 
                  gain insights, and enhance user experiences with our custom AI solutions.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Chatbots & Virtual Assistants
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Data Analytics & Insights
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Process Automation
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Machine Learning Models
                  </li>
                </ul>
                <div className="pt-4">
                  <Button className="w-full bg-gradient-primary hover:shadow-glow-red transition-all duration-300">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>

          </div>

          {/* CTA Section */}
          <div className="text-center mt-16 animate-slide-up">
            <h3 className="text-3xl font-bold mb-4 text-foreground">
              Ready to Get Started?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's discuss your project and see how our services can help you achieve your goals.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow-red transition-all duration-300 animate-pulse-glow">
                Contact Us Today
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;