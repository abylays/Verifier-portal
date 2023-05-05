import React, {Component, useState} from 'react';
import 'antd/dist/antd.css'
import {Select, Modal} from 'antd'
const { Option } = Select;
const CreateToken = (props) => {

    return (<div>
                    <Select
                        mode="multiple"
                        allowClear
                        style={{ width: '100%' }}
                        placeholder="Please select"
                        defaultValue={['NorwegianBankIDV3']}
                        onChange={props.handleChangeToken}
                    >
                        <Option value="TaxCertificateNorway5">Norwegian Tax Certificate</Option>
                        <Option value="EmploymentCredentialPersonV1">Employment Credential</Option>
                        <Option value="NorwegianBankIDV3">Norwegian Bank ID</Option>
                    </Select>

        </div>
        )

}

export default CreateToken;
