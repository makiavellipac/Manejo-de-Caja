import React from 'react';
import {Layout} from 'antd';
import {ExceptionOutlined} from '@ant-design/icons';
import './index.css';

const CloseBox=()=>{
    const {Header,Content}=Layout;

    const style_default={
        color:"#fff",
        background:"#4B367B",
        fontSize:"20px",
        alignItems:"center",
    }
return(
    <Layout className="layout">
        <Header style={style_default} className="header">Cierre de Caja</Header>
            <Content className="content">
                <label className="label_close">
                    <ExceptionOutlined style={{fontSize:"80px"}}/>
                    <span>No existe información para mostrar</span>
                </label>
        </Content>
    </Layout>
)
}

export default CloseBox;