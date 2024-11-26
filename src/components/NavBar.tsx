import { motion, useAnimate } from "motion/react";
import CopyEmailButton from "./CopyEmailButton";

export default function NavBar() {
  const [scope, animate] = useAnimate();

  return (
    <div className="navBar">
      <div id="navHome">
        <p>
          <a
            href={
              import.meta.env.VITE_APP_HOME_URL ?? "https://josh.barrette.dev/"
            }
            onMouseEnter={() => {
              animate(scope.current, { opacity: 1 });
            }}
            onMouseLeave={() => {
              animate(scope.current, { opacity: 0 });
            }}
          >
            Barrette.dev
          </a>
        </p>
        <motion.p id="navBarIcon" initial={{ opacity: 0 }} ref={scope}>
          👨‍💻
        </motion.p>
      </div>

      <a href="https://www.linkedin.com/in/joshpbarrette/">LinkedIn</a>
      <a href="https://www.github.com/joshbarrette">GitHub</a>
      <CopyEmailButton />
    </div>
  );
}
