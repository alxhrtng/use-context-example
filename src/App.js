import React, {useState} from 'react';
import './App.css';
import SelectedFilter from './components/SelectedFilter';
import FilterContext from './components/FilterContext';

function App() {
  const [filter, setFilter] = useState('manufacturer');
  const value = {filter, setFilter};
  
  return (
    <div className="App">
      <FilterContext.Provider value={value}>
        <SelectedFilter />
      </FilterContext.Provider>
    </div>
  );
}

export default App;
