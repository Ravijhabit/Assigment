import React from "react";
import css from './yearcard.module.css';

const yearToNumber={
    twenty:2020,
    twentyOne:2021,
    twentyTwo:2022,
};

const yearCard = ({year}) =>{
    return(
        <div className={css.container}>
            <h3>{yearToNumber[year]}</h3>
            <button className={css.reset}>Reset</button>
            <label>
                Choose the quarter:
                <select id="qSelect" name="qSelect">
                    <option defaultValue="qZero">select</option>
                    <option value="qOne">Jan-Apr</option>
                    <option value="qTwo">May-Aug</option>
                    <option value="qThree">Sep-Dec</option>
                </select>
            </label>
            <form className={css.takeInput}>
                <label>
                    Jan
                    <input type="number" val="0" ></input>
                </label>
                <label>
                    Feb
                    <input type="number" val="0"></input>
                </label>
                <label>
                    Mar
                    <input type="number" val="0"></input>
                </label>
                <label>
                    Apr
                    <input type="number" val="0"></input>
                </label>
            </form>
            <button className={css.calculate}>Calculate</button>
        </div>
    )
}
export default yearCard;