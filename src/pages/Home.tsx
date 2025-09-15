import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Code, Brain, Zap, Users, Target, Award } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden hero-light">
        {/* Background Video Overlay */}
        <div className="absolute inset-0">
          <video
            className="w-full h-full object-cover opacity-50"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center items-center text-center">
          <h1 className="hero-title text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-[0.2em] leading-tight">
            THE FUTURE OF
            <br />
            <span className="text-primary">WEB DEVELOPMENT</span>
          </h1>
          {/* Tube light underline */}
          <div className="tube-container mb-10">
            <div className="tube">
              <div className="tube-hotspot" />
            </div>
          </div>
          <div className="tube-container">
            <div className="tube-shadow" />
          </div>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl leading-relaxed">
            Discover cutting-edge AI solutions and modern web development with redlabel.ai
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/services">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-12 py-6 text-lg tracking-wide"
              >
                Get Started <ArrowRight className="ml-2" />
              </Button>
            </a>
            <a href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black px-12 py-6 text-lg tracking-wide"
              >
                Contact Us
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 tracking-[0.15em]">
              ABOUT US
            </h2>
            <div className="max-w-4xl mx-auto text-left">
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-4">
                We are a diverse team of engineers and researchers with roots at USC and SRM, united by a mission to harness technology for real-world impact. Our expertise spans Artificial Intelligence, Virtual Reality, Software Engineering, and Web Development, giving us the unique ability to tackle challenges from multiple perspectives.
              </p>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-4">
                By combining academic rigor with hands-on product experience, we create solutions that are both innovative and practical, whether it’s building AI algorithms for EV charging optimization, designing immersive VR applications, or developing scalable software platforms.
              </p>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Together, we bring the perfect blend of creativity, technical depth, and entrepreneurial spirit needed to engineer the future.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8">
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

      {/* Vision Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-[0.1em] text-gray-950">
              OUR VISION
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Technology should do more than just exist—it should elevate human experience.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-white shadow-[0_10px_40px_-15px_rgba(0,0,0,0.2)] border border-gray-100 transition-transform duration-500 hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-black mb-3">Smarter, Faster, Reliable</h3>
              <p className="text-gray-600">
                Develop AI-powered solutions that make systems smarter, faster, and more reliable.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white shadow-[0_10px_40px_-15px_rgba(0,0,0,0.2)] border border-gray-100 transition-transform duration-500 hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-black mb-3">Immersive VR</h3>
              <p className="text-gray-600">
                Build VR applications that bridge the gap between digital and physical worlds.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white shadow-[0_10px_40px_-15px_rgba(0,0,0,0.2)] border border-gray-100 transition-transform duration-500 hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-black mb-3">Scalable Platforms</h3>
              <p className="text-gray-600">
                Deliver scalable web and software platforms for businesses of tomorrow.
              </p>
            </div>
          </div>
          <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-red-400/20 via-transparent to-red-400/20 border border-red-400/30">
            <h3 className="text-2xl font-bold mb-2 text-red-600">Innovation Spotlight</h3>
            <p className="text-gray-700">
              At the heart of our work lies Agentic AI — platforms that combine advanced language models, intelligent data pipelines, and optimization algorithms to deliver real-world impact.
            </p>
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
                <CardTitle className="text-2xl font-bold tracking-[0.1em] mb-4 text-gray-900">
                  WEB DEVELOPMENT
                </CardTitle>
                {/* Tube light underline
                <div className="relative w-[180px] md:w-[260px] h-1.5 mx-auto mt-2 tube-track">
                  <div className="tube-sweep" />
                  <div className="tube-glow" />
                </div> */}
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
                <CardTitle className="text-2xl font-bold tracking-[0.1em] mb-4 text-gray-900">
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
                <CardTitle className="text-2xl font-bold tracking-[0.1em] mb-4 text-gray-900">
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
            <a href="/services">
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white px-12 py-6 text-lg tracking-wide"
              >
                View All Services
              </Button>
            </a>
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
              <h3 className="text-2xl font-bold mb-4 tracking-wide text-gray-900">EXPERT TEAM</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our team of experienced developers and AI specialists bring years of expertise to every project.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-wide text-gray-900">PRECISION DELIVERY</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                We deliver projects on time and within budget, with meticulous attention to detail.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-wide text-gray-900">PROVEN RESULTS</h3>
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
