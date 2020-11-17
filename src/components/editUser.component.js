import apiCaller from '../utils/apiCaller';
import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link, Switch} from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';
import { FaEdit, FaTrashAlt} from "react-icons/fa";


export default class EditProduct extends Component{
    render(){
        
        return(
            <div>
                <div className="form-createClothes" style={{paddingTop:"50px",border:"15px solid black"}}>
                    <Container>
                    <p>Update</p>

                    <div style={{width:"600px",marginLeft:"200px"}}>
                        <Form  >
                            <FormGroup>
                                <Label >Họ tên : </Label>
                                <Input type="text" value={name}   name="name" />
                            </FormGroup>

                            <FormGroup>
                                <Label >SĐT : </Label>
                                <Input type="text" value={phone}   name="phone" />
                            </FormGroup>

                            <FormGroup>
                                <Label >Địa chỉ : </Label>
                                <Input type="text" value={address}   name="address" />
                            </FormGroup>

                            <FormGroup>
                                <Label >Tuổi : </Label>
                                <Input type="text" value={age}   name="age" />
                            </FormGroup>

                            <FormGroup>
                                <Label >Giới tính : </Label>
                                <select name="gender" value={gender}  >
                                    <option value={true}>Nam</option>
                                    <option value={false}>Nữ</option>
                                </select>
                            </FormGroup>

                            <FormGroup>
                                <Label >Email : </Label>
                                <Input type="email" value={email}  name="email" />
                            </FormGroup>
                            
                            <FormGroup>
                                <Label >Mật khẩu : </Label>
                                <Input type="password" value={password}  name="password"  />
                            </FormGroup>
                            {/* <ProductContext.Consumer>
                                {({setProductList})=><Button type="submit" onClick={()=> setProductList(this.state)}  >Submit</Button>}
                            </ProductContext.Consumer> */}
                            <Button type="submit" >Update</Button>
                        </Form>

                    </div>
                </Container>
                </div>
            </div>
        )
    }
}