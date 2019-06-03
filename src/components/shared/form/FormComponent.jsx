import React, {Component} from 'react';

class FormComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: this.props.dataEdit && this.props.dataEdit.id ? this.props.dataEdit.id :'',
            image: this.props.edit ? this.props.dataEdit.image : '',
            category:  this.props.edit ? this.props.dataEdit.category : '',
            title:  this.props.edit ? this.props.dataEdit.title : '',
            description:  this.props.edit ? this.props.dataEdit.description : '',
            time:  this.props.edit ? this.props.dataEdit.time : '',
        }
    }
    onChange = (event) =>{
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    onSubmit = (event) =>{
        event.preventDefault();
        if(this.props.edit){
            this.props.onUpdate(this.state);
            this.onResest();
        }else{
            this.props.onAdd(this.state);
            this.onResest();
        }
    }
    onResest(){
        this.setState({
            image: '',
            category: '',
            title: '',
            description: '',
            time: '',
        })
    }
    render() {
        return (
            <section className="b-form-page">
                <div className="container">
                    <form className="b-form" onSubmit={this.onSubmit}>
                        <h1 className="b-title text-center">{this.state.id ? 'UPDATE' : 'ADD'}</h1>
                        <div className="form-group">
                            <h5 className="title-form">Image:</h5>
                            <input type="text" className="b-input" placeholder="Image" onChange={this.onChange} name="image" value={this.state.image}/>
                        </div>
                        <div className="form-group">
                            <h5 className="title-form">Category:</h5>
                            <input type="text" className="b-input" placeholder="Category" onChange={this.onChange} name="category" value={this.state.category}/>
                        </div>
                        <div className="form-group">
                            <h5 className="title-form">Title:</h5>
                            <input type="text" className="b-input" placeholder="Title" onChange={this.onChange} name="title" value={this.state.title}/>
                        </div>
                        <div className="form-group">
                            <h5 className="title-form">Description:</h5>
                            <input type="text" className="b-input" placeholder="Description" onChange={this.onChange} name="description" value={this.state.description}/>
                        </div>
                        <div className="form-group">
                            <h5 className="title-form">Time:</h5>
                            <input type="text" className="b-input" placeholder="Time" onChange={this.onChange} name="time" value={this.state.time}/>
                        </div>
                        <div className="form-group text-center">
                            <button type="submit" className="btn-submit  waves-effect waves-teal">SAVE</button>
                        </div>
                    </form>
                </div>
            </section>
        );
    }
}

export default FormComponent;