import React from 'react';

import { getInitialData } from '../utils/index';

import AppInput from './AppInput';
import AppList from './AppList';
import AppEmpty from './AppEmpty';

class AppBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
    };

    this.onAddHandler = this.onAddHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onUnarchiveHandler = this.onUnarchiveHandler.bind(this);
  }

  onAddHandler({ title, body }) {
    this.setState((prevState) => ({
      notes: [
        ...prevState.notes,
        {
          id: +new Date(),
          title,
          body,
          createdAt: new Date(),
          archived: false,
        },
      ],
    }));
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onArchiveHandler(id) {
    const notes = this.state.notes.map((note) => {
      if (note.id === id) {
        note.archived = true;
      }
      return note;
    });
    this.setState({ notes });
  }

  onUnarchiveHandler(id) {
    const notes = this.state.notes.map((note) => {
      if (note.id === id) {
        note.archived = false;
      }
      return note;
    });
    this.setState({ notes });
  }

  render() {
    return (
      <div className="noshen-app__body">
        <AppInput onAdd={this.onAddHandler} />
        <h2>Active Notes</h2>
        {this.state.notes.length ? (
          <AppList
            notes={this.state.notes.filter((note) => note.archived === false)}
            onDelete={this.onDeleteHandler}
            onArchive={this.onArchiveHandler}
            keyword={this.props.keyword}
          />
        ) : (
          <AppEmpty />
        )}

        <h2>Archive Notes</h2>
        {this.state.notes.length ? (
          <AppList
            notes={this.state.notes.filter((note) => note.archived)}
            onDelete={this.onDeleteHandler}
            onUnarchive={this.onUnarchiveHandler}
            keyword={this.props.keyword}
          />
        )
          : (
            <AppEmpty />
          )}
      </div>
    );
  }
}

export default AppBody;
