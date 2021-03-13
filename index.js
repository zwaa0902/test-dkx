// import React, { useContext,Component } from 'react';
// import { Button, Alert } from 'react-bootstrap';
// import { Table, Tag, Space } from 'antd';
// import { Card, Wrapper } from './styles';
// import Input from '../../components/Input';
// import { useRouter } from 'next/router';
// import Link from 'next/link'
// import 'antd/dist/antd.css'; 
// class User extends React.Component {
 
//   constructor(props) {
//     super(props);
//     this.state = {
//       error: null,
//       users: [],
//       response: {}
//     }
//   }
//   componentDidMount() {
//     const apiUrl = 'https://6041af897f50e000173aae0c.mockapi.io/users';

//     fetch(apiUrl)
//       .then(res => res.json())
//       .then(
//         (result) => {
//           this.setState({
//             users: result
//           });
//         },
//         (error) => {
//           this.setState({ error });
//         }
//       )
//   }

//   deleteProduct(id) {
//     const { users } = this.state;

//     const apiUrl = 'https://6041af897f50e000173aae0c.mockapi.io/users';
//     const formData = new FormData();
//     formData.append('Id', id);

//     const options = {
//       method: 'POST',
//       body: formData
//     }

//     fetch(apiUrl, options)
//       .then(res => res.json())
      
//       .then(
//         (result) => {
          
//           this.setState({
//             response: result,
//             users: users.filter(user => user.id !== id)
         
//           });

//         },
//         (error) => {
//           this.setState({ error });
//         }
//       )
//   }
  
//   editProduct(id) {
//     const { users } = this.state;

//     const apiUrl = 'https://6041af897f50e000173aae0c.mockapi.io/users';
//     const formData = new FormData();
//     formData.append('Id', id);

//     const options = {
//       method: 'POST',
//       body: formData
//     }
//     fetch(apiUrl, options)
//     .then(res => res.json())
//     .then(
//       (result) => {
      
//       })
//       .catch((error) => console.log("error", error));
//   }

//   render() {
//     const { error, users} = this.state;

//     if(error) {
//       return (
//         <div>Error: {error.message}</div>
//       )
//     } else {
//       return(
//         <div>
//           <h2>QUẢN TRỊ NGƯỜI DÙNG</h2>
//           {this.state.response.message && <Alert variant="info">{this.state.response.message}</Alert>}
//           <Link href="/user/addUser">
//                     <h3>Thêm mới &rarr;</h3>
//                     </Link>
//       <Wrapper>
//         <Card>
//           <Table>
//             <thead>
//               <tr>
//                 <th>#ID</th>
//                 <th>User Name</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {users.map(user => (
//                 <tr key={user.id}>
//                   <td>{user.id}</td>
//                   <td>{user.name}</td>
//                   <td>
                    
//                     &nbsp;<Button 
//                       variant="danger" 
//                       onClick={ () => {
//                         this.deleteProduct(user.id)
//                         }}> Delete</Button>
                   
//                   </td>
//                    <td>
//                     {/* &nbsp;<Button variant="edit" href="http://localhost:3000/user/addUser"  onClick={() => {
//                         localStorage.setItem('userId', user.id),
//                         localStorage.setItem('userAddress', user.address),
//                         localStorage.setItem('userName', user.name),
//                         console.log("Value:"+user.name)
//                         }}>Edit</Button> */}
 
//       <li>
//         <Link  href={{
//             pathname: '/user/editUser',
//             query: { id: user.id , name: user.name, address: user.address},
//           }}>
//           <a>Edit</a>
//         </Link>
//       </li>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </Table>
//           </Card>
//           </Wrapper>
//           <form onSubmit={this.handleSubmit}>
//                 <Button type = "submit" >Add</Button>
//             </form>
//         </div>
//       )
//     }
//   }
// }

// export default User;

import { useState, useEffect, useContext } from "react";
import { Button, Row, Form, Table, Tabs } from "antd";
import 'antd/dist/antd.css';
 import { Wrapper, DrawTable } from "./styles";
 import Popup from 'reactjs-popup';
 import PopUpSangTen from "../PopUpSangTen";
// import { Context } from "../Context";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const { TabPane } = Tabs;
const TableDiChuyen = () => {

    const [data, setData] = useState([]);

    useEffect(() => {

        
        //    fetch('http://10.0.25.184:8089/DkOtoFull/api/GetSTDC?limit=10&page=1&donViCsgtID=29&isKhacTinh=true&api_key=123')
         fetch('https://6041af897f50e000173aae0c.mockapi.io/users') 
        
          .then(

            (res) => (res.json())
          )
          .then(
                (result) => {
                //    console.log("Value"+result.result.Result),
                   setData(result)
                   
                }
             )

               

      }, []);

      const dataSource = [
        {
          key: '1',
          name: 'Mike',
          age: 32,
          address: '10 Downing Street',
        },
        {
          key: '2',
          name: 'John',
          age: 42,
          address: '10 Downing Street',
        },
      ];
      
      const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
      ];
     

    
    
    return (
        
        <div>
            <div style={{textAlign:"center", marginBottom:"80px"}}>
                <div>
                    <h3>He Thong Dang Ky Xe O to</h3>
                   
                </div>
            </div>
            <div style={{textAlign:"center"}}>
                <h5>ĐĂNG KÝ SANG TÊN KHÁC TỈNH</h5>
 
                <div>
                   <span style={{paddingRight:"80px"}}>Dang Ky Di Chuyen</span>
                   <span>Dang Ky Chuyen Den</span>
                </div>
            </div>

           
        {
            //console.log(data.result.Result)
        }
        {/* <DrawTable>
            <tr>
                <th>
                    STT
                </th>
                <th>
                    So ho so
                </th>
                <th>
                    Bien so
                </th>
                <th>
                    Chu so huu
                </th>
                <th>
                    So Khun
                </th>
                <th>
                    So may
                </th>
                <th>
                    Trang thai dang ky
                </th>
                <th>
                    Trang thai ho so
                </th>
            </tr>
            {data.result.Result.map((item,index) => (
                <tr key={index}>
                    <td>{index}</td>
                    <td>{item.idOto}</td>
                    <td>{item.bienso_DAYDU}</td>
                    <td>{item.ten}</td>
                    <td>{item.so_KHUNG}</td>
                    <td>{item.so_may}</td>
                    <td>{item.trang_thai_dang_ky}</td>
                    <td>{item.trang_thai_ho_so}</td>
                </tr> 
                ))          
            }
           
        </DrawTable> */}
        <div>
            <div>
                <Popup modal trigger={<Button>Di chuyển</Button>}>
                {close => <PopUpSangTen close={close} />}
                </Popup>
            </div>
            <DrawTable>
                <thead>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Address</th>
                </thead>
                <tbody>
                    {
                        dataSource.map(item => (
                            <tr key={item.key}>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td>{item.address}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </DrawTable>
        </div>
        
        </div>
    );
};
export default TableDiChuyen;
