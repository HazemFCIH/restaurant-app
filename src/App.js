

import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { CreateContainer, Header, MainContainer } from "./Components";
import { useSelector , useDispatch} from "react-redux";
import { getAllFoodItems } from "./Utils/firebaseFunctions";
import { setFoodItemsAction } from "./Redux/Actions/UserActions";

const App = () => {
  const {foodItems} = useSelector(state => state);
  const dispatch = useDispatch();

  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch(setFoodItemsAction(data));
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AnimatePresence exitBeforeEnter>
      <div className="w-screen h-auto flex flex-col bg-primary">
        <Header />

        <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
          <Routes>
            <Route path="/*" element={<MainContainer />} />
            <Route path="/createItem" element={<CreateContainer />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
};

export default App;


// "homepage": "https://amr-naser.github.io/food-delivery-app",
//"predeploy":"npm run build",
//"deploy":"gh-pages -d build",