import { FadeIn } from '@/components/FadeIn';
import { cn } from '@/lib/utils';

const companyColors = {
  violet: {
    border: 'border-violet-500',
    bg: 'bg-violet-500/5',
    dot: 'text-violet-500',
    pill: 'bg-violet-500/10 text-violet-400',
    tag: 'bg-violet-500/10 text-violet-400',
    bullet: 'text-violet-500',
  },
  emerald: {
    border: 'border-emerald-500',
    bg: 'bg-emerald-500/5',
    dot: 'text-emerald-500',
    pill: 'bg-emerald-500/10 text-emerald-400',
    tag: 'bg-emerald-500/10 text-emerald-400',
    bullet: 'text-emerald-500',
  },
};

const experiences = [
  {
    company: 'Mindanao Consolidated Cooperative Bank (MCCB)',
    period: '2021 – 2025',
    color: 'violet' as const,
    roles: [
      {
        title: 'Sr. Software Developer / Analyst',
        period: 'Jan 2023 – Dec 2025',
        bullets: [
          'Built and deployed full-stack applications serving internal banking operations across multiple departments — data reconciliation, regulatory compliance, and organizational workflows.',
          'Managed complete development lifecycle: design, implementation, testing, deployment, and maintenance of production systems.',
          'Collaborated with IT infrastructure team and core banking specialists to integrate solutions with existing banking infrastructure.',
          'Deployed applications using Docker containerization with NGINX/Apache reverse proxy configurations.',
        ],
        tags: ['Node.js', 'React', 'TypeScript', 'MongoDB', 'MSSQL', 'Docker'],
      },
      {
        title: 'Jr. Software Developer / Analyst',
        period: 'Feb 2021 – Dec 2022',
        bullets: [
          'Developed, enhanced, and modified systems under the supervision of the Sr. Developer.',
          'Tested and validated software changes before release.',
          'Documented interfaces between new and legacy systems.',
        ],
        tags: ['Node.js', 'PHP', 'MongoDB', 'MySQL'],
      },
    ],
  },
  {
    company: 'Misamis Oriental Sport Complex (MOISC)',
    period: '2018 – 2020',
    color: 'emerald' as const,
    roles: [
      {
        title: 'IT Staff',
        period: 'Jun 2018 – Dec 2020',
        bullets: [
          'Managed IT infrastructure including computer systems, network equipment, and multimedia setups.',
          'Maintained LAN infrastructure and resolved connectivity issues across facilities.',
          'Supported live event technical requirements including streaming, projection, and audio systems.',
        ],
        tags: ['Networking', 'LAN', 'Hardware', 'Multimedia'],
      },
    ],
  },
];

export function Experience() {
  return (
    <section id='experience' className='py-20'>
      <div className='container mx-auto px-4'>
        <FadeIn>
          <p className='text-xs font-semibold uppercase tracking-widest text-violet-500 mb-2'>
            Experience
          </p>
          <h2 className='text-3xl md:text-4xl font-black mb-12'>Where I've Worked</h2>
        </FadeIn>

        <div className='max-w-3xl space-y-6'>
          {experiences.map((exp, expIndex) => {
            const c = companyColors[exp.color];
            return (
              <FadeIn key={exp.company} delay={expIndex * 150}>
                <div className='rounded-2xl border bg-card hover:shadow-md transition-shadow duration-300 overflow-hidden'>
                  {/* Company header */}
                  <div className={cn('flex items-center justify-between gap-4 px-6 py-4 border-l-4', c.border, c.bg)}>
                    <p className='font-semibold text-foreground'>
                      <span className={cn('mr-1', c.dot)}>●</span>
                      {exp.company}
                    </p>
                    <span className={cn('shrink-0 rounded-full text-xs font-medium px-2.5 py-1', c.pill)}>
                      {exp.period}
                    </span>
                  </div>

                  {/* Roles */}
                  <div className='divide-y'>
                    {exp.roles.map((role, roleIndex) => (
                      <div key={roleIndex} className='px-6 py-5 space-y-3'>
                        {/* Role title + date */}
                        <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1'>
                          <h3 className='text-lg font-semibold'>{role.title}</h3>
                          <span className={cn('rounded-full text-xs font-medium px-2.5 py-1 w-fit', c.pill)}>
                            {role.period}
                          </span>
                        </div>

                        {/* Bullets */}
                        <ul className='space-y-1.5'>
                          {role.bullets.map((bullet, i) => (
                            <li key={i} className='flex gap-2 text-sm text-muted-foreground leading-relaxed'>
                              <span className={cn('mt-0.5 shrink-0', c.bullet)}>•</span>
                              {bullet}
                            </li>
                          ))}
                        </ul>

                        {/* Tags */}
                        <div className='flex flex-wrap gap-1.5 pt-1'>
                          {role.tags.map((tag) => (
                            <span
                              key={tag}
                              className={cn('rounded-full text-xs font-medium px-2.5 py-1', c.tag)}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
