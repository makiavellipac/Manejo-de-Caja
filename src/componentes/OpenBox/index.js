import React,{ useEffect,useState} from 'react';
import BOX_SERVICE from '../../services/boxServices';
import {Layout,DatePicker,TimePicker,InputNumber,Input,Button,Spin} from 'antd';
import moment from 'moment';
import InputWhithLabel from '../InputWithLabel';
import './index.css';

const OpenBox=()=>{
    const [data,setData]=useState({});
    const [response,setResponse]=useState(false);
    const [disabled,setDisabled]=useState(false);
    const [disappear,setDisappear]=useState(false);

    useEffect(()=>{
      BOX_SERVICE.getBalance()
                 .then(response=>{
                  setData(response.data)
                  setResponse(true)
                  console.log(response.data.results)
                 })
                 .catch(error=>console.log(error));
    },[])

    const blocked=()=>{
     setDisabled(true);
     setDisappear(true);
    }
    
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
      {response&&
      <Content className="content">
        <div className="content_inputs">
          <InputWhithLabel title="Fecha (yyyy/mm/dd)" w="40%">
            <DatePicker defaultValue={moment(data.results.date_open,dateFormat)} disabled/>
          </InputWhithLabel>
          <InputWhithLabel title="Hora (hh:mm)" w="40%">
            <TimePicker defaultValue={moment(data.results.hour_open,hourFormat)} disabled/>
          </InputWhithLabel>
        </div>
        <div className="content_inputs">
          <InputWhithLabel title="Total anterior" w="40%">
            <InputNumber defaultValue={data.results.value_previous_close/100} 
                         formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')} 
                         parser={value => value.replace(/\$\s?|(,*)/g, '')} 
                         step={0.01}
                         disabled 
                         style={{width:"100%"}}/>
          </InputWhithLabel>
          <InputWhithLabel title="Total inicial" w="40%">
            <InputNumber defaultValue={data.results.value_open===null?0:data.results.value_open} 
                         formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')} 
                         parser={value => value.replace(/\$\s?|(,*)/g, '')}
                         min={0}
                         step={.01} 
                         style={{width:"100%"}}
                         disabled={disabled}
                         />
          </InputWhithLabel>
        </div>
        <div className="textArea">
          <InputWhithLabel title="Observaciones" w="100%">
            <TextArea rows={5} defaultValue={data.results.observation} disabled={disabled}/>
          </InputWhithLabel>
        </div>
        {!disappear&&
          <Button style={style_default} className="button_enviar" onClick={blocked}>Enviar</Button>
        }
        
      
      </Content>
      }
      {!response&&
        <div style={{margin:"25%"}}>
          <Spin size="large" />
        </div>
        
      }
    </Layout>
    )
}

export default OpenBox;