import MainPageView from "../views/MainPageView";
import model from "../models/MainPageModel";
import { useEffect, useState } from "react";

const MainPageControlller = () => {
  const [coins, setCoins] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    model.getCoins(page).then((data) => setCoins(coins.concat(data)));//concat birleştirme 15den sonra daha fazlaya basınca önceki verilerin üzerine 15 veri daha ekliyor
  }, [page]);

  return <MainPageView coins={coins} setPage={setPage} />;
};

export default MainPageControlller;
