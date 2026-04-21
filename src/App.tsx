/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { ThemeProvider } from './contexts/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BentoSummary } from './components/BentoSummary';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { SkillsMastery } from './components/SkillsMastery';
import { Footer } from './components/Footer';
import { Preloader } from './components/Preloader';
import { ScrollToTop } from './components/ScrollToTop';
import { CustomCursor } from './components/CustomCursor';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <ThemeProvider>
      <CustomCursor />
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Preloader key="loader" finishLoading={() => setIsLoading(false)} />
        ) : (
          <div key="main" className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
            <Navbar />
            <main>
              <Hero />
              <BentoSummary />
              <Experience />
              <Projects />
              <SkillsMastery />
            </main>
            <Footer />
            <ScrollToTop />
          </div>
        )}
      </AnimatePresence>
    </ThemeProvider>
  );
}

