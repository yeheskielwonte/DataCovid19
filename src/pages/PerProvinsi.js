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
                    <p>{items.provinsi}</p>
                    <p>{items.kasusPosi}</p>
                    <p>{items.kasusSemb}</p>
                    <p>{items.kasusMeni}</p>
                </div>
        )
    })
}
</div>
    )
}

export default Provinsi;