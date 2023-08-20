import ProductCategoryRow from "./ProductCategoryRow"
import ProductRow from "./ProductRow"


function ProductTable(){
    return(
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <ProductCategoryRow category="Sporting Goods"/>
          <ProductRow name="footballl" stocked={true} price={49.99}/>
          <ProductRow name="Baseball" stocked={false} price={4.99}/>
          <ProductRow name="Basketball" stocked={true} price={9.99}/>
          <ProductCategoryRow category="Electronics"/>
          <ProductRow name="IPhone 5" stocked={true} price={49.99}/>
          <ProductRow name="iPod Touch" stocked={true} price={4.99}/>
          <ProductRow name="Pixel" stocked={false} price={9.99}/>
        </tbody>
      </table>
    )
  }


export default ProductTable