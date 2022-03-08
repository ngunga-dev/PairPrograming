function FormRegister () {
    return (
        <div className="form_box">
          <div className="form_register">
            <form action="" method="">
              <h2>Register Product</h2>
              <div className="form-items">
                <input type="text" name="product_name" placeholder="Product Name" required/>
                <input type="file" name="product_image" placeholder="Product Image" required/>             
                <input type="text" name="product_description" placeholder="Product Description" required/>
                <select name="select">
                    <option value="valor1">Category 01</option>
                    <option value="valor2" selected>Category 02</option>
                    <option value="valor3">Category 03</option>
                </select>
                <input type="text" name="product_price" placeholder="Product Price" required/>             
                <input type="number" name="product_quantity" placeholder="Product Quantity" required/>             
               
                <input type="submit" value="Register"/> {/* Hide this button after register a product */}
                <input type="submit" value="Edit"/>  {/* Show this button after register a product */}
                <input type="submit" value="Delete"/> {/* Show this button after register a product */}
              </div>
            </form>
          </div>
        </div>
      );
    }
export default FormRegister;