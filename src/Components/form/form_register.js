function FormRegister () {
    return (
        <div className="contact">
          <div className="form">
            <form action="" method="">
              <h2>Register Product</h2>
              <div className="items-form">
                <input type="text" name="product_name" placeholder="Product Name" required/>
                <input type="text" name="product_description" placeholder="Product Description" required/>
                <input type="text" name="product_description" placeholder="Product Description" required/>             
                <select name="select">
                    <option value="valor1">Valor 1</option>
                    <option value="valor2" selected>Valor 2</option>
                    <option value="valor3">Valor 3</option>
                </select>
                <input type="submit" value="Register"/>
                <input type="submit" value="Edit"/>
                <input type="submit" value="Delete"/>
              </div>
            </form>
          </div>
        </div>
      );
    }
export default FormRegister;