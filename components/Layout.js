import Header from './Header'
import Footer from './Footer'

export default function Layout(props) {
    return (
      <div className="layout">
        <Header />
		{props.children}
		<Footer />
        <style jsx>
        {`
          @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400');
          .layout {
            font-family: 'Source Sans Pro', sans-serif;
            color: #323232;
            min-height: 100vh;
          }
        `}
        </style>
        <style jsx global>
        {`
			*,
			*:before,
			*:after {
				box-sizing: border-box;
			}

			html {
				font-size: 100%;
			}

			body {
				margin: 0;
			}

			a:link {
				text-decoration: none;
			}
			a:visited {
				text-decoration: none;
			}
			a:hover {
				text-decoration: underline;
			}
			a:active {
				text-decoration: underline;
			}
        `}
        </style>
      </div>
    )
  }