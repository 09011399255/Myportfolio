// 'use client';
// import { useState, useEffect } from 'react';
// import { AnimatePresence, motion } from 'framer-motion';
// import { projects as projectsData } from '@/utils/data';
// import ScrollReveal from '@/components/scrollReveal';
// import Hero from '@/components/hero';
// import Projects from '@/components/projects';
// import Experience from '@/components/experience';
// import Toolbox from '@/components/toolbox';
// import TechLens from '@/components/techLens';
// import BeyondPortfolio from '@/components/beyondPortfolio';
// import Contact from '@/components/contact';
// import InDev from '@/components/inDev';
// import Header from '@/components/header';
// import Footer from '@/components/footer';
// import { LatestArticlesResponse } from '@/types/articles';

// const HomePageClient = ({ recentBlogs }: {
//     recentBlogs: LatestArticlesResponse
// }) => {
//     const [activeSection, setActiveSection] = useState('home');
//     const [selectedProject, setSelectedProject] = useState(null);

//     // When section changes, scroll to top of the content area
//     useEffect(() => {
//         window.scrollTo({ top: 0, behavior: 'smooth' });
//     }, [activeSection, selectedProject]);

//     // Deep Linking / Routing Logic
//     useEffect(() => {
//         const handleLocationChange = () => {
//             const hash = window.location.hash.replace(/^#\/?/, '');

//             if (!hash || hash === '') {
//                 setActiveSection('home');
//                 setSelectedProject(null);
//             } else if (hash.startsWith('project/')) {
//                 const projectName = hash.replace('project/', '');
//                 const project = projectsData.find(
//                     (p) => p.name.toLowerCase().replace(/\s+/g, '-') === projectName
//                 );
//                 if (project) {
//                     setSelectedProject(project as any);
//                     setActiveSection('project-dev');
//                 } else {
//                     setActiveSection('home');
//                     window.location.hash = '';
//                 }
//             } else {
//                 setActiveSection(hash);
//             }
//         };

//         window.addEventListener('hashchange', handleLocationChange);
//         handleLocationChange(); // Handle initial load

//         return () => window.removeEventListener('hashchange', handleLocationChange);
//     }, []);

//     // Sync state back to hash
//     useEffect(() => {
//         let targetHash = '';
//         if (activeSection === 'home') {
//             targetHash = '';
//         } else if (activeSection === 'project-dev' && selectedProject) {
//             const projectName = selectedProject.name.toLowerCase().replace(/\s+/g, '-');
//             targetHash = `#/project/${projectName}`;
//         } else {
//             targetHash = `#/${activeSection}`;
//         }

//         if (window.location.hash !== targetHash && !(window.location.hash === '' && targetHash === '')) {
//             window.location.hash = targetHash;
//         }
//     }, [activeSection, selectedProject]);

//     const handleProjectClick = (project) => {
//         setSelectedProject(project);
//         setActiveSection('project-dev');
//     };

//     const renderContent = () => {
//         if (activeSection === 'home') {
//             return (
//                 <>
//                     <ScrollReveal><Hero contentOnly={true} /></ScrollReveal>
//                     <div id="projects">
//                         <ScrollReveal delay={0.1}><Projects onProjectClick={handleProjectClick} /></ScrollReveal>
//                     </div>
//                     <div id="experience">
//                         <ScrollReveal delay={0.1}><Experience /></ScrollReveal>
//                         <ScrollReveal delay={0.1}><Toolbox /></ScrollReveal>
//                     </div>
//                     <div id="articles">
//                         <ScrollReveal delay={0.1}><TechLens recentBlogs={recentBlogs} /></ScrollReveal>
//                     </div>
//                     <div id="beyond">
//                         <ScrollReveal delay={0.1}><BeyondPortfolio /></ScrollReveal>
//                     </div>
//                     <div id="contact">
//                         <ScrollReveal delay={0.1}><Contact /></ScrollReveal>
//                     </div>
//                 </>
//             );
//         }

//         return (
//             <AnimatePresence mode="wait">
//                 <motion.div
//                     key={activeSection}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -20 }}
//                     transition={{ duration: 0.4, ease: 'easeOut' }}
//                     className="content-v3"
//                 >
//                     {activeSection === 'projects' && <Projects onProjectClick={handleProjectClick} />}
//                     {activeSection === 'experience' && (
//                         <>
//                             <Experience />
//                             <Toolbox />
//                         </>
//                     )}
//                     {activeSection === 'articles' && <TechLens recentBlogs={recentBlogs} />}
//                     {activeSection === 'beyond' && <BeyondPortfolio />}
//                     {activeSection === 'contact' && <Contact />}

