import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Scene3D from "@/components/3D/Scene3D";

const Contact = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* 3D Background */}
        <Scene3D 
          objects={[
            { position: [2, 0, -2], type: 'torus', color: '#dc2626', speed: 0.6 },
            { position: [-2, 1, -1], type: 'sphere', color: '#b91c1c', speed: 0.9 },
            { position: [0, -1, -3], type: 'box', color: '#f87171', speed: 0.7 },
          ]}
        />
        
        <div className="absolute inset-0 bg-gradient-radial" />
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-fade-in">
            Let's Connect
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up">
            Ready to start your project? Get in touch and let's discuss how we can help you succeed.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Contact Information */}
            <div className="space-y-6 animate-fade-in">
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-foreground">Get in Touch</CardTitle>
                  <CardDescription>
                    Let's discuss your project and explore how we can help you achieve your goals.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow-red">
                      <span className="text-primary-foreground text-sm">📧</span>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Email</div>
                      <div className="text-muted-foreground">hello@redlabel.ai</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow-red">
                      <span className="text-primary-foreground text-sm">💬</span>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Let's Talk</div>
                      <div className="text-muted-foreground">Schedule a call to discuss your needs</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow-red">
                      <span className="text-primary-foreground text-sm">⚡</span>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Fast Response</div>
                      <div className="text-muted-foreground">We typically respond within 24 hours</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Services Quick Links */}
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-foreground">Our Services</CardTitle>
                  <CardDescription>
                    Interested in specific services? Let us know what you need.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-background/50 hover:bg-primary/10 transition-colors">
                    <span className="text-foreground">Web Development</span>
                    <span className="text-primary">→</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-background/50 hover:bg-primary/10 transition-colors">
                    <span className="text-foreground">AI Solutions</span>
                    <span className="text-primary">→</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-background/50 hover:bg-primary/10 transition-colors">
                    <span className="text-foreground">Custom Development</span>
                    <span className="text-primary">→</span>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Contact Form */}
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm animate-slide-up">
              <CardHeader>
                <CardTitle className="text-foreground">Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you soon.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input 
                    placeholder="Your Name" 
                    className="bg-background/50 border-border hover:border-primary/50 transition-colors" 
                  />
                  <Input 
                    placeholder="Your Email" 
                    type="email" 
                    className="bg-background/50 border-border hover:border-primary/50 transition-colors" 
                  />
                </div>
                <Input 
                  placeholder="Subject" 
                  className="bg-background/50 border-border hover:border-primary/50 transition-colors" 
                />
                <Textarea 
                  placeholder="Tell us about your project..." 
                  className="min-h-[120px] bg-background/50 border-border hover:border-primary/50 transition-colors" 
                />
                <Button className="w-full bg-gradient-primary hover:shadow-glow-red transition-all duration-300">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16 animate-fade-in">
            <h3 className="text-3xl font-bold mb-4 text-foreground">
              Ready to Transform Your Business?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join our satisfied clients who have transformed their businesses with our web development and AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow-red transition-all duration-300">
                Schedule a Consultation
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                View Our Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;