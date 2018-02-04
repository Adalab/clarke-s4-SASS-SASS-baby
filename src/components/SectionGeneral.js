import React, { Component } from 'react';
import Tabs from './Tabs';
import Form from './Form';
import ButtonsForm from './ButtonsForm';

class SectionGeneral extends Component {
render(){
return (
  <section id="section-form">
  <Tabs/>
  <Form handleChange={this.props.handleChange}/>
  <ButtonsForm/>
  </section>
);
}
}

export default SectionGeneral;