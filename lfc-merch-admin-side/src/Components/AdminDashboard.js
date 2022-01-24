import React from 'react'
import './Admin.css'
import UploadTab from './UploadTab'

function AdminDashboard()
{
    return (
        <section className='admin-section'>
            <div className="d-flex align-items-start">
                <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <button className="tab-b nav-link active" id="sales-tab" data-bs-toggle="pill" data-bs-target="#sales" type="button" role="tab" aria-controls="sales" aria-selected="true">
                        Sales
                    </button>
                    <button className="tab-b nav-link" id="v-pills-products-tab" data-bs-toggle="pill" data-bs-target="#v-pills-products" type="button" role="tab" aria-controls="v-pills-products" aria-selected="false">
                        Products
                    </button>
                    <button className="tab-b nav-link" id="v-pills-upload-tab" data-bs-toggle="pill" data-bs-target="#v-pills-upload" type="button" role="tab" aria-controls="v-pills-upload" aria-selected="false">
                        Upload
                    </button>
                    <button className="tab-b nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">
                        Profile
                    </button>
                </div>
                <div className="tab-content" id="v-pills-tabContent">
                    <div className="tab-pane fade show active" id="sales" role="tabpanel" aria-labelledby="sales-tab">
                        <div className='container'>
                            <div className='row sales'>
                                <h2 style={{fontSize:"55px"}}>Total sales uptill now:</h2>
                                <h2 style={{fontSize:"55px"}}>170 $</h2>
                            </div>
                        </div>
                    </div>
                    
                    <div className="tab-pane fade" id="v-pills-products" role="tabpanel" aria-labelledby="v-pills-products-tab">
                        
                    </div>
                    <div style={{paddingLeft:"20px"}} className="tab-pane fade" id="v-pills-upload" role="tabpanel" aria-labelledby="v-pills-upload-tab">
                        <UploadTab />
                    </div>
                    <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                        <div className='container'>
                            <div className='row'>
                                <div className='col-lg-12 profile'>
                                    <h2>Admin ID: </h2>
                                    <h2>Name: Admin Admin</h2>
                                    <h2>Adress: Street 12, Liverpool, England</h2>
                                    <h2>Email Adress: admin123admin@gmail.com</h2>
                                    <h2>Contact Number: 1234567890</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AdminDashboard