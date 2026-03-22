import { ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { StatusBadge } from '@/components/StatusBadge';
import { type Project } from '@/data/projects';
import { cn } from '@/lib/utils';

const MAX_TAGS_WITH_IMAGE = 3;

const imageHeightMap: Record<string, string> = {
  featured: 'h-72',
  secondary: 'h-36',
  default: 'h-40',
};

type Props = {
  project: Project;
  onClick: () => void;
};

export function ProjectCard({ project, onClick }: Props) {
  const size = project.gridSize ?? 'default';
  const isFeatured = size === 'featured';
  const hasImage = !!project.image;
  const imageHeight = imageHeightMap[size];

  const visibleTags = (isFeatured || !hasImage) ? project.stack : project.stack.slice(0, MAX_TAGS_WITH_IMAGE);
  const extraCount = (isFeatured || !hasImage) ? 0 : Math.max(0, project.stack.length - MAX_TAGS_WITH_IMAGE);

  function handleDemoClick(e: React.MouseEvent) {
    if (!project.demoUrl) return;
    e.stopPropagation();
    window.open(project.demoUrl, '_blank', 'noopener,noreferrer');
  }

  return (
    <article
      onClick={onClick}
      className='group relative flex flex-col h-full rounded-2xl bg-card border border-border hover:ring-2 hover:ring-violet-500/50 hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden'
    >
      {/* Hover overlay */}
      <div className='absolute inset-0 z-10 flex flex-col items-center justify-center gap-1.5 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl'>
        <span className='text-white font-bold text-base'>Click to view details</span>
        <span className='text-white/70 text-xs'>Learn more about this project</span>
      </div>
      {/* Image area — only rendered when a custom image is provided */}
      {hasImage && (
        <div className={cn('relative shrink-0 overflow-hidden bg-muted', imageHeight)}>
          <img
            src={project.image}
            alt={project.title}
            className={cn(
              'w-full h-full transition-transform duration-500 group-hover:scale-105',
              'object-cover',
            )}
          />

          {/* Gradient overlay for featured card */}
          {isFeatured && (
            <div className='absolute inset-0 bg-gradient-to-t from-violet-900/60 to-transparent' />
          )}

          {/* Status badge — top-right of image */}
          {project.status && (
            <StatusBadge status={project.status} className='absolute top-3 right-3' />
          )}

          {/* Live Demo button — inside image overlay for featured only */}
          {isFeatured && project.demoUrl && (
            <Button
              size='sm'
              onClick={handleDemoClick}
              className='absolute bottom-3 left-3 bg-violet-500 hover:bg-violet-600 text-white gap-1.5'
            >
              <ExternalLink className='h-3.5 w-3.5' />
              Live Demo
            </Button>
          )}
        </div>
      )}

      {/* Content area */}
      <div className='flex flex-col flex-1 p-5 gap-3 min-h-0'>
        {/* Title row — includes status badge inline when no image */}
        <div className='flex items-start justify-between gap-2'>
          <div className='min-w-0'>
            <h3 className='font-semibold text-base leading-snug'>{project.title}</h3>
            <p className='text-xs text-muted-foreground mt-0.5'>{project.role}</p>
          </div>
          {!hasImage && project.status && (
            <StatusBadge status={project.status} className='shrink-0 mt-0.5' />
          )}
        </div>

        {/* Overview — featured fills space, no-image shows more, image cards compact */}
        <p className={cn(
          'text-sm text-muted-foreground leading-relaxed',
          isFeatured ? 'flex-1 overflow-hidden' : hasImage ? 'line-clamp-2' : 'line-clamp-5 flex-1',
        )}>
          {project.overview}
        </p>

        {/* Stack tags — all shown when no image, capped when image present */}
        <div className='flex flex-wrap gap-1.5'>
          {visibleTags.map((tag) => (
            <Badge
              key={tag}
              className='text-xs bg-violet-500/15 text-violet-300 border-violet-500/20 hover:bg-violet-500/25 hover:text-violet-200'
            >
              {tag}
            </Badge>
          ))}
          {extraCount > 0 && (
            <Badge variant='outline' className='text-xs text-muted-foreground'>
              +{extraCount} more
            </Badge>
          )}
        </div>

        {/* CTA button — non-featured cards only */}
        {!isFeatured && (
          <Button
            size='sm'
            variant='outline'
            disabled={!project.demoUrl}
            onClick={handleDemoClick}
            className={cn('w-full mt-auto gap-1.5', !project.demoUrl && 'opacity-40')}
          >
            <ExternalLink className='h-3.5 w-3.5' />
            {project.buttonLabel}
          </Button>
        )}
      </div>
    </article>
  );
}