//                     {activeSection === 'project-dev' && (
//                         <InDev
//                             project={selectedProject}
//                             onBack={() => setActiveSection('home')}
//                         />
//                     )}

//                     {/* Always show Contact at the bottom of every specific section page */}
//                     {activeSection !== 'contact' && <Contact />}
//                 </motion.div>
//             </AnimatePresence>
//         );
//     };

//     return (
//         <div className="app-root">
//             <Header activeSection={activeSection} setActiveSection={setActiveSection} />

//             <div className="app-layout">
//                 <div className="container">
//                     <div className="main-layout-wrapper">
//                         <aside className={`sidebar-v3 ${activeSection !== 'home' ? 'sidebar-mobile-hidden' : ''}`}>
//                             <Hero sidebarOnly={true} />
//                         </aside>

//                         <main className="content-v3">
//                             {renderContent()}
//                         </main>
//                     </div>

//                     <Footer />
//                 </div>
//             </div>
//         </div>
//     );
// }


// export default HomePageClient



'use client';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { projects as projectsData } from '@/utils/data';
import ScrollReveal from '@/components/scrollReveal';
import Hero from '@/components/hero';
import Projects from '@/components/projects';
import Experience from '@/components/experience';
import Toolbox from '@/components/toolbox';
import TechLens from '@/components/techLens';
import BeyondPortfolio from '@/components/beyondPortfolio';
import Contact from '@/components/contact';
import InDev from '@/components/inDev';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { LatestArticlesResponse } from '@/types/articles';

// Define Project type based on your data structure
type Project = {
    name: string;
    desc: string;
    type: string;
    color: string;
    link: string;
    internal?: boolean;
};

const HomePageClient = ({ recentBlogs }: {
    recentBlogs: LatestArticlesResponse
}) => {
    const [activeSection, setActiveSection] = useState('home');
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    // When section changes, scroll to top of the content area
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [activeSection, selectedProject]);

    // Deep Linking / Routing Logic
    useEffect(() => {
        const handleLocationChange = () => {
            const hash = window.location.hash.replace(/^#\/?/, '');

            if (!hash || hash === '') {
                setActiveSection('home');
                setSelectedProject(null);
            } else if (hash.startsWith('project/')) {
                const projectName = hash.replace('project/', '');
                const project = projectsData.find(
                    (p) => p.name.toLowerCase().replace(/\s+/g, '-') === projectName
                );
                if (project) {
                    setSelectedProject(project);
                    setActiveSection('project-dev');
                } else {
                    setActiveSection('home');
                    window.location.hash = '';
                }
            } else {
                setActiveSection(hash);
            }
        };

        window.addEventListener('hashchange', handleLocationChange);
        handleLocationChange(); // Handle initial load

        return () => window.removeEventListener('hashchange', handleLocationChange);
    }, []);

    // Sync state back to hash
    useEffect(() => {
        let targetHash = '';
        if (activeSection === 'home') {
            targetHash = '';
        } else if (activeSection === 'project-dev' && selectedProject) {
            const projectName = selectedProject.name.toLowerCase().replace(/\s+/g, '-');
            targetHash = `#/project/${projectName}`;
        } else {
            targetHash = `#/${activeSection}`;
        }

        if (window.location.hash !== targetHash && !(window.location.hash === '' && targetHash === '')) {
            window.location.hash = targetHash;
        }
    }, [activeSection, selectedProject]);

    const handleProjectClick = (project: Project) => {
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
                    <ScrollReveal delay={0.1}><TechLens recentBlogs={recentBlogs} /></ScrollReveal>
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
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    className="content-v3"
                >
                    {activeSection === 'projects' && <Projects onProjectClick={handleProjectClick} />}
                    {activeSection === 'experience' && (
                        <>
                            <Experience />
                            <Toolbox />
                        </>
                    )}
                    {activeSection === 'articles' && <TechLens recentBlogs={recentBlogs} />}
                    {activeSection === 'beyond' && <BeyondPortfolio />}
                    {activeSection === 'contact' && <Contact />}

                    {activeSection === 'project-dev' && selectedProject && (
                        <InDev
                            project={selectedProject}
                            onBack={() => setActiveSection('home')}
                        />
                    )}

                    {/* Always show Contact at the bottom of every specific section page */}
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

                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default HomePageClient;