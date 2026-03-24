import { Mail, MessageCircle } from 'lucide-react';
import { FadeIn } from '@/components/FadeIn';

export function Contact() {
	return (
		<section
			id='contact'
			className='py-20 bg-violet-500/5'
		>
			<div className='container mx-auto px-4'>
				<div className='max-w-2xl mx-auto text-center'>
					<FadeIn>
						<h2 className='text-3xl md:text-4xl font-black mb-6'>
							Let's work together.
						</h2>
					</FadeIn>

					<FadeIn delay={100}>
						<p className='text-muted-foreground mb-8 leading-relaxed'>
							I'm always open to discussing new projects, creative
							ideas, or opportunities to be part of your vision.
							Feel free to reach out!
						</p>
					</FadeIn>

					<FadeIn delay={200}>
						<a
							href='mailto:emiel.azucena@gmail.com'
							className='text-xl font-medium text-muted-foreground hover:text-violet-500 transition-colors inline-flex items-center gap-2 mb-8'
						>
							<Mail className='h-5 w-5' />
							emiel.azucena@gmail.com
						</a>
					</FadeIn>

					<FadeIn delay={300}>
						<div className='flex items-center justify-center gap-4'>
							<a
								href='https://github.com/jeamiel03019893'
								target='_blank'
								rel='noopener noreferrer'
								className='inline-flex items-center gap-2 rounded-full border border-border hover:border-violet-500 hover:text-violet-500 transition-colors px-4 py-2 text-sm text-muted-foreground'
							>
								<svg className='h-4 w-4' viewBox='0 0 24 24' fill='currentColor' aria-hidden='true'>
									<path d='M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z' />
								</svg>
								GitHub
							</a>
							<a
								href='https://www.linkedin.com/in/emiel-azucena-a97527349/'
								target='_blank'
								rel='noopener noreferrer'
								className='inline-flex items-center gap-2 rounded-full border border-border hover:border-violet-500 hover:text-violet-500 transition-colors px-4 py-2 text-sm text-muted-foreground'
							>
								<svg className='h-4 w-4' viewBox='0 0 24 24' fill='currentColor' aria-hidden='true'>
									<path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
								</svg>
								LinkedIn
							</a>
							<a
								href='https://wa.me/639658839558'
								target='_blank'
								rel='noopener noreferrer'
								className='inline-flex items-center gap-2 rounded-full border border-border hover:border-violet-500 hover:text-violet-500 transition-colors px-4 py-2 text-sm text-muted-foreground'
							>
								<MessageCircle className='h-4 w-4' />
								WhatsApp
							</a>
						</div>
					</FadeIn>
				</div>
			</div>
		</section>
	);
}
