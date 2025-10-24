import { Button } from "@/components/ui/button";

const Portfolio = () => {
  return (
    <div className="container max-w-4xl mx-auto px-8 py-16 flex flex-col min-h-screen">
      <header className="flex justify-between items-start mb-12">
        <div>
          <h2 className="text-2xl font-medium text-foreground">Portfolio</h2>
          <p className="text-sm text-muted-foreground italic">Limerick, Ireland</p>
        </div>
        <p className="text-foreground">Graphics • UI • Visual</p>
      </header>

      <div className="flex justify-center mb-12">
        <Button
          variant="outline"
          className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background rounded-full px-8"
        >
          Resume
        </Button>
      </div>

      <section className="mb-16">
        <h3 className="text-xl font-medium text-foreground mb-8 border-b border-foreground pb-2">
          Work Experience
        </h3>

        <div className="mb-8">
          <div className="flex justify-between items-start mb-3">
            <h4 className="text-lg font-medium text-secondary">
              Adambha Infratech Logo Design <span className="text-muted-foreground">(Freelance)</span>
            </h4>
            <p className="text-sm text-muted-foreground italic">January 2025 - Present</p>
          </div>
          <div className="space-y-2 text-foreground">
            <p><strong>Concept Development:</strong> Crafted initial design concepts by researching Adambha Infratech's values and market positioning, resulting in a logo that reflects strength and innovation within the construction industry.</p>
            <p><strong>Typography Selection:</strong> Chose a bold, modern typeface to ensure readability and convey professionalism, aligning with industry standards.</p>
            <p><strong>Versatility & Scalability:</strong> Ensured the logo was adaptable across various platforms, optimizing its application for both digital and print media while maintaining clarity at all sizes.</p>
            <p><strong>Symbol Design:</strong> Created a custom logo mark, ensuring it visually represents the brand and stability.</p>
          </div>
        </div>

        <div className="mb-8">
          <div className="flex justify-between items-start mb-3">
            <h4 className="text-lg font-medium text-secondary">
              Plugd Web design + development <span className="text-muted-foreground">(Freelance)</span>
            </h4>
            <p className="text-sm text-muted-foreground italic">December 2024 - Present</p>
          </div>
          <div className="space-y-2 text-foreground">
            <p><strong>User Research & Analysis:</strong> Conducted in-depth research on Plugd's target audience, competitors, and industry trends to define user needs and preferences, informing the site's structure and user flow.</p>
            <p><strong>Wireframing & Prototyping:</strong> Developed low-fidelity wireframes to map out the website's layout and functionality, followed by high-fidelity prototypes using tools like Figma to visualize interactions and UI elements.</p>
            <p><strong>UI Design & Visual Hierarchy:</strong> Designed a clean, modern interface with a strong visual hierarchy, utilizing typography, colors, and spacing to guide users through key content and enhance readability across devices.</p>
            <p><strong>Responsive Design:</strong> Implemented responsive design techniques, ensuring the website is optimized for all screen sizes and devices, maintaining consistency in UI elements and user experience.</p>
          </div>
        </div>

        <div className="mb-8">
          <div className="flex justify-between items-start mb-3">
            <h4 className="text-lg font-medium text-secondary">
              The Venkateshwar Hospitals <span className="text-muted-foreground">(Branding & Marketing Intern)</span>
            </h4>
            <p className="text-sm text-muted-foreground italic">August 2024 - October 2024</p>
          </div>
          <div className="space-y-2 text-foreground">
            <p><strong>Visual Content Creation:</strong> Designed engaging promotional materials such as brochures, flyers, and banners to support the hospital's marketing and branding campaigns, ensuring alignment with the hospital's visual identity.</p>
            <p><strong>Digital Content Development:</strong> Assisted in the creation of digital content for social media, email campaigns, and website elements, contributing to enhanced online presence and patient engagement.</p>
            <p><strong>Collaboration with Marketing Team:</strong> Worked closely with the marketing team to conceptualize and execute design ideas that align with the hospital's communication strategy, strengthening the overall branding.</p>
            <p><strong>Home Page Design:</strong> Played a key role in designing the homepage of the Venkateshwar Hospital website, focusing on improving the user experience, visual hierarchy, and accessibility while maintaining brand consistency.</p>
            <p><strong>Branding Consistency:</strong> Ensured all design materials adhered to Venkateshwar Hospitals' branding guidelines, maintaining a consistent visual identity across both print and digital platforms.</p>
          </div>
        </div>

        <div className="mb-8">
          <div className="flex justify-between items-start mb-3">
            <h4 className="text-lg font-medium text-secondary">
              Arihant Developers Website design
            </h4>
            <p className="text-sm text-muted-foreground italic">June 2023 - August 2023</p>
          </div>
          <div className="space-y-2 text-foreground">
            <p><strong>User Research & Competitive Analysis:</strong> Conducted thorough user research and competitive analysis to identify target audience preferences and industry trends, informing design decisions and ensuring a user-centered approach.</p>
            <p><strong>UX Strategy & Analysis:</strong> Performed SWOT and MoSCoW analysis to prioritize features and functionalities, ensuring the website's design addressed both user needs and business goals.</p>
            <p><strong>Wireframing & Prototyping:</strong> Created low and high-fidelity wireframes to visualize different layout options, iterating through multiple design variations based on client feedback to enhance user flow and overall design.</p>
            <p><strong>Dynamic UI Elements:</strong> Enhanced the user experience by integrating dynamic UI elements such as pop-ups, hover effects, and interactive features, making the website visually engaging and user-friendly.</p>
            <p><strong>Brand Alignment & Consistency:</strong> Worked within the company's brand guidelines, incorporating their colour scheme and design language to ensure a consistent visual identity across the website.</p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h3 className="text-xl font-medium text-foreground mb-8 border-b border-foreground pb-2">
          Education
        </h3>

        <div className="space-y-6">
          <div>
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-lg font-medium text-secondary">Msc Interaction and Experience Design</h4>
              <p className="text-sm text-muted-foreground italic">September 2025-Present</p>
            </div>
            <p className="text-foreground">University of Limerick</p>
          </div>

          <div>
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-lg font-medium text-secondary">BA (Hons) Communication Design</h4>
              <p className="text-sm text-muted-foreground italic">August 2022-July 2025</p>
            </div>
            <p className="text-foreground">Indian Institute of art and design Okhla Affiliated with Kingston University</p>
          </div>

          <div>
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-lg font-medium text-secondary">Foundation Diploma in design</h4>
              <p className="text-sm text-muted-foreground italic">August 2021-July 2022</p>
            </div>
            <p className="text-foreground">Indian Institute of art and design Okhla</p>
          </div>

          <div>
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-lg font-medium text-secondary">All India Senior Secondary Certificate Examination (Class 12th)</h4>
              <p className="text-sm text-muted-foreground italic">April 2020-March 2021</p>
            </div>
            <p className="text-foreground">Gyan Bharati School, Saket, New Delhi</p>
            <p className="text-muted-foreground text-sm">AISSCE%- 80.8, Science Stream, CBSE Board</p>
          </div>

          <div>
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-lg font-medium text-secondary">All India Secondary Certificate Examination (Class 10th)</h4>
              <p className="text-sm text-muted-foreground italic">April 2018-March 2019</p>
            </div>
            <p className="text-foreground">Gyan Bharati School, Saket, New Delhi</p>
            <p className="text-muted-foreground text-sm">AISCE%- 92, CBSE Board</p>
          </div>
        </div>
      </section>

      <div className="flex justify-center">
        <Button
          variant="outline"
          className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background rounded-full px-8"
          asChild
        >
          <a href="/Sidhant_Dhingra_CV.pdf" download="Sidhant_Dhingra_CV.pdf">
            Download resume ↗
          </a>
        </Button>
      </div>
    </div>
  );
};

export default Portfolio;
