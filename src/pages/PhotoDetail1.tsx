import img1 from "@/assets/img_1.jpeg";

const PhotoDetail1 = () => {
  return (
    <div className="min-h-screen p-8 lg:p-16">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <p className="text-muted-foreground mb-4">Graphics • UI • Visual</p>
          <button className="px-8 py-3 border-2 border-primary text-primary rounded-full text-lg font-light">
            Passion Shot
          </button>
        </div>

        <div className="mb-8 rounded-3xl overflow-hidden border-2 border-primary">
          <img
            src={img1}
            alt="Professional Headshot"
            className="w-full h-auto"
          />
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-medium text-primary mb-4">Technical Specifications:</h2>
            <div className="space-y-2 text-foreground">
              <p><strong>Device:</strong> Apple iPhone 16 Pro</p>
              <p><strong>Camera used:</strong> Telephoto Camera - 120 mm focal length, f/2.8 aperture</p>
              <p><strong>Shutter speed:</strong> 1/50 s</p>
              <p><strong>Aperture:</strong> f/2.8</p>
              <p><strong>ISO:</strong>160</p>
            </div>
            <ul className="list-disc list-inside mt-4 space-y-2 text-muted-foreground">
              <li>Choosing a slower shutter helped brighten the photo, but I had to keep extra steady so the face stayed clear.</li>
              <li>Using a wide aperture blurred the background, making the focus go straight to my face and not the wall behind.</li>
              <li>The telephoto setting let me fill the frame naturally with my head and shoulders, creating a professional look.</li>
              <li>Keeping the ISO low made sure my skin and the background looked smooth and free of grain.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-medium text-primary mb-4">Editing Specifications:</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>The original background was dark and had distracting shadows, so I removed it and replaced it with a clean white base.</li>
              <li>I used the magic tool to select myself, created another layer, and worked separately from the background for better control.</li>
              <li>The colours looked dull at first, so I boosted the saturation to make everything look more lively.</li>
              <li>I increased the brightness to give the photo more life and depth.</li>
              <li>Even after editing, I made sure to leave single hair strands as they were, because those little details reflect my real personality.</li>
              <li>I also cropped the photo till my chest</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-medium text-primary mb-4">What the picture depicts</h2>
            <p className="text-muted-foreground leading-relaxed">
              This photo presents a formal and confident headshot with a natural, friendly touch. I set it up indoors against a simple white background for a clean, distraction-free look that keeps all the attention on my face. The lighting is bright and even, ensuring my features are clearly visible and giving the shot a fresh, professional vibe.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Instead of traditional formal wear, I chose a solid, earthy coloured hoodie with a collared shirt underneath, adding a subtle personality while still looking tidy and put together. My expression is straightforward and relaxed, helping to convey approachability along with professionalism. In editing, I brightened the image so the colours of my face stands out, but I left real life details like stray hair strands intact.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              This headshot works well for formal profiles or portfolios, giving an honest, approachable first impression while still feeling very genuine and true to who I am.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PhotoDetail1;
