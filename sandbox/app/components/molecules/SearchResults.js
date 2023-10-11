export default function SearchResults(props){
    let results = props.data.map(item)=> {
        return <li>`${i} ${item} (Click for more)...`</li>;
    }

    if(results.length > 0){
        return (
            <ul>
                { results }
            </ul>
        )
    } else {
    return(
        <div>
            <h3>No Results Found</h3>
        </div>
    )
}
}