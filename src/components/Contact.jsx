import React, { useState } from 'react';
import { MessageCircle, Mail, CheckCircle, Loader2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import './Contact.css';

const Contact = () => {
    const [status, setStatus] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const form = e.target;
        const formData = new FormData(form);

        try {
            const response = await fetch("https://formsubmit.co/ajax/suarauuthman@gmail.com", {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus('SUCCESS');
                form.reset();
                // Trigger confetti
                confetti({
                    particleCount: 150,
                    spread: 70,
                    origin: { y: 0.6 },
                    colors: ['#ff7300', '#ffffff', '#25D366']
                });
            } else {
                setStatus('ERROR');
            }
        } catch (error) {
            setStatus('ERROR');
        } finally {
            setLoading(false);
            // Reset status after a few seconds
            setTimeout(() => setStatus(''), 6000);
        }
    };

    return (
        <div className="section contact-section" id="contact">
            <div className="section-header">
                <h2 className="section-title">
                    <span className="text-white">LET'S WORK</span>
                    <span className="text-muted-custom">TOGETHER</span>
                </h2>
            </div>

            <div className="quick-contact-row">
                <a
                    href="https://wa.me/2349011399255"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="quick-contact-card whatsapp"
                >
                    <div className="quick-icon-wrapper">
                        <MessageCircle size={24} />
                    </div>
                    <div className="quick-info">
                        <span className="quick-label">WhatsApp</span>
                        <span className="quick-value">09011399255</span>
                    </div>
                </a>
                <a
                    href="mailto:suarauuthman@gmail.com"
                    className="quick-contact-card email"
                >
                    <div className="quick-icon-wrapper">
                        <Mail size={24} />
                    </div>
                    <div className="quick-info">
                        <span className="quick-label">Email</span>
                        <span className="quick-value">suarauuthman@gmail.com</span>
                    </div>
                </a>
            </div>

            <div className="contact-form-wrapper">
                {status === 'SUCCESS' ? (
                    <div className="success-message">
                        <div className="success-icon-bg">
                            <CheckCircle size={40} className="success-icon" />
                        </div>
                        <h3>Message Sent Successfully!</h3>
                        <p>Thank you for reaching out. I'll get back to you shortly.</p>
                        <button onClick={() => setStatus('')} className="reset-btn">Send Another Message</button>
                    </div>
                ) : (
                    <form
                        onSubmit={handleSubmit}
                        className="contact-form"
                    >
                        <input type="text" name="_honey" style={{ display: 'none' }} />
                        <input type="hidden" name="_captcha" value="false" />

                        <div className="form-row">
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" name="name" className="input-field" placeholder="Your Name" required />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" name="email" className="input-field" placeholder="Your Email" required />
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Message</label>
                            <textarea name="message" className="input-field" placeholder="How can I help you?" required></textarea>
                        </div>

                        <button type="submit" className="submit-btn" disabled={loading}>
                            {loading ? (
                                <>
                                    <Loader2 size={18} className="animate-spin" />
                                    Sending...
                                </>
                            ) : (
                                'Send Message'
                            )}
                        </button>

                        {status === 'ERROR' && (
                            <p className="error-text">Something went wrong. Please try again or use the buttons above.</p>
                        )}
                    </form>
                )}
            </div>
        </div>
    );
}

export default Contact;
