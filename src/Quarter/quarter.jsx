import React from "react";
import css from './quarter.module.css';

const MONTHS=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

const quater = ({qNumber})=>{
    return(
        <form className={css.takeInput}>
                <label >
                    {`${MONTHS[(qNumber-1)*4]}`}
                    <input type="number" val="0" ></input>
                </label>
                <label>
                    {`${MONTHS[(qNumber-1)*4+1]}`}
                    <input type="number" val="0"></input>
                </label>
                <label>
                    {`${MONTHS[(qNumber-1)*4+2]}`}
                    <input type="number" val="0"></input>
                </label>
                <label>
                    {`${MONTHS[(qNumber-1)*4+3]}`}
                    <input type="number" val="0"></input>
                </label>
            </form>
            
    );
}

export default quater;