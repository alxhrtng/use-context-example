import React, { useContext } from 'react'
import FilterContext from './FilterContext'

const SelectedFilter = () => {
  const { filter, setFilter } = useContext(FilterContext)
  return (
    <div>
      {filter}
      <button onClick={() => setFilter('bla')}>Click</button>
    </div>
  )
}

export default SelectedFilter
