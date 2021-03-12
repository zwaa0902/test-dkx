import Head from 'next/head';

import Home from '../containers/Home';
import Layout from '../components/Layout';

const HomePage = () => {
    return (
        <>
            <Head>
                <title>Home</title>
            </Head>

            <Home />
        </>
    );
};

HomePage.Layout = Layout;

export default HomePage;
