import React from "react";
import Prototype from "prop-types";

export const SecondsCounter = (props)  =>  {
    return (
        <>
            <div className="bg-black row py-5 d-flex justify-content-center">
                <div className="card text-white bg-dark mb-3 mx-2 text-center" style={{width: "15rem", height: "15rem"}}>
                    <h1 className="card-title my-auto" style={{fontSize: "8rem"}}><i className="fa-regular fa-clock"></i></h1>
                </div>
                <Numbers second={parseInt(props.timer /100000 % 10)}/>
                <Numbers second={parseInt(props.timer /10000 % 10)}/>
                <Numbers second={parseInt(props.timer /1000 % 10)}/>
                <Numbers second={parseInt(props.timer /100 % 10)}/>
                <Numbers second={parseInt(props.timer /10 % 10)}/>
                <Numbers second={parseInt(props.timer % 10)}/>
            </div>
        </>
    )
};

const Numbers = (props) => {
    return (
    <div className="card text-white bg-dark mb-3 mx-2 text-center" style={{width: "15rem", height: "15rem"}}>
        <h1 className="card-title my-auto" style={{fontSize: "8rem"}}>{props.second}</h1>
    </div>
    )
}

Numbers.protoTypes = {
        second: Prototype.number
}