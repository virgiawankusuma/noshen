import React from 'react';

class AppInput extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      title: '',
      body: '',
    }
    this.maxLength = 50;
  
    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onContentChangeEventHandler = this.onContentChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

    onTitleChangeEventHandler(event) {
      const inputValue = event.target.value.slice(0, this.maxLength);
      this.setState((prevState) => {
        return {
          ...prevState,
          title: inputValue,
          inputLength: inputValue.length, 
        }
      });
    }

    onContentChangeEventHandler(event) {
      this.setState((prevState) => {
        return {
          ...prevState,
          body: event.target.value,
        }
      });
    }
    
    onSubmitEventHandler(event) {
      event.preventDefault();
      this.props.onAdd(this.state);
    }
    
  render() {
    return (
      <div className="noshen-input">
        <h2>Add Note</h2>
        <form className="contact-input" onSubmit={this.onSubmitEventHandler}>
          <p className="noshen-input__title__char-limit" >Sisa karakter: {this.state.inputLength ? this.maxLength - this.state.inputLength : this.maxLength}</p>
          <input className="noshen-input__title" type="text" placeholder="Title.." required value={this.state.title} onChange={this.onTitleChangeEventHandler}></input>
          <textarea className="noshen-input__body" type="text" placeholder="Content.." required spellCheck="false" defaultValue={this.state.body} onChange={this.onContentChangeEventHandler}></textarea>
          <button type="submit">Create</button>
        </form>
      </div>
    )
  }
}

export default AppInput;