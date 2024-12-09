import { cn } from "../../lib/utils";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export const TextHoverEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      aria-hidden="true"
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.5, delay: 0.25 }}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      className={cn(
        "text-4xl md:text-6xl font-bold text-center text-neutral-800 dark:text-neutral-200",
        className
      )}
    >
      <span className="sr-only">{words}</span>
      <span aria-hidden={true}>
        {words.split(" ").map((word, idx) => (
          <span key={word + idx} className="inline-block">
            {word.split("").map((char, index) => (
              <span
                key={char + index}
                className="inline-block hover:text-blue-500 dark:hover:text-blue-400 transition-colors cursor-default"
              >
                {char}
              </span>
            ))}
            <span className="inline-block">&nbsp;</span>
          </span>
        ))}
      </span>
    </motion.div>
  );
};