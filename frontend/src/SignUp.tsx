function SignUp(){
    return (
        <div className="container mt-5" style={{width: "500px"}}>
            <div className="card shadow">
                <div className="card-body">
                    <h4 className="text-center mb-4">Sign-up</h4>
                    <form method="post" action="/signUp">
                    <label htmlFor="usrName" className="form-label">Username</label>
                    <input type="text" name="usrName" className="form-control"/>
                    <label htmlFor="usrPass" className="form-label mt-3">Password</label>
                    <input type="password" name="usrPass" className="form-control"/>
                    <label htmlFor="reUsrPass" className="form-label mt-3">Re-enter password</label>
                    <input type="password" name="reUsrPass" className="form-control"/>
                    <div className="d-flex justify-content-end">
                        <input type="submit" value="Sign-up" className="btn btn-dark mt-3"/>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export {SignUp}