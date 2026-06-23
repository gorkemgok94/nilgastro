import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If the url contains a hash (e.g. /#features) try to scroll to that element
    if (hash) {
      const id = hash.replace('#', '');
      const scrollToHash = () => {
        const el = document.getElementById(id);
        if (!el) {
          window.requestAnimationFrame(scrollToHash);
          return;
        }

        const headerOffset = document.querySelector('header')?.offsetHeight || 0;
        const y = el.getBoundingClientRect().top + window.pageYOffset - headerOffset - 12;
        window.scrollTo({ top: y, behavior: 'smooth' });
      };

      scrollToHash();
      return;
    }

    // Default: scroll to top on route change
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname, hash]);

  return null;
}

export default ScrollToTop;
