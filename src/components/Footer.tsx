const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">R</span>
            </div>
            <span className="text-xl font-bold text-foreground">redlabel.ai</span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-muted-foreground mb-2">
              © 2024 redlabel.ai. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Crafting digital experiences with AI innovation
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;