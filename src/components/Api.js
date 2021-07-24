import {useState, useEffect} from 'react';
import axios from 'axios';
function SearchImages(query){
    const[state,setState]=useState([])
    useEffect(()=>{
        axios.get('https://api.unsplash.com/search/photos?page=5&per_page=30&query='+query+'&client_id=tThGm6yzjiRJCKoZ1w2G7M5ZNxU9nVrhxLxI-0FMnJc')
        .then((data)=>{
            setState(data.data.results)
        })
    },[query])
    return state;
}
export { SearchImages}