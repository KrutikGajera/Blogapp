import React from 'react'
import {Link} from 'react-router-dom'

function BlogHome() {
  return (
    <div>
        <section>
            <div className='container-fluid content2 backimg'>
                <div className='buttonpos text-end p-2'>
                    <Link to={'/login'}><button className='btn2 submit'>Login</button></Link>
                    <Link to={'/signup'}><button className='btn btn2 m-3 btn-dark'>Signup</button></Link>
                </div>
                <h1 className='welcome'>Welcome, Hope your visit is useful!</h1>
                
            </div>
        </section>
    </div>
  )
}

export default BlogHome