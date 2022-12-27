import React,{useState} from 'react';
import css from './App.module.css';
import YearCard from '../Yearcard/yearcard';

function App() {
  const [selectedYear,setSelectedYear]=useState([]);
  const [finalSelect,setFinalSelect]=useState([]);
  
  const formHandler = (event) => {
    setFinalSelect(()=>[...selectedYear]);
    event.preventDefault();
  }
        
  const yearModified = event =>{
    if(selectedYear.includes(event.target.id)){
      let toRemEl=event.target.id;
      selectedYear.splice(selectedYear.indexOf(toRemEl),1);
    }
    else{
      setSelectedYear( allYear => [...allYear, event.target.id]);
    }
  }

  return (
    <div className={css.app}>
      <div className={css.year}>
        <form onSubmit={formHandler}>
          <fieldset onChange={yearModified}>
            <legend>Select Year:</legend>
            <label>
              <input type="checkbox" id="twenty" name="year" val="2020"/>
              2020
            </label>
            <label>
              <input type="checkbox" id="twentyOne" name="year" val="2021"/>
              2021
            </label>
            <label>
              <input type="checkbox" id="twentyTwo" name="year" val="2022"/>
              2022
            </label>
            <input type="submit" value="submit"/>
          </fieldset>
        </form>
        <div className={css.yearCollection}>
          {finalSelect.map(ele=><YearCard key={ele} year={ele}/>)}
        </div>
      </div>
    </div>
  )
}

export default App
