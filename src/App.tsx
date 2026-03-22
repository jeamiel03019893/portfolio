import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';
import { Skills } from '@/components/sections/Skills';
import { Contact } from '@/components/sections/Contact';

function App() {
  return (
    <div className='min-h-screen'>
      <Header />
      <main>
        <Hero />
        <div className='h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent mx-auto max-w-5xl' />
        <About />
        <div className='h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent mx-auto max-w-5xl' />
        <Experience />
        <div className='h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent mx-auto max-w-5xl' />
        <Projects />
        <div className='h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent mx-auto max-w-5xl' />
        <Skills />
        <div className='h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent mx-auto max-w-5xl' />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
