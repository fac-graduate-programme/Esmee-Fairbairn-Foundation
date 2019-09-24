import React from 'react'


const ItemList = ({ charities, loading }) => {
  if (loading || charities === null) {
    return 'Loading....'
  }
  if (charities.length === 0) {
    return 'Sorry, there are no charities that match that criteria.'
  }

  const clickeditem = e => {
      console.log(e.target.value)
  }
  return (
    <ul data-testid='charities-list'>
      {charities.map((charity, index) => (
        <li key={charity.id} value={index} onClick={clickeditem}>{charity.names[0].value} </li>
      ))}
    </ul>
  )
}

export default ItemList