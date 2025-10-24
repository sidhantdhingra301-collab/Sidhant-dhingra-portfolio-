import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="container max-w-4xl mx-auto px-8 py-16 flex flex-col min-h-screen">
      <header className="flex justify-between items-start mb-20">
        <div>
          <h2 className="text-2xl font-medium text-foreground">Portfolio</h2>
          <p className="text-sm text-muted-foreground italic">Limerick, Ireland</p>
        </div>
        <p className="text-foreground">Graphics • UI • Visual</p>
      </header>

      <section className="flex-1 flex flex-col justify-center">
        <div className="mb-8">
          <p className="text-xl mb-2 text-foreground">
            Hey , I'm <span className="text-secondary font-medium">Sidhant</span>
          </p>
          <h1 className="text-6xl font-medium text-foreground leading-tight mb-6">
            UI UX Designer
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A passionate UI UX Designer with BA (Hons) in communication Design
          </p>
        </div>

        <div className="flex gap-4 mb-16">
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background rounded-full px-6"
            asChild
          >
            <a href="/contact">
              Connect
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background rounded-full px-6"
            asChild
          >
            <a href="/works">
              Work
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>

        <div className="border-t border-foreground pt-8 max-w-2xl">
          <div className="text-6xl font-serif text-foreground mb-4">"</div>
          <div className="space-y-2 text-lg text-foreground">
            <p>
              I design to make the <span className="text-secondary font-medium">complex simple.</span>
            </p>
            <p>To turn ideas into experiences.</p>
            <p>To make users feel understood.</p>
            <p>That's what good design means to me.</p>
          </div>
        </div>
      </section>

      <footer className="mt-20">
        <div className="flex gap-8 text-secondary text-lg">
          <span>Figma</span>
          <span>Adobe illustrator</span>
          <span>Adobe Photoshop</span>
          <span>Adobe XD</span>
        </div>
      </footer>
    </div>
  );
};

export default Home;
