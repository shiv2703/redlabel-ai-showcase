import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Code, Brain, Zap, Users, Target, Award } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-[0.2em] leading-tight">
            THE FUTURE OF
            <br />
            <span className="text-primary">WEB DEVELOPMENT</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl leading-relaxed">
            Discover cutting-edge AI solutions and modern web development with redlabel.ai
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-12 py-6 text-lg tracking-wide">
              Get Started <ArrowRight className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black px-12 py-6 text-lg tracking-wide">
              View Our Work
            </Button>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 tracking-[0.15em]">
              VISION
            </h2>
            <h3 className="text-2xl md:text-4xl text-gray-700 mb-12 font-light">
              We're Changing the Way the World Thinks About Technology
            </h3>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
                At redlabel.ai, we combine cutting-edge artificial intelligence with modern web development 
                to create digital experiences that push the boundaries of what's possible.
              </p>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Our vision is to make advanced technology accessible and transformative for businesses worldwide, 
                delivering solutions that not only meet today's needs but anticipate tomorrow's challenges.
              </p>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-4">100+</div>
              <div className="text-xl text-gray-700 tracking-wide">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-4">24/7</div>
              <div className="text-xl text-gray-700 tracking-wide">AI-Powered Support</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-4">99%</div>
              <div className="text-xl text-gray-700 tracking-wide">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 tracking-[0.15em]">
              SERVICES
            </h2>
            <h3 className="text-2xl md:text-4xl text-gray-700 mb-12 font-light">
              We Deliver Exceptional Digital Solutions Around the World
            </h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <CardHeader className="text-center pb-6 pt-12">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Code className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold tracking-[0.1em] mb-4">
                  WEB DEVELOPMENT
                </CardTitle>
              </CardHeader>
              <CardContent className="pb-12">
                <CardDescription className="text-center text-gray-600 text-lg leading-relaxed">
                  Modern, responsive websites built with cutting-edge technologies 
                  and optimized for performance and user experience.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <CardHeader className="text-center pb-6 pt-12">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Brain className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold tracking-[0.1em] mb-4">
                  AI SOLUTIONS
                </CardTitle>
              </CardHeader>
              <CardContent className="pb-12">
                <CardDescription className="text-center text-gray-600 text-lg leading-relaxed">
                  Intelligent automation, machine learning models, and AI-powered 
                  applications that transform your business processes.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <CardHeader className="text-center pb-6 pt-12">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold tracking-[0.1em] mb-4">
                  DIGITAL INNOVATION
                </CardTitle>
              </CardHeader>
              <CardContent className="pb-12">
                <CardDescription className="text-center text-gray-600 text-lg leading-relaxed">
                  Future-ready digital strategies that position your business 
                  at the forefront of technological advancement.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white px-12 py-6 text-lg tracking-wide">
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 tracking-[0.15em]">
              WHY CHOOSE US
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-wide">EXPERT TEAM</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our team of experienced developers and AI specialists bring years of expertise to every project.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-wide">PRECISION DELIVERY</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                We deliver projects on time and within budget, with meticulous attention to detail.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-wide">PROVEN RESULTS</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our track record speaks for itself with successful projects across diverse industries.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;