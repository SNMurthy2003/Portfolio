import { useState, FormEvent } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Send,
  Loader2,
  Check,
} from 'lucide-react';
import { ContactFormData, ContactInfo } from '../types';

const contactInfo: ContactInfo[] = [
  {
    icon: 'mail',
    label: 'Email',
    value: 'chebolu.snmurthy@gmail.com',
  },
  {
    icon: 'phone',
    label: 'Phone',
    value: '+91 9502036385',
  },
  {
    icon: 'map-pin',
    label: 'Location',
    value: 'Hyderabad, India',
  },
];

const socialLinks = [
  { icon: Linkedin, href: 'https://www.linkedin.com/in/chebolu-snmurthy-ab3514249/', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/SNMurthy2003', label: 'GitHub' },
];

const getContactIcon = (iconName: string) => {
  switch (iconName) {
    case 'mail':
      return <Mail size={22} />;
    case 'phone':
      return <Phone size={22} />;
    case 'map-pin':
      return <MapPin size={22} />;
    default:
      return <Mail size={22} />;
  }
};

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError(null);
  };

  const validateForm = (): boolean => {
    if (!formData.name || formData.name.trim().length < 2) {
      setError('Please enter a valid name');
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      return false;
    }
    if (!formData.subject || formData.subject.trim().length < 3) {
      setError('Please enter a subject');
      return false;
    }
    if (!formData.message || formData.message.trim().length < 10) {
      setError('Please enter a message (at least 10 characters)');
      return false;
    }
    return true;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setStatus('sending');

    // Simulate API call
    setTimeout(() => {
      setStatus('sent');
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => {
        setStatus('idle');
      }, 3000);
    }, 1500);
  };

  return (
    <section className="section animate-fade-in">
      <div className="section-header">
        <h2 className="section-title">
          Get In <span className="highlight">Touch</span>
        </h2>
        <p className="section-subtitle">Let's discuss your next project</p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>
            I'm currently open to new opportunities and collaborations. Whether you
            have a project in mind or just want to connect, feel free to reach out.
          </p>

          <div className="contact-details">
            {contactInfo.map((info) => (
              <div key={info.label} className="contact-item">
                <div className="contact-icon">{getContactIcon(info.icon)}</div>
                <div className="contact-text">
                  <span className="contact-label">{info.label}</span>
                  <span className="contact-value">{info.value}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="social-links">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="social-link"
                aria-label={label}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div className="contact-form-wrapper">
          <form className="contact-form" onSubmit={handleSubmit}>
            {error && <div className="form-error">{error}</div>}

            <div className="form-group">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder=" "
                required
              />
              <label htmlFor="name">Your Name</label>
            </div>

            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder=" "
                required
              />
              <label htmlFor="email">Your Email</label>
            </div>

            <div className="form-group">
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder=" "
                required
              />
              <label htmlFor="subject">Subject</label>
            </div>

            <div className="form-group">
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder=" "
                required
              />
              <label htmlFor="message">Your Message</label>
            </div>

            <button
              type="submit"
              className={`btn btn-primary btn-submit ${status === 'sent' ? 'btn-success' : ''}`}
              disabled={status !== 'idle'}
            >
              <span>
                {status === 'idle' && 'Send Message'}
                {status === 'sending' && 'Sending...'}
                {status === 'sent' && 'Message Sent!'}
              </span>
              {status === 'idle' && <Send size={18} />}
              {status === 'sending' && <Loader2 size={18} className="animate-spin" />}
              {status === 'sent' && <Check size={18} />}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
