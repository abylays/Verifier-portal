import React, {Component, Fragment, useState,useContext} from 'react';
import 'antd/dist/antd.css'
import {Select, Card, Row, Col} from 'antd';
import loan from '../../assets/images/smallLoan.jpg';
import {MyContext} from "../../App";

const { Option } = Select;
const { Meta } = Card;

const LoanPage = () => {
    let context=useContext(MyContext)
    return (
        <Fragment>
          {/*  <Card title="Loan Information" bordered={false} style={{ width: '100%', height:'100vh' }}>
                <div className='Form'>
                    <img src={loan} width="1500" height="700"/>
                </div>
            </Card>*/}
            <Row style={{marginLeft:'40px', marginBottom:"20px"}} gutter={16}>
                <Col className="gutter-row" span={6}>
            <Card
                hoverable
                style={{ width: 290, height:400 }}
                cover={<img alt="example" src={loan} />}
            >
                <Meta title="Applying for Loan"
                      description=""/>
                <p style={{marginTop:"10px"}}> Please submit your BankId, Employment Certificate and tax certificate</p>
                <a href={'http://localhost:3001/share-credentials?token='+context.requestToken} target='_blank' rel="noopener noreferrer"> Click here!</a>


                </Card>
                </Col>
                <Col className="gutter-row" span={6}>
            <Card
                hoverable
                style={{ width: 290, height:400 }}
                cover={<img alt="example" src={loan} />}
            >
                <Meta title="Applying for BankID " description="For further information on creating a bank Id, click here" />
            </Card>
                </Col>
                <Col className="gutter-row" span={6}>
            <Card
                hoverable
                style={{ width: 290, height:400 }}
                cover={<img alt="example" src={loan} />}
            >
                <Meta title="Apply for Insurance" description="Click here to know more about our Insurance policies" />
            </Card>
                </Col>
                <Col className="gutter-row" span={6}>
            <Card
                hoverable
                style={{ width: 290, height:400 }}
                cover={<img alt="example" src={loan} />}
            >
                <Meta title="Creating a new account" description="Click here to know more about different account options that we offer" />
            </Card>
                </Col>
            </Row>


        </Fragment>




    )

}

export default LoanPage;
