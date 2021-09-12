import React from 'react';
import {Header} from './Header';
import {Form} from './Form';
import {Table} from './Table';
import '../css/style.css';


export function App(){
  return(
    <div id = "main">
      <Header/>
      <Form />
      <Table />
    </div>
  )
} 