import MyButton from "../atoms/MyButton";

export default function SearchInput (props){
    
    return (
        <>
            <h2>{props.title}</h2>
            <input 
                type="text" 
                id="search-input-field" 
                className="search-input-molecule" 
            />
            <MyButton 
                clickHandler={props.searchClickHandler}
                buttonText={props.buttonText}
            />
        </>
    );
}