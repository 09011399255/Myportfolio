import { motion } from 'framer-motion';
import * as LucideScore from 'lucide-react';
import '../assets/styles/toolbox.css';
// Import custom logo assets
import framerLogo from '../assets/images/logos_framer.svg';
import figmaLogo from '../assets/images/devicon_figma.svg';
import reactLogo from '../assets/images/react.svg';
import notionLogo from '../assets/images/logos_notion-icon.svg';
import javaLogo from '../assets/images/devicon_java.svg';
import chatgptLogo from '../assets/images/ChatGPT.svg';
import { tools } from '@/utils/data';
import Image from 'next/image';

interface IconWrapperProps {
    name: string;
    iconName: string;
}

const IconWrapper = ({ name, iconName }: IconWrapperProps) => {
    // Check if we have a custom logo for this tool
    if (name === 'Framer') return <Image width={24} height={24} src={framerLogo} alt="Framer" className="tool-icon-img" />;
    if (name === 'Figma') return <Image width={24} height={24} src={figmaLogo} alt="Figma" className="tool-icon-img" />;
    if (name === 'React') return <Image width={24} height={24} src={reactLogo} alt="React" className="tool-icon-img" />;
    if (name === 'Notion') return <Image width={24} height={24} src={notionLogo} alt="Notion" className="tool-icon-img" />;
    if (name === 'Java') return <Image width={24} height={24} src={javaLogo} alt="Java" className="tool-icon-img" />;
    if (name === 'ChatGPT') return <Image width={24} height={24} src={chatgptLogo} alt="ChatGPT" className="tool-icon-img" />;

    //eslint-disable-next-line
    const Icon = (LucideScore as any)[iconName] || LucideScore.Box;
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
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        className="tool-card"
                        key={index}
                    >
                        <div className="tool-icon-wrapper">
                            <IconWrapper name={tool.name} iconName={tool.icon} />
                        </div>
                        <div className="tool-info">
                            <h4>{tool.name}</h4>
                            <p className="tool-sub">{tool.sub}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Toolbox;