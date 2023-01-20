import axios from 'axios';
import React, { useEffect, useState } from 'react';
import config from '../../Utils/Config';
import StockDetails from './components/stockDetails/StockDetails';
import StocksList from './components/stocksList/StocksList';
import "./StocksPage.css";

const StocksPage = () => {
    const [stocksList,setStocksList] = useState([])
    const [currentStock,setCurrentStock] = useState("")

    const getStocks = () => {
        const stocksListUrl = config.stock_list_url
        axios.get(stocksListUrl).then((response) => {
            setStocksList(response?.data?.Stocks)
        })
    }

    const getCurrentStockFromStockList = (stockName:string) => {
        console.log(stockName)
        setCurrentStock(stockName)

    }

    useEffect(() => {
        getStocks()
    },[])



    return (
        <div>
                <div>Stocks Page</div>
                <div className='stocks-page-container'>
                    <StocksList stockChangeHandler={getCurrentStockFromStockList} stocks={stocksList} />
                    <StockDetails stock={currentStock}/>
                </div>
        </div>

    )
}

export default StocksPage;