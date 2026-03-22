import { ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { StatusBadge } from '@/components/StatusBadge';
import { type Project } from '@/data/projects';
import defaultImg from '@/assets/img/project-default.jpg';
import { cn } from '@/lib/utils';

type Props = {
	project: Project | null;
	onClose: () => void;
};

export function ProjectModal({ project, onClose }: Props) {
	if (!project) return null;

	function handleDemoClick() {
		if (project?.demoUrl) {
			window.open(project.demoUrl, '_blank', 'noopener,noreferrer');
		}
	}

	return (
		<Dialog
			open={!!project}
			onOpenChange={(open) => {
				if (!open) onClose();
			}}
		>
			<DialogContent className='md:max-w-5xl'>
				<DialogHeader>
					<div className='flex items-start gap-3 flex-wrap'>
						<DialogTitle className='text-xl'>
							{project.title}
						</DialogTitle>
						{project.status && (
							<StatusBadge status={project.status} />
						)}
					</div>
					<p className='text-xs text-muted-foreground'>
						{project.role}
					</p>
				</DialogHeader>

				<ScrollArea className='max-h-[75vh] pr-4'>
					<div className='space-y-5 pt-2'>
						{/* Project screenshot — only shown if not the default placeholder */}
						{project.image && project.image !== defaultImg && (
							<img
								src={project.image}
								alt={project.title}
								className='w-full object-contain rounded-lg'
							/>
						)}

						{/* Overview */}
						<div>
							<h4 className='text-sm font-semibold mb-1.5'>
								Overview
							</h4>
							<p className='text-sm text-muted-foreground leading-relaxed'>
								{project.overview}
							</p>
						</div>

						{/* Key Highlights */}
						{project.highlights.length > 0 && (
							<div>
								<h4 className='text-sm font-semibold mb-1.5'>
									Key Highlights
								</h4>
								<ul className='space-y-1.5'>
									{project.highlights.map((h, i) => (
										<li
											key={i}
											className='text-sm text-muted-foreground leading-relaxed flex gap-2'
										>
											<span className='text-primary mt-0.5 shrink-0'>
												•
											</span>
											{h}
										</li>
									))}
								</ul>
							</div>
						)}

						{/* Impact */}
						<div>
							<h4 className='text-sm font-semibold mb-1.5'>
								Impact
							</h4>
							<p className='text-sm text-muted-foreground leading-relaxed'>
								{project.impact}
							</p>
						</div>

						{/* Full Stack */}
						<div>
							<h4 className='text-sm font-semibold mb-2'>
								Tech Stack
							</h4>
							<div className='flex flex-wrap gap-1.5'>
								{project.stack.map((tag) => (
									<Badge
										key={tag}
										variant='secondary'
										className='text-xs'
									>
										{tag}
									</Badge>
								))}
							</div>
						</div>

						{/* Live Demo button */}
						<Button
							variant='outline'
							disabled={!project.demoUrl}
							onClick={handleDemoClick}
							className={cn(
								'gap-1.5',
								!project.demoUrl && 'opacity-40',
							)}
						>
							<ExternalLink className='h-4 w-4' />
							{project.buttonLabel}
						</Button>
					</div>
				</ScrollArea>
			</DialogContent>
		</Dialog>
	);
}
