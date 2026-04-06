import { Link } from "react-router-dom";
import blog1 from "@/assets/blog-1.jpeg";
import blog2 from "@/assets/blog-2.jpeg";
import blog3 from "@/assets/blog-3.jpeg";
import blog4 from "@/assets/blog-4.jpeg";
import blog5 from "@/assets/blog-5.jpeg";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      image: blog1,
      date: "4th December 2025",
      topic: "Beyond the lens Blog",
      day: "Thursday",
      link: "/blog/1",
    },
    {
      id: 2,
      image: blog2,
      date: "20th February 2026",
      topic: "Interactive Art storyboarding",
      day: "Friday",
      link: "/blog/2",
    },
    {
      id: 3,
      image: blog3,
      date: "13th March 2026",
      topic: "Interactive Soundscape Performance",
      day: "Friday",
      link: "/blog/3",
      hasVideo: true,
      videoLink: "https://youtube.com/watch?v=f1rWzaWDLE",
    },
    {
      id: 4,
      image: blog4,
      date: "12th March 2026",
      topic: "Laser cutting",
      day: "Thursday",
      link: "/blog/4",
    },
    {
      id: 5,
      image: blog5,
      date: "27th March 2025",
      topic: "Reflective vlog",
      day: "Friday",
      link: null,
      isVideoOnly: true,
      videoLink: "https://youtu.be/JPfhuCqtXGs",
    },
  ];

  return (
    <div className="min-h-screen p-8 lg:p-16">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-muted-foreground mb-2">Graphics • UI • Visual</p>
          <div className="flex justify-center">
            <button className="px-8 py-3 border-2 border-primary text-primary rounded-full text-lg font-light hover:bg-primary hover:text-primary-foreground transition-colors">
              Blogs
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className={`group relative overflow-hidden rounded-3xl bg-card shadow-lg hover:shadow-xl transition-all duration-300 ${
                blog.id === 5 ? "lg:col-span-1" : ""
              }`}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.topic}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Dark gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                {/* Text overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <p className="text-sm mb-1">
                    <span className="font-semibold">Date:</span> {blog.date}
                  </p>
                  <p className="text-sm mb-1">
                    <span className="font-semibold">Topic:</span> {blog.topic}
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold">Day-</span>{blog.day}
                  </p>
                </div>
              </div>
              <div className="bg-muted px-6 py-3 flex items-center justify-between">
                {blog.isVideoOnly ? (
                  <a
                    href={blog.videoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors inline-block text-sm"
                  >
                    Video
                  </a>
                ) : blog.link ? (
                  <Link
                    to={blog.link}
                    className="px-6 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors inline-block text-sm"
                  >
                    View more
                  </Link>
                ) : (
                  <button className="px-6 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors text-sm">
                    View more
                  </button>
                )}
                {blog.hasVideo && blog.videoLink && (
                  <a
                    href={blog.videoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors text-sm"
                  >
                    Video
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
