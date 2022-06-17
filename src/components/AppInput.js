import React from 'react';

class AppInput extends React.Component {
  constructor(props) {
    super(props);

      this.state = {
        title: '',
        content: '',
      }

      this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
      this.onContentChangeEventHandler = this.onContentChangeEventHandler.bind(this);
      this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
      this.setState((prevState) => {
        return {
          ...prevState,
          title: event.target.value,
        }
      });
    }

    onContentChangeEventHandler(event) {
      this.setState((prevState) => {
        return {
          ...prevState,
          content: event.target.value,
        }
      });
    }
    
    onSubmitEventHandler(event) {
      event.preventDefault();
      this.props.addNote(this.state);
    }
    
  render() {
    return (
      <div className="noshen-input">
        <h2>Add Note</h2>
        <form classTitle="contact-input" onSubmit={this.onSubmitEventHandler}>
          <p class="noshen-input__title__char-limit">Sisa karakter: </p>
          <input className="noshen-input__title" type="text" placeholder="Title.." required value={this.state.title} onChange={this.onTitleChangeEventHandler}></input>
          <textarea className="noshen-input__body" type="text" placeholder="Content.." required value={this.state.content} onChange={this.onContentChangeEventHandler}></textarea>
          <button type="submit">Create</button>
        </form>
      </div>
    )
  }
}

export default AppInput;