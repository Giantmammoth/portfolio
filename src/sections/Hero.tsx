import profileImage from '../assets/images/profile_nobackground.png';
import { RedBand } from '../components/RedBand';
// @ts-ignore
import LogoLoop from '../components/LogoLoop.jsx';
import { Button } from '../components/ui/button';
import { 
  SiReact, 
  SiTypescript, 
  SiNodedotjs, 
  SiFlutter, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiMongodb, 
  SiDocker 
} from 'react-icons/si';

const techLogos = [
  { name: 'React', icon: SiReact },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'Flutter', icon: SiFlutter },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'TailwindCSS', icon: SiTailwindcss },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'Docker', icon: SiDocker },
];

export const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden"
    >
      <div className="h-[95vh] w-full flex items-stretch justify-between px-2 md:px-4 lg:px-6 overflow-hidden">
        {/* Texte à gauche avec LogoLoop */}
        <div className="flex-1 flex flex-col items-start justify-end pb-8">
          <p className="text-white text-3xl md:text-4xl lg:text-5xl font-sans font-medium leading-tight">
            I build solutions
          </p>
          <RedBand>that connect</RedBand>
          <p className="text-white text-3xl md:text-4xl lg:text-5xl font-sans font-medium leading-tight">
            technology to people.
          </p>
          <div className="mt-8 w-[300px] md:w-[350px] lg:w-[400px] overflow-hidden">
            <LogoLoop
              logos={techLogos}
              speed={60}
              direction="left"
              logoHeight={32}
              gap={48}
              width="100%"
              fadeOut={true}
              fadeOutColor="#000000"
              renderItem={(item: any) => {
                const Icon = item.icon;
                return <Icon className="w-8 h-8 text-white" />;
              }}
            />
          </div>
        </div>

        {/* Image au centre */}
        <div className="flex-shrink-0 h-full flex items-center justify-center overflow-visible mx-2 md:mx-4">
          <img
            src={profileImage}
            alt="Profile"
            className="h-[120%] w-auto object-cover object-center scale-110"
          />
        </div>

        {/* Texte à droite avec bouton */}
        <div className="flex-1 flex flex-col items-end justify-end pb-8">
          <div className="mb-auto pt-40">
            <p className="text-white text-3xl md:text-4xl lg:text-5xl font-sans font-medium leading-tight text-right">
              From
            </p>
            <p className="text-white text-3xl md:text-4xl lg:text-5xl font-sans font-medium leading-tight text-right">
              
              <RedBand className="mx-1">vision</RedBand>
            </p>
            <p className="text-white text-3xl md:text-4xl lg:text-5xl font-sans font-medium leading-tight text-right">
              to digital
            </p>
            <p className="text-white text-3xl md:text-4xl lg:text-5xl font-sans font-medium leading-tight text-right">
              <RedBand className="mx-1">solution.</RedBand>
            </p>
          </div>
          <div className="mt-8">
            <Button className="border border-red-500 text-red-500 bg-transparent rounded-full uppercase px-12 py-6 font-bold text-2xl md:text-3xl hover:border-red-500 hover:text-red-500">
              Start a project
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

