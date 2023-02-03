import React from "react";

export const Register = () => {

    return (
        <div classNameName="container col-25 p-12">
            <div className=" d-flex align-items-center">
                <form>
                    <div className="col col-3">
                        <label for="exampleInputEmail1" className="form-label">Email</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="col col-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"/></div>
                    <div className="col col-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>

                    <div className="col col-3">
                        <label for="exampleInputEmail1" className="form-label">Email</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="col col-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"/></div>
                    <div className="col col-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

            </div>

        </div>
    );
};
