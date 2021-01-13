import React from "react";
import { HomeLayout } from "../../layouts";
import {Row,Col} from "antd"
import {HeadLine} from "../../Styles"

const Home = props =>{
    return(
        <>
        <HomeLayout>
        <Row
                  
                  align="middle"
                  gutter={8}>

      <Col span={8}>
      
      </Col>
      <Col span={8}>col-8</Col>
      <Col span={8}>col-8</Col>
    </Row>


            
        </HomeLayout>


        </>
    );
};
export default Home