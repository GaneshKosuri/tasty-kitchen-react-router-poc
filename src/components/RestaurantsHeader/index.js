import {BsFilterLeft} from 'react-icons/bs'

import './index.css'

const RestaurantsHeader = props => {
  const {sortByOptions, activeOptionId, updateActiveOptionId} = props
  const onChangeSortBy = event => {
    updateActiveOptionId(event.target.value)
  }
  return (
    <div className="Restaurants-header">
      <div className="text-container">
        <h1 className="Restaurants-list-heading">Popular Restaurants</h1>
        <p className="Restaurants-list-description">
          Select Your favourite restaurant special dish and make your day
          happy...
        </p>
      </div>

      <div className="sort-by-container">
        <div className="sort-by-icon">
          <BsFilterLeft />
        </div>
        <p>Sort By</p>
        <select
          className="sort-by-select"
          value={activeOptionId}
          onChange={onChangeSortBy}
        >
          {sortByOptions.map(eachOption => (
            <option
              key={eachOption.id}
              value={eachOption.value}
              className="select-option"
            >
              {eachOption.displayText}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
export default RestaurantsHeader
