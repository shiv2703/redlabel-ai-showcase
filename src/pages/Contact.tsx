import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
        <div className="absolute inset-0">
          <video className="w-full h-full object-cover opacity-50" autoPlay muted loop playsInline preload="metadata">
            <source src="/videos/hero-contact.mp4" type="video/mp4" />
          </video>
        <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-[0.2em] leading-tight">
            GET IN
            <br />
            <span className="text-primary">TOUCH</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl leading-relaxed">
            Ready to transform your business with AI and modern web solutions? Let's start the conversation.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 tracking-[0.1em]">
                LET'S
                <br />
                CONNECT
              </h2>
              <p className="text-lg md:text-xl text-gray-600 mb-12 leading-relaxed">
                We're here to help you bring your digital vision to life. 
                Reach out and let's discuss your project.
              </p>

              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 tracking-wide">EMAIL US</h3>
                    <p className="text-lg text-gray-700 mb-1">support@redlabelworks.com</p>
                    <p className="text-gray-500">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 tracking-wide">SCHEDULE A CALL</h3>
                    <p className="text-lg text-gray-700 mb-1">Book a free consultation</p>
                    <p className="text-gray-500">Available Monday - Friday, 9AM - 6PM EST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 tracking-wide">LOCATION</h3>
                    <p className="text-lg text-gray-700 mb-1">Global Remote Team</p>
                    <p className="text-gray-500">Serving clients worldwide</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 tracking-wide">RESPONSE TIME</h3>
                    <p className="text-lg text-gray-700 mb-1">Within 24 hours</p>
                    <p className="text-gray-500">Usually much faster!</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 tracking-wide">SEND US A MESSAGE</h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName" className="text-gray-900 font-semibold mb-3 block tracking-wide">FIRST NAME</Label>
                    <Input id="firstName" placeholder="First name" className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 h-14 text-lg" />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-gray-900 font-semibold mb-3 block tracking-wide">LAST NAME</Label>
                    <Input id="lastName" placeholder="Last name" className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 h-14 text-lg" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone" className="text-gray-900 font-semibold mb-3 block tracking-wide">PHONE</Label>
                    <Input id="phone" type="tel" placeholder="e.g., +1 555 555 5555" className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 h-14 text-lg" />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-gray-900 font-semibold mb-3 block tracking-wide">EMAIL</Label>
                    <Input id="email" type="email" placeholder="your@email.com" className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 h-14 text-lg" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="role" className="text-gray-900 font-semibold mb-3 block tracking-wide">ROLE / AREA OF INTEREST</Label>
                  <select id="role" className="w-full h-14 bg-white border border-gray-300 rounded-md px-4 text-gray-900 text-lg">
                    <option value="">Select an option</option>
                    <option value="ai">AI</option>
                    <option value="software-development">Software Development</option>
                    <option value="web-development">Web Development</option>
                    <option value="vr">Virtual Reality</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="message" className="text-gray-900 font-semibold mb-3 block tracking-wide">MESSAGE (OPTIONAL)</Label>
                  <Textarea id="message" rows={6} placeholder="Tell us about your project..." className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 text-lg resize-none" />
                </div>
                
                <div>
                  <Label htmlFor="resume" className="text-gray-900 font-semibold mb-3 block tracking-wide">RESUME</Label>
                  <Input id="resume" type="file" accept=".pdf,.doc,.docx" className="bg-white border-gray-300 text-gray-900 h-14 text-lg" />
                </div>
                
                <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-lg font-semibold tracking-wide">
                  SEND MESSAGE <ArrowRight className="ml-2" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-[0.1em]">
            READY TO START
            <br />
            YOUR PROJECT?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join hundreds of satisfied clients who have transformed their businesses with our solutions
          </p>
          <a href="/contact">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-12 py-6 text-lg tracking-wide">
            Schedule Free Consultation <ArrowRight className="ml-2" />
          </Button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;