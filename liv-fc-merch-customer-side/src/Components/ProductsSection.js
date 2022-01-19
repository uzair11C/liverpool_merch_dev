import React, {useState} from 'react'
import "./ProductsSection.css";

function ProductsSection()
{
    const[addName,setAddName] = useState([])
    const[addPrice,setAddPrice] = useState([])

    const AddToCart = () =>
    {
        setAddName(this.Name)
        setAddPrice(this.Price)
        window.alert('Added to Cart!')
    }

    return (
        <section style={{
                            marginBottom: "35px",
                            marginTop: "10px",
                            padding: "25px"
                        }}>
            <div className='container-fluid'>
                <div className='row'>
                    <ul style={{display:"flex",justifyContent:"center"}} className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="kits-tab" data-bs-toggle="tab" data-bs-target="#kits" type="button" role="tab" aria-controls="kits" aria-selected="true">
                                Kits
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="footballs-tab" data-bs-toggle="tab" data-bs-target="#footballs" type="button" role="tab" aria-controls="footballs" aria-selected="false">
                                Footballs
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">
                                Contact
                            </button>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="kits" role="tabpanel" aria-labelledby="kits-tab">
                            <div className='row' style={{padding: "5px"}}>
                                <div className='col-lg-4'>
                                    
                                </div>
                                <div className='col-lg-4'>
                                    
                                </div>
                                <div className='col-lg-4'>
                                    <div style={{
                                       border: "2px solid #01FF0E",
                                        borderRadius:"10px",
                                        display:'flex',
                                        flexDirection:'column',
                                        alignItems:'center',
                                        padding:'10px',
                                        margin:'20px'
                                    }} className='col-lg-12'>
                                       <img 
                                        src = "https://i.pinimg.com/236x/b3/cd/d5/b3cdd54558c0377841f66ec6083d9040--football-design-all-black.jpg" 
                                        alt = 'place-holder' 
                                        width='300px' 
                                        height='240px' 
                                        /> 
                                        <h3 style={{marginTop:"20px"}}>Football Black</h3>
                                        <h3>Price: 30$</h3>
                                        <p>Quantity: 5</p>
                                        <button onClick={AddToCart} className='buy-button'>
                                            Add To Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="footballs" role="tabpanel" aria-labelledby="footballs-tab">
                            <div className='row' style={{padding: "5px"}}>
                                <div className='col-lg-4'>
                                    
                                </div>
                                <div className='col-lg-4'>
                                    
                                </div>
                                <div className='col-lg-4'>
                                    <div style={{
                                       border: "2px solid #01FF0E",
                                        borderRadius:"10px",
                                        display:'flex',
                                        flexDirection:'column',
                                        alignItems:'center',
                                        padding:'10px',
                                        margin:'20px'
                                    }} className='col-lg-12'>
                                       <img 
                                        src = "https://i.pinimg.com/236x/b3/cd/d5/b3cdd54558c0377841f66ec6083d9040--football-design-all-black.jpg" 
                                        alt = 'place-holder' 
                                        width='300px' 
                                        height='240px' 
                                        /> 
                                        <h3 style={{marginTop:"20px"}}>Football Black</h3>
                                        <h3>Price: 30$</h3>
                                        <p>Quantity: 5</p>
                                        <button className='buy-button'>Add To Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                            <div className='row' style={{padding: "5px"}}>
                                <div className='col-lg-4'>
                                    
                                </div>
                                <div className='col-lg-4'>
                                    
                                </div>
                                <div className='col-lg-4'>
                                    <div style={{
                                       border: "2px solid #01FF0E",
                                        borderRadius:"10px",
                                        display:'flex',
                                        flexDirection:'column',
                                        alignItems:'center',
                                        padding:'10px',
                                        margin:'20px'
                                    }} className='col-lg-12'>
                                       <img 
                                        src = "https://i.pinimg.com/236x/b3/cd/d5/b3cdd54558c0377841f66ec6083d9040--football-design-all-black.jpg" 
                                        alt = 'place-holder' 
                                        width='300px' 
                                        height='240px' 
                                        /> 
                                        <h3 style={{marginTop:"20px"}}>Football Black</h3>
                                        <h3>Price: 30$</h3>
                                        <p>Quantity: 5</p>
                                        <button className='buy-button'>Add To Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductsSection
