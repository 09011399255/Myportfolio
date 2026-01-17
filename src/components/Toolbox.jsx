import React from 'react';
import * as LucideScore from 'lucide-react';
import { tools } from '../data';
import './Toolbox.css';

// Import custom logo assets
import framerLogo from '../assets/logos_framer.svg';
import figmaLogo from '../assets/devicon_figma.svg';
import reactLogo from '../assets/react.svg';
import notionLogo from '../assets/logos_notion-icon.svg';
import javaLogo from '../assets/devicon_java.svg';
import chatgptLogo from '../assets/ChatGPT.svg';

const IconWrapper = ({ name, iconName }) => {
    // Check if we have a custom logo for this tool
    if (name === 'Framer') return <img src={framerLogo} alt="Framer" className="tool-icon-img" />;
    if (name === 'Figma') return <img src={figmaLogo} alt="Figma" className="tool-icon-img" />;
    if (name === 'React') return <img src={reactLogo} alt="React" className="tool-icon-img" />;
    if (name === 'Notion') return <img src={notionLogo} alt="Notion" className="tool-icon-img" />;
    if (name === 'Java') return <img src={javaLogo} alt="Java" className="tool-icon-img" />;
    if (name === 'ChatGPT') return <img src={chatgptLogo} alt="ChatGPT" className="tool-icon-img" />;

    const Icon = LucideScore[iconName] || LucideScore.Box;
    return <Icon size={24} />;
}

const Toolbox = () => {
    return (
        <div className="section" id="toolbox">
            <div className="section-header">
                <h2 className="section-title">
                    <span className="text-white">DESIGN & DEV</span>
                    <span className="text-muted-custom">TOOLBOX</span>
                </h2>
            </div>

            <div className="toolbox-grid">
                {tools.map((tool, index) => (
                    <div className="tool-card" key={index}>
                        <div className="tool-icon-wrapper">
                            <IconWrapper name={tool.name} iconName={tool.icon} />
                        </div>
                        <div className="tool-info">
                            <h4>{tool.name}</h4>
                            <p className="tool-sub">{tool.sub}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Toolbox;

