import { useState } from "react";
import Nav from "../components/home/Nav";
import Body from "../components/Recomended/Body";
import StocksDialog from "../components/Recomended/StocksDialog";

const Recomended = () => {
  const [open, setOpen] = useState(false);
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Nav />
      <Body setOpen={setOpen} />
      <StocksDialog open={open} onClose={onClose} setOpen={setOpen} />
    </>
  );
};

export default Recomended;
