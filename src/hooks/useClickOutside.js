import { useEffect, useRef } from "react";

// Default to work in capture phase
function useClickOutside(closeFn, onCapturing = true) {
  const ref = useRef();

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) closeFn();
    }
    document.addEventListener("click", handleClick, onCapturing);

    return () =>
      document.removeEventListener("click", handleClick, onCapturing);
  }, [closeFn, onCapturing]);

  return { ref };
}

export { useClickOutside };
