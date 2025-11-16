import { Link } from "react-router-dom";
import { ThumbsUp, ThumbsDown } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { toggleLike, toggleDislike } from "@/store/projectsSlice";
import img1 from "@/assets/img_1.jpeg";
import img2 from "@/assets/img_2.jpeg";
import img3 from "@/assets/img_3.jpeg";

const PhotoGallery = () => {
  const dispatch = useAppDispatch();
  const aestheticState = useAppSelector((state) => state.projects.aesthetic);
  const professionalState = useAppSelector((state) => state.projects.professional);
  const passionState = useAppSelector((state) => state.projects.passion);

  const galleryItems = [
    {
      id: "aesthetic",
      title: "Aesthetic shot",
      image: img3,
      link: "/photo-detail-3",
      state: aestheticState,
    },
    {
      id: "professional",
      title: "Professional Headshot",
      image: img2,
      link: "/photo-detail-2",
      state: professionalState,
    },
    {
      id: "passion",
      title: "Passion Shot",
      image: img1,
      link: "/photo-detail-1",
      state: passionState,
    },
  ];

  return (
    <div className="min-h-screen p-8 lg:p-16">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <p className="text-muted-foreground mb-4 text-center">Graphics • UI • Visual</p>
          <div className="flex justify-center">
            <button className="px-8 py-3 border-2 border-primary text-primary rounded-full text-lg font-light hover:bg-primary hover:text-primary-foreground transition-colors">
              Photo Gallery
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className={`relative rounded-3xl overflow-hidden group ${
                index === 2 ? "md:col-span-1" : ""
              }`}
              style={{ aspectRatio: index === 2 ? "1/1.2" : "1/1" }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                <h3 className="text-2xl font-light mb-4">{item.title}</h3>
                
                <div className="flex items-center justify-between">
                  <Link
                    to={item.link}
                    className="text-sm hover:underline"
                  >
                    View more →
                  </Link>
                  
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => dispatch(toggleLike(item.id))}
                      className={`flex items-center gap-1 transition-colors ${
                        item.state.userAction === "liked"
                          ? "text-primary"
                          : "text-primary-foreground hover:text-primary"
                      }`}
                    >
                      <ThumbsUp className="w-4 h-4" />
                      <span className="text-sm">{item.state.likes}</span>
                    </button>
                    
                    <button
                      onClick={() => dispatch(toggleDislike(item.id))}
                      className={`flex items-center gap-1 transition-colors ${
                        item.state.userAction === "disliked"
                          ? "text-destructive"
                          : "text-primary-foreground hover:text-destructive"
                      }`}
                    >
                      <ThumbsDown className="w-4 h-4" />
                      <span className="text-sm">{item.state.dislikes}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
