import React from 'react';
import {Layout,DatePicker,TimePicker,InputNumber,Input,Button} from 'antd';
import moment from 'moment';
import InputWhithLabel from '../InputWithLabel';
import './index.css';

const OpenBox=()=>{
    const { Header,Content } = Layout;
    const {TextArea}=Input;
    const dateFormat='YYYY-MM-DD';
    const hourFormat='HH:mm:ss';
    const style_default={
      color:"#fff",
      background:"#4B367B",
      fontSize:"20px",
      alignItems:"center",
    };
    


    return(
    <Layout className="layout">
      <Header style={style_default} className="header">Apertura de Caja</Header>
      <Content className="content">
        <div className="content_inputs">
          <InputWhithLabel title="Fecha (yyyy/mm/dd)" w="40%">
            <DatePicker defaultValue={moment('2020/05/06',dateFormat)} disabled/>
          </InputWhithLabel>
          <InputWhithLabel title="Hora (hh:mm)" w="40%">
            <TimePicker defaultValue={moment("12:00",hourFormat)} disabled/>
          </InputWhithLabel>
        </div>
        <div className="content_inputs">
          <InputWhithLabel title="Total anterior" w="40%">
            <InputNumber defaultValue={62856.78} 
                         formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')} 
                         parser={value => value.replace(/\$\s?|(,*)/g, '')} 
                         step={0.01}
                         disabled 
                         style={{width:"100%"}}/>
          </InputWhithLabel>
          <InputWhithLabel title="Total inicial" w="40%">
            <InputNumber defaultValue={0.00} 
                         formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')} 
                         parser={value => value.replace(/\$\s?|(,*)/g, '')}
                         min={0}
                         step={.01} 
                         style={{width:"100%"}}/>
          </InputWhithLabel>
        </div>
        <div className="textArea">
          <InputWhithLabel title="Observaciones" w="100%">
            <TextArea rows={5}/>
          </InputWhithLabel>
        </div>
        <Button style={style_default} className="button_enviar">Enviar</Button>
      </Content>
    </Layout>      
    )
}

export default OpenBox;