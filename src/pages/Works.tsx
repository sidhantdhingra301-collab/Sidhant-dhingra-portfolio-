import project1 from "@/assets/project_1.jpeg";
import project2 from "@/assets/project_2.jpeg";
import project3 from "@/assets/project_3.jpeg";
import project4 from "@/assets/project_4.jpeg";
import { ThumbsUp, ThumbsDown } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { toggleLike, toggleDislike } from "@/store/projectsSlice";

const Works = () => {
  const dispatch = useAppDispatch();
  const projects = useAppSelector((state) => state.projects);
  return (
    <div className="container max-w-4xl mx-auto px-8 py-16 flex flex-col min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-start mb-20">
        <div>
          <h2 className="text-2xl font-medium text-foreground">Portfolio</h2>
          <p className="text-sm text-muted-foreground italic">Limerick, Ireland</p>
        </div>
        <p className="text-foreground">Graphics • UI • Visual</p>
      </header>

      {/* Works Section */}
      <section className="flex-1">
        <p className="text-lg text-foreground mb-8 pb-8 border-b border-foreground">
          I've worked on a range of projects including mobile apps, websites, brand identities, social media creatives, and logo designs. My goal in every project is to combine usability, creativity, and strategy to deliver designs that not only look great but also work effortlessly for users.
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Venkateshwar Hospital */}
          <div className="bg-accent rounded-3xl overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow">
            <div className="aspect-[4/3] overflow-hidden">
              <img 
                src={project1} 
                alt="The Venkateshwar Hospital - Branding & Marketing materials"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 bg-card">
              <p className="text-sm text-foreground mb-2"><strong>Project name:</strong> Venkateshwar Hospitals</p>
              <p className="text-sm text-foreground mb-2"><strong>Type:</strong> Branding and website design</p>
              <p className="text-sm text-foreground mb-2"><strong>Duration:</strong> 2 months</p>
              <p className="text-sm text-foreground mb-4"><strong>Tools used:</strong> Adobe Illustrator, Adobe Photoshop, Figma</p>
              <div className="flex items-center gap-4">
                <button className="text-sm text-foreground hover:text-primary transition-colors">View more</button>
                <div className="flex items-center gap-2 ml-auto">
                  <button 
                    onClick={() => dispatch(toggleLike('venkateshwar'))}
                    className={`flex items-center gap-1 transition-colors ${projects.venkateshwar.userAction === 'liked' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
                  >
                    <ThumbsUp className="w-4 h-4" />
                    <span className="text-sm">{projects.venkateshwar.likes}</span>
                  </button>
                  <button 
                    onClick={() => dispatch(toggleDislike('venkateshwar'))}
                    className={`flex items-center gap-1 transition-colors ${projects.venkateshwar.userAction === 'disliked' ? 'text-destructive' : 'text-muted-foreground hover:text-foreground'}`}
                  >
                    <ThumbsDown className="w-4 h-4" />
                    <span className="text-sm">{projects.venkateshwar.dislikes}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Plugd Works */}
          <div className="bg-accent rounded-3xl overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow">
            <div className="aspect-[4/3] overflow-hidden">
              <img 
                src={project2} 
                alt="Plugd Works - Portfolio website design on mobile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 bg-card">
              <p className="text-sm text-foreground mb-2"><strong>Project name:</strong> Plugd Works</p>
              <p className="text-sm text-foreground mb-2"><strong>Type:</strong> Portfolio website design</p>
              <p className="text-sm text-foreground mb-2"><strong>Duration:</strong> 6 months</p>
              <p className="text-sm text-foreground mb-4"><strong>Tools used:</strong> Adobe Illustrator, Figma, Flaticon</p>
              <div className="flex items-center gap-4">
                <button className="text-sm text-foreground hover:text-primary transition-colors">View more</button>
                <div className="flex items-center gap-2 ml-auto">
                  <button 
                    onClick={() => dispatch(toggleLike('plugdworks'))}
                    className={`flex items-center gap-1 transition-colors ${projects.plugdworks.userAction === 'liked' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
                  >
                    <ThumbsUp className="w-4 h-4" />
                    <span className="text-sm">{projects.plugdworks.likes}</span>
                  </button>
                  <button 
                    onClick={() => dispatch(toggleDislike('plugdworks'))}
                    className={`flex items-center gap-1 transition-colors ${projects.plugdworks.userAction === 'disliked' ? 'text-destructive' : 'text-muted-foreground hover:text-foreground'}`}
                  >
                    <ThumbsDown className="w-4 h-4" />
                    <span className="text-sm">{projects.plugdworks.dislikes}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Nurrabay */}
          <div className="bg-accent rounded-3xl overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow">
            <div className="aspect-[4/3] overflow-hidden">
              <img 
                src={project3} 
                alt="Nurrabay - Branding billboard display"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 bg-card">
              <p className="text-sm text-foreground mb-2"><strong>Project name:</strong> Nurrabay</p>
              <p className="text-sm text-foreground mb-2"><strong>Type:</strong> Branding Emailer and Banner</p>
              <p className="text-sm text-foreground mb-2"><strong>Duration:</strong> 2 weeks</p>
              <p className="text-sm text-foreground mb-4"><strong>Tools used:</strong> Adobe Illustrator, Adobe Photoshop</p>
              <div className="flex items-center gap-4">
                <button className="text-sm text-foreground hover:text-primary transition-colors">View more</button>
                <div className="flex items-center gap-2 ml-auto">
                  <button 
                    onClick={() => dispatch(toggleLike('nurrabay'))}
                    className={`flex items-center gap-1 transition-colors ${projects.nurrabay.userAction === 'liked' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
                  >
                    <ThumbsUp className="w-4 h-4" />
                    <span className="text-sm">{projects.nurrabay.likes}</span>
                  </button>
                  <button 
                    onClick={() => dispatch(toggleDislike('nurrabay'))}
                    className={`flex items-center gap-1 transition-colors ${projects.nurrabay.userAction === 'disliked' ? 'text-destructive' : 'text-muted-foreground hover:text-foreground'}`}
                  >
                    <ThumbsDown className="w-4 h-4" />
                    <span className="text-sm">{projects.nurrabay.dislikes}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Arihant Developers */}
          <div className="bg-accent rounded-3xl overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow">
            <div className="aspect-[4/3] overflow-hidden">
              <img 
                src={project4} 
                alt="Arihant Developers - Website design on laptop"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 bg-card">
              <p className="text-sm text-foreground mb-2"><strong>Project name:</strong> Arihant Developers</p>
              <p className="text-sm text-foreground mb-2"><strong>Type:</strong> Website Design</p>
              <p className="text-sm text-foreground mb-2"><strong>Duration:</strong> 2 Months</p>
              <p className="text-sm text-foreground mb-4"><strong>Tools used:</strong> Adobe Illustrator, Figma, Flaticon</p>
              <div className="flex items-center gap-4">
                <button className="text-sm text-foreground hover:text-primary transition-colors">View more</button>
                <div className="flex items-center gap-2 ml-auto">
                  <button 
                    onClick={() => dispatch(toggleLike('arihant'))}
                    className={`flex items-center gap-1 transition-colors ${projects.arihant.userAction === 'liked' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
                  >
                    <ThumbsUp className="w-4 h-4" />
                    <span className="text-sm">{projects.arihant.likes}</span>
                  </button>
                  <button 
                    onClick={() => dispatch(toggleDislike('arihant'))}
                    className={`flex items-center gap-1 transition-colors ${projects.arihant.userAction === 'disliked' ? 'text-destructive' : 'text-muted-foreground hover:text-foreground'}`}
                  >
                    <ThumbsDown className="w-4 h-4" />
                    <span className="text-sm">{projects.arihant.dislikes}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* View More Button */}
        <div className="flex justify-center">
          <button className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background rounded-full px-8 py-3 transition-colors">
            View More ↗
          </button>
        </div>
      </section>
    </div>
  );
};

export default Works;
