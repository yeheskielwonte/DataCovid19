import React,{Component,useEffect,useState} from "react";
import axios from "axios";
import CardGlobal from '../Components/CardGlobal';

const Global =()=>{
  const [data,setData] = useState([]);

  useEffect(() => {
      axios
      .get('https://covid19.mathdro.id/api')
      .then((response)=> setData(response.data))
  }, []);
console.log(data);
  if (!data.confirmed) {
    return <p>Loading..</p>
  }
  if(!data.recovered){
      return <p>Loading..</p>
  }
  if(!data.deaths){
      return <p>Loading..</p>
  }
return(
    <>
        <CardGlobal
        confirmed={data.confirmed.value}
        recovered={data.recovered.value}
        deaths={data.deaths.value}
        />
    </>
)
}

export default Global;