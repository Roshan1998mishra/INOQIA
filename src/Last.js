import React from 'react'
import Radiuscard from './Components/Radiuscard'

const Last = () => {
  return (
    <div className='last-container'>

        <div>
            <h3 className='see'>See Question list of :</h3>
            <div>
                <label>
                <input type='radio' name='fav_language' ></input>
                Everyone
                </label>
                <br></br>

                <label>
                <input type='radio' name='fav_language'></input>
                Reviewee (3)
                </label>
                <br></br>
                <label>
                <input type='radio' name='fav_language'></input>
                Manager (0)
                </label>
                
                
            </div>
        </div>

        <Radiuscard/>
      
    </div>
  )
}

export default Last
