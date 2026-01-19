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
        } else if (title.toLowerCase().includes('industrial engineering')) {
            imgSrc = "https://images.unsplash.com/photo-1581094794329-c8112a4e5190?auto=format&fit=crop&q=80&w=2070";
            altText = "Industrial system and technical blueprints";
        } else if (title.toLowerCase().includes('learning to code')) {
            imgSrc = codeImg;
            altText = "Code on a screen";
        } else if (title.toLowerCase().includes('over-design')) {
            imgSrc = overDesignImg;
            altText = "Wireframe and Laptop view";
        } else if (title.toLowerCase().includes('how i use ai')) {
            imgSrc = "https://images.unsplash.com/photo-1675271591211-126ad94e495d?auto=format&fit=crop&q=80&w=2070";
            altText = "Abstract AI nodes and connections";
        } else {
            // Default first article
            imgSrc = firstImg;
            altText = "Article Illustration";
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

        if (title.toLowerCase().includes('industrial engineering')) {
            return (
                <div className="article-body">
                    <p>
                        Before I became deeply involved in design and product, my foundation was in
                        <strong> Industrial and Operations Engineering</strong>. That background fundamentally
                        shaped how I think — not just about interfaces, but about systems, people, workflows,
                        and outcomes.
                    </p>
                    <p>
                        I don’t look at products in isolation. I look at the entire system: how work flows
                        through people, tools, decisions, and constraints — and how to make that system
                        more efficient, effective, and sustainable. Today, AI amplifies that mindset.
                    </p>

                    <h2>Thinking in Systems, Not Screens</h2>
                    <p>
                        As an operations and industrial engineer, my responsibility was never limited to
                        “doing my part.” It was about understanding the end-to-end process: identifying
                        where work slows down, where effort is wasted, and where quality drops under pressure.
                    </p>
                    <p>
                        That same thinking carries directly into my design work. When I design a feature or
                        a dashboard, I’m not only asking if it's usable. I’m asking:
                    </p>
                    <ul>
                        <li>Does this reduce cognitive load?</li>
                        <li>Does this shorten decision time?</li>
                        <li>Does this eliminate unnecessary steps?</li>
                        <li>Does this help teams move faster without burning out?</li>
                    </ul>
                    <p>
                        AI helps me model and validate these questions faster than ever before.
                    </p>

                    <h2>The Phoenix Project & Workflow Analysis</h2>
                    <p>
                        My process is deeply influenced by <strong>"The Phoenix Project"</strong>.
                        In several companies, I worked as an operations engineer alongside design and
                        product teams. I also acted as a <strong>Scrum Master</strong>, where my focus
                        was improving how the entire team worked — not just what they delivered.
                    </p>
                    <p>
                        Using AI, I now replicate that process by analyzing workflow patterns, identifying
                        bottlenecks in task handoffs, and stress-testing delivery timelines before they break.
                        Instead of relying purely on intuition, AI allows me to quantify friction.
                    </p>

                    <h2>Balancing Utilization Without Burning People Out</h2>
                    <p>
                        One of the most valuable lessons from industrial engineering is this:
                        <strong>Maximum utilization does not equal maximum productivity.</strong>
                    </p>
                    <p>
                        With AI, I can model scenarios to ensure that no single team member becomes a
                        "Brent" (the single point of failure). I look at:
                    </p>
                    <ul>
                        <li>What happens if one designer or engineer is overloaded?</li>
                        <li>How work quality degrades when utilization exceeds sustainable limits.</li>
                        <li>Where redistributing tasks improves output without increasing hours.</li>
                    </ul>

                    <h2>Metrics I Care About (and Design For)</h2>
                    <p>
                        Because of my background, I naturally think in metrics. AI helps me surface and interpret them:
                    </p>
                    <ul>
                        <li><strong>Cycle Time:</strong> How long it takes to move from idea to delivery.</li>
                        <li><strong>Throughput:</strong> How much value a system produces over time.</li>
                        <li><strong>Work-in-Progress (WIP):</strong> How much unfinished work creates hidden delays.</li>
                        <li><strong>Utilization Rate:</strong> Identifying overworked vs underutilized team members.</li>
                        <li><strong>Rework Rate:</strong> How often unclear design causes wasted effort.</li>
                    </ul>

                    <h2>AI as a Decision-Support Tool</h2>
                    <p>
                        AI doesn’t make decisions for me — it helps me see the system more clearly. I use
                        it to simulate operational outcomes and compare trade-offs between speed, quality, and cost.
                        This is where my roles intersect:
                    </p>
                    <p>
                        <strong>Industrial Engineer</strong> → understands systems
                        &nbsp;|&nbsp;
                        <strong>Operations Engineer</strong> → optimizes workflows
                        &nbsp;|&nbsp;
                        <strong>Design Engineer</strong> → translates complexity into clarity.
                    </p>

                    <h2>Conclusion: Aesthetics Meet Efficiency</h2>
                    <p>
                        I don’t design for aesthetics alone. I design for <strong>flow, efficiency, resilience, and people</strong>.
                        Aligning user experience with business reality is my core strength.
                        AI simply allows me to do that work faster, deeper, and with fewer blind spots.
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

        if (title.toLowerCase().includes('how i use ai') || title.toLowerCase().includes('starting and growing')) {
            return (
                <div className="article-body">
                    <p>
                        Artificial Intelligence is no longer a novelty in my workflow. It has become a reliable,
                        mission-critical co-pilot—one that helps me move faster without compromising judgment,
                        clarity, or design quality. I don’t use AI to replace thinking; I use it to amplify it.
                    </p>
                    <p>
                        By integrating AI across research, design, systems thinking, and engineering,
                        I’ve been able to reduce friction, eliminate repetitive work, and focus more deeply
                        on decision-making, user empathy, and execution precision.
                    </p>

                    <h2>AI as a Research Partner, Not a Shortcut</h2>
                    <p>
                        User research is one of the most cognitively demanding parts of product design.
                        I use AI—primarily ChatGPT and Claude—to synthesize qualitative and quantitative
                        inputs: interview notes, product feedback, reviews, internal assumptions, and edge cases.
                    </p>
                    <p>
                        Instead of asking surface-level questions, I prompt AI to:
                    </p>
                    <ul>
                        <li>Identify recurring behavioral patterns</li>
                        <li>Surface hidden or underserved user needs</li>
                        <li>Stress-test assumptions</li>
                        <li>Generate alternative personas and edge scenarios</li>
                    </ul>
                    <p>
                        This allows me to approach Figma with clarity. Before a single pixel is placed,
                        I already understand who the user is, what they struggle with, and where the product
                        can fail if not designed carefully. AI becomes a thinking partner that challenges
                        my perspective rather than blindly agreeing with it.
                    </p>

                    <h2>Precision Prompting: Treating AI Like a Senior Teammate</h2>
                    <p>
                        There is a clear difference between casual prompting and professional prompting.
                        I never ask AI to “design a landing page.” I treat it the same way I would brief
                        a senior designer or engineer.
                    </p>
                    <p>
                        A typical prompt might sound like:
                    </p>
                    <blockquote>
                        “Act as a senior product designer with 10+ years of experience in SaaS. We are designing
                        a modern B2B landing page with a soft but confident visual tone. Use a 12px border radius
                        system, a neutral base palette, and #F26D40 as the primary accent. Typography should
                        prioritize readability and hierarchy. The layout must be responsive, conversion-focused,
                        and engineering-friendly.”
                    </blockquote>
                    <p>
                        By defining constraints, intent, and context, I get outputs that align with real-world
                        design systems—not generic UI concepts. This approach turns AI into a tactical tool
                        rather than a random generator.
                    </p>

                    <h2>Designing Better Flows Through Systems Thinking</h2>
                    <p>
                        One of the most underrated ways AI helps me is in flow validation. I use AI to map empty states,
                        loading and error states, permission and failure scenarios, and alternate paths users may take.
                    </p>
                    <p>
                        These are often the details that get missed during early design phases but cause real UX friction
                        in production. By having AI actively look for “what’s missing,” I can design more resilient,
                        production-ready experiences—especially important when working closely with engineers or building myself.
                    </p>

                    <h2>Tooling: How AI Fits Into My Design Stack</h2>
                    <p>
                        AI isn’t a single tool—it’s an ecosystem:
                    </p>
                    <ul>
                        <li><strong>ChatGPT & Claude</strong> – Research synthesis, flow analysis, system thinking, prompt iteration</li>
                        <li><strong>Figma Make</strong> – Rapid ideation, layout exploration, and component variations</li>
                        <li><strong>Antigravity & Claude</strong> – Translating design intent into clean, structured frontend logic</li>
                        <li><strong>Gemini</strong> – Illustration support, visual ideation, and image generation when custom assets are needed</li>
                        <li><strong>Cursor / VS Code Copilot</strong> – Bridging design and code efficiently, especially when prototyping or building real features</li>
                    </ul>

                    <h2>AI Amplifies Judgment — It Doesn’t Replace It</h2>
                    <p>
                        AI doesn’t make design decisions for me. It doesn’t understand users the way humans do.
                        What it does is remove friction—so I can think more clearly, test ideas faster,
                        and focus on what truly matters.
                    </p>
                    <p>
                        As a design engineer, my value lies in judgment, empathy, systems thinking, and technical awareness.
                        AI simply supports those strengths. The result is better work, delivered faster, with more
                        intention and fewer blind spots.
                    </p>
                </div>
            );
        }

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
