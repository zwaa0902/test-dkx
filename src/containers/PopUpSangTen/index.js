import Form from "antd/lib/form/Form";
import React from "react";
import { Title, Wrapper} from './styles';
import {Input} from "antd";
export default ({ close }) => (
 <Wrapper>
    <div style={{backgroundColor: "whitesmoke",
     padding:"10px 20px 20px 20px", 
     border:"2px solid #6A6A6A",
     borderRadius:"10px",
     boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
        <div style={{display:"flex", 
             justifyContent:"space-between"}}>
           <h5>Bạn có chắc chắn muốn chuyển thông tin hồ sơ đến:</h5>
           <div>
                <button onClick={close} style={{
                    border:"none", 
                    backgroundColor:"whitesmoke", 
                    fontSize:"2rem", 
                    color:"darkred",
                    fontWeight:"700",
                    marginLeft:"20px"}}>
                    &times;
                </button>
           </div>
        </div>
        <div style={{
            width:"100%"
            }}>
            <form  style={{
             width:"100%"
            }}>
                <p style={{
                    marginBottom:"0rem"
                }}>Biển kiểm soát:</p>
                <input style={{
                    padding: "8px 3px"
                }} type="text"/>
                <p style={{
                    marginBottom:"0rem"
                }}>Đơn vị:</p>
                <input style={{
                        padding: "8px 3px"
                    }} type="text"/>
                <div style={{
                    display:"flex",
                    justifyContent:"space-between",
                    marginTop:"20px"
                }}>
                    <div>
                    </div>
                        <input style={{
                            width:"30%",
                            height: "50px",
                            fontWeight:"600"
                        }} type="submit"/>
                </div>
            </form>
        </div>
    </div>
  </Wrapper>
);
