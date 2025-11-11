import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { FaGithub } from 'react-icons/fa6';
import { useState, useEffect, useRef, useCallback } from 'react'; // Import new hooks
import { PhotoProvider, PhotoView } from 'react-photo-view';

// import 'react-photo-view/dist/react-photo-view.css'; // Make sure this is imported in your app

type ProjectProps = {
  projectTitle: string;
  projectDescription: string[];
  imagesSrc: string[];
  repo_link: string;
  idx?: number;
};

export const Project = ({
  projectTitle,
  projectDescription,
  imagesSrc,
  repo_link,
  idx = 0, // Default idx for safety
}: ProjectProps) => {
  const isReversed = idx % 2 !== 0;

  // Animation classes based on layout direction
  const imageAnimation = isReversed ? 'slide-in-from-right-12' : 'slide-in-from-left-12';
  const textAnimation = isReversed ? 'slide-in-from-left-12' : 'slide-in-from-right-12';

  return (
    <div
      className={cn(
        'flex max-md:flex-col max-md:items-center justify-center gap-12 md:gap-16',
        isReversed && 'flex-row-reverse' // Alternating layout
      )}
    >
      {/* ----- NEW IMAGE GALLERY ----- */}
      <div
        className={`w-full md:w-2/5 animate-in fade-in zoom-in-95 duration-700 ${imageAnimation}`}
        style={{ animationDelay: '300ms' }}
      >
        <ProjectImageGallery imagesSrc={imagesSrc} />
      </div>

      {/* ----- ANIMATED TEXT ----- */}
      <div
        className={`w-full md:w-1/2 space-y-5 animate-in fade-in duration-700 ${textAnimation}`}
        style={{ animationDelay: '500ms' }}
      >
        <h3 className="text-3xl font-bold">{projectTitle}</h3>

        <div className="text-muted-foreground leading-relaxed grid gap-4">
          {projectDescription.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <a href={repo_link} target="_blank" rel="noopener noreferrer">
          <Button
            size="lg"
            className="group flex items-center gap-2 mt-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <FaGithub className="w-5 h-5" />
            View Code
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Button>
        </a>
      </div>
    </div>
  );
};

// --- This is the new "Astonishing" Image Gallery ---
// --- Now with Auto-Scroll and adjusted sizing! ---

interface ProjectImageGalleryProps {
  imagesSrc: string[];
}

const ProjectImageGallery: React.FC<ProjectImageGalleryProps> = ({ imagesSrc }) => {
  // Use index state for auto-scroll logic
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const featuredImage = imagesSrc[featuredIndex];

  // Stop the auto-scroll
  const stopAutoScroll = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  // Start the auto-scroll
  const startAutoScroll = useCallback(() => {
    stopAutoScroll(); // Clear any existing interval
    intervalRef.current = setInterval(() => {
      setFeaturedIndex((prevIndex) => (prevIndex + 1) % imagesSrc.length);
    }, 3000); // 3 seconds
  }, [imagesSrc.length, stopAutoScroll]);

  // Start scrolling on mount, stop on unmount
  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, [startAutoScroll, stopAutoScroll]);

  if (!imagesSrc || imagesSrc.length === 0) {
    return <div>No images available.</div>;
  }

  return (
    <PhotoProvider>
      <div
        className="flex flex-col gap-4"
        onMouseEnter={stopAutoScroll} // Pause on hover
        onMouseLeave={startAutoScroll} // Resume on leave
      >
        {/* Featured Image (with glow effect!) */}
        <div className="relative group cursor-zoom-in">
          {/* Glow effect */}
          <div className="absolute -inset-2.5 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-500 opacity-70 group-hover:opacity-100" />

          <PhotoView src={featuredImage}>
            <img
              src={featuredImage}
              alt="Featured project screenshot"
              className="relative w-full h-auto object-cover rounded-lg shadow-lg border border-border/50 transition-all duration-500 group-hover:scale-[1.02]"
              style={{ aspectRatio: '16/9' }} // <-- 1. CHANGED: Aspect ratio
            />
          </PhotoView>
        </div>

        {/* Thumbnail Row */}
        <div className="grid grid-cols-4 sm:grid-cols-6 gap-3">
          {imagesSrc.map((img, index) => (
            <PhotoView key={index} src={img}>
              <button
                onClick={(e) => {
                  e.stopPropagation(); // <-- 2. ADDED: Stops lightbox from opening
                  setFeaturedIndex(index); // Set the featured image
                  startAutoScroll(); // <-- 3. ADDED: Reset the timer
                }}
                className={cn(
                  'rounded-md overflow-hidden cursor-pointer border-2 transition-all duration-300', // Changed cursor
                  index === featuredIndex
                    ? 'border-primary opacity-100' // Active thumbnail
                    : 'border-transparent opacity-60 hover:opacity-100 hover:border-border'
                )}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-auto object-cover aspect-square"
                />
              </button>
            </PhotoView>
          ))}
        </div>
      </div>
    </PhotoProvider>
  );
};
