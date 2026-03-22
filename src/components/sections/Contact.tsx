import { Mail, Github, Linkedin, MessageCircle } from 'lucide-react';
import { FadeIn } from '@/components/FadeIn';

export function Contact() {
  return (
    <section id='contact' className='py-20 bg-violet-500/5'>
      <div className='container mx-auto px-4'>
        <div className='max-w-2xl mx-auto text-center'>
          <FadeIn>
            <h2 className='text-3xl md:text-4xl font-black mb-6'>
              Let's work together.
            </h2>
          </FadeIn>

          <FadeIn delay={100}>
            <p className='text-muted-foreground mb-8 leading-relaxed'>
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision. Feel free to reach out!
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
                href='https://github.com/emielazucena'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-2 rounded-full border border-border hover:border-violet-500 hover:text-violet-500 transition-colors px-4 py-2 text-sm text-muted-foreground'
              >
                <Github className='h-4 w-4' />
                GitHub
              </a>
              <a
                href='https://www.linkedin.com/in/emiel-azucena-a97527349/'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-2 rounded-full border border-border hover:border-violet-500 hover:text-violet-500 transition-colors px-4 py-2 text-sm text-muted-foreground'
              >
                <Linkedin className='h-4 w-4' />
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
