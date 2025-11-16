import img3 from "@/assets/img_3.jpeg";

const PhotoDetail3 = () => {
  return (
    <div className="min-h-screen p-8 lg:p-16">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <p className="text-muted-foreground mb-4">Graphics • UI • Visual</p>
          <button className="px-8 py-3 border-2 border-primary text-primary rounded-full text-lg font-light">
            Aesthetic Shot
          </button>
        </div>

        <div className="mb-8 rounded-3xl overflow-hidden border-2 border-primary">
          <img
            src={img3}
            alt="River Landscape"
            className="w-full h-auto"
          />
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-medium text-primary mb-4">Technical Specifications:</h2>
            <div className="space-y-2 text-foreground">
              <p><strong>Device:</strong> Apple iPhone 16 Pro</p>
              <p><strong>Camera used:</strong> Ultra Wide Camera - 13 mm focal length,</p>
              <p><strong>Shutter speed:</strong> 1/165 s</p>
              <p><strong>Aperture-</strong> f/2.2</p>
              <p><strong>ISO-</strong> 64</p>
            </div>
            <ul className="list-disc list-inside mt-4 space-y-2 text-muted-foreground">
              <li>The shutter was open for just a tiny fraction of a second (1/165th), so even moving water in the river looks nice and sharp.</li>
              <li>The lens opening was pretty wide (f/2.2), which let in lots of light and helped make the photo bright, even though the day was cloudy.</li>
              <li>The ultra wide lens (14 mm) allowed me to capture both sides of the river and lots of scenery in one shot.</li>
              <li>The ISO was set low (ISO 64), which means the picture stays crisp and smooth, with very little visual noise.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-medium text-primary mb-4">Editing Specifications:</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>The day was gloomy with very little sunlight, but the location is close to my heart and looked beautiful.</li>
              <li>I used the magic wand tool in Photoshop, created a new layer, and added a blue color overlay to highlight the flowing water's true essence.</li>
              <li>I brightened up the clouds by making them almost white, but kept some definition so the cloud shapes remain visible.</li>
              <li>The photo shows subtle warmth and depth by balancing tones.</li>
              <li>Since the trees were losing their green color, I boosted the saturation and shifted hues so the green in the foliage would stand out more.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-medium text-primary mb-4">What the picture depicts</h2>
            <p className="text-muted-foreground leading-relaxed">
              This place means a lot to me because I cross this river nearly every day on my scooter when going to college, and it's always a part of my journey. There's something peaceful about seeing it regularly, and it's packed with memories from my daily routine.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              The photo shows a wide river with water rushing past, and the sky above is filled with thick, grey clouds. The day looks gloomy, with very little sunlight brightening up the scene. Both riverbanks are lined with trees, but many are losing their green as winter approaches. There's a road with some houses on the left, making it feel like a real, everyday place. The foam on the water's surface hints at how fast it's moving, and the whole scene feels calm yet strong. The image captures the moody beauty of the natural landscape changes as the season shifts, making the spot feel even more special.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PhotoDetail3;
