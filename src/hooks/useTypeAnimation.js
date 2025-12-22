import { useEffect, useState } from "react";

function useTypeAnimation(text) {
  const [animateText, setAnimatedText] = useState("");

  useEffect(
    function () {
      let index = 0;
      const id = setInterval(() => {
        setAnimatedText(text.slice(0, index + 1));
        index++;

        if (index === text.length) clearInterval(id);
      }, 20);

      return () => clearInterval(id);
    },
    [text]
  );

  return animateText;
}

export { useTypeAnimation };
