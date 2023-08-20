function SearchBar(){
    return(
      <form style={{border: "1px solid blue", padding: "5px", display: "flex", flexDirection: "column"}}>
        <input type='text' placeholder='Search...'/>
        <label>
          <input type='checkbox'/>
          Only show products in stock
        </label>
      </form>
    )
  }


export default SearchBar;