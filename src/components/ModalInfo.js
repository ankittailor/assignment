import React from "react";
import "./ModalInfo.css";
import CloseIcon from "@material-ui/icons/Close";
import { motion } from "framer-motion";

const ModalInfo = ({ countryName, countryDataUsage, setIsCountrySelected }) => {
  const closeModal = () => {
    setIsCountrySelected(false);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="backdrop"
    >
      <motion.div initial={{ y: "-100vh" }} animate={{ y: 0 }} className="info">
        <CloseIcon className="close-icon" onClick={closeModal} />
        <h3>Data Usage Information: </h3>
        <p>Country: {countryName}</p>
        <p>Data Usage: {countryDataUsage}</p>
      </motion.div>
    </motion.div>
  );
};

export default ModalInfo;
