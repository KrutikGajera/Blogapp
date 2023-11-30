import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <div>
        <section>
        <div className='container-fluid content2 backimg1'>
        <div className='container contentsign'>
                <form>
                  <p className='contenttext buttonfamaily'>Signup</p>
                  <p className='title1'>Username:-</p>
                  <input type='text' placeholder='Enter Username' className='textbox1'/><br/>
                  <p className='title1'>Password:-</p>
                  <input type='password' placeholder='Enter Password' className='textbox1'/><br/>
                  <p className='title1'>Confirm Password:-</p>
                  <input type='password' placeholder='Re-Enter Password' className='textbox1'/><br/>
                  <p className='title1'>Email:-</p>
                  <input type='email' placeholder='Enter your email' className='textbox1'/><br/>
                  <p className='title1 pt-2'>Gender:-
                    <input type='radio' className='gendername' value={'Male'}/>Male
                    <input type='radio' className='gendername' value={'Female'}/>Female
                  </p><br/>                
                  <Link to={'/login'}><button className='btn submit buttonfamaily'>Submit</button></Link>
                  <Link to='/'><button className='btn btn-dark m-2 buttonfamaily'>Back</button></Link>
                </form>
            </div>
        </div>
        </section>
    </div>
  )
}

export default Signup