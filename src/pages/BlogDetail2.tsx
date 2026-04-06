const BlogDetail2 = () => {
  return (
    <div className="min-h-screen p-8 lg:p-16">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8 text-center">
          <p className="text-muted-foreground mb-4">Graphics • UI • Visual</p>
          <button className="px-8 py-3 border-2 border-primary text-primary rounded-full text-lg font-light">
            Interactive Art Storyboarding
          </button>
        </div>

        {/* PDF Viewer */}
        <div className="rounded-3xl overflow-hidden border-2 border-primary bg-muted">
          <iframe
            src="/storyboard.pdf"
            title="Interactive Art Storyboarding PDF"
            className="w-full"
            style={{ height: "80vh" }}
          />
        </div>

        <p className="text-center text-muted-foreground mt-6 text-sm">
          
        </p>
      </div>
    </div>
  );
};

export default BlogDetail2;
