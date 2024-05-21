import React, { useContext, useState } from 'react';
import '../App.css';
import { DataContext } from '../App';
import { postData } from '../hooks/api_client';
import { useDispatch } from 'react-redux';
import { requestInStart,requestInSuccess,requestInFailure } from '../redux/slices/request_slices';

const RowWithInputAndButton = () => {
  const [inputValue, setInputValue] = useState(null);
  const [setRoot,setFileName,setTextMeg,setLepSyncJson,setLepSyncSound] = useContext(DataContext);
  const dispatch = useDispatch()

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  
  const handleClick = async () => {
    dispatch(requestInStart())
    const jsonData = await postData('api/chat/test', {"meg":inputValue});
    dispatch(requestInSuccess(jsonData))
    /*console.log(responseData);
    setInputValue(responseData)
    console.log(inputValue);*/
    //setRoot("ff")
/*     setFileName(responseData.fileName);
    setTextMeg(responseData.message);
    setLepSyncJson(responseData.setLepSyncJson);
    setLepSyncSound(responseData.setLepSyncSound); */

    /*setMeg(responseData.message);
    setLepSyncJson(responseData.lepSyncJson);
    setLepSyncSound(responseData.lepSyncSound);*/
  };
  
  return (
    
    <div>
      <h3 className='wel-h1'>Welcome to <span className='wel-spa'>Harry</span>  AI</h3>
      <div className="input-row">
        <textarea
          value={inputValue}
          onChange={handleChange}
          placeholder="Enter text..."
          className="input-textarea"
        />
        <button onClick={handleClick} className="submit-button">Submit</button>

      </div>
    </div>
  );
};

export default RowWithInputAndButton;
