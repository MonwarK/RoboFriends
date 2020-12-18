import react from "react";

const Searchbar = (props) =>{

    return(
        <div className="w-50 mx-auto my-5">
            <div className="my-2">
                <input onChange={props.searchChange} className="form-control" placeholder="Search robots" type="search"/>
            </div>
        </div>
    )
}

export default Searchbar;