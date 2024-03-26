import { useParams } from "react-router-dom"
import DetailView from "../views/DetailView"
import { useEffect, useState } from "react"
import DetailModel from "../models/DatailModel"

const DetailController = () => {
    const [coin, setCoin]=useState(null)
  
    //1)url'den id al
    const {id}=useParams()

    //2)coin detay verilerive fiyat geçmişini al
    useEffect(()=>{
        DetailModel.getCoin(id)
        .then((res)=> setCoin(res))
    },[]);

    const model = new DetailModel(coin)
    return ( <DetailView model={model}/>
    
  )
}

export default DetailController
