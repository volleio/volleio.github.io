export default function Card(props) {
    return (
      <div className="card-container">
        <div className="card-header">
            <h1>{props.title}</h1>
        </div>
        <div className="card-content">
            {props.children}
        </div>

        <style jsx>
        {`
          .card-container {
            padding: 16px;
          	margin: 16px;
            max-width: 400px;
            max-height: 400px;
            display: flex;
            flex-direction: column;

            box-shadow: 0 1px 4px 2px rgba(50, 50, 50, 0.1);
            border: 1px solid rgba(50, 50, 50, 0.1);
            border-radius: 2px;
          }

          .card-header {

          }

          .card-content {
            font-size: 1em;
            overflow: auto;
          }
        `}
        </style>
      </div>
    )
  }