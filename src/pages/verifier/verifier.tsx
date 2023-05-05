import React, {useEffect, useState, useContext} from 'react';
import {Button, FormControl} from 'react-bootstrap';
import 'pages/verifier/verifier.scss'
import ApiService from 'utils/apiService';
import {GetSavedCredentialsOutput, UnsignedW3cCredential, W3cCredential} from 'utils/apis';
import 'antd/dist/antd.css'
import { Modal } from 'antd';
import CreateToken from './createtoken.jsx'
import {MyContext} from "../../App";
interface State {
  currentUnsignedVC: UnsignedW3cCredential | null,
  currentSignedVC: W3cCredential | null,
  isCurrentVCVerified: boolean,
  storedVCs: GetSavedCredentialsOutput,
  isLoadingStoredVCs: boolean
}

/**
 * Stateful component responsible for rendering the showcase of this app.
 * The basic parts of SSI cycle are covered with this component.
 * */
const Verifier = () => {
  const [state, setState] = useState<State>({
    currentUnsignedVC: null,
    currentSignedVC: null,
    isCurrentVCVerified: false,
    storedVCs: [],
    isLoadingStoredVCs: true,
  })
    const Context:any = useContext(MyContext);
  console.log("This is the data",Context)
    const [credentialRequirements, setCredentialRequirements] = useState<any>([]);

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [inputVC, setinputVC] = useState('');

    const [shareCredRequestToken,setShareCredRequestToken] = useState('');


    /**
   * Get stored VCs from user cloud wallet on component mount.
   * */
  useEffect(() => {
    const getSavedVCs = async () => {
      try {
        const arrayOfStoredVCs = await ApiService.getSavedVCs();

        setState({
          ...state,
          storedVCs: [...arrayOfStoredVCs],
          isLoadingStoredVCs: false
        })
      } catch (error) {
        ApiService.alertWithBrowserConsole(error.message)

        setState({
          ...state,
          isLoadingStoredVCs: false
        })
      }
    }
    getSavedVCs();
  }, []);

  /**
   * Function for verifying a signed VC.
   * */
  const verifyVC = async () => {
    try {
        const {isValid, errors} = await ApiService.verifySharedResponseToken(shareCredRequestToken,inputVC,);
        if( isValid ) {
            setState({
                ...state,
                isCurrentVCVerified: true,
            });
            alert('Signed VC successfully verified.');
        }else {
            ApiService.alertWithBrowserConsole(errors, 'Signed VC not verified. Check console for errors.')
        }
    } catch (error) {
      ApiService.alertWithBrowserConsole(error.message);
    }
  }

  const onVCValueChange = (value: string) => {
    setinputVC(value)
  }
    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = async() => {
        try {

            const {credentialShareRequest, errors} = await ApiService.createSharedRequestToken(credentialRequirements);
            console.log("this is credentialSharedRequest", credentialShareRequest)
            if( credentialShareRequest ) {
                let payload:any={requirements:credentialShareRequest.payload.interactionToken.credentialRequirements}
                const tokenResponse= await ApiService.generateSharedRequestToken(payload);
                setShareCredRequestToken(tokenResponse)
                Context.setrequestToken(tokenResponse)
                alert('Signed VC successfully verified. Automatically set on the user portal');
            }else {
                ApiService.alertWithBrowserConsole(errors, 'Shared request token created successfully')
            }
            setIsModalVisible(false);
        }catch (error) {
            ApiService.alertWithBrowserConsole(error.message);
            setIsModalVisible(false);

        }
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

  const isJson = (str: string) => {
      try {
          JSON.parse(str);
      } catch (e) {
          return false;
      }
      return true;
  }
    function handleChangeToken(value:any) {
        console.log(`selected ${value}`);


        let formatTypes = value.map((item:any)=>{
            return {
                type:[item]
            }
        })

        let payload = {
            credentialRequirements:formatTypes
        }
        setCredentialRequirements(payload)
        console.log("this is payload",payload)
    }

  return (
    <div className='tutorial-verifier'>
      {/* <div className='tutorial__column tutorial__column--verifier'> */}
            <span className='tutorial__step-text'>
              {/* <strong>Step 4:</strong>  */}
              Verify VC

                <Button style={{float:'right'}} onClick={showModal}> Create Token  </Button>
                <Modal title="Create Token " visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                    <CreateToken handleChangeToken={handleChangeToken} />
                </Modal>

            </span>
            <FormControl
              as="textarea"
              rows={15}
              placeholder="Enter Verifiable Credential"
              aria-label="Verifiable Credential"
              aria-describedby="basic-addon1"
              value={inputVC}
              onChange={e => onVCValueChange(e.target.value)}
              style={{margin: '20px 0'}}
            />
            <Button onClick={verifyVC}>Verify signed VC</Button>
          {/* </div>
        </div>
      </div> */}
    </div>
  )
};

export default Verifier;
