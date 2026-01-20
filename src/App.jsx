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
import { articles, projects as projectsData } from './data';


function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  // When section changes, scroll to top of the content area
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeSection, selectedArticle]);

  // Deep Linking / Routing Logic
  React.useEffect(() => {
    const handleLocationChange = () => {
      const hash = window.location.hash.replace('#/', '');

      if (!hash || hash === '') {
        setActiveSection('home');
        setSelectedArticle(null);
        setSelectedProject(null);
      } else if (hash.startsWith('article/')) {
        const slug = hash.replace('article/', '');
        const article = articles.find(a => a.slug === slug);
        if (article) {
          setSelectedArticle(article);
          setActiveSection('article-detail');
        } else {
          setActiveSection('home');
        }
      } else if (hash.startsWith('project/')) {
        const projectName = hash.replace('project/', '');
        const project = projectsData.find(p => p.name.toLowerCase().replace(/\s+/g, '-') === projectName);
        if (project) {
          setSelectedProject(project);
          setActiveSection('project-dev');
        } else {
          setActiveSection('home');
        }
      } else {
        setActiveSection(hash);
      }
    };

    window.addEventListener('popstate', handleLocationChange);
    handleLocationChange(); // Handle initial load

    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  // Update URL hash when state changes
  React.useEffect(() => {
    let hash = '';
    if (activeSection === 'home') {
      hash = '';
    } else if (activeSection === 'article-detail' && selectedArticle) {
      hash = `article/${selectedArticle.slug}`;
    } else if (activeSection === 'project-dev' && selectedProject) {
      const projectName = selectedProject.name.toLowerCase().replace(/\s+/g, '-');
      hash = `project/${projectName}`;
    } else {
      hash = activeSection;
    }

    const currentHash = window.location.hash.replace('#/', '');
    if (currentHash !== hash) {
      window.history.pushState(null, '', hash ? `#/` + hash : window.location.pathname + window.location.search);
    }
  }, [activeSection, selectedArticle, selectedProject]);

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
