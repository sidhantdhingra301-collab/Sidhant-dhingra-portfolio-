import gallery1 from "@/assets/gallery-1.jpeg";
import gallery2 from "@/assets/gallery-2.jpeg";
import gallery3 from "@/assets/gallery-3.jpeg";
import gallery4 from "@/assets/gallery-4.jpeg";
import gallery5 from "@/assets/gallery-5.jpeg";
import profileImg from "@/assets/profile.jpeg";

const PhotoGallery = () => {
  const galleryImages = [
    { id: 1, src: gallery5, alt: "Website Launch Campaign" },
    { id: 2, src: gallery2, alt: "Brand Identity Design" },
    { id: 3, src: gallery3, alt: "Business Card Design" },
    { id: 4, src: gallery4, alt: "Healthcare Campaign" },
    { id: 5, src: gallery1, alt: "Mobile App Design" },
    { id: 6, src: profileImg, alt: "Portfolio Photography" },
  ];

  return (
    <div className="min-h-screen p-8 lg:p-16">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-muted-foreground mb-2">Graphics • UI • Visual</p>
          <div className="flex justify-center">
            <button className="px-8 py-3 border-2 border-primary text-primary rounded-full text-lg font-light hover:bg-primary hover:text-primary-foreground transition-colors">
              Photo Gallery
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
