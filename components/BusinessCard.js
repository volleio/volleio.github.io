export default function BusinessCard(props) {
    return (
      <div className="business-card-container">
        <div className="business-card__label business-card__label--top">
          <div className="icon icon--email"></div>
          <div className="bracket bracket--vert1"></div>
          <div className="bracket bracket--horiz"></div>
          <div className="bracket-group">
            <div className="bracket bracket--vert2"></div>
            <div className="bracket bracket--vert2"></div>
          </div>
        </div>
        <div className="business-card__text">
          Lucas<span className="business-card___text__at">@</span>Volle.io
        </div>
        <div className="business-card__label business-card__label--bottom">
          <div>
            <div className="bracket-group">
              <div className="bracket bracket--vert2"></div>
              <div className="bracket bracket--vert2"></div>
            </div>
            <div className="bracket bracket--horiz"></div>
            <div className="bracket bracket--vert1"></div>
            <div className="icon icon--smiley"></div>
          </div>
          <div>
            <div className="bracket-group">
              <div className="bracket bracket--vert2"></div>
              <div className="bracket bracket--vert2"></div>
            </div>
            <div className="bracket bracket--horiz"></div>
            <div className="bracket-group bracket-group--even">
              <div className="bracket bracket--vert1"></div>
              <div className="bracket bracket--vert1"></div>
              <div className="bracket bracket--vert1"></div>
            </div>
            <div className="bracket-group bracket-group--even">
              <div className="icon icon--insta"></div>
              <div className="icon icon--twitter"></div>
              <div className="icon icon--github"></div>
            </div>
          </div>
        </div>
        <style jsx>
        {`
          .business-card-container {
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 500px;
            height: 250px;
            margin: auto;
            padding-top: 4px;

            background-color: #FFF;
            background-image: url("/static/business-card.svg");
            background-positoin: center;

            border: 1px solid black;
            border-radius: 1px;
          }

          .business-card__text {
            position: absolute;
            font-weight: 300;
            font-size: 67px;
            letter-spacing: 0.1px;
	          margin-top: -3px;
          }

          .business-card___text__at {
            color: #C4C4C4;
          }

          .business-card__label--top {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 400px;
            margin-bottom: 90px;
          }

          .business-card__label--bottom {
            display: flex;
            justify-content: space-between;
            width: 400px;
          }

          .business-card__label--bottom > div {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .business-card__label--bottom > div:first-child {
            width: 146px;
          }

          .business-card__label--bottom > div:last-child {
            width: 194px;
          }

          .bracket-group {
            width: 100%;
            display: flex;
            justify-content: space-between;
          }

          .bracket-group.bracket-group--even {
            justify-content: space-evenly;
          }

          .bracket {
            background-color: #C4C4C4;
          }

          .bracket--vert1 {
            width: 2px;
            height: 8px;
          }

          .bracket--vert2 {
            width: 2px;
            height: 10px;
          }

          .bracket--horiz {
            width: 100%;
            height: 2px;
          }

          .icon {
            width: 24px;
            height: 24px;
            background-repeat: no-repeat;
            background-position: center;
          }

          .icon-email {
            background-image: url("/static/icon-email.svg");
          }

          .icon-smiley {
            background-image: url("/static/icon-smiley.svg");
          }

          .icon-insta {
            background-image: url("/static/icon-insta.svg");
          }

          .icon-twitter {
            background-image: url("/static/icon-twitter.svg");
          }

          .icon-github {
            background-image: url("/static/icon-github.svg");
          }
        `}
        </style>
      </div>
    )
  }