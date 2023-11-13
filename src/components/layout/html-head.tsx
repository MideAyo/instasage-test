import React, {useState,useEffect} from 'react';
import Head from "next/head";

export type HeaderProps = {
	title:string
	description?:string
}

const HtmlHead: React.FC<HeaderProps> = ({title, description}) => {
	title = title?title+" - Instasage":"Instasage"
	description = description?description:""

    return (
        <>
	        <Head>
		        <title>{title}</title>
		        <meta name="description" content={description} />
		        <meta name="twitter:title" content={title} />
		        <meta name="twitter:description" content={description} />
		        <meta property="og:title" content={title} />
		        <meta property="og:description" content={description} />
		        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
		        <link rel="icon" href="/favicon.ico" />
		        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
		        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
		        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
		        <link rel="manifest" href="/site.webmanifest"/>
	        </Head>
        </>
    );
};

export default HtmlHead;
