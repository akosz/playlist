import React from 'react';

export class GameForm extends React.Component{
    constructor(e){
        super(e)
        this.state = {
            value: ""
        }
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.onSubmit(this.state.value);
        this.setState({value:""})
    }

    render(){
        return(
        <details open>
            <summary>Add new game list</summary>
            <form className="ui action input container" onSubmit={(e) => this.handleSubmit(e)}>
                <input value={this.state.value} onChange={(e) => this.setState({value: e.target.value})} />
                <button className="ui primary button">
                Add
                </button>
            </form>
        </details>
        )
    }
}