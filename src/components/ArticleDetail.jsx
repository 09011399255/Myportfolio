import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import './ArticleDetail.css';
import designSystemImg from '../assets/image.png';
import codeImg from '../assets/Code.png';
import firstImg from '../assets/First.png';
import overDesignImg from '../assets/overdesign.png';

const ArticleDetail = ({ article, onBack }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [article]);

    if (!article) return null;

    const title = article.title || '';

    const renderHeaderImage = () => {
        let imgSrc = "";
        let altText = "Article Illustration";

        if (title.toLowerCase().includes('design system')) {
            imgSrc = designSystemImg;
            altText = "Design System Components";
        } else if (title.toLowerCase().includes('ai-driven')) {
            imgSrc = "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2070";
            altText = "AI and Human hands interacting";
        } else if (title.toLowerCase().includes('learning to code')) {
            imgSrc = codeImg;
            altText = "Code on a screen";
        } else if (title.toLowerCase().includes('over-design')) {
            imgSrc = overDesignImg;
            altText = "Wireframe and Laptop view";
        } else {
            // Default first article
            imgSrc = firstImg;
            altText = "Career in Web Design";
        }

        return (
            <div className="article-hero-img-wrapper" style={{ background: '#111' }}>
                <img
                    src={imgSrc}
                    alt={altText}
                    className="article-hero-img"
                    onError={(e) => {
                        console.error("Image failed to load:", imgSrc);
                        e.target.style.display = 'none';
                    }}
                />
            </div>
        );
    };

    const renderContent = () => {
        if (title.toLowerCase().includes('design system')) {
            return (
                <div className="article-body">
                    <h2>What is a Design System?</h2>
                    <p>
                        Whether you're building a startup product, scaling an enterprise platform, or
                        collaborating across multiple teams, a design system plays a critical role in
                        creating consistent, high-quality user experiences. A design system is a
                        centralized collection of reusable components, styles, and guidelines that
                        help teams design and build products faster and more reliably.
                    </p>
                    <p>
                        Rather than redesigning buttons, inputs, and layouts from scratch every time,
                        a design system provides a shared language between designers and developers.
                        This ensures visual consistency, improves usability, and reduces design and
                        development debt as products grow.
                    </p>

                    <h2>Design systems vs. isolated UI components</h2>
                    <p>
                        Without a design system, products often rely on isolated UI decisions—different
                        button styles, inconsistent spacing, and varying interaction patterns across
                        screens. This leads to confusion for users and slows down teams as products scale.
                    </p>
                    <p>
                        A well-structured design system, on the other hand, defines how components
                        should look, behave, and be used. Every button, form field, modal, or card
                        follows the same rules. This consistency improves user trust and allows teams
                        to focus on solving real problems instead of debating design choices.
                    </p>

                    <h2>Why design systems matter for products</h2>
                    <p>
                        Design systems are not just about visuals—they are about efficiency and
                        collaboration. They help designers prototype faster, developers implement
                        features with confidence, and product teams maintain quality across platforms.
                    </p>
                    <p>
                        Because design systems are built to scale, they are especially valuable for
                        products that evolve over time. When updates are needed, teams can make changes
                        in one place and have them reflected across the entire product, saving time
                        and reducing errors.
                    </p>

                    <h2>Best practices for building a design system</h2>
                    <p>
                        An effective design system is clear, flexible, and easy to adopt. It should
                        start with strong foundations such as color, typography, spacing, and layout
                        rules. From there, reusable components should be created with accessibility
                        and responsiveness in mind.
                    </p>
                    <p>
                        Documentation is just as important as the components themselves. Clear usage
                        guidelines help teams understand when and how to use each element correctly.
                        The goal is not to restrict creativity, but to provide guardrails that
                        maintain consistency while allowing products to grow confidently.
                    </p>
                </div>
            );
        }

        if (title.toLowerCase().includes('ai-driven')) {
            return (
                <div className="article-body">
                    <h2>Article.</h2>
                    <p>
                        Over the past few years, artificial intelligence and automation have moved from being "future concepts" to everyday product features. From smart recommendations to automated workflows, machines now play an active role in how users interact with digital products. This shift raises an important question for product teams: how do we design experiences that balance logic, automation, and human expectation?
                    </p>
                    <p>
                        At designers and engineers, we often introduce automation to improve efficiency. Repetitive tasks are delegated to systems, freeing people to focus on more meaningful work. But automation doesn't remove responsibility—it changes it. Instead of designing every outcome, we design the rules, constraints, and signals that guide intelligent systems.
                    </p>

                    <h2>Automation is not intelligence.</h2>
                    <p>
                        One common misconception is that automated systems should behave like humans. When they don't, we're quick to label them as "broken" or "unreliable." In reality, these systems operate strictly on logic, data, and probabilities. When an automated decision feels wrong, it's often exposing a gap between human expectation and machine reasoning—not necessarily a technical failure.
                    </p>
                    <p>
                        Understanding this difference is critical. Products powered by AI should not aim to replace human judgment, but to support it. The real value lies in surfacing insights, patterns, and options that help people make better decisions, faster.
                    </p>
                    <p>
                        Yet, as humans, we assume that when facial recognition is on, the whole process is inherently flawed. But was it really?
                    </p>
                    <p>
                        According to Josh, that is the most fundamental thing to understand when it comes to machines. Not meeting our human expectations, doesn't automatically make the technology itself a failure. These things were, by definition, built on logic. Which begs the question: Can a robot's solution actually be wrong?
                    </p>
                    <p>
                        The point of introducing machine learning into our products was never to have them do all the work. Instead, algorithms and logic-based solutions should only provide humans with better insight so as to empower us to arrive at better solutions, faster.
                    </p>
                    <p>
                        This fundamental understanding of our users that really helps us make better products. This might be a simple example, but if a computer can figure out how to walk on its own, maybe it's time to start investigating why and how these solutions were formed.
                    </p>

                    <h2>Designing for systems that learn.</h2>
                    <p>
                        Unlike traditional interfaces, AI-powered products evolve over time. This introduces uncertainty into the design process. Instead of static screens, we design flexible systems—interfaces that adapt, explain outcomes, and recover gracefully when predictions miss the mark.
                    </p>
                    <p>
                        Designing for learning systems means prioritizing transparency and feedback. Users should understand why something happened, not just what happened. When products explain their behavior, trust grows—even when the outcome isn't perfect.
                    </p>

                    <h2>Are we designing for users or assumptions?</h2>
                    <p>
                        Users don't always articulate what they truly need. They often ask for more features, more options, and more control—yet research consistently shows that too many choices increase friction and reduce satisfaction.
                    </p>
                    <p>
                        This is where research and behavioral insights become essential. Good product design goes beyond listening to requests; it into proto behavior. By studying patterns at scale, teams can uncover the difference between what users say they want and what actually helps them succeed.
                    </p>
                    <p>
                        Technology moves faster than design trends. The challenge for modern product teams is to build systems that remain useful as tools, platforms, and expectations evolve. That requires looking at how design practices have already shifted—and recognizing that adaptability itself is now a core design principle.
                    </p>
                    <p>
                        Designing for the future doesn't mean predicting it perfectly. It means building products that can grow, learn, and adjust alongside the people who use them.
                    </p>
                </div>
            );
        }

        if (title.toLowerCase().includes('learning to code')) {
            return (
                <div className="article-body">
                    <p>
                        For a long time, learning to code as a designer felt intimidating. Syntax errors, unfamiliar tooling, and abstract concepts often created a steep barrier between design and development. Today, that barrier is shrinking—not because coding has become easier, but because AI has changed how we learn.
                    </p>
                    <p>
                        Tools like Cursor, GitHub Copilot, Claude, and other AI-powered assistants are redefining what it means to be a beginner. Instead of starting from a blank screen, designers can now learn by interacting, asking questions, and iterating in real time—directly inside their workflow.
                    </p>

                    <h2>From visual thinking to logical thinking</h2>
                    <p>
                        Designers already think in systems. We understand structure, hierarchy, constraints, and user flows. Coding is simply another way of expressing those same ideas—just with logic instead of visuals.
                    </p>
                    <p>
                        AI tools help bridge this gap. When a designer writes a rough idea of what they want to achieve, AI can translate intent into code. More importantly, it can explain why something works, allowing designers to gradually build mental models rather than memorizing syntax.
                    </p>
                    <p>
                        This turns coding into a collaborative process instead of a solitary struggle.
                    </p>

                    <h2>AI as a learning partner, not a shortcut</h2>
                    <p>
                        There’s a common fear that using AI to write code means “cheating” or skipping fundamentals. In practice, the opposite can be true—if used correctly.
                    </p>
                    <p>
                        AI excels at handling boilerplate, fixing small mistakes, and suggesting patterns. This frees designers to focus on understanding structure, flow, and behavior. When something breaks, AI can help explain the error, making learning more contextual and less frustrating.
                    </p>
                    <p>
                        The key is intention. AI should accelerate learning, not replace curiosity. Asking why something works matters more than simply accepting the output.
                    </p>

                    <h2>Closing the design–engineering gap</h2>
                    <p>
                        As designers learn to code, collaboration with engineers improves dramatically. Design decisions become more realistic, handoffs become clearer, and conversations shift from “Can this be built?” to “What’s the best way to build this?”
                    </p>
                    <p>
                        AI tools act as a bridge here as well—helping designers prototype real interactions, explore edge cases, and understand technical constraints earlier in the process.
                    </p>
                    <p>
                        This doesn’t turn designers into full-time engineers. It turns them into better product thinkers.
                    </p>

                    <h2>Learning forward, not perfectly</h2>
                    <p>
                        Learning to code with AI isn’t about mastering everything at once. It’s about momentum. Small wins compound. Understanding grows through doing, breaking things, fixing them, and asking better questions over time.
                    </p>
                    <p>
                        AI lowers the cost of experimentation. And when experimentation becomes cheap, learning accelerates.
                    </p>
                    <p>
                        For designers willing to embrace this shift, coding stops being a barrier—and becomes another creative tool.
                    </p>
                </div>
            );
        }

        if (title.toLowerCase().includes('over-design')) {
            return (
                <div className="article-body">
                    <p>
                        Design is often judged by how it looks, but users experience products through how they feel to use. When interfaces are over-designed—too many options, too much visual emphasis, too many interactions—the cost isn’t paid by the design team. It’s paid by the user.
                    </p>
                    <p>
                        Over-design rarely comes from bad intent. It usually comes from a desire to be thorough, expressive, or impressive. But users don’t arrive to admire design decisions. They arrive with a goal.
                    </p>

                    <h2>When design asks users to work harder</h2>
                    <p>
                        Every visual element asks something of the user: attention, interpretation, or action. When too many elements compete at once, users are forced to slow down and decide what matters. This increases cognitive load, even when the interface looks polished.
                    </p>
                    <p>
                        Animations, illustrations, and feature-rich layouts can be valuable—but only when they support the task at hand. When they don’t, they become obstacles disguised as enhancements.
                    </p>
                    <p>
                        For users, simplicity isn’t about minimalism. It’s about effort.
                    </p>

                    <h2>More choice doesn’t mean more control.</h2>
                    <p>
                        Designers often add options to give users flexibility. In practice, too many choices can do the opposite. Users hesitate, second-guess, or abandon tasks altogether.
                    </p>
                    <p>
                        What feels like empowerment from a design perspective can feel like pressure from a user’s perspective. Good design reduces the number of decisions users have to make, not increases them.
                    </p>
                    <p>
                        Restraint is a form of respect.
                    </p>

                    <h2>The hidden cost users never complain about.</h2>
                    <p>
                        Users rarely say, “This product is over-designed.” Instead, they describe it as confusing, overwhelming, or hard to use. Sometimes they say nothing at all—they just leave.
                    </p>
                    <p>
                        Over-design introduces small inefficiencies that compound over time: extra clicks, unnecessary confirmations, unclear hierarchy. Individually, these moments seem minor. Collectively, they define the experience.
                    </p>

                    <h2>Designing for clarity, not attention.</h2>
                    <p>
                        Designing for users means prioritizing clarity over expression. It means knowing when to remove instead of add. The most effective interfaces often feel obvious—not because they lack personality, but because nothing is fighting for attention.
                    </p>
                    <p>
                        When design fades into the background, users move forward without friction. That is not the absence of design—it’s the result of good judgment.
                    </p>

                    <h2>Good design is considerate design.</h2>
                    <p>
                        The true cost of over-design isn’t visual noise. It’s the time, energy, and patience users spend navigating decisions they never asked to make.
                    </p>
                    <p>
                        Design that respects users is calm, focused, and intentional. It doesn’t try to impress. It tries to help.
                    </p>
                </div>
            );
        }

        // Default: Web Design Career
        return (
            <div className="article-body">
                <p>
                    As the Internet continues to develop and grow exponentially, jobs related to
                    the industry do too, particularly those that relate to web design and development.
                    The prediction is that by 2023, the job outlook for these two fields will grow
                    by 8%—significantly faster than average. Whether you’re seeking salaried employment
                    or aiming to work in a freelance capacity, a career in web design can offer a variety
                    of employment arrangements, competitive salaries, and opportunities to utilize both
                    technical and creative skill sets.
                </p>

                <h2>What does a career in web design involve?</h2>
                <p>
                    A career in website design can involve the design, creation, and coding of a
                    range of website types. Other tasks will typically include liaising with clients
                    and discussing website specifications, incorporating feedback, working on graphic
                    design and image editing, and enabling multimedia features such as audio and video.
                    Requiring a range of creative and technical skills, web designers may be involved
                    in work across a range of industries, including software companies, IT consultancies,
                    web design companies, corporate organizations, and more.
                </p>
                <p>
                    In contrast with web developers, web designers tend to play a more creative role,
                    crafting the overall vision and design of a site, and determining how to best
                    incorporate the necessary functionality. However, there can be significant overlap
                    between the roles.
                </p>

                <h2>Full-stack, back-end, and front-end web development</h2>
                <p>
                    The U.S. Bureau of Labor Statistics (BLS) Occupational Outlook Handbook tends to group
                    web developers and digital designers into one category. However, they define them
                    separately, stating that web developers create and maintain websites and are
                    responsible for the technical aspects, including performance and capacity. Web or
                    digital designers, on the other hand, are responsible for the look and functionality
                    of websites and interfaces. They develop, create, and test the layout, functions,
                    and navigation for usability.
                </p>
                <p>
                    Web developers can focus on the back-end, front-end, or full-stack development, and
                    typically utilize a range of programming languages, libraries, and frameworks to do so.
                    Web designers may work more closely with front-end engineers to establish the
                    user-end functionality and appearance of a site.
                </p>

                <h2>Are web designers in demand?</h2>
                <p>
                    In our ever-increasingly digital environment, there is a constant need for websites—and
                    therefore for web designers and developers. With 1.74 billion websites in existence
                    as of January 2020, the demand for web developers is only expected to rise.
                    Web designers with significant coding experience are typically in higher demand
                    and can usually expect a higher salary. Like all jobs, there are likely to be a
                    range of opportunities, some of which are better paid than others.
                </p>
            </div>
        );
    };

    return (
        <div className="article-detail-container">
            <button className="back-btn" onClick={onBack}>
                <ArrowLeft size={20} />
                <span>Back to Articles</span>
            </button>
            {renderHeaderImage()}
            <div className="article-meta-row">
                <span className="article-date">{article.date}</span>
                <span className="article-readtime">{article.readTime}</span>
            </div>
            <h1 className="article-main-title">{article.title}</h1>
            {renderContent()}
        </div>
    );
};

export default ArticleDetail;
