import React from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon, TextArea } from 'semantic-ui-react';

export default function FormProduto (){
    return (
        <div style={{marginTop: '3%'}}>

        <Container textAlign='justified' >

            <h2> <span style={{color: 'darkgray'}}> Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

            <Divider />
            

        <div style={{marginTop: '4%'}}>
            <Form>
            <Form.Group widths='equal'>

<Form.Input
    width={200}
    required
    fluid
    label='Nome'
    maxLength="400"
/>

<Form.Input width={7}
    required
    fluid
    label='codigo de Produto'
    >
    <InputMask
        required
        mask="999999999-99"
    /> 
</Form.Input>
</Form.Group>
<Form.Field
          control={TextArea}
          label='Descrição'
          placeholder='Informe a descrição do produto'
        />
        <Form.Group>
        <Form.Input
                                    required
                                    fluid
                                    label='Valor '
                                    width={6}>                                   
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Tempo de entrega minimo em minutos'
                                    width={6}
                                    placeholder= '30'>

                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Tempo de entrega maximo em minutos'
                                    width={6}
                                    placeholder= '40'>
                               </Form.Input>
        </Form.Group>
            </Form>
            <div style={{marginTop: '4%'}}>

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
                    </div>
                    </Container>
            </div>                
        
            


    );
}