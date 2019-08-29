import React from "react";
import "./style.css";

const Search = () => {
    return (
        <div className="container">
            <div className="card">
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label htmlFor="bookSearchInput">Book Search</label>
                            <input type="text" className="form-control" id="bookSearchInput" placeholder="Enter Title Here" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>    
        </div>
    );
}

export default Search;