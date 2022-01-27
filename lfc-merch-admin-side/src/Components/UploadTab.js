import axios from 'axios';
import React, {useState} from 'react';

export default function UploadTab()
{
    const [product,setProduct] = useState({
                                            ProductName : '',
                                            Price : 0,
                                            Quantity : 0,
                                            ImageURL : '',
                                            ProductType : '',
                                            AdminID : 0
                                          })

    const uploadProduct = () =>
    {
        axios({
                method: 'POST',
                url:'http://localhost:8000/api/products',
                data:{
                        ProductName: product.ProductName,
                        Price: product.Price,
                        Quantity: product.Quantity,
                        ImageURL: product.ImageURL,
                        ProductType: product.ProductType,
                        AdminID : product.AdminID
                     }
              })
              console.log("POST")
    }
      
    return(
            <div className='row'>
                <div style={{padding:'30px'}} className='col-lg-6'>
                    <h2>Enter your ID:</h2><input style={
                            {
                                marginTop:"20px",
                                marginBottom:"76px"
                            }
                        } type="number" class="form-control" placeholder="Admin ID" aria-label="Username" aria-describedby="basic-addon1"  
                        name='adminid' id='adminid' 
                        onChange={e =>
                                        {
                                            setProduct(
                                                {...product, AdminID : parseInt(e.target.value)}
                                            )
                                        } 
                                 } value={product.AdminID} />
                    
                    <h2>Enter the name of the product:</h2>
                    <input style={
                            {
                                marginTop:"20px",
                                marginBottom:"60px"
                            }
                        } type="text" class="form-control" placeholder="Product" aria-label="Username" aria-describedby="basic-addon1" 
                        name='productname' id='productname' 
                        onChange={e =>
                                        {
                                            setProduct(
                                                {...product, ProductName :e.target.value}
                                            )
                                        } 
                                 } value={product.ProductName} />
                    <h2>Enter the URL for the product image:</h2>
                    <input style={
                            {
                                marginTop:"20px",
                                marginBottom:"20px"
                            }
                        } type="text" class="form-control" placeholder="Image URL" aria-label="Username" aria-describedby="basic-addon1"  
                        name='url' id='url' 
                        onChange={e =>
                                        {
                                            setProduct(
                                                {...product, ImageURL :e.target.value}
                                            )
                                        } 
                                 } value={product.ImageURL} />
                </div>
                <div style={{padding:'30px'}} className='col-lg-6'>
                    <h2>Select the product type:</h2>
                    <div class="form-check">
                        <input className="form-check-input" type="radio" name="type" id="kit" 
                            onChange={e =>
                                {
                                    setProduct(
                                        {...product, ProductType :e.target.value}
                                    )
                                } 
                            } value="Kit" />
                        <label className="form-check-label" for="flexRadioDefault1">
                            Kit
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="type" id="football" 
                                onChange={e =>
                                {
                                    setProduct(
                                        {...product, ProductType :e.target.value}
                                    )
                                } 
                            } value="Football" />
                        <label className="form-check-label" for="flexRadioDefault2">
                            Football
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="type" id="other" 
                            onChange={e =>
                                {
                                    setProduct(
                                        {...product, ProductType :e.target.value}
                                    )
                                } 
                            } value="Other" />
                        <label className="form-check-label" for="flexRadioDefault2">
                            Other
                        </label>
                    </div>
                    <br />
                    <br />
                    <h2>Enter the Quantity available:</h2>
                    <input style={
                            {
                                marginTop:"20px",
                                marginBottom:"60px"
                            }
                        } type="number" class="form-control" placeholder="Quantity" aria-label="Username" aria-describedby="basic-addon1"  
                        name='quantity' id='quantity' 
                        onChange={e =>
                                        {
                                            setProduct(
                                                {...product, Quantity :parseInt(e.target.value)}
                                            )
                                        } 
                                 } value={product.Quantity} />
                    <h2>Enter the price for the product:</h2>
                    <input style={
                            {
                                marginTop:"59px",
                                marginBottom:"20px"
                            }
                        } type="number" class="form-control" placeholder="Price" aria-label="Username"  
                        name='price' id='price' 
                        onChange={e =>
                                        {
                                            setProduct(
                                                {...product, Price: parseInt(e.target.value)}
                                            )
                                        } 
                                 } value={product.Price} />
                </div>
                <button disabled={false} className='log-tog' onClick={uploadProduct}>Upload Product</button> {/*add the post request here*/}
            </div>
          );
}
