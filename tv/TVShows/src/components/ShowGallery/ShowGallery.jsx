import React, {useState, useEffect} from 'react'
import { GalleryImage } from '../../components'
import { Link } from 'react-router-dom'


export default function ShowGallery() {
    const [shows, setShows] = useState([])

    useEffect(() => {
        async function displayShows() {
            //write fetch here
            const response = await fetch('https://api.tvmaze.com/shows')
            const data = await response.json()
            // console.log(data)
            setShows(data)
        }
        displayShows()

    }, [])
  return (
    <div className='shows'>
            {shows.map((show) => 
            <Link to={`${show.id}`} key={show.id}>
            <GalleryImage show={show}/>
            </Link>
             )}
    </div>
  )
}
