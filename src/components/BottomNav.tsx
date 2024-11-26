import { useScroll, motion } from "motion/react";
import CopyEmailButton from "./CopyEmailButton";

export default function BottomNav() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div id="bottomScroll" style={{ scaleX: scrollYProgress }} />
      <div id="bottomNav">
        <div id="bottomNavContent">
          <p className="subSummary">Social</p>

          <a
            href="https://www.linkedin.com/in/joshpbarrette/"
            className="navItem"
          >
            LinkedIn
          </a>
          <a href="https://www.github.com/joshbarrette" className="navItem">
            GitHub
          </a>
          <CopyEmailButton />
        </div>
      </div>
    </>
  );
}
