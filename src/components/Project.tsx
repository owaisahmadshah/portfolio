
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { FaGithub } from 'react-icons/fa6';
import { useState, useEffect, useRef, useCallback } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import {  HiSparkles } from 'react-icons/hi2';
import { HiExternalLink } from 'react-icons/hi';

type ProjectProps = {
  projectTitle: string;
  projectDescription: string[];
  imagesSrc: string[];
  repo_link: string;
  live_link?: string;
  tags: string[];
  techStack: { icon: any; name: string; color: string }[];
  idx?: number;
};

export const Project = ({
  projectTitle,
  projectDescription,
  imagesSrc,
  repo_link,
  live_link,
  tags,
  techStack,
  idx = 0,
}: ProjectProps) => {
  const isReversed = idx % 2 !== 0;
  // const [isHovered, setIsHovered] = useState(false);

  const imageAnimation = isReversed ? 'slide-in-from-right-12' : 'slide-in-from-left-12';
  const textAnimation = isReversed ? 'slide-in-from-left-12' : 'slide-in-from-right-12';

  return (
    <div
      className={cn(
        'flex max-md:flex-col max-md:items-center justify-center gap-12 md:gap-16 group',
        isReversed && 'flex-row-reverse'
      )}
      // onMouseEnter={() => setIsHovered(true)}
      // onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Gallery */}
      <div
        className={`w-full md:w-2/5 animate-in fade-in zoom-in-95 duration-700 ${imageAnimation}`}
        style={{ animationDelay: '300ms' }}
      >
        <ProjectImageGallery imagesSrc={imagesSrc} />
      </div>

      {/* Project Details */}
      <div
        className={`w-full md:w-1/2 space-y-6 animate-in fade-in duration-700 ${textAnimation}`}
        style={{ animationDelay: '500ms' }}
      >
        {/* Project Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/10 border border-background/20 backdrop-blur-sm">
          <HiSparkles className="w-4 h-4 animate-pulse" />
          <span className="text-sm font-medium">Featured Project</span>
        </div>

        {/* Title */}
        <h3 className="text-4xl max-md:text-3xl font-bold bg-gradient-to-r from-background to-background/70 bg-clip-text text-transparent">
          {projectTitle}
        </h3>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs font-medium bg-background/10 border border-background/20 rounded-full backdrop-blur-sm hover:bg-background/20 transition-colors duration-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Description */}
        <div className="space-y-4 text-background/80 leading-relaxed">
          {projectDescription.map((p, i) => (
            <p key={i} className="text-base">
              {p}
            </p>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="space-y-3">
          <p className="text-sm font-semibold text-background/60 uppercase tracking-wider">
            Tech Stack
          </p>
          <div className="flex flex-wrap gap-4">
            {techStack.map((tech, i) => {
              const Icon = tech.icon;
              return (
                <div
                  key={i}
                  className="flex items-center gap-2 px-3 py-2 bg-background/5 border border-background/20 rounded-lg backdrop-blur-sm hover:bg-background/10 transition-all duration-300 hover:scale-105 group/tech"
                >
                  <Icon
                    className="w-5 h-5 transition-transform duration-300 group-hover/tech:scale-110"
                    style={{ color: tech.color }}
                  />
                  <span className="text-sm font-medium">{tech.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 pt-4">
          <a href={repo_link} target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="group/btn shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <FaGithub className="w-5 h-5" />
              View Code
              <span className="transition-transform duration-300 group-hover/btn:translate-x-1">
                →
              </span>
            </Button>
          </a>
          {live_link && (
            <a href={live_link} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="group/btn shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-background/30 hover:bg-background/10"
              >
                <HiExternalLink className="w-5 h-5" />
                Live Demo
                <span className="transition-transform duration-300 group-hover/btn:translate-x-1">
                  →
                </span>
              </Button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

// Enhanced Image Gallery
interface ProjectImageGalleryProps {
  imagesSrc: string[];
}

const ProjectImageGallery: React.FC<ProjectImageGalleryProps> = ({ imagesSrc }) => {
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const featuredImage = imagesSrc[featuredIndex];

  const stopAutoScroll = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const startAutoScroll = useCallback(() => {
    stopAutoScroll();
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setFeaturedIndex((prevIndex) => (prevIndex + 1) % imagesSrc.length);
      }, 3000);
    }
  }, [imagesSrc.length, stopAutoScroll, isPaused]);

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
        onMouseEnter={() => {
          setIsPaused(true);
          stopAutoScroll();
        }}
        onMouseLeave={() => {
          setIsPaused(false);
          startAutoScroll();
        }}
      >
        {/* Featured Image with Enhanced Effects */}
        <div className="relative group cursor-zoom-in">
          {/* Multi-layer Glow */}
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 via-primary/20 to-primary/30 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-700 opacity-60 group-hover:opacity-100 animate-pulse" />
          <div className="absolute -inset-2 bg-gradient-to-br from-primary/20 to-transparent rounded-xl blur-lg transition-all duration-500" />

          {/* Image Container */}
          <PhotoView src={featuredImage}>
            <div className="relative overflow-hidden rounded-xl border-2 border-background/30 group-hover:border-primary/50 transition-all duration-500">
              <img
                src={featuredImage}
                alt="Featured project screenshot"
                className="relative w-full h-auto object-cover shadow-2xl transition-all duration-700 group-hover:scale-105"
                style={{ aspectRatio: '16/9' }}
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Zoom Indicator */}
              <div className="absolute top-4 right-4 bg-foreground/80 backdrop-blur-sm px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <span className="text-xs font-medium flex items-center gap-1">
                  <HiExternalLink className="w-3 h-3" />
                  Click to expand
                </span>
              </div>
            </div>
          </PhotoView>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-4 bg-primary/30 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-primary/10">
            <span className="text-sm font-medium">
              {featuredIndex + 1} / {imagesSrc.length}
            </span>
          </div>
        </div>

        {/* Enhanced Thumbnail Row */}
        <div className="grid grid-cols-4 sm:grid-cols-6 gap-3">
          {imagesSrc.map((img, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                setFeaturedIndex(index);
                setIsPaused(false);
                startAutoScroll();
              }}
              className={cn(
                'relative rounded-lg overflow-hidden cursor-pointer border-2 transition-all duration-300 group/thumb',
                index === featuredIndex
                  ? 'border-primary opacity-100 scale-105 shadow-lg shadow-primary/20'
                  : 'border-background/20 opacity-60 hover:opacity-100 hover:border-background/40 hover:scale-105'
              )}
            >
              {/* Thumbnail glow effect */}
              {index === featuredIndex && (
                <div className="absolute -inset-1 bg-primary/30 rounded-lg blur-md -z-10" />
              )}
              
              <img
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-auto object-cover aspect-square transition-transform duration-300 group-hover/thumb:scale-110"
              />
              
              {/* Active indicator */}
              {index === featuredIndex && (
                <div className="absolute inset-0 bg-primary/10 pointer-events-none" />
              )}
            </button>
          ))}
        </div>

        {/* Auto-scroll indicator */}
        <div className="flex items-center justify-center gap-2 text-xs text-background/60">
          <div className={cn(
            "w-2 h-2 rounded-full transition-all duration-300",
            isPaused ? "bg-background/30" : "bg-primary animate-pulse"
          )} />
          <span>{isPaused ? 'Paused' : 'Auto-playing'}</span>
        </div>
      </div>
    </PhotoProvider>
  );
};