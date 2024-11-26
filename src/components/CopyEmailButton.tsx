import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

export default function CopyEmailButton() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!showModal) return;

    const timer = setTimeout(() => {
      setShowModal(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [showModal]);

  return (
    <p
      onClick={() => {
        navigator.clipboard.writeText("josh.barrette@outlook.com");
        setShowModal(true);
      }}
      style={{ cursor: "pointer" }}
    >
      Email
      <CopyModal showModal={showModal} />
    </p>
  );
}

function CopyModal({ showModal }: { showModal: boolean }) {
  const variants = {
    hidden: { bottom: "-5rem" },
    visible: { bottom: "2rem" },
    exit: { bottom: "-5rem" },
  };

  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          id="copyModal"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={variants}
          transition={{ duration: 0.5, ease: "linear" }}
        >
          <p>Email Copied to Clipboard</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
