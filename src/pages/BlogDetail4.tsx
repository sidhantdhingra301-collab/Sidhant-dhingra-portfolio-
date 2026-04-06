import laserPlaceholder1 from "@/assets/blog-4.jpeg";
import laserPlaceholder2 from "@/assets/blog4_2.jpeg";

const BlogDetail4 = () => {
  return (
    <div className="min-h-screen p-8 lg:p-16">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8 text-center">
          <p className="text-muted-foreground mb-4">Graphics • UI • Visual</p>
          <button className="px-8 py-3 border-2 border-primary text-primary rounded-full text-lg font-light">
            Laser Cutting
          </button>
        </div>

        {/* Two images side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="rounded-2xl overflow-hidden border-2 border-primary">
            <img
              src={laserPlaceholder1}
              alt="Laser cut phone stand - side view"
              className="w-full h-full object-cover aspect-[3/4]"
            />
          </div>
          <div className="rounded-2xl overflow-hidden border-2 border-primary">
            <img
              src={laserPlaceholder2}
              alt="Laser cut phone stand - front view"
              className="w-full h-full object-cover aspect-[3/4]"
            />
          </div>
        </div>

        {/* Reflection */}
        <article className="prose prose-lg max-w-none">
          <button className="px-6 py-2 border-2 border-primary text-primary rounded-full text-sm font-light mb-6">
            Reflection
          </button>

          <div className="text-muted-foreground leading-relaxed space-y-4">
            <p>
              For this project, my group designed a laser-cut phone stand that works as a "distraction filter." Instead of making the phone easy to see, we used critical design to do the opposite. We built a horizontal slot that hides the screen, which blocks notifications from view and stops the user from being distracted.
            </p>
            <p>
              Because this was a very quick exercise, we had to manage our time wisely to get from our sketches to the final laser cut. However, we faced a big challenge once the piece was finished. We had originally measured and tested the design using an Android phone. When we tried to fit an iPhone (iOS) into the slot, it didn't fit properly on either side.
            </p>
            <p>
              This taught us a lot about how small differences in phone sizes matter when building a physical object.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogDetail4;
