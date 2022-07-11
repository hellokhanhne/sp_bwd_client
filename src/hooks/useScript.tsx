import { useEffect } from 'react';

const useScript = (url: string) => {
  useEffect(() => {
    const script = window.document.createElement('script');

    script.src = url;
    script.async = true;

    document.body.appendChild(script);
    // console.log(script);
    return () => {
      // console.log('remove');
      document.body.removeChild(script);
    };
  }, []);
};

export default useScript;
