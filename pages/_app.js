// pages/_app.js
import App from 'next/app'
import Head from 'next/head'
import React from 'react'

export default class Volleio extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <Head>
			<title>Lucas Volle</title>
			<meta charSet="utf-8" />
			<meta name="Description" content="I'm a full stack developer and Manager of Software Engineering at Exago Inc, a business intelligence software company in Uptown Kingston, NY." />
			<meta name="author" content="Lucas Volle" />
			<link rel="shortcut icon" href="/static/favicon.png" />

			<script type="application/ld+json" dangerouslySetInnerHTML={ { __html: 
				`{
					"@context": "https://schema.org",
					"@type": "Person",
					"name": "Lucas Volle",
					"url": "https://volle.io/",
					"sameAs": [
						"https://www.facebook.com/lucasvolle",
						"https://www.instagram.com/volle.io/",
						"https://www.linkedin.com/in/volleio",
						"http://twitter.com/volleio"
					]
				}`
			}} />
			<script async src="https://www.googletagmanager.com/gtag/js?id=UA-68030939-1"></script>
			<script dangerouslySetInnerHTML={ { __html: 
			`
				window.dataLayer = window.dataLayer || [];
				function gtag(){dataLayer.push(arguments);}
				gtag('js', new Date());

				gtag('config', 'UA-68030939-1');
			`
			}}/>
        </Head>
        <Component {...pageProps} />
      </>
    )
  }
}