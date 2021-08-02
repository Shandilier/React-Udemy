import React from 'react';

const DisplayList = (props) => {

    const listVal = props.val.map((value) => {
        // if(props.val1)
        // {
            return (
                <div className = "item">
                    <div className="content">
                        <div className="header">{value.title}</div>
                        <span dangerouslySetInnerHTML={{__html: value.snippet}}></span>   
                    </div>
                    <div className = "right floated content">
                        <a className=" ui button" href= {`https://en.wikipedia.org?curid=${value.pageid}`} style={{marginRight:"10px"}}>Click Here</a>
                    </div>
                </div>
            )
        // }
        // else
        // {
        //     return (
        //         <div></div>
        //     )
        // }
    });
    console.log(props.val)
    return (
        <React.Fragment>
            {listVal}
        </React.Fragment>
    )
};
export default DisplayList;