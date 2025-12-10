import React from 'react';

function Contact() {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Kontaktieren Sie uns</h1>
        <p style={styles.subtitle}>Wir freuen uns auf Ihren Besuch.</p>
      </div>

      <div style={styles.contentWrapper}>
        {/* Contact Info Section - Now Centered */}
        <div style={styles.infoSection}>
          <h2 style={styles.sectionTitle}>Informationen</h2>

          <div style={styles.gridContainer}>
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
          </div>

          {/* Social Media */}
          <div style={styles.socials}>
            <p style={styles.infoLabel}>Folgen Sie uns</p>
            <div style={styles.socialIcons}>
              <button style={styles.socialBtn}>Instagram</button>
              <button style={styles.socialBtn}>Facebook</button>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div style={styles.mapSection}>
        <iframe
          title="Google Maps Location"
          width="100%"
          height="450"
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
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '15px', minWidth: '24px' }}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);
const IconMail = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '15px', minWidth: '24px' }}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);
const IconMap = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '15px', minWidth: '24px' }}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);
const IconClock = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '15px', minWidth: '24px' }}>
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

// --- CSS Styles Object ---
const styles = {
  container: {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '40px 20px',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px',
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
    justifyContent: 'center', // Centered content since form is gone
    marginBottom: '50px',
  },
  infoSection: {
    width: '100%',
    maxWidth: '800px', // Restrict width for better readability
    backgroundColor: '#f8f9fa',
    padding: '40px',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
  },
  sectionTitle: {
    fontSize: '1.5rem',
    marginBottom: '30px',
    borderBottom: '2px solid #2563eb',
    paddingBottom: '10px',
    display: 'inline-block',
  },
  // Added a grid for the info items so they layout nicely across the width
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '30px',
  },
  infoItem: {
    display: 'flex',
    alignItems: 'flex-start',
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
    marginTop: '40px',
    paddingTop: '20px',
    borderTop: '1px solid #e5e7eb',
  },
  socialIcons: {
    display: 'flex',
    gap: '15px',
  },
  socialBtn: {
    padding: '10px 20px',
    backgroundColor: '#e0e7ff',
    color: '#2563eb',
    border: 'none',
    borderRadius: '30px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '0.9rem',
    transition: 'background-color 0.2s',
  },
  mapSection: {
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
  },
  mapFrame: {
    display: 'block',
  }
};

export default Contact;