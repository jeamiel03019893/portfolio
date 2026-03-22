import { useState } from 'react';
import { FadeIn } from '@/components/FadeIn';
import { ProjectCard } from '@/components/ProjectCard';
import { ProjectModal } from '@/components/ProjectModal';
import { projects, type Project } from '@/data/projects';
import { cn } from '@/lib/utils';

const gridSizeClasses: Record<string, string> = {
  featured: 'lg:col-span-2 lg:row-span-2',
  secondary: 'lg:col-span-2',
  default: 'lg:col-span-1',
};

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <>
      <section id='projects' className='py-20'>
        <div className='container mx-auto px-4'>
          <FadeIn>
            <p className='text-xs font-semibold uppercase tracking-widest text-violet-500 mb-2'>
              Projects
            </p>
            <h2 className='text-3xl md:text-4xl font-black mb-3'>
              Things I've Built
            </h2>
            <p className='text-muted-foreground mb-12'>
              15 production systems built across banking, compliance, and HR — highlights below.
            </p>
          </FadeIn>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:auto-rows-[minmax(0,1fr)]'>
            {projects.map((project, index) => {
              const size = project.gridSize ?? 'default';
              return (
                <FadeIn
                  key={project.title}
                  delay={index * 60}
                  className={cn(gridSizeClasses[size], 'h-full')}
                >
                  <ProjectCard
                    project={project}
                    onClick={() => setSelected(project)}
                  />
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <ProjectModal
        project={selected}
        onClose={() => setSelected(null)}
      />
    </>
  );
}
