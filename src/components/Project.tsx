import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { FaGithub } from 'react-icons/fa6';
import { useCallback, useRef } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';

type ProjectProps = {
  projectTitle: string;
  projectDescription: string[];
  imagesSrc: string[];
  repo_link: string;
  idx?: number;
};

export const Project = ({ projectTitle, projectDescription, imagesSrc, repo_link, idx }: ProjectProps) => {
  /* --- OPTIONAL: pause carousel while light‑box is open -------- */
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const togglePointerEvents = useCallback(
    (open: boolean) => {
      /* disable swipe/drag while the viewer is open */
      if (!carouselRef.current) return;
      carouselRef.current.style.pointerEvents = open ? 'none' : 'auto';
    },
    [carouselRef]
  );
  /* ------------------------------------------------------------- */

  return (
    <div
      className={cn(
        'flex max-sm:flex-col max-sm:items-center justify-center gap-24 max-sm:gap-6',
        idx && idx % 2 !== 0 && 'flex-row-reverse'
      )}
    >
      {/* ----- CAROUSEL + LIGHT‑BOX ----- */}
      <PhotoProvider onVisibleChange={togglePointerEvents}>
        <Carousel className="w-72 max-sm:w-52" ref={carouselRef}>
          <CarouselContent>
            {imagesSrc.map((img, index) => (
              <CarouselItem key={index}>
                <PhotoView src={img}>
                  <img
                    src={img}
                    alt={`Screenshot ${index + 1}`}
                    className="aspect-square w-full object-cover rounded-lg cursor-zoom-in transition-transform hover:scale-105"
                  />
                </PhotoView>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* navigation arrows */}
          <CarouselPrevious className="bg-foreground border-2 hover:text-background/90" />
          <CarouselNext className="bg-foreground border-2 hover:text-background/90" />
        </Carousel>
      </PhotoProvider>

      {/* ----- TEXT ----- */}
      <div className="w-[40%] max-sm:w-[90%]">
        <h1 className="text-2xl font-bold">{projectTitle}</h1>

        <div className="text-muted-foreground leading-relaxed grid gap-3 pt-5 text-sm">
          {projectDescription.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <a href={repo_link} target="_blank" rel="noopener noreferrer">
          <Button className="flex items-center gap-2 mt-2">
            <FaGithub /> View Code
          </Button>
        </a>
      </div>
    </div>
  );
};
