import { useEffect, useRef, useState } from 'react';
import { Instagram, Linkedin } from 'lucide-react';
import { socialLinks } from '../mock';

export const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const organizations = [
    { name: "Born This Way Foundation", logo: "https://images.ctfassets.net/ef34o61n7ee2/Jp6GLOFOG19fmxvKnMgSn/cdb66ed2e7b8973ad247c50c62363ae6/Jack_org_Jack_org_and_Lady_Gaga_s_Born_This_Way_Foundation_Launc_16x9.png" },
    { name: "Lupus Foundation", logo: "https://images.ctfassets.net/ef34o61n7ee2/3pS8ccvNPsRiSk5OOvDbQQ/19002aa56133176f7531eae9f3f2035a/Screenshot_2023-07-04_at_8.04.16_PM.png" },
    { name: "MA Breast Cancer Coalition", logo: "https://images.ctfassets.net/ef34o61n7ee2/5HMfPBRSww3jh7m38arm1b/e22af12f35e2e1ab9ed4fd0377c52f8f/Screen_Shot_2022-06-26_at_3.15.49_PM_16x9.png" },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-12 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Meet <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Maria</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-purple-200 to-pink-200 rounded-3xl"></div>
              <img
                src="https://images.ctfassets.net/ef34o61n7ee2/315eYhq4Pd2VAFokRA2dlg/07587558fcb0cabec06c599e72015a65/maria.mongiardo_67077307_195168964832873_4373870044423530444_n.jpg"
                alt="Maria Mongiardo"
                className="relative rounded-3xl shadow-2xl w-full object-cover"
              />
            </div>
            <div className="flex gap-4 mt-6 justify-center">
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-purple-100"
              >
                <Instagram className="w-6 h-6 text-purple-600" />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-purple-100"
              >
                <Linkedin className="w-6 h-6 text-purple-600" />
              </a>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-300 transform ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">About Maria Mongiardo</h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Maria Mongiardo grew up in the North Shore of Massachusetts. She has her bachelors degree from Clark University and her masters of public health degree from Boston University's medical school.
                </p>
                <p>
                  Science, health, and research are all huge passions of hers but so is social media. Since high school, she had her own Tumblr blog. She loved interacting with people online, blogging, and being part of different communities.
                </p>
                <p>
                  She has volunteered and worked for several non profits over the years including Lupus Chick, The Lupus Foundation of New England, The Born This Way Foundation, The Massachusetts Breast Cancer Coalition, and The Nan Project.
                </p>
                <p>
                  Today, Maria helps a wide range of entrepreneurs and businesses including skin clinics, business coaches, chefs, hair salons, and fitness trainers. She hopes to continue to be a valuable member in the public health sphere and a social media guru for all those who need one.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-sm text-gray-500 mb-4 font-semibold">Trusted by organizations including:</p>
              <div className="grid grid-cols-3 gap-4">
                {organizations.map((org, index) => (
                  <div key={index} className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                    <img src={org.logo} alt={org.name} className="w-full h-16 object-contain" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
