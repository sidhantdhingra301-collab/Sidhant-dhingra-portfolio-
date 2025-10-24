import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.jpeg";

const About = () => {
  return (
    <div className="container max-w-4xl mx-auto px-8 py-16 flex flex-col min-h-screen">
      
      <header className="flex justify-between items-start mb-20">
        <div>
          <h2 className="text-2xl font-medium text-foreground">Portfolio</h2>
          <p className="text-sm text-muted-foreground italic">Limerick, Ireland</p>
        </div>
        <p className="text-foreground">Graphics • UI • Visual</p>
      </header>

      
      <section className="flex-1 flex flex-col items-center justify-center text-center">
        <Button
          variant="outline"
          size="lg"
          className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background rounded-full px-8 mb-12"
        >
          About Me
        </Button>

        <h1 className="text-3xl mb-12 text-foreground">
          Hey , I'm <span className="text-secondary font-medium">Sidhant</span>
        </h1>

        <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed mb-16">
          I'm a passionate UI/UX Designer with a BA (Hons) in Communication Design, driven by the
          goal of creating intuitive, human centered digital experiences. My background blends creativity
          with strategy, allowing me to design interfaces that not only look beautiful but also solve real
          user problems through research, empathy, and usability.
        </p>

        
        <div className="mb-16">
          <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-foreground">
            <img
              src={profileImage}
              alt="Sidhant - UI/UX Designer"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        
        <Button
          variant="outline"
          size="lg"
          className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background rounded-full px-8"
          asChild
        >
          <a href="/portfolio">
            Portfolio
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </section>
    </div>
  );
};

export default About;
