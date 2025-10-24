import blog1 from "@/assets/blog-1.jpeg";
import blog2 from "@/assets/blog-2.jpeg";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      image: blog1,
      date: "20th October 2025",
      topic: "Portfolio website design",
      day: "Friday",
    },
    {
      id: 2,
      image: blog2,
      date: "19th October 2025",
      topic: "Portfolio website design",
      day: "Thursday",
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
              className="group relative overflow-hidden rounded-3xl bg-card shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.topic}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="bg-muted p-6">
                <p className="text-sm text-muted-foreground mb-2">
                  <span className="font-medium">Date:</span> {blog.date}
                </p>
                <p className="text-sm text-muted-foreground mb-2">
                  <span className="font-medium">Topic:</span> {blog.topic}
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  <span className="font-medium">Day:</span> {blog.day}
                </p>
                <button className="px-6 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors">
                  View more
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
