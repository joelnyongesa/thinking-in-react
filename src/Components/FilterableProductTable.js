import SearchBar from "./Searchbar";
import ProductTable from "./ProductTable";


function FilterableProductTable(){
    return(
      <div style={{border: "1px solid orange"}}>
        <SearchBar />
        <ProductTable />
        
      </div>
    )
  }

export default FilterableProductTable;