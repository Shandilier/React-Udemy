import React,{useState,useEffect} from 'react';
import axios from 'axios';
import DisplayList from './DisplayList'
const Search = () => {
    const [term,setTerm] = useState('')
    const [result,setResult] = useState([])
    // console.log(result)
    useEffect(() => {
        // console.log("Rendered")  
        const response = async () => {
            
            const {data }= await axios.get("https://en.wikipedia.org/w/api.php",{
                params : {
                    action : 'query', list : 'search',origin : '*',format : 'json', srsearch : term
                },
            });
            setResult(data.query.search);
        };
        if(term && !result.length)
            response()
        else
        {
            const setTimer = setTimeout(() => {
                if(term)
                    response();
            },500);
            return () => {
                clearTimeout(setTimer);  // clears the timer which was set for the current character
            };
        }

    },[term]);
        
    return (
        <div>
            <div className = "ui form">
                <div className = "field">
                    <label>Enter the keyword to search: </label>
                    <input type="text" className = "input" value={term} onChange = {(event)=> setTerm(event.target.value)}></input>
                    <DisplayList val = {result} val1 = {term}></DisplayList>
                </div>
                {/* <h1>{term}</h1> */}
            </div>
            
        </div>

    )
}
export default Search;