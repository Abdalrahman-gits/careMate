import { useEffect, useRef } from "react";

function useClickOutside(closeFn) {
  const ref = useRef();

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) closeFn();
    }
    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, [closeFn]);

  return { ref };
}

export { useClickOutside };
