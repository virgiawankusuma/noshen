import React from 'react';

import { getInitialData } from '../utils/index';

import AppInput from './AppInput';
import AppList from './AppList';


class AppBody extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      notes: getInitialData(),
    }

    this.onAddHandler = this.onAddHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
  }

  onAddHandler ( {title, body} ) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date(),
            archived: false,
          }
        ],
      }
    });
  }

  onDeleteHandler (id) {
    const notes = this.state.notes.filter(note => note.id !== id);
    this.setState({ notes });
  }

  onArchiveHandler (id) {
    const notes = this.state.notes.map(note => {
      if (note.id === id) {
        note.archived = true;
      }
      return note;
    });
    this.setState({ notes });
  }

  render() {
    return (
      <div className="noshen-app__body">
        <AppInput onAdd={this.onAddHandler}/>

        <h2>Active Notes</h2>
        <AppList notes={this.state.notes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
        
        <h2>Archive Notes</h2>
      </div>
    );
  }

}

export default AppBody;
