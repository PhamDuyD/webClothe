
import apiCaller from '../utils/apiCaller';
import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link,Redirect, Switch} from 'react-router-dom';
import { Button } from 'reactstrap';
import '../css/productList/productList.css';
import { FaEdit, FaTrashAlt} from "react-icons/fa";


export default class ProductList extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            token:"",
            productList : []
        }
    }

    componentDidMount(){
        apiCaller('api/Product','GET',null)
            .then((res)=>{
                var getToken =localStorage.getItem("token");
                this.setState({
                    token:getToken,
                    productList : res.data //data = {_id,name,image,status,quantity,description}
                });
                console.log(this.state.productList);
            });
    }

    onDelete = (_id)=>{
        var {productList} = this.state;
        var {history} = this.props;
        apiCaller(`api/deleteProduct/${_id}`,'DELETE',null)
            .then((res)=>{
                if(res.status === 200){ //ok
                    var index = this.findIndex(productList,_id);
                    if(index !== -1){
                        productList.slice(index,1); // find index of product in producList[] and cut 1 value
                        this.state({
                            productList:productList
                        });
                    }
                }
            });
            // history.goBack();
            console.log('delete product success');
    }

    findIndex = (productList,_id)=>{
        var result = -1;
        productList.forEach((value,index) => {
            if(value._id === _id){
                result = index;
            }
        });

        return result;
    }


    render(){
        var {productList,token} = this.state;
        var elementProduct = productList.map((value,index)=>(
                <tr key={index}>
                    <th scope="row">{index}</th>
                    <td>{value.name}</td>
                    <td><img src={value.image} style={{width:'100px',height:'100px'}}/></td>
                    <td>{value.price}</td>
                    <td><span className={value.status === true?'badge badge-primary' : 'badge badge-dark'}>{value.status === true?"Còn hàng":"Hết hàng"}</span></td>
                    <td>{value.quantity}</td>
                    <td>{value.description}</td>
                    <td >
                        <div className="row">
                                <div className="col-3"><Button color="warning"><Link to={`/${value._id}/editProduct`}><FaEdit/></Link></Button></div>
                                <div className="col-3"></div>
                                <div className="col-3"><Button color="danger" onClick={()=>this.onDelete(value._id)}><FaTrashAlt/></Button></div>
                        </div>
                    </td>
                </tr>
        ));
        
        if(token === null){
            return <Redirect to="/home"/>
        };

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
                        <Button><Link to="/userList">User</Link></Button>
                        </div>
                        {/* Light table */}
                        <div className="table-responsive">
                        <table className="table align-items-center table-flush">
                            <thead className="thead-light">
                                <tr>
                                    <th scope="col" >STT</th>
                                    <th scope="col" >Tên sản phẩm</th>
                                    <th scope="col" >Hình ảnh</th>
                                    <th scope="col" >Giá</th>
                                    <th scope="col" >Tình trạng</th>
                                    <th scope="col" >Số lượng</th>
                                    <th scope="col" >Mô tả</th>
                                    <th scope="col"/>
                                </tr>
                            </thead>
                            <tbody >
                                {elementProduct}
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


