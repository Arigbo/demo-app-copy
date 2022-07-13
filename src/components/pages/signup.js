import React from "react";
import { Link } from "react-router-dom";
function SignUp() {
    return (


        <div className="signup-comtainer">

            {/* <label>Name</label>
                    <div>
                    <h1>
                        {name}
                    </h1>
                    <h1>
                     {message}
                    </h1>
                    </div>
                       
            {/* to change to message prop */}
            {/* <NavLink to="/welcome" className={({isActive})=>(isActive ? 'link active':'link')}><li><button >change</button></li></NavLink> */}
            {/* to add to  */}
            {/* onMouseOver={handleClick}, onClick={handleClick} */}

            {/* </div>
                    <input></input> */}


            <div className="signup-item">
                <form>
                    <h3>Create your Account</h3>

                    <label className="label">Username</label>
                    <br />
                    <input type="text" placeholder="We can call you..." className="input" required />
                    <br />
                    <label className="label">Firstname</label>
                    <br />
                    <input type="text" placeholder="Firstname" className="input" required />
                    <br />
                    <label className="label">Lastname</label>
                    <br />
                    <input type="text" placeholder="Lastname" className="input" required />
                    <br />
                    <fieldset>
                        <legend>Gender</legend>
                        <div className="gender" name="gender" >
                            <br />
                            <label className="label">Male</label>
                            <input type="radio" name="gender" className="label" required/>
                            <br />
                            <label>Female</label>
                            <input type="radio" name="gender" className="label" required/>
                        </div>
                    </fieldset>

                    <fieldset>
                        <legend>Others</legend>
                        <br />
                        <label className="label">Phone Number</label>
                        <br /> {/*onChange={handleChange} */}
                        <input type="number"  className="input" placeholder="Phone number" required/>
                        <br />
                        <label className="label">City</label>
                        <br />
                        <input type="text" className="input" placeholder="City" required/>
                        <br />
                        <label className="label">Date of Birth</label>
                        <br />
                        <input type="date" className="input" placeholder="D.O.B" required/>
                        <br />
                        <label className="label">Email</label>
                        <br />
                        <input type="email"  className="input" placeholder="examplemail.com" required />
                        <br />
                        <label className="label">Password</label>
                        <br />
                        <input type="password" placeholder="Password" className="input" required />
                        <br />
                        <label className="label">Confirm Password</label>
                        <br />
                        <input type="password" placeholder="Confirm password" className="input" required />
                        <br />
                    </fieldset>
                    <button className="signupbutton">Signup</button>
                    <br />
                    <label>Already have an account?</label>
                    <Link to="/login" className="loginbutton">Login</Link>


                </form>


            </div>



        </div>
    )
}
export default SignUp