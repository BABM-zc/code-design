import React from 'react';
import './App.css';
// import { CodeDesignContainer } from './container/container_test';
import { CodeDesignContainer } from './container/container';

export class App extends React.PureComponent {

  public render() {
    return (
      <div id = 'app'>
        <CodeDesignContainer />
      </div>
    );
  }
}