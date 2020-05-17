import React from 'react';
import {Layout,Button} from 'antd';
import {ExceptionOutlined} from '@ant-design/icons';
import './index.css';
import InputWithLabel from '../InputWithLabel';
import InputDolars from '../InputDolars';
import InputTime from '../InputTime';

const CloseBox=({active,cliked,setCloseBox})=>{

    const {Header,Content}=Layout;
    const style_default={
        color:"#fff",
        background:"#4B367B",
        fontSize:"20px",
        alignItems:"center",
    }

    const restart=()=>{
        setCloseBox()
        cliked()
    }

return(
    <Layout className="layout">
        <Header style={style_default} className="header">Cierre de Caja</Header>
            <Content className="content">
                {!active&&
                    <label className="label_close">
                        <ExceptionOutlined style={{fontSize:"80px"}}/>
                        <span>No existe información para mostrar</span>
                    </label>
                }
                {active&&
                    <>
                        <div className="content_inputs">
                            <InputWithLabel title="Fecha (yyyy/mm/dd)" w="40%">
                                <InputTime type="date" time="1992/07/20"/>
                            </InputWithLabel>
                            <InputWithLabel title="Hora (hh:mm)" w="40%">
                                <InputTime type="hour" time="13:00"/>
                            </InputWithLabel>
                        </div>
                        <div className="content_inputs">
                            <InputWithLabel title="Ventas en efectivo" w="40%">
                                <InputDolars/>
                            </InputWithLabel>
                            <InputWithLabel title="Ventas por tarjeta" w="40%">
                                <InputDolars/>
                            </InputWithLabel>
                        </div>
                        <div className="content_inputs">
                            <InputWithLabel title="Total en ventas" w="40%">
                                <InputDolars/>
                            </InputWithLabel>
                            <InputWithLabel title="Total apertura" w="40%">
                                <InputDolars/>
                            </InputWithLabel>
                        </div>
                        <div style={{width:"100%",marginTop:"25px"}}>
                            <InputWithLabel title="Total de caja" w="40%">
                                <InputDolars/>
                            </InputWithLabel>
                        </div>
                        <Button className="button_agregar">Agregar gasto</Button>
                        <Button style={style_default} className="button_cerrar" onClick={restart}>Cerrar con $1.00</Button>
                    </>
                }
        </Content>
    </Layout>
)
}

export default CloseBox;