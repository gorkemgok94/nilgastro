import React, { useEffect, useState } from 'react';

const TopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className={`toTopWrapper ${
        visible ? 'toTopWrapper--visible' : ''
      }`}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
      }}
    >
      <span
        className="toTopLabel"
        onClick={scrollToTop}
        style={{
          cursor: 'pointer',
          userSelect: 'none',
          fontSize: '14px',
        }}
      >
        Nach oben
      </span>

      <button
        className="toTopBtn"
        onClick={scrollToTop}
        aria-label="Nach oben"
        title="Nach oben"
      >
        ↑
      </button>
    </div>
  );
};

export default TopButton;