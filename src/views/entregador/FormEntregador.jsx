import React from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon, TextArea } from 'semantic-ui-react';

export default function FormEntregador (){

    return (

        <div>
            <div style={{marginTop: '3%'}}>
        <Container textAlign="justified">
        <h2> <span style={{color: 'darkgray'}}> Entregador  &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>
        <div style={{marginTop: '4%'}}>
        <Form>

<Form.Group widths='equal'>

    <Form.Input
        width={200}
        required
        fluid
        label='Nome'
        maxLength="100"
    />

    <Form.Input
     width={6}
        required
        fluid
        label='CPF'>
        <InputMask
            required
            mask="999.999.999-99"
        /> 
    </Form.Input>
    <Form.Input
    width={6}
        fluid
        label='RG'>
        <InputMask
            mask="999.99.99-9"
        /> 
    </Form.Input>

</Form.Group>

<Form.Group widths='equal'>

<Form.Input
    width={6}
        fluid
        label='DT Nascimento'>
        <InputMask
            mask="99/99/9999"
        /> 
    </Form.Input>

    <Form.Input
     width={6}
        required
        fluid
        label='CPF'>
        <InputMask
            required
            mask="999.999.999-99"
        /> 
    </Form.Input>
    <Form.Input
    width={6}
        fluid
        label='RG'>
        <InputMask
            mask="999.99.99-9"
        /> 
    </Form.Input>

</Form.Group>
</Form>

<Button
    type="button"
    inverted
    circular
    icon
    labelPosition='left'
    color='orange'
>
    <Icon name='reply' />
    Voltar
</Button>
    
<Button
    inverted
    circular
    icon
    labelPosition='left'
    color='blue'
    floated='right'
>
    <Icon name='save' />
    Salvar
</Button>

</div>
        </Container>
        </div>
        </div>
    );

}