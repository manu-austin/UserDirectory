import React from "react";


function SearchForm(props) {

    return (
            <form>
                <div className="form-group">
                    <label htmlFor="search">Search for an Employee:  </label>

                    <input
                        onChange={e => props.handleInputChange(e)}
                        value={props.value}
                        name="search"
                        type="text"
                        className="form-control"
                        placeholder="Type a name"
                        id="search"
                    />

                    <button onClick={props.handleFormSubmit} className="btn">
                        Search
                    </button>
                </div>
            </form>
    );
}

export default SearchForm;