export default function Frame(props) {
    return (
      <div className="frame-container">
        {props.children}

        <style jsx>
        {`
          .frame-container {
            border: 1px solid rgba(50, 50, 50, 0.1);
            border-radius: 6px;
			background-image: url('${props.image}');
          }
        `}
        </style>
      </div>
    )
  }