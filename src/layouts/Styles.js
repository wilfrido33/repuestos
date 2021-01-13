import styled from "styled-components";

export const Wrapper = styled.div`
  & .layout-left {

    background: darkgray !important;   
    max-width: 334px !important;
}

& .ant-layout-content{
    max-Width: inherit;
    overflowX: "hidden"!important;
    margin: "0px auto"!important;
}

& .ant-layout-sider{
    
    background: #c7d6e4 !important;

}
`;
