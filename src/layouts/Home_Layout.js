import React from "react";
import { Layout } from 'antd';

import {Wrapper} from "./Styles"

const { Header, Footer, Sider, Content } = Layout;

const HomeLayout =props =>{
    return(
        <Wrapper>
   <Layout>

    <Layout  style={{
        minHeight: "100vh"
    }}>
        <Header>sasa</Header>
        <Layout>
        <Layout className="layout-left">
        <Content>12</Content>

        </Layout>
        <Content>dfgg</Content>
        
            <Sider>14</Sider>

        
        
        </Layout>

        <Footer>este es el footer</Footer>

      
    </Layout>
     </Layout>
        </Wrapper>
 
    );
};
export default HomeLayout