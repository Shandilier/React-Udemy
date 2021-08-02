import React,{useState, useEffect,useRef} from 'react';

const Dropdown = ({onSelected,options,selected}) => {
    // const [menu, setMenu] = useState([])
    const [open,setOpen] = useState(false)
    const ref = useRef()
    useEffect(() =>{
        // console.log("Hey");
        const onClickBody = (event) => {
            if(ref.current.contains(event.target))  
                return;
            setOpen(false);
        }
        document.body.addEventListener('click',onClickBody);
        // return (
        //     () =>
            document.body.removeEventListener('click',onClickBody)    
        // )
        
    },[]);
    const result = options.map((res) => {
        return (
            <div key = {res.value} className="item" onClick = {() => {onSelected(res);}}>
                    {res.label} 
            </div>
        );
        
    });
    // console.log(options.val)
    return (
        <div ref = {ref} className="ui form" style = {{marginTop : "20px"}}>
            
            
            <br></br><br></br>
            <div className ="field">
                <label className = "label">
                    Select any one:
                    <br></br><br></br>
                </label>
                <div onClick = {() => {setOpen(!open);}} className = {`ui selection dropdown ${open ? 'visible active' : ''}`} >
                    <i className="dropdown icon"></i>
                    <div className = "text">{selected.label}</div>
                    <div className = {`menu ${open ? 'visible transition': ''}`}>
                        {result}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dropdown;

// due to event bubbling, one onClick event in the child <div> goes to the parent <div> and invokes the onCLick event in the parent too.
