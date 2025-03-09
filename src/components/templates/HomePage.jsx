import { useEffect, useState } from "react";
import TableCoins from "../modules/TableCoins";
import { getCoinList } from "../../services/CryptoApi";
import Pagination from "../modules/pagination";
import Search from "../modules/Search";
import Chart from "../modules/Chart";

function HomePage() {
    const [coins, setCoins] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [page, setPage] = useState(1);
    const [currency, setCurrency] = useState("usd");
    const [chart, setChart] = useState(null)

    const currencySymbol = (currency === "usd") ? "$" : (currency === "eur") ? "€" : "¥";

  useEffect(() => {
    setIsLoading(true)
    try {
      
    fetch(getCoinList(page, currency))
      .then((res) => res.json())
      .then((json) => setCoins(json));
      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
    
  }, [page, currency]);
  return <div>
    <Search currency={currency} setCurrency={setCurrency} />
    <TableCoins coins={coins} isLoading={isLoading} setChart={setChart} currencySymbol={currencySymbol}  />
    <Pagination page={page} setPage={setPage} />
    {!!chart && <Chart chart={chart} setChart={setChart} currencySymbol={currencySymbol} />}
    </div>;
}

export default HomePage;
