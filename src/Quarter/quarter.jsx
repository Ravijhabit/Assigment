import React,{useState} from "react";
import css from './quarter.module.css';

const MONTHS=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const initialState={
    '1':0,
    '2':0,
    '3':0,
    '4':0
}

const quarter = ({qNumber, reset})=>{
    const [monthValue,setMonthValue] = useState(initialState);

    // if(reset){
    //     setMonthValue([0,0,0,0]);
    // }
    const changeHandler = (event)=>{
        const val=event.target.value;
        console.log(event);
        const idCatcher=parseInt(event.target.id);
        console.log(idCatcher);
        // monthValue[`${idCatcher}`]=event.target.value;
        setMonthValue(oldValue=> [...oldValue, {idCatcher:val} ]);
        // const newValueIndex=monthValue.idCatcher;
        // console.log(monthValue[`${idCatcher}`]);
        // const newValue=newValueIndex.target.value;
        // console.log(newValue);
        // setMonthValue(oldElements => [...oldElements, newValue]);
    
        console.log(event.target.id);
        event.preventDefault();
    } 

    return(
        <form className={css.takeInput}>
                <label >
                    {`${MONTHS[(qNumber-1)*4]}`}
                    <input type="number" value="0" id="1" onChange={changeHandler}></input>
                </label>
                <label>
                    {`${MONTHS[(qNumber-1)*4+1]}`}
                    <input type="number" value="0" id="2" onChange={changeHandler}></input>
                </label>
                <label>
                    {`${MONTHS[(qNumber-1)*4+2]}`}
                    <input type="number" value="0" id="3" onChange={changeHandler}></input>
                </label>
                <label>
                    {`${MONTHS[(qNumber-1)*4+3]}`}
                    <input type="number" value="0" id="4" onChange={changeHandler}></input>
                </label>
            </form>
            
    );
}

export default quarter;