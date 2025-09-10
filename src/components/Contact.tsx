import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Let's <span className="text-primary">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start your project? Get in touch and let's discuss how we can help you succeed.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-foreground">Get a Free Consultation</CardTitle>
                <CardDescription>
                  Let's discuss your project and explore how we can help you achieve your goals.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                    <span className="text-primary-foreground text-sm">📧</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Email</div>
                    <div className="text-muted-foreground">hello@redlabel.ai</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                    <span className="text-primary-foreground text-sm">💬</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Let's Talk</div>
                    <div className="text-muted-foreground">Schedule a call to discuss your needs</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                    <span className="text-primary-foreground text-sm">⚡</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Fast Response</div>
                    <div className="text-muted-foreground">We typically respond within 24 hours</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-foreground">Send us a Message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you soon.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input placeholder="Your Name" className="bg-background/50" />
                <Input placeholder="Your Email" type="email" className="bg-background/50" />
              </div>
              <Input placeholder="Subject" className="bg-background/50" />
              <Textarea 
                placeholder="Tell us about your project..." 
                className="min-h-[120px] bg-background/50" 
              />
              <Button className="w-full bg-gradient-primary hover:shadow-glow-red transition-all duration-300">
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;