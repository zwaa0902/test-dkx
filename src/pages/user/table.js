import Head from 'next/head';

import Layout from '../../components/Layout';
import Table from '../../containers/Table';

const TableUserPage = () => {
    return (
        <>
            <Head>
                <title>Table</title>
            </Head>
            <Table />
        </>
    );
};

// TableUserPage.Layout = Layout;

export default TableUserPage;