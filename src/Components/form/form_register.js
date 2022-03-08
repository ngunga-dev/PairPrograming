function FormRegister () {
    return (
        <div className="form_box">
          <div className="form_register">
            <form action="" method="">
              <h2>Register New Product</h2>
              <div className="form-items">
                <input type="text" name="product_name" placeholder="Product Name" required/>
                <input type="text" name="product_author" placeholder="Product Author" required/>
                <input type="file" name="product_image" placeholder="Product Image" required/>             
                <input type="text" name="product_description" placeholder="Product Description" required/>
                <select name="select">
                    <option value="null" selected>- select a category -</option>
                    <option value="category1">Category01</option>
                    <option value="category2">Category02</option>
                    <option value="category3">Category03</option>
                </select>
                <select name="select">
                    <option value="null" selected>- digital or paper -</option>
                    <option value="category1">digital book</option>
                    <option value="category2">paper book</option>
                </select>

                <input type="number" name="product_price" placeholder="Product Price (R$)" required min="0.00" max="10000.00" step="0.01"/>             
                <input type="number" name="product_quantity" placeholder="Product Quantity" required/>             
               
                <input type="submit" value="Add Product"/> {/* Hide this button after register a product */}
                <input type="submit" value="Edit"/>  {/* Show this button after register a product */}
                <input type="submit" value="Delete"/> {/* Show this button after register a product */}
              </div>
            </form>
          </div>
        </div>
      );
    }
export default FormRegister;