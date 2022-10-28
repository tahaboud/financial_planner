import { useState } from "react";
import Body from "../components/home/Body";
import Nav from "../components/home/Nav";
import PlanDialog from "../components/home/PlanDialog";

const Home = () => {
  const [dataMap, setDataMap] = useState({});
  const [open, setOpen] = useState(false);
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Nav />
      <Body setOpen={setOpen} setDataMap={setDataMap} />
      <PlanDialog
        open={open}
        onClose={onClose}
        setOpen={setOpen}
        dataMap={dataMap}
      />
    </>
  );
};

export default Home;
