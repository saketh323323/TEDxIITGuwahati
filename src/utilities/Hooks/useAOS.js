// useAOS.js
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const useAOS = () => {
  useEffect(() => {
    AOS.init();
    return () => {
      AOS.refresh(); // Cleanup AOS on component unmount
    };
  }, []);

  return AOS;
};

export default useAOS;
