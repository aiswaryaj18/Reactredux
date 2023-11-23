import React from 'react'

import { useSelector } from 'react-redux'
import { Link ,useNavigate} from 'react-router-dom'



function UserHome() {

  const navigate = useNavigate()
  const authentication_user = useSelector(state => state.authentication_user)
 
  return (
    // <div className="card">
    //   <div className="card-body">
    //     <h4>
    //       {authentication_user.isAuthenticated?<>Welcome Back {authentication_user.name} ! </>:<>Login to edit profile</>}
    //     </h4>
    //   </div>
    // </div>
<div className="row my-4 mx-4">
  <div className="col-md-6 mb-4">
    <div className="bg-image hover-overlay ripple shadow-2-strong rounded-5" data-mdb-ripple-color="light">
      <img src="https://www.travelandleisure.com/thmb/iAIrOVW7yWrDG8pZBpKMOvEGuNQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/new-delhi-india-NEWDELHITG0721-60d592e1603349298a0206d67d08582b.jpg" className="img-fluid" />
      <a href="#!">
        <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}}></div>
      </a>
    </div>
  </div>

  <div className="col-md-6 mb-4">
  <span className="badge px-2 py-1 shadow-1-strong mb-3" style={{ color: 'black', fontSize: '16px' }}>
  {authentication_user.isAuthenticated ? <>Welcome {authentication_user.name} ! </> : <>Hello Guest User</>}
</span>

    <h4><strong>Home Page </strong></h4>
    <p className="text-muted">
    Delhi, officially the National Capital Territory (NCT) of Delhi, is a city and a union territory of India containing New Delhi, the capital of India. Lying on both sides of the Yamuna river, but chiefly to the west, or beyond its right bank, 
    Delhi shares borders with the state of Uttar Pradesh in the east and with the state of Haryana in the remaining directions.
    Delhi became a union territory on 1 November 1956 and the NCT in 1995.
    The NCT covers an area of 1,484 square kilometres (573 sq mi). According to the 2011 census, Delhi's city proper population was over 11 million, while the NCT's population was about 16.8 million.
    Delhi's urban agglomeration, which includes the satellite cities Ghaziabad, Faridabad, Gurgaon, Noida, Greater Noida, Meerut and YEIDA city in an area known as the National Capital Region (NCR), has an estimated population of over 28 million, making it the largest metropolitan area in India and the second-largest in the world (after Tokyo).
    </p>
    {authentication_user.isAuthenticated?<>
      <Link type="button" className="btn btn-primary btn-rounded btn-lg" to='/profile'>View Profile </Link></>
      :<><Link type="button" className="btn btn-primary " to='/login'> Login To Read More </Link></>}
    
   
  </div>
</div>

  )
}

export default UserHome