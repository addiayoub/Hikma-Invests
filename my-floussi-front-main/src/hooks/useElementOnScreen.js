import { useEffect, useRef, useState } from "react";

const useElementOnScreen = (options) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const callBackFn = (entries) => {
    const [entrie] = entries;
    setIsVisible(entrie.isIntersecting);
  };
  useEffect(() => {
    const observer = new IntersectionObserver(callBackFn, options);
    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [containerRef, options]);

  return [containerRef, isVisible];
};

export default useElementOnScreen;
