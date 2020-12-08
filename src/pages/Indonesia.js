import React,{Component,useEffect,useState} from "react";
import axios from "axios";
import CardIndo from '../Components/CardIndo';

const Indonesia =()=>{
  const [data,setData] = useState([]);

  useEffect(() => {
      axios
      .get('https://indonesia-covid-19.mathdro.id/api')
      .then((response)=> setData(response.data))
  }, []);
 
  if (!data.perawatan) {
    return <p>Loading..</p>
  }
  if(!data.sembuh){
      return <p>Loading..</p>
  }
  if(!data.meninggal){
      return <p>Loading..</p>
  }
return(
    <>
        <CardIndo
        confirmed={data.perawatan}
        recovered={data.sembuh}
        deaths={data.meninggal}
        />
    </>
)
}

export default Indonesia;