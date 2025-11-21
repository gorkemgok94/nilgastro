import React, { useState } from 'react';

function Contact() {
  // State for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // State for submission status
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to a backend server
    console.log('Form submitted:', formData);
    
    // Show success message
    setIsSubmitted(true);
    
    // Reset form after a delay (optional)
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 5000);
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Kontaktieren Sie uns</h1>
        <p style={styles.subtitle}>Wir freuen uns darauf, von Ihnen zu hören.</p>
      </div>

      <div style={styles.contentWrapper}>
        {/* Left Column: Contact Info */}
        <div style={styles.infoSection}>
          <h2 style={styles.sectionTitle}>Informationen</h2>
          
          <div style={styles.infoItem}>
            <IconPhone />
            <div>
              <p style={styles.infoLabel}>Telefon</p>
              <p>Hakan Topalca: <a href="tel:015229470726" style={styles.link}>01522 9470726</a></p>
              <p>Görkem Gök: <a href="tel:01782578006" style={styles.link}>0178 2578006</a></p>
            </div>
          </div>

          <div style={styles.infoItem}>
            <IconMail />
            <div>
              <p style={styles.infoLabel}>Email</p>
              <a href="mailto:nilgastro@outlook.de" style={styles.link}>nilgastro@outlook.de</a>
            </div>
          </div>

          <div style={styles.infoItem}>
            <IconMap />
            <div>
              <p style={styles.infoLabel}>Adresse</p>
              <p>Benzstr. 5, 71149, Bondorf</p>
            </div>
          </div>

          <div style={styles.infoItem}>
            <IconClock />
            <div>
              <p style={styles.infoLabel}>Öffnungszeiten</p>
              <p>Mo - Fr: 07:00 - 14:00</p>
              <p>Samstag: 08:00 - 14:00</p>
            </div>
          </div>

          {/* Social Media Placeholders */}
          <div style={styles.socials}>
            <p style={styles.infoLabel}>Folgen Sie uns</p>
            <div style={styles.socialIcons}>
               <button style={styles.socialBtn}>Instagram</button>
               <button style={styles.socialBtn}>Facebook</button>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div style={styles.formSection}>
          <h2 style={styles.sectionTitle}>Nachricht senden</h2>
          
          {isSubmitted ? (
            <div style={styles.successMessage}>
              <div style={styles.checkIcon}>✓</div>
              <h3>Vielen Dank!</h3>
              <p>Ihre Nachricht wurde erfolgreich gesendet.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={styles.form}>
              <div style={styles.inputGroup}>
                <label htmlFor="name" style={styles.label}>Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={styles.input}
                  placeholder="Ihr Name"
                />
              </div>

              <div style={styles.inputGroup}>
                <label htmlFor="email" style={styles.label}>Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={styles.input}
                  placeholder="ihre.email@beispiel.de"
                />
              </div>

              <div style={styles.inputGroup}>
                <label htmlFor="message" style={styles.label}>Nachricht</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  style={{...styles.input, ...styles.textarea}}
                  placeholder="Wie können wir Ihnen helfen?"
                />
              </div>

              <button type="submit" style={styles.button}>Nachricht absenden</button>
            </form>
          )}
        </div>
      </div>

      {/* Map Section */}
      <div style={styles.mapSection}>
        <iframe 
          title="Google Maps Location"
          width="100%" 
          height="400" 
          frameBorder="0" 
          scrolling="no" 
          marginHeight="0" 
          marginWidth="0" 
          src="https://maps.google.com/maps?q=Benzstr.+5,+71149,+Bondorf&t=&z=15&ie=UTF8&iwloc=&output=embed"
          style={styles.mapFrame}
        ></iframe>
      </div>
    </div>
  );
}

// --- Simple SVG Icons Components ---
const IconPhone = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '15px'}}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);
const IconMail = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '15px'}}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);
const IconMap = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '15px'}}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);
const IconClock = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '15px'}}>
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

// --- CSS Styles Object ---
const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '40px 20px',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
  },
  header: {
    textAlign: 'center',
    marginBottom: '50px',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '10px',
    color: '#1a1a1a',
  },
  subtitle: {
    fontSize: '1.1rem',
    color: '#666',
  },
  contentWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '40px',
    marginBottom: '60px',
  },
  infoSection: {
    flex: '1 1 400px',
    backgroundColor: '#f8f9fa',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
  },
  formSection: {
    flex: '1 1 400px',
    backgroundColor: '#ffffff',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
    border: '1px solid #eee',
  },
  sectionTitle: {
    fontSize: '1.5rem',
    marginBottom: '25px',
    borderBottom: '2px solid #2563eb',
    paddingBottom: '10px',
    display: 'inline-block',
  },
  infoItem: {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '25px',
  },
  infoLabel: {
    fontWeight: 'bold',
    marginBottom: '5px',
    color: '#555',
  },
  link: {
    color: '#2563eb',
    textDecoration: 'none',
  },
  socials: {
    marginTop: '30px',
    borderTop: '1px solid #ddd',
    paddingTop: '20px',
  },
  socialIcons: {
    display: 'flex',
    gap: '10px',
  },
  socialBtn: {
    padding: '8px 16px',
    backgroundColor: '#e0e7ff',
    color: '#2563eb',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '8px',
    fontWeight: '500',
  },
  input: {
    padding: '12px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '1rem',
    transition: 'border-color 0.3s',
  },
  textarea: {
    minHeight: '120px',
    resize: 'vertical',
  },
  button: {
    padding: '14px',
    backgroundColor: '#2563eb',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  successMessage: {
    textAlign: 'center',
    padding: '40px 20px',
    color: '#059669',
  },
  checkIcon: {
    fontSize: '3rem',
    marginBottom: '15px',
  },
  mapSection: {
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  },
  mapFrame: {
    display: 'block',
  }
};

export default Contact;