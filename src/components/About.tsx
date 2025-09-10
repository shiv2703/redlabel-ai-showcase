const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground animate-fade-in">
            About <span className="text-primary">redlabel.ai</span>
          </h2>
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              At redlabel.ai, we're passionate about creating digital experiences that make a difference. 
              Our team combines years of web development expertise with cutting-edge AI technology to 
              deliver solutions that drive real business results.
            </p>
            
            <p>
              We believe in the power of technology to transform businesses, and we're committed to 
              staying at the forefront of innovation. Whether you need a stunning website or intelligent 
              automation, we have the skills and experience to bring your vision to life.
            </p>
            
            <p className="text-primary font-semibold">
              Ready to take your business to the next level? Let's build something amazing together.
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg bg-card/70 backdrop-blur-sm border border-border hover:shadow-glow-red transition-all duration-300 hover:scale-105 animate-fade-in">
              <div className="text-2xl font-bold text-primary mb-2">Innovation</div>
              <div className="text-muted-foreground">
                We stay ahead of technology trends to deliver cutting-edge solutions
              </div>
            </div>
            <div className="p-6 rounded-lg bg-card/70 backdrop-blur-sm border border-border hover:shadow-glow-red transition-all duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-2xl font-bold text-primary mb-2">Quality</div>
              <div className="text-muted-foreground">
                Every project is crafted with attention to detail and best practices
              </div>
            </div>
            <div className="p-6 rounded-lg bg-card/70 backdrop-blur-sm border border-border hover:shadow-glow-red transition-all duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="text-2xl font-bold text-primary mb-2">Partnership</div>
              <div className="text-muted-foreground">
                We work closely with clients to understand and exceed their goals
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;