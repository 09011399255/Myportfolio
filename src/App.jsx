import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Toolbox from './components/Toolbox';
import TechLens from './components/TechLens';
import BeyondPortfolio from './components/BeyondPortfolio';
import Contact from './components/Contact';
import ArticleDetail from './components/ArticleDetail';
import InDev from './components/InDev';
import ScrollReveal from './components/ScrollReveal';
import { AnimatePresence, motion } from 'framer-motion';


function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  // When section changes, scroll to top of the content area
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeSection, selectedArticle]);

  const handleArticleClick = (article) => {
    setSelectedArticle(article);
    setActiveSection('article-detail');
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setActiveSection('project-dev');
  };

  const renderContent = () => {
    if (activeSection === 'home') {
      return (
        <>
          <ScrollReveal><Hero contentOnly={true} /></ScrollReveal>
          <ScrollReveal delay={0.1}><Projects onProjectClick={handleProjectClick} /></ScrollReveal>
          <ScrollReveal delay={0.1}><Experience /></ScrollReveal>
          <ScrollReveal delay={0.1}><Toolbox /></ScrollReveal>
          <ScrollReveal delay={0.1}><TechLens limit={3} onArticleClick={handleArticleClick} /></ScrollReveal>
          <ScrollReveal delay={0.1}><BeyondPortfolio /></ScrollReveal>
          <ScrollReveal delay={0.1}><Contact /></ScrollReveal>

        </>
      );
    }

    return (
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="content-v3"
        >
          {activeSection === 'projects' && <Projects onProjectClick={handleProjectClick} />}
          {activeSection === 'experience' && (
            <>
              <Experience />
              <Toolbox />
            </>
          )}
          {activeSection === 'articles' && <TechLens onArticleClick={handleArticleClick} />}
          {activeSection === 'beyond' && <BeyondPortfolio />}
          {activeSection === 'contact' && <Contact />}
          {activeSection === 'article-detail' && (
            <ArticleDetail
              article={selectedArticle}
              onBack={() => setActiveSection('articles')}
            />
          )}
          {activeSection === 'project-dev' && (
            <InDev
              project={selectedProject}
              onBack={() => setActiveSection('home')}
            />
          )}

          {/* Always show Contact at the bottom of every specific section page (except when already on contact page) */}
          {activeSection !== 'contact' && <Contact />}
        </motion.div>
      </AnimatePresence>
    );
  };

  return (
    <div className="app-root">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />

      <div className="app-layout">
        <div className="container">
          <div className="main-layout-wrapper">
            <aside className={`sidebar-v3 ${activeSection !== 'home' ? 'sidebar-mobile-hidden' : ''}`}>
              <Hero sidebarOnly={true} />
            </aside>

            <main className="content-v3">
              {renderContent()}
            </main>
          </div>

          <footer style={{ padding: '60px 0', textAlign: 'center', color: '#444', fontSize: '0.9rem', borderTop: '1px solid #222' }}>
            <p>© {new Date().getFullYear()} Suarau Uthman. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
