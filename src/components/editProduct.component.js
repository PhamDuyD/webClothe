import apiCaller from '../utils/apiCaller';
import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link, Switch} from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';
import { FaEdit, FaTrashAlt} from "react-icons/fa";


export default class EditProduct extends Component{
    render(){
        var {name,price,image,status,quantity,description} = this.state; 
        return(
            <div>
                <div className="form-createClothes" style={{paddingTop:"50px",border:"15px solid black"}}>
                    <Container>
                    <p>Update</p>

                    <div style={{width:"600px",marginLeft:"200px"}}>
                        <Form >
                            <FormGroup>
                                <Label >Tên sản phẩm : </Label>
                                <Input type="text" value={name}   name="name" />
                            </FormGroup>

                            <FormGroup>
                                <Label >Giá : </Label>
                                <Input type="number" value={price}  name="price" />
                            </FormGroup>

                            <FormGroup>
                                <Label >Tình trạng : </Label>
                                <select name="status" value={status} >
                                    <option value={true}>Còn hàng</option>
                                    <option value={false}>Hết hàng</option>
                                </select>
                            </FormGroup>

                            <FormGroup>
                                <Label >Số lượng : </Label>
                                <Input type="number" value={quantity} name="quantity" />
                            </FormGroup>
                            
                            <FormGroup>
                                <Label >Chi tiết sản phẩm : </Label>
                                <Input type="text" value={description} name="description"  />
                            </FormGroup>

                            {/* <FormGroup tag="fieldset">
                                <legend>Radio Buttons</legend>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="radio" name="radio1" />{' '}
                                        Option one is this and that—be sure to include why it's great
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="radio" name="radio1" />{' '}
                                        Option two can be something else and selecting it will deselect option one
                                    </Label>
                                </FormGroup>
                                <FormGroup check disabled>
                                    <Label check>
                                        <Input type="radio" name="radio1" disabled />{' '}
                                        Option three is disabled
                                    </Label>
                                </FormGroup>
                            </FormGroup> */}

                            {/* <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" />
                                    Check me out
                                </Label>
                            </FormGroup> */}
                            <Button type="submit" >Update</Button>
                        </Form>

                    </div>
                </Container>
                </div>
            </div>
        )
    }
}