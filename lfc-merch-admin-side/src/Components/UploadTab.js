import React from 'react';

export default function UploadTab()
{
    return(
            <div className='row'>
                <div style={{padding:'30px'}} className='col-lg-6'>
                    <h2>Enter your ID:</h2><input style={
                            {
                                marginTop:"20px",
                                marginBottom:"76px"
                            }
                        } type="text" class="form-control" placeholder="Admin ID" aria-label="Username" aria-describedby="basic-addon1" />
                    
                    <h2>Enter the name of the product:</h2>
                    <input style={
                            {
                                marginTop:"20px",
                                marginBottom:"60px"
                            }
                        } type="text" class="form-control" placeholder="Product" aria-label="Username" aria-describedby="basic-addon1" />
                    <h2>Enter the URL for the product image:</h2>
                    <input style={
                            {
                                marginTop:"20px",
                                marginBottom:"20px"
                            }
                        } type="text" class="form-control" placeholder="Image URL" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
                <div style={{padding:'30px'}} className='col-lg-6'>
                    <h2>Select the product type:</h2>
                    <div class="form-check">
                        <input className="form-check-input" type="radio" name="type" id="kit" />
                        <label className="form-check-label" for="flexRadioDefault1">
                            Kit
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="type" id="football" />
                        <label className="form-check-label" for="flexRadioDefault2">
                            Football
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="type" id="other" />
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
                        } type="text" class="form-control" placeholder="Quantity" aria-label="Username" aria-describedby="basic-addon1" />
                    <h2>Enter the price for the product:</h2>
                    <input style={
                            {
                                marginTop:"59px",
                                marginBottom:"20px"
                            }
                        } type="text" class="form-control" placeholder="Price" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
                <button className='log-tog'>Upload Product</button> {/*add the post request here*/}
            </div>
          );
}
