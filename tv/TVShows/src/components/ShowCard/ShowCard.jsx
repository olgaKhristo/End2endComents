// to pop HTML tags use dangerouslySetInnerHTML or sinitaze it  go: npm install dompurify


import React from 'react'
import DOMPurify from 'dompurify'

export default function ShowCard({show}) {
    const cleanSummary = DOMPurify.sanitize(show.summary)
  return (
    <div className='show-card'>
    <div>
        <img src={show.image.medium} />
    </div>
    <div>
        {show.rating.average ? <p>Rating: {show.rating.average}/10</p> : <p>No Rating</p>}
        <p>{show.name}</p>
        <em>{show.language}, {show.premiered}</em>
       <div dangerouslySetInnerHTML={{__html: cleanSummary}}></div>
    </div>
    </div>
  )
}
