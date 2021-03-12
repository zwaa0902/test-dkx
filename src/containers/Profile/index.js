import { useRouter } from 'next/router';
import Button from '../../components/Button';
import { LOGIN_ROUTE } from '../../constants/routes';

import { Title, Wrapper } from './styles';

const Profile = () => {
    const router = useRouter();

    return (
        <Wrapper>
            <Title>Hello world!</Title>
            <Button outline onClick={() => router.push(LOGIN_ROUTE)}>
                Logout
            </Button>
        </Wrapper>
    );
};

// // export default Profile;
// import React from 'react';
// import { Table, Button, Alert } from 'react-bootstrap';

// class Profile extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       error: null,
//       products: [],
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
//             products: result
//           });
//         },
//         (error) => {
//           this.setState({ error });
//         }
//       )
//   }

//   deleteProduct(productId) {
//     const { products } = this.state;

//     const apiUrl = 'https://6041af897f50e000173aae0c.mockapi.io/users';
//     const formData = new FormData();
//     formData.append('productId', productId);

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
//             products: products.filter(product => product.id !== productId)
//           });
//         },
//         (error) => {
//           this.setState({ error });
//         }
//       )
//   }

//   render() {
//     const { error, products} = this.state;

//     if(error) {
//       return (
//         <div>Error: {error.message}</div>
//       )
//     } else {
//       return(
//         <div>
//           <h2>Product List</h2>
//           {this.state.response.message && <Alert variant="info">{this.state.response.message}</Alert>}
//           <Table>
//             <thead>
//               <tr>
//                 <th>#ID</th>
//                 <th>Product Name</th>
//                 <th>SKU</th>
//                 <th>Price</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {products.map(product => (
//                 <tr key={product.id}>
//                   <td>{product.id}</td>
//                   <td>{product.product_name}</td>
//                   <td>{product.sku}</td>
//                   <td>{product.price}</td>
//                   <td>
//                     <Button variant="info" onClick={() => this.props.editProduct(product.id)}>Edit</Button>
//                     &nbsp;<Button variant="danger" onClick={() => this.deleteProduct(product.id)}>Delete</Button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </Table>
//         </div>
//       )
//     }
//   }
// }

// export default Profile;