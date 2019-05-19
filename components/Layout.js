import Header from './Header'

export default function Layout(props) {
    return (
      <div className="layout">
        <Header />
        {props.children}
        <style jsx>
        {`
          @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400');
          .layout {
            font-family: 'Source Sans Pro', sans-serif;
            color: #323232;
            min-height: 100vh;
            margin-bottom: 50vh;
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
            --header-height-out: 100vh;
          }

          body {
            margin: 0;
          }
        `}
        </style>
      </div>
    )
  }