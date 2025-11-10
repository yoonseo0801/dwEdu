import React from "react";
import Book from "./Book";

function Library(props){
    return(
        <div>
            <Book name = "파이썬" numOfPages={300}/>
            <Book name = "AWS" numOfPages={400}/>
            <Book name = "리액트" numOfPages={500}/>
        </div>
    );
}

export default Library;