
import apiCaller from '../utils/apiCaller';
import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link,Redirect, Switch} from 'react-router-dom';
import { Button } from 'reactstrap';
import '../css/productList/productList.css';
import { FaEdit, FaTrashAlt} from "react-icons/fa";
import { get } from 'jquery';


export default class UserList extends Component{
    render(){

        return(
            <div>
             {/* Page content */}
                <div className="container-fluid mt--6">
                <div className="row">
                    <div className="col">
                    <div className="card">
                        {/* Card header */}
                        <div className="card-header border-0">
                        <h3 className="mb-0">Light table</h3>
                        <Button><Link to="/productList">Product</Link></Button>
                        </div>
                        {/* Light table */}
                        <div className="table-responsive">
                        <table className="table align-items-center table-flush">
                            <thead className="thead-light">
                                <tr>
                                    <th scope="col" >STT</th>
                                    <th scope="col" >Họ tên</th>
                                    <th scope="col" >SĐT</th>
                                    <th scope="col" >Địa chỉ</th>
                                    <th scope="col" >Tuổi</th>
                                    <th scope="col" >Giới tính</th>
                                    <th scope="col" >Hình ảnh</th>
                                    <th scope="col" >Email</th>
                                    <th scope="col" >Password</th>
                                    <th scope="col"/>
                                </tr>
                            </thead>
                            <tbody >
                            </tbody>
                        </table>
                        </div>
                    </div>
                    </div>
                </div>






                {/* Dark table */}
                {/* <div className="row">
                    <div className="col">
                    <div className="card bg-default shadow">
                        <div className="card-header bg-transparent border-0">
                        <h3 className="text-white mb-0">Dark table</h3>
                        </div>
                        <div className="table-responsive">
                        <table className="table align-items-center table-dark table-flush">
                            <thead className="thead-dark">
                            <tr>
                                <th scope="col" className="sort" data-sort="name">Project</th>
                                <th scope="col" className="sort" data-sort="budget">Budget</th>
                                <th scope="col" className="sort" data-sort="status">Status</th>
                                <th scope="col">Users</th>
                                <th scope="col" className="sort" data-sort="completion">Completion</th>
                                <th scope="col" />
                            </tr>
                            </thead>
                            <tbody className="list">
                            <tr>
                                <th scope="row">
                                <div className="media align-items-center">
                                    <a href="#" className="avatar rounded-circle mr-3">
                                    <img alt="Image placeholder" src="../assets/img/theme/bootstrap.jpg" />
                                    </a>
                                    <div className="media-body">
                                    <span className="name mb-0 text-sm">Argon Design System</span>
                                    </div>
                                </div>
                                </th>
                                <td className="budget">
                                $2500 USD
                                </td>
                                <td>
                                <span className="badge badge-dot mr-4">
                                    <i className="bg-warning" />
                                    <span className="status">pending</span>
                                </span>
                                </td>
                                <td>
                                <div className="avatar-group">
                                </div>
                                </td>
                                <td>
                                <div className="d-flex align-items-center">
                                    <span className="completion mr-2">60%</span>
                                    <div>
                                    <div className="progress">
                                        <div className="progress-bar bg-warning" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '60%'}} />
                                    </div>
                                    </div>
                                </div>
                                </td>
                                <td className="text-right">
                                <div className="dropdown">
                                    <a className="btn btn-sm btn-icon-only text-light" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fas fa-ellipsis-v" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                    </div>
                </div> */}
                </div>
            </div>


        )
    }
}


