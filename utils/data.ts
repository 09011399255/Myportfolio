import agrohiveImg from '../assets/images/Agrohive.png';
import sportaImg from '../assets/images/Sporta.png';
import fliqueImg from '../assets/images/Flique.png';
import solaraImg from '../assets/images/Solara.png';
import conovaImg from '../assets/images/Conova.png';
import bethanImg from '../assets/images/Bethan.png';
import markImg from '../assets/images/Mark.png';
import yusuffImg from '../assets/images/yusuff.png';
import honeydropImg from '../assets/images/Honeydrop.png';

export interface ProjectSection {
  title: string;
  description: string;
  image?: any;
  caption?: string;
  layout?: 'stacked' | 'side-by-side' | 'full-width';
}

export interface Metric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  name: string;
  desc: string;
  type: string;
  color: string;
  link?: string;
  internal?: boolean;
  longDesc?: string;
  duration?: string;
  role?: string;
  tools?: string[];
  responsibilities?: string[];
  github?: string;
  behance?: string;
  live?: string;
  images?: any[];
  // Narrative fields
  summary?: string;
  metrics?: Metric[];
  caseStudy?: ProjectSection[];
  impact?: string[];
  lessons?: string[];
  screens?: any[];
  personas?: {
    name: string;
    role: string;
    description: string;
    goals: string[];
    painPoints: string[];
    avatar?: any;
  }[];
}


export const projects: Project[] = [
  {
    id: 'honeydrop',
    name: 'Honey Drop',
    desc: 'Top-tier fashion & lifestyle brand.',
    type: 'E-commerce',
    color: '#FFB800',
    live: 'https://honey-drop.vercel.app/',
    images: [honeydropImg],
    summary: 'A premium e-commerce experience for the modern fashion enthusiast.',
    longDesc: 'Honey Drop is a high-end fashion and lifestyle brand. This project involved creating a seamless shopping experience for their new collection, focusing on visual elegance and user-centric design.',
    role: 'Lead Designer',
    tools: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    id: 'agrohive',
    name: 'Agrohive',
    desc: 'An Agricultural brand leveraging Technology',
    type: 'Framer Template',
    color: '#4CAF50',
    link: 'https://www.behance.net/gallery/222281357/Agrohive-(-An-Agro-tech-Industry)-Case-study',
    longDesc: 'Farmers across Nigeria face significant challenges in achieving sustainable and profitable farming. Access to modern farming tools remains a hurdle due to high costs and limited availability. Agrohive was built to bridge this gap by providing a trusted marketplace and a community platform for knowledge sharing.',
    duration: '3 Months',
    role: 'Lead Project Designer',
    tools: ['Figma', 'Framer', 'React', 'Tailwind CSS', 'Next.js', 'PostgreSQL'],
    responsibilities: [
      'Converted Sketch Designs into a functional web application.',
      'Connected the frontend to the necessary backend API endpoints.',
      'Optimized the platform for mobile and desktop performance.',
      'Implemented real-time data visualization for crop analytics.'
    ],
    behance: 'https://www.behance.net/gallery/222281357/Agrohive-(-An-Agro-tech-Industry)-Case-study',
    live: 'https://agrohive.com',
    images: [agrohiveImg, sportaImg, fliqueImg],
    summary: 'Bridging the gap between traditional farming and modern technology through a unified marketplace and community hub.',
    metrics: [
      { label: 'Struggle for Tools', value: '85%' },
      { label: 'Seek Marketplace', value: '60%' },
      { label: 'Want Networking', value: '40%' }
    ],
    caseStudy: [
      {
        caption: 'THE PROBLEM',
        title: 'Problem Statement',
        description: 'Farmers across Nigeria face significant hurdles in achieving sustainable farming. The high cost of equipment and limited availability of modern tools, such as UK-used and locally sourced machinery, leaves many farmers isolated and under-resourced. Additionally, the absence of a trusted marketplace prevents them from trading at fair rates.',
        image: agrohiveImg,
        layout: 'full-width'
      },
      {
        caption: 'THE CHALLENGE',
        title: 'Business Challenges',
        description: 'Key obstacles include limited tech adoption among traditional farmers, high equipment costs that remain unaffordable for many, and a fragmented marketplace that makes it difficult to connect reliable buyers with sellers.',
        image: sportaImg,
        layout: 'side-by-side'
      },
      {
        caption: 'STRATEGY',
        title: 'Objectives & Goals',
        description: 'Our primary goal was to enhance farmers access to technology. We aimed to provide a seamless platform where farmers can easily access modern agricultural tools—including UK-used, locally used, and brand-new equipment—at affordable prices, while also creating a space for learning and connection.',
        image: fliqueImg,
        layout: 'stacked'
      },
      {
        caption: 'METHODOLOGY',
        title: 'Our Process',
        description: 'We followed a structured design thinking approach: Discover (Research), Define (Strategy), Ideate (Conceptualization), and Design (Execution). This ensured that every feature addressed a real pain point for the Nigerian farming community.',
        image: solaraImg,
        layout: 'side-by-side'
      }
    ],
    impact: [
      'Successfully created a transparent pricing model for agricultural machinery.',
      'Built a community of over 500 active farmers sharing best practices.',
      'Reduced the complexity of sourcing UK-used equipment by 40%.'
    ],
    lessons: [
      'User trust is the most critical component in a peer-to-peer agricultural marketplace.',
      'Design must be optimized for basic smartphone users with limited data connectivity.',
      'Localization of content and terminology is key to high adoption rates in rural areas.'
    ],
    screens: [agrohiveImg, sportaImg, fliqueImg, solaraImg],
    personas: [
      {
        name: 'Abubakar Yusuf',
        role: 'Traditional Farmer',
        description: 'Abubakar has been farming for over 15 years, relying on traditional methods passed down from his family. He recently started exploring modern farming equipment but struggles with affordability and access to reliable tools.',
        goals: ['Find affordable, high-quality farm tools', 'Learn how to use modern agricultural technology'],
        painPoints: ['High cost of equipment', 'Lack of awareness regarding available tools', 'Difficulty in quality verification'],
        avatar: yusuffImg
      }
    ]
  },
  {
    id: 'conova',
    name: 'Conova',
    desc: 'A workspace booking and management application.',
    type: 'Mobile App',
    color: '#FFD700',
    link: '#',
    internal: true,
    longDesc: 'Conova is a workspace booking and management application designed for modern coworking spaces. It allows users to browse available desks, book meeting rooms, and manage their membership all in one place.',
    duration: '4 Months',
    role: 'UI/UX Designer',
    tools: ['Figma', 'React Native', 'Firebase', 'Redux'],
    responsibilities: [
      'Designed end-to-end user flows for room booking.',
      'Created a comprehensive design system for the mobile app.',
      'Conducted user testing with 20+ beta participants.'
    ],
    images: [conovaImg]
  },
  {
    id: 'flique',
    name: 'Flique',
    desc: 'A fast secure and intuitive crypto exchange App',
    type: 'Framer Template',
    color: '#2196F3',
    link: 'https://www.behance.net/gallery/232735471/Crypto-Blockchain-App-design(-Decentralised)',
    longDesc: 'Flique is a fast, secure, and intuitive crypto exchange application built to simplify the trading experience for beginners and pros alike.',
    duration: '2 Months',
    role: 'Lead Designer',
    tools: ['Figma', 'Webflow', 'Spline', 'GSAP'],
    responsibilities: [
      'Developed complex 3D interactions using Spline.',
      'Managed branding and visual identity for the product launch.',
      'Built a high-fidelity prototype for investor pitches.'
    ],
    images: [fliqueImg]
  },
  {
    id: 'solara',
    name: 'Solara',
    desc: 'A unified case management and marketplace platform for modern funeral homes.',
    type: 'SaaS Platform',
    color: '#38BDF8',
    link: 'https://www.getsolara.tech/',
    longDesc: 'Solara provides a unified case management and marketplace platform specifically tailored for modern funeral homes, streamlining administrative tasks and enhancing the experience for grieving families.',
    duration: '6 Months',
    role: 'Product Designer',
    tools: ['Figma', 'Next.js', 'TypeScript', 'Prisma'],
    responsibilities: [
      'Architected the marketplace bridging funeral providers and families.',
      'Implemented complex form systems for case management.',
      'Led the transition from a legacy software to a modern web app.'
    ],
    images: [solaraImg]
  },
  {
    id: 'sporta',
    name: 'Sporta AI',
    desc: 'A sport company leveraging Artificial Intelligence',
    type: 'Framer Template',
    color: '#FF5722',
    link: 'https://www.behance.net/gallery/220454041/Sporta-AI',
    longDesc: 'Sporta AI utilizes advanced machine learning to optimize athlete performance, providing personalized training plans and predictive injury analysis.',
    duration: '3 Months',
    role: 'Product Designer',
    tools: ['Figma', 'React', 'D3.js', 'Python'],
    responsibilities: [
      'Visualized complex athletic performance metrics using D3.js.',
      'Designed the AI-driven dashboard for coaches.',
      'Created a seamless onboarding flow for professional athletes.'
    ],
    images: [sportaImg]
  },
];

export const socials = {
  behance: 'https://www.behance.net/157c990authman',
  twitter: 'https://x.com/designeng?s=21',
  instagram: 'https://www.instagram.com/dhee_cr8tives?igsh=M2FlZnc5M2FwMm92&utm_source=qr',
  mail: 'suarauuthman@gmail.com',
}
export const experience = [
  { company: 'Usercando', role: 'Product Designer / Operations Analyst', period: 'Aug 2025 - Jan 2026', desc: 'Collaborated with the product team to build scalable web applications.' },
  { company: 'Inspire-Edge', role: 'UI/UX Designer', period: 'Jan 2025 - May 2025', desc: 'Designed user-centric interfaces for mobile and web apps.', link: 'https://www.inspirecraftglobal.com/' },
  { company: 'University of Ibadan (ITCC)', role: 'Lead Product Designer', period: 'Jan 2024 - Dec 2024', desc: 'Led the design team in building a digital portal to manage Industrial Training operations. Streamlined workflows for over 20,000 students and staff, transitioning manual processes into a scalable digital system.', link: 'https://itcc-ims-app.onrender.com/ims/' },
  { company: 'Speak AI', role: 'Design Engineer', period: 'Jan 2021 - May 2021', desc: 'Designed and built responsive web interfaces and digital products.', link: 'https://prompting-ai-gamma.vercel.app/' },
];

export const tools = [
  { name: 'Figma', sub: 'Design Tool', icon: 'PenTool' },
  { name: 'Framer', sub: 'Website Builder', icon: 'Layout' },
  { name: 'Java', sub: 'Backend/DSA', icon: 'Coffee' },
  { name: 'React', sub: 'Frontend Library', icon: 'Zap' },
  { name: 'Notion', sub: 'Productivity Tool', icon: 'FileText' },
  { name: 'ChatGPT', sub: 'AI Assistant', icon: 'Bot' },
];

export const articles = [
  {
    slug: 'ai-workflow',
    title: 'How I Use AI to Improve My Workflow as a Design Engineer',
    desc: 'A reflection on how AI has transformed my design process—from deeper user research and flow analysis to precision prompting as a design engineer.',
    date: 'Apr 8, 2025',
    readTime: '6min read'
  },
  {
    slug: 'design-systems',
    title: 'Creating Design Systems for Consistent User Experiences',
    desc: 'A practical guide to building scalable design systems that improve consistency, speed up collaboration, and support growing products.',
    date: 'Jan 15, 2026',
    readTime: '5min read'
  },
  {
    slug: 'ai-driven-world',
    title: 'Designing Products in an AI-Driven World',
    desc: 'A reflection on how automation, AI, and human behavior are reshaping the way we design digital products—and what it means for modern product teams.',
    date: 'Oct 30, 2025',
    readTime: '5min read'
  },
  {
    slug: 'industrial-engineering',
    title: 'How My Background in Industrial Engineering Helps Me Design Better — With AI',
    desc: 'How industrial engineering foundations—influenced by the principles of The Phoenix Project—shape a systems-first approach to design and productivity.',
    date: 'Feb 6, 2026',
    readTime: '6min read'
  },
  {
    slug: 'cost-of-overdesign',
    title: 'The Cost of Over-Design—for Users',
    desc: 'A reflection on how over-design increases cognitive load, slows users down, and quietly introduces friction into otherwise simple experiences.',
    date: 'Jan 12, 2026',
    readTime: '5min read'
  },
];