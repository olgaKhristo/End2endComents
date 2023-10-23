import React, {useState, useEffect} from 'react'
import ShowCard from '../ShowCard/ShowCard'

export default function SearchWidget() {
    const [inputValue, setInputValue] = useState('')
    const [searchValue, setSearchValue] = useState([])
    const [showData, setShowData] = useState([])

useEffect(() => {

    async function displaySearch() {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${searchValue}`)
        const data = await response.json()
        setShowData(data)
        
    }
    displaySearch()

}, [searchValue])

    function handelInput(e) {        
        setInputValue(e.target.value)
    }

    function handelSubmit(e) {
        e.preventDefault()       
        setSearchValue(inputValue)
        setInputValue('')
    }

  return (
    <>
        <form onSubmit={handelSubmit}>
            <input type="text" onChange={handelInput} required />
            <input type="submit" value="Search" />
        </form>
        {
            showData.map((show) => <ShowCard key={show.show.id} show={show.show} />)
        }
    </>
  )
}
