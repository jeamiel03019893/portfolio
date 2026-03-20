import { Mail, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/FadeIn';

export function Contact() {
	return (
		<section
			id='contact'
			className='py-20 bg-muted/30'
		>
			<div className='container mx-auto px-4'>
				<div className='max-w-2xl'>
					<FadeIn>
						<h2 className='text-3xl md:text-4xl font-bold mb-6'>
							Get In Touch
						</h2>
					</FadeIn>
					<FadeIn delay={100}>
						<p className='text-muted-foreground mb-8 leading-relaxed'>
							I'm always open to discussing new projects, creative
							ideas, or opportunities to be part of your vision.
							Feel free to reach out!
						</p>
					</FadeIn>

					<div className='space-y-6'>
						<FadeIn delay={200}>
							<Button
								size='lg'
								asChild
								className='transition-transform duration-300 hover:scale-105'
							>
								<a
									href='mailto:emiel.azucena@gmail.com'
									className='inline-flex items-center gap-2'
								>
									<Mail className='h-4 w-4' />
									emiel.azucena@gmail.com
								</a>
							</Button>
						</FadeIn>

						<FadeIn delay={300}>
							<div className='flex items-center gap-4 pt-4'>
								<span className='text-sm text-muted-foreground'>
									Find me on
								</span>
								<a
									href='https://github.com/emielazucena'
									target='_blank'
									rel='noopener noreferrer'
									className='p-2 rounded-lg bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110'
								>
									<Github className='h-5 w-5' />
								</a>
								<a
									href='https://www.linkedin.com/in/emiel-azucena-a97527349/'
									target='_blank'
									rel='noopener noreferrer'
									className='p-2 rounded-lg bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110'
								>
									<Linkedin className='h-5 w-5' />
								</a>
							</div>
						</FadeIn>
					</div>
				</div>
			</div>
		</section>
	);
}
