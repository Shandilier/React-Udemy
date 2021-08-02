import React,{useState} from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';
const options = [
    {
        label : 'afrikaans',
        value : 'af'
    },
    {
        label : 'Arabic',
        value : 'ar'
    },
    {
        label : 'Hindi',
        value : 'hi'
    }
]
const styleVal = {
    backgroundColor : "grey"
}
const Translate = () => {
    const [language,setLanguage] = useState(options[0]);
    const [text,setText] = useState('');
    return (
        <div className = "ui form">
            <br></br>
            <h4>Continue :</h4>
            <input style = {styleVal} type="text" placeholder = "Enter the text" style = {{marginTop : "20px"}} onChange = {(e) => setText(e.target.value)}></input>
            <Dropdown options= {options} selected = {language} onSelected = {setLanguage}></Dropdown>
            {/* <h3 className = "ui header">Output</h3> */}
            <Convert language = {language} text = {text}></Convert>
        </div>

    )
}
export default Translate;