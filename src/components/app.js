import React, { Component } from 'react';
import { HeaderComponent,FooterComponent } from './layouts';
import {SubcribeComponent, FormComponent} from './shared';
import {connect} from 'react-redux';
import * as action from '../actions/actions';
import HomePage from './page/HomePage';
class app extends Component {
    constructor(props){
        super(props);
        this.state = {
            views: 'LIST',
            edit: false,
            dataEdit: {},
        }
    }
    onChangerView = () =>{
        this.setState({
            views: 'FORM'
          
        })
    }
    componentDidMount(){
        this.props.dispatch(action.requestGetStore());
    }
    onDelete = (id) =>{
        this.props.dispatch(action.requestRemoveStore(id));
    }
    onAdd = (data) =>{
        
        this.props.dispatch(action.requestCreateStore(data));
        this.setState({
            views: 'LIST',
            edit: false
        })
    }
    onEdit = (id) =>{
        let item = [...this.props.data].filter(item => item.id = id);
        this.setState({
            dataEdit: item[0],
            edit: true,
            views: 'FORM'
        })
    }
    onUpdate = (data)=>{
        this.props.dispatch(action.requestUpdateStore(data));
        this.setState({
            views:'LIST'
        })
    }
    render() {
        const mainContent = () =>{
            switch(this.state.views){
                case "LIST":
                    return(
                        <HomePage onEdit={this.onEdit} onChangerView = {this.onChangerView} data={this.props.data} onDelete={this.onDelete}></HomePage>
                    )
                    case "FORM":
                    return(
                        <FormComponent edit={this.state.edit} onUpdate={this.onUpdate} dataEdit={this.state.dataEdit} onAdd={this.onAdd}></FormComponent>
                    )
                    
                default:
                    return(
                        <></>
                    )
            }
        }
        return (
            <div className="b-wrapper">
                <HeaderComponent></HeaderComponent>
                <div>
                   {mainContent()}
                </div>
                <SubcribeComponent></SubcribeComponent>
                <FooterComponent></FooterComponent>
            </div>
        );
    }
}
function mapPropsToState(state){
    return{
        data: state.stores.all,
    }
}
export default connect(mapPropsToState,null)(app);