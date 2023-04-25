import Head from "next/head";
import Link from "next/Link";

function NotFound() {
    return ( 
        <>
        <Head>
            <title>IRIS | Page not found</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div>
            <h1>Oooops...</h1>
            <h2>This page cannot be found.</h2>
            <p>Go back to&nbsp;<Link href='/'>Home</Link></p>
        </div>
        </>
     );
}

export default NotFound;