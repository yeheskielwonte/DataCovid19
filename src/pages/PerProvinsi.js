import React, { useEffect, useState  } from 'react'
import axios from 'axios'

const Provinsi = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
        .get("https://indonesia-covid-19.mathdro.id/api/provinsi")
        .then((response) => {setData(response.data.data)});
    }, [])

return (
    <div>
    {
        data.map((items) => {
            return(
                <div>
                    <p>Provinsi : {items.provinsi}</p>,
                    <p>Positif : {items.kasusPosi}</p>,
                    <p>Sembuh : {items.kasusSemb}</p>,
                    <p>Meninggal : {items.kasusMeni}</p>
                </div>
        )
    })
}
</div>
    )
}

export default Provinsi;