import {Link} from 'react-router-dom'

function Login(){
    return (
        <div className="container mt-5" style={{width: "500px"}}>
            <div className="card shadow">
                <div className="card-body">
                    <h4 className="text-center mb-4">Login</h4>
                    <form method="post">
                    <label htmlFor="usrName" className="form-label">Username</label>
                    <input type="text" name="usrName" className="form-control"/>
                    <label htmlFor="usrPass" className="form-label mt-3">Password</label>
                    <input type="password" className="form-control"/>
                    <div className="d-flex justify-content-end">
                        <input type="submit" value="Login" className="btn btn-dark mt-3"/>
                    </div>
                    </form>
                    <Link to="/SignUp" className="text-decoration-none">Create account</Link>
                </div>
            </div>
        </div>
    )
}

export {Login}