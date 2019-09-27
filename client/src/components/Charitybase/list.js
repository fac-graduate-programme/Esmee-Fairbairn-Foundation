import React, {useState} from 'react'


const ItemList = ({ charities, loading, setCharity, setSelectedCharityNum }) => {
const [close, setClose] = useState(false)
if (close) {
  return null
}

  if (loading || close || charities === null) {
    return 'Loading....'
  }
  if (charities.length === 0) {
    return 'Sorry, there are no charities that match that criteria.'
  }

  const clickeditem = e => {
    setCharity(charities[e.target.value].names[0].value)
    setSelectedCharityNum(charities[e.target.value])
    setClose(true)
  }
  return (
    <ul className='charities-list'>
      {charities.map((charity, index) => (
        <li key={charity.id} value={index} onClick={clickeditem}>{charity.names[0].value} </li>
      ))}
    </ul>
  )
}

export default ItemList