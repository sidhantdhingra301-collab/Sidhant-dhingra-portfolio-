import { Play } from "lucide-react";
import { useState } from "react";

const BlogDetail1 = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const youtubeVideoId = "xk09-iKGeG0";

  return (
    <div className="min-h-screen p-8 lg:p-16">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <p className="text-muted-foreground mb-4">Graphics • UI • Visual</p>
          <button className="px-8 py-3 border-2 border-primary text-primary rounded-full text-lg font-light">
            Videography blog
          </button>
        </div>

        {/* Video Section */}
        <div className="mb-8 rounded-3xl overflow-hidden border-2 border-primary bg-muted">
          {!isPlaying ? (
            <div className="relative aspect-video">
              <img
                src={`https://img.youtube.com/vi/${youtubeVideoId}/maxresdefault.jpg`}
                alt="Video Thumbnail"
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setIsPlaying(true)}
                className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors"
              >
                <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center">
                  <Play className="w-10 h-10 text-primary-foreground ml-1" fill="currentColor" />
                </div>
              </button>
            </div>
          ) : (
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1`}
                title="Beyond the lens"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          )}
        </div>

        {/* Watch on YouTube Button */}
        <div className="mb-12 text-center">
          <a
            href={`https://www.youtube.com/watch?v=${youtubeVideoId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            Watch on YouTube
          </a>
        </div>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-semibold text-primary mb-6">Title - Beyond the lens</h2>

          <section className="mb-6">
            <h3 className="text-lg font-semibold text-primary mb-2">Introduction:</h3>
            <p className="text-muted-foreground leading-relaxed">
              Our team created a short video on capturing a reality which all of us face in our everyday lives. The constant grind, stress and the need to keep pushing through a hectic routine. In this blog I will be sharing my perspective as the director of the video reflecting on the vision behind the narrative, the challenges we faced and the choices that we made to shape the final piece. We aimed to deliver a simple message that sometimes stepping away from the pressure and stress of work and embracing life's simple moments is exactly what we need.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-lg font-semibold text-primary mb-2">Concept and Story:</h3>
            <p className="text-muted-foreground leading-relaxed">
              In the constant grind, stress and hustle bustle we often forget to take a break, breathe and enjoy the little moments of life. This story is about a person who his burdened by his everyday schedule and work stuck with his laptop throughout the day. The moment he takes a break and steps outside he realises that he has forgotten his glasses inside. With a quick grab of the glasses the moment he wear them the vibe completely shifts. With a fresh perspective the world around him changes, the music lifts and life feels lighter. The person starts embracing little things in life, be it fun filled parties, quiet walks, watching things around him. The video reminds us of something that sometimes all we need is a simple break and connect ourselves and actually live.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-lg font-semibold text-primary mb-2">How it was shot:</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The first part of the video was shot in I phone 15 using the cinematic mode, at 24fps in 4k. The visuals were kept simple and static, slow slider movements and eye level frame. We also incorporated overhead angle shots and several close up shots of the workspace.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              There is a shift in tone in the second part of the video where music uplifts the vibe completely changes all of those shots were taken in I phone 16 pro. Those are POV shots after the glass wearing sequence. The improved main camera allowed us to move the lens closer to the person capturing the little details without compromising the quality.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The shift in the overall vibe allowed us to depict that the person is finally living the life and trying to embrace the little moments around him.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We edited the video in VN. The lighting in the initial part of the video is mostly natural and the we have kept the music volume initially a little low to depict the dull, boring and stressful life but the moment the person wears his glasses we increased the volume to depict happiness and the fact that the person is actually living his life. The song we have used is "we are the people" by Empire of the sun.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-lg font-semibold text-primary mb-2">Difficulties faced:</h3>
            <ol className="list-decimal list-inside text-muted-foreground leading-relaxed space-y-2">
              <li>Selection of pov shots was something which we faced difficulty in because all of us had different ideas on the pov shots but we couldn't incorporate all of them</li>
              <li>There was a specific shot that we wanted to put in which was the person riding and electric scooter however it was really difficult to keep te camera static while riding the scooter and it was risky too. I tried taking it several times but failed so we had to opt out of that</li>
              <li>Taking the shot where the person was wearing glasses was something which we were stuck at and had to shoot it multiple times because we were not able to set the camera well between the glasses</li>
            </ol>
          </section>

          <section className="mb-6">
            <h3 className="text-lg font-semibold text-primary mb-2">Reflection:</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Through this project I learnt how important it is as a director to plan each and every shot with intention and also staying flexible when things don't go as planned. I also realised how small changes in lighting, sound and camera movement can change the overall mood of the scene. Another valuable lesson that I learnt is the importance of working as a team, everyone brings different ideas on the table so it's really important to find a common ground between all the group members and merge them to find one clear vision that is what truly reflects team work and team effort. Overall this project taught me how direction is not only guiding about the camera but guiding the team towards a common goal.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our group divided the tasks fairly among all four members. We collaborated on developing the concept together, drawing inspiration from our daily routines and personal experiences. Shania and Salvi took charge of the editing part, While Shania also selected the music for us. Gautam is the actor in the video and direction is handled by sidhant and gautam together to bring the vision to life.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
};

export default BlogDetail1;
