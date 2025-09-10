import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import webDevIcon from "@/assets/web-dev-icon.jpg";
import aiSolutionsIcon from "@/assets/ai-solutions-icon.jpg";

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We combine creative design with advanced technology to deliver exceptional results
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="group hover:shadow-glow-red transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <div className="w-16 h-16 rounded-lg overflow-hidden mb-4">
                <img 
                  src={webDevIcon} 
                  alt="Web Development" 
                  className="w-full h-full object-cover"
                />
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
            </CardContent>
          </Card>
          
          <Card className="group hover:shadow-glow-red transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <div className="w-16 h-16 rounded-lg overflow-hidden mb-4">
                <img 
                  src={aiSolutionsIcon} 
                  alt="AI Solutions" 
                  className="w-full h-full object-cover"
                />
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
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;