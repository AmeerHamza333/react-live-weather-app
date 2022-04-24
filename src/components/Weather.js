import React, {useEffect, useState} from 'react'

export default function Weather() {
const [vall, setVall] = useState('');
const [data, setData] = useState(null);
const [vind, setVind] = useState("");
const [weathers, setWeather] = useState("");


const apiData = async ()=>{
const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${vall}&units=metric&appid=91b18e721b94b91c96a42341cfce233b`);
const result = await res.json();
setData(result.main);
setVind(result.wind);
setWeather(result.weather);
}


const valChange = (e)=>{
setVall(e.target.value);
}


useEffect(() => {
  return () => {
    apiData();
  }
}, [vall] )


  return (
    <div className='container main1' >
        <div className='container main2'>

<div style={{height: "70vh", width: "70vw",display: "flex",alignItems: "center", flexDirection: "column"}}>

<div className='my-4'>
<input type="email" onChange={valChange} value = {vall} placeholder='Search' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
</div>

{ !data ? (<h2> Data Not Found </h2>) : (
    <>
<div className='my-2'>
<h1 className='headings'> {vall} </h1>
</div>

<div className='my-2'>
   <h2 className='heading'> {data.temp}°Cel </h2>
</div>

<div>
<p className='headin'> Min: {data.temp_min}°Cel | Max: {data.temp_max}°Cel </p>
 </div>


<div className='bottomdiv'>

<div className='inner'>
<i className="fa-solid fa-wind my-3"></i>
<p className='headingo'> {vind.speed}°Cel </p>
</div>

<div className='inner'>
<i className="fa-solid fa-bolt my-3"></i>
<p className='headingo'> {weathers[0].description} </p>
</div>

<div className='inner'>
<i className="fa-solid fa-droplet my-3"></i>
<p className='headingo'> {data.humidity}°C </p>
</div>

<div className='inner'>
<i className="fa-solid fa-water my-3"></i>
<p className='headingo'> {data.sea_level}°C </p>
</div>

</div>

</>
)}

</div>

        </div>
        </div>
  )
}
