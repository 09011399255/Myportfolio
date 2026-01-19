import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
            console.log("Submitting form to FormSubmit...");
            const response = await fetch("https://formsubmit.co/ajax/suarauuthman@gmail.com", {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            const result = await response.json();
            console.log("Response from FormSubmit:", result);

            if (response.ok) {
                setStatus('SUCCESS');
                form.reset();
                confetti({
                    particleCount: 150,
                    spread: 70,
                    origin: { y: 0.6 },
                    colors: ['#ff7300', '#ffffff', '#25D366']
                });
            } else {
                console.error("FormSubmit Error Response:", result);
                setStatus('ERROR');
            }
        } catch (error) {
            console.error("Network or Fetch Error:", error);
            setStatus('ERROR');
        } finally {
            setLoading(false);
            setTimeout(() => setStatus(''), 8000);
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

            <div className="contact-info-section">
                <h3 className="contact-subtitle">Contact Information</h3>
                <div className="quick-contact-row">
                    <motion.a
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
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
                    </motion.a>
                    <motion.a
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 }}
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
                    </motion.a>
                </div>
            </div>

            <div className="contact-divider">
                <div className="divider-line"></div>
                <span className="divider-text">OR</span>
                <div className="divider-line"></div>
            </div>

            <div className="contact-form-container">
                <h3 className="contact-subtitle">Send a Message</h3>
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
                        <motion.form
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
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
                        </motion.form>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Contact;
