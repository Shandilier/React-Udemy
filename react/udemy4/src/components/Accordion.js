import React,{useState} from 'react';

const Accordion = (props) => {
    let active = '';
    
    const [activeIndex,setActiveIndex] = useState(null)  // declaring hooks
    
    const onTitleClick = (index) => {
        setActiveIndex(index);
    };

    const renderedItems = props.itemVal.map( (item,index) => {
        
        if(index===activeIndex)
        {
            active = 'active';
            console.log(activeIndex,index)
        }
        else    
            active = '';
        return (
            <React.Fragment key = {item.title}>
                <div className = {`title ${active}`}
                // bracket functions are used so that all the list values are not rendered the moment we refresh the page.
                onClick = {() => onTitleClick(index)}>          
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className = {`content ${active}`}>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        );
    });
    return (
        <div className = "ui styled accordion">
            {renderedItems}
            <h1>{activeIndex}</h1>
        </div>
    );
};

export default Accordion;