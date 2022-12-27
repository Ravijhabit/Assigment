import React,{useState} from "react";
import Quarter from "../Quarter/quarter";
import css from './yearcard.module.css';

const yearToNumber={
    twenty:2020,
    twentyOne:2021,
    twentyTwo:2022,
};

const yearCard = ({year}) =>{
    const [quarterSelect,setQuarterSelect]=useState("0qaurter");
    const [reset,setReset]=useState(false);
    const changeHandler = (event)=>{
        setQuarterSelect(event.target.value);
    }

    return(
        <div className={css.container}>
            <h3>{yearToNumber[year]}</h3>
            <button className={css.reset} onClick={()=>setReset(true)}>Reset</button>
            <label>
                Choose the quarter:
                <select id="qSelect" name="qSelect" onChange={changeHandler}>
                    <option defaultValue="0qaurter">select</option>
                    <option value="1stquarter">Jan-Apr</option>
                    <option value="2ndquarter">May-Aug</option>
                    <option value="3rdquarter">Sep-Dec</option>
                </select>
            </label>
            { quarterSelect==="0qaurter" ? null: <Quarter qNumber={parseInt(quarterSelect)} reset={setReset}/> }
            <button className={css.calculate}>Calculate</button>
        </div>
    )
}
export default yearCard;