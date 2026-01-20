import { Home, Folder, Briefcase, Settings, Edit, Compass, BookOpen, Send } from 'lucide-react';
import './Header.css';

const Header = ({ activeSection, setActiveSection }) => {
    const navItems = [
        { id: 'home', icon: Home },
        { id: 'projects', icon: Folder },
        { id: 'experience', icon: Briefcase },
        { id: 'articles', icon: BookOpen },
        { id: 'beyond', icon: Compass },
        { id: 'contact', icon: Send },
    ];

    return (
        <nav className="header-nav">

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                omo ope jeun lo is a line by asake

                <span>hello my baby sho wa</span>
            </div>
            <div className="nav-pill">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    return (
                        <button
                            key={item.id}
                            onClick={() => setActiveSection(item.id)}
                            className={`nav-item-btn ${activeSection === item.id ? 'active' : ''}`}
                        >
                            <Icon size={20} />
                        </button>
                    );
                })}
            </div>
        </nav>
    );
};

export default Header;
