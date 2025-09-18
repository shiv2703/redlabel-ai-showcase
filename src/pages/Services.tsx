import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Brain, Smartphone, Database, Cloud, Shield, ArrowRight, CheckCircle, Car, Truck, Factory, Store, Stethoscope, Banknote } from "lucide-react";
import VideoBackground from "@/components/VideoBackground";
import HelpersDemo from "@/components/Three/HelpersDemo";
import FloatingLaptop from "@/components/Three/FloatingLaptop";
import RevealOnScroll from "@/components/RevealOnScroll";
import DigitalInnovation from "@/components/Three/DigitalInnovation";

const Services = () => {
  return (
    <div className="min-h-screen pt-0">
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
        <div className="absolute inset-0">
          <video className="w-full h-full object-cover opacity-50" autoPlay muted loop playsInline preload="metadata" poster="/placeholder.svg">
            <source src="/videos/hero-services.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-[0.2em] leading-tight">
            OUR
            <br />
            <span className="text-primary">SERVICES</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl leading-relaxed">
            We Deliver Exceptional Digital Solutions Around the World
          </p>
        </div>
      </section>

      

      {/* Web Development Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 tracking-[0.1em]">
                WEB
                <br />
                DEVELOPMENT
              </h2>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                Modern, responsive websites and applications built with cutting-edge technologies. 
                We create digital experiences that engage users and drive business growth.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-primary mr-4" />
                  <span className="text-lg text-gray-700">React & Next.js Applications</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-primary mr-4" />
                  <span className="text-lg text-gray-700">E-commerce Solutions</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-primary mr-4" />
                  <span className="text-lg text-gray-700">Progressive Web Apps</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-primary mr-4" />
                  <span className="text-lg text-gray-700">SEO Optimization</span>
                </div>
              </div>

              <a href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg tracking-wide">
                  Start Your Project <ArrowRight className="ml-2" />
                </Button>
              </a>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-0 lg:p-0 overflow-hidden">
              <div className="relative h-64 md:h-80">
                <FloatingLaptop />
              </div>
              <div className="p-8 lg:p-12 text-center">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
                  <Code className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Modern Technologies</h3>
                <p className="text-gray-600 leading-relaxed">
                  We use the latest frameworks and tools to ensure your website is fast, secure, and scalable for the future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Solutions Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="bg-white rounded-2xl p-0 lg:p-0 order-2 lg:order-1 overflow-hidden">
              <div className="relative h-64 md:h-80">
                <HelpersDemo />
              </div>
              <div className="relative p-8 lg:p-12 text-center z-10 bg-white/90 backdrop-blur">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
                  <Brain className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Intelligent Automation</h3>
                <p className="text-gray-600 leading-relaxed">
                  Transform your business processes with AI-powered solutions that learn, adapt, and optimize automatically.
                </p>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 tracking-[0.1em]">
                AI
                <br />
                SOLUTIONS
              </h2>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                Harness the power of artificial intelligence to automate processes, 
                gain insights, and create intelligent applications that give you a competitive edge.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-primary mr-4" />
                  <span className="text-lg text-gray-700">Chatbots & Virtual Assistants</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-primary mr-4" />
                  <span className="text-lg text-gray-700">Machine Learning Models</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-primary mr-4" />
                  <span className="text-lg text-gray-700">Data Analytics & Insights</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-primary mr-4" />
                  <span className="text-lg text-gray-700">Process Automation</span>
                </div>
                <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-white border border-gray-200">
                    <div className="font-semibold text-gray-900">Natural Language → SQL</div>
                    <div className="text-gray-600 text-sm">Ask questions in English and get instant database results.</div>
                  </div>
                  <div className="p-4 rounded-lg bg-white border border-gray-200">
                    <div className="font-semibold text-gray-900">Knowledge Platforms</div>
                    <div className="text-gray-600 text-sm">Upload docs; get precise, context-aware answers.</div>
                  </div>
                  <div className="p-4 rounded-lg bg-white border border-gray-200">
                    <div className="font-semibold text-gray-900">Conversational Interfaces</div>
                    <div className="text-gray-600 text-sm">Turn your site/app into an interactive assistant.</div>
                  </div>
                  <div className="p-4 rounded-lg bg-white border border-gray-200">
                    <div className="font-semibold text-gray-900">Decision Optimization</div>
                    <div className="text-gray-600 text-sm">Simulate scenarios; choose optimal routes and schedules.</div>
                  </div>
                </div>
              </div>

              <a href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg tracking-wide">
                  Explore AI <ArrowRight className="ml-2" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      {/* Digital Innovation Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 tracking-[0.1em]">
                DIGITAL
                <br />
                INNOVATION
              </h2>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                Future-ready digital strategies that position your business at the forefront of technological advancement.
              </p>
              <a href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg tracking-wide">
                  Let's Innovate <ArrowRight className="ml-2" />
                </Button>
              </a>
            </div>
            <div className="bg-gray-50 rounded-2xl overflow-hidden">
              <div className="relative h-64 md:h-80">
                <DigitalInnovation/>
              </div>
              <div className="p-12 text-center">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
                  <Shield className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Digital Innovation</h3>
                <p className="text-gray-600 leading-relaxed">We craft digital products and experiences that adapt, scale, and delight users.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-[0.1em] text-gray-950">INDUSTRIES WE SERVE</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              AI solutions tailored to industry needs—built to deliver measurable outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <RevealOnScroll>
            <Card className="bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Car className="w-6 h-6 text-primary" />
                <CardTitle className="text-xl font-bold text-black tracking-wide">Automotive & Mobility</CardTitle>
              </div>
              <CardDescription className="text-gray-600 leading-relaxed">
                EV charging optimization, route planning agents, predictive maintenance.
              </CardDescription>
            </Card>
            </RevealOnScroll>

            <RevealOnScroll delayMs={100}>
            <Card className="bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Factory className="w-6 h-6 text-primary" />
                <CardTitle className="text-xl font-bold text-black tracking-wide">Energy & Utilities</CardTitle>
              </div>
              <CardDescription className="text-gray-600 leading-relaxed">
                Demand forecasting, grid-aware scheduling, anomaly detection.
              </CardDescription>
            </Card>
            </RevealOnScroll>

            <RevealOnScroll delayMs={200}>
            <Card className="bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Truck className="w-6 h-6 text-primary" />
                <CardTitle className="text-xl font-bold text-black tracking-wide">Logistics & Supply Chain</CardTitle>
              </div>
              <CardDescription className="text-gray-600 leading-relaxed">
                Inventory forecasting, route optimization, fulfillment copilots.
              </CardDescription>
            </Card>
            </RevealOnScroll>

            <RevealOnScroll delayMs={300}>
            <Card className="bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Store className="w-6 h-6 text-primary" />
                <CardTitle className="text-xl font-bold text-black tracking-wide">Retail & E‑commerce</CardTitle>
              </div>
              <CardDescription className="text-gray-600 leading-relaxed">
                Conversational shopping, personalization, content intelligence.
              </CardDescription>
            </Card>
            </RevealOnScroll>

            <RevealOnScroll delayMs={400}>
            <Card className="bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Stethoscope className="w-6 h-6 text-primary" />
                <CardTitle className="text-xl font-bold text-black tracking-wide">Healthcare</CardTitle>
              </div>
              <CardDescription className="text-gray-600 leading-relaxed">
                Knowledge copilots, triage assistants, compliance-aware Q&A.
              </CardDescription>
            </Card>
            </RevealOnScroll>

            <RevealOnScroll delayMs={500}>
            <Card className="bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Banknote className="w-6 h-6 text-primary" />
                <CardTitle className="text-xl font-bold text-black tracking-wide">Financial Services</CardTitle>
              </div>
              <CardDescription className="text-gray-600 leading-relaxed">
                NL → SQL analytics, risk scoring, reporting automation.
              </CardDescription>
            </Card>
            </RevealOnScroll>
          </div>

          
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 tracking-[0.15em] text-gray-950">
              ADDITIONAL SERVICES
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions to cover all your digital needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Smartphone className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-xl font-bold mb-4 text-black tracking-wide">Mobile Apps</CardTitle>
              <CardDescription className="text-gray-600 leading-relaxed">
                Cross-platform mobile solutions for iOS and Android
              </CardDescription>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Database className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-xl font-bold mb-4 text-black tracking-wide">Database Design</CardTitle>
              <CardDescription className="text-gray-600 leading-relaxed">
                Scalable database architecture and optimization
              </CardDescription>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Cloud className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-xl font-bold mb-4 text-black tracking-wide">Cloud Solutions</CardTitle>
              <CardDescription className="text-gray-600 leading-relaxed">
                AWS, Azure, and GCP deployment and management
              </CardDescription>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-xl font-bold mb-4 text-black tracking-wide">Security</CardTitle>
              <CardDescription className="text-gray-600 leading-relaxed">
                Enterprise-grade security and compliance solutions
              </CardDescription>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-[0.1em]">
            READY TO START?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Let's discuss how our services can help you achieve your digital transformation goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-12 py-6 text-lg tracking-wide">
                Start Your Project <ArrowRight className="ml-2" />
              </Button>
            </a>
            <a href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black px-12 py-6 text-lg tracking-wide">
                Schedule Consultation
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;