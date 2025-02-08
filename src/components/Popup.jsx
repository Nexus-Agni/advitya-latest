import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const Popup = ({ show, onClose }) => {
  const navigate = useNavigate();

  const handleViewMore = () => {
    navigate("/celebrity-night");
  };

  const handleCloseClick = (e) => {
    e.stopPropagation();
    onClose();
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed z-50 left-0 top-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60"
        >
          <div className="inter-var">
            <div
              className="bg-gray-50 relative dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] sm:w-[35rem] h-auto rounded-xl p-6 border-4 hover:border-purple-600 transition-all ease-in-out duration-300"
              onClick={handleViewMore}
            >
              <button onClick={handleCloseClick} className="absolute top-2 right-2 z-10">
                <X className="w-6 h-6 text-red-500" />
              </button>
              <div className="w-full mt-4">
                <img
                  src="https://cloud.appwrite.io/v1/storage/buckets/67a1d7b300237ca90544/files/67a5b7a0001971fd1f93/view?project=6756a8dc000c0d24754b&mode=admin"
                  height="1000"
                  width="1000"
                  className="h-full w-full object-cover rounded-xl"
                  alt="Celebrity Night"
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Popup;