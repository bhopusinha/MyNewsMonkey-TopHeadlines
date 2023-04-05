import React from 'react'
import loading from './loading.gif'

function Spiner(props) {
    return (
      <div className="text-center" >
        <img className='my-4' src={loading} alt="loading" style={{ width: '50px', height: "50px" }} />
      </div>
    )
}


export default Spiner;