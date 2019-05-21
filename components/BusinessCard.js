import React, { Component } from "react";
import ReactDOM from "react-dom";

class BusinessCard extends Component {
  constructor(props) {
      super(props);
  }

  onIconMouseOver(evt) {
    const icon = evt.target;
    const iconBracketGroup = icon.closest(".icon-bracket-group");
    const iconLabel = icon.closest(".business-card__label");
    iconBracketGroup.classList.add("hover");
    iconLabel.classList.add("hover");

    const businessCardContainer = icon.closest(".business-card-container");
    if (icon.classList.contains("icon--email"))
    {
      const textAt = businessCardContainer.querySelector(".business-card___text__at");
      textAt.classList.add("selected");
    }
    else if (icon.classList.contains("icon--me"))
    {
      const textVolleio = businessCardContainer.querySelector(".business-card___text__volleio");
      textVolleio.classList.remove("selected");
    }
    else if (icon.classList.contains("icon--insta") || icon.classList.contains("icon--twitter") ||
      icon.classList.contains("icon--github") || icon.classList.contains("icon--linkedin"))
    {
      const textLucas = businessCardContainer.querySelector(".business-card___text__lucas");
      textLucas.classList.remove("selected");
    }
  }

  onIconMouseOut(evt) {
    const icon = evt.target;
    const iconBracketGroup = icon.closest(".icon-bracket-group");
    const iconLabel = icon.closest(".business-card__label");
    iconBracketGroup.classList.remove("hover");
    iconLabel.classList.remove("hover");

    const businessCardContainer = icon.closest(".business-card-container");
    if (icon.classList.contains("icon--email"))
    {
      const textAt = businessCardContainer.querySelector(".business-card___text__at");
      textAt.classList.remove("selected");
    }
    else if (icon.classList.contains("icon--me"))
    {
      const textVolleio = businessCardContainer.querySelector(".business-card___text__volleio");
      textVolleio.classList.add("selected");
    }
    else if (icon.classList.contains("icon--insta") || icon.classList.contains("icon--twitter") ||
      icon.classList.contains("icon--github") || icon.classList.contains("icon--linkedin"))
    {
      const textLucas = businessCardContainer.querySelector(".business-card___text__lucas");
      textLucas.classList.add("selected");
    }
  }

  render() {
    return (
      <div className="business-card-container">
        <div className="business-card__label business-card__label--top">
          <div className="icon-bracket-group">
            <a href="mailto:Lucas@Volle.io">
              <div className="icon icon--email" onMouseOver={this.onIconMouseOver} onMouseOut={this.onIconMouseOut}></div>
            </a>
            <div className="bracket bracket--vert1"></div>
          </div>
          <div className="bracket bracket--horiz"></div>
          <div className="bracket-group">
            <div className="bracket bracket--vert2"></div>
            <div className="bracket bracket--vert2"></div>
          </div>
        </div>
        <div className="business-card__text">
        <span className="business-card___text__lucas selected">Lucas</span>
        <span className="business-card___text__at">@</span>
        <span className="business-card___text__volleio selected">Volle.io</span>
        </div>
        <div className="business-card__label-group">
          <div className="business-card__label business-card__label--bottom">
            <div className="bracket-group">
              <div className="bracket bracket--vert2"></div>
              <div className="bracket bracket--vert2"></div>
            </div>
            <div className="bracket bracket--horiz"></div>
            <div className="icon-bracket-group">
              <div className="bracket bracket--vert1"></div>
              <div className="icon icon--me" onMouseOver={this.onIconMouseOver} onMouseOut={this.onIconMouseOut}></div>
            </div>
          </div>
          <div className="business-card__label business-card__label--bottom">
            <div className="bracket-group">
              <div className="bracket bracket--vert2"></div>
              <div className="bracket bracket--vert2"></div>
            </div>
            <div className="bracket bracket--horiz"></div>
            <div className="bracket-group bracket-group--even">
              <div className="icon-bracket-group">
                <div className="bracket bracket--vert1"></div>
                <a href="https://www.instagram.com/volle.io/">
                  <div className="icon icon--insta" onMouseOver={this.onIconMouseOver} onMouseOut={this.onIconMouseOut}></div>
                </a>
              </div>
              <div className="icon-bracket-group">
                <div className="bracket bracket--vert1"></div>
                <a href="https://www.twitter.com/volleio">
                  <div className="icon icon--twitter" onMouseOver={this.onIconMouseOver} onMouseOut={this.onIconMouseOut}></div>
                </a>
              </div>
              <div className="icon-bracket-group">
                <div className="bracket bracket--vert1"></div>
                <a href="https://github.com/volleio">
                  <div className="icon icon--github" onMouseOver={this.onIconMouseOver} onMouseOut={this.onIconMouseOut}></div>
                </a>
              </div>
              <div className="icon-bracket-group">
                <div className="bracket bracket--vert1"></div>
                <a href="https://www.linkedin.com/in/volleio/">
                  <div className="icon icon--linkedin" onMouseOver={this.onIconMouseOver} onMouseOut={this.onIconMouseOut}></div>
                </a>
              </div>
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
            transform: scale(calc(0.6 + (0.4 * var(--header-height-out)))) 
                        translateY(calc(-140px * var(--header-height-in)));
            margin: auto;
            padding: 4px 40px 0 40px;

            background-color: rgba(255, 255, 255, var(--header-fade-out));

            box-shadow: 0 1px 4px 2px rgba(50, 50, 50, calc(var(--header-fade-out) / 2 - 0.3));
            border-radius: 2px;

            transition: transform 0.1s ease-in-out, box-shadow 0.1s ease-in-out;
          }

          @media (min-width: 900px) {
            .business-card-container {
              transform: scale(calc(0.6 + (0.6 * var(--header-height-out)))) 
                        translateY(calc(-140px * var(--header-height-in)));
            }
          }

          @media (max-width: 550px) {
            .business-card-container {
              transform: scale(calc(0.6 + (0.2 * var(--header-height-out)))) 
                        translateY(calc(-140px * var(--header-height-in)));
            }
          }

          @media (max-width: 450px) {
            .business-card-container {
              transform: scale(calc(0.6 + (0.02 * var(--header-height-out)))) 
                        translateY(calc(-140px * var(--header-height-in)));
            }
          }

          {/* .business-card-container:hover {
            box-shadow: 0 2px 10px 2px rgba(50, 50, 50, calc(var(--header-fade-out) / 2 - 0.3));
          } */}
          
          .business-card__text {
            position: absolute;
            font-weight: 300;
            font-size: 67px;
            letter-spacing: 0.1px;
            margin-top: -3px;

            color: #C4C4C4;
          }

          .business-card__text > .selected {
            color: #323232;

            transition: color 0.1s ease-in-out;
          }

          .business-card__label-group {
            display: flex;
            justify-content: space-between;
            width: 400px;
          }

          .business-card__label {
            opacity: var(--header-fade-out);
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
            flex-direction: column;
            align-items: center;
          }

          .business-card__label--bottom:first-child {
            width: 146px;
          }

          .business-card__label--bottom:last-child {
            width: 194px;
          }

          .bracket-group {
            width: 100%;
            display: flex;
            justify-content: space-between;
          }

          .bracket-group.bracket-group--even {
            justify-content: center;
          }

          .icon-bracket-group {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .bracket {
            background-color: #C4C4C4;
            transition: background-color 0.1s ease-in-out;
          }

          .bracket--vert1 {
            width: 2px;
            height: 8px;
          }

          .icon-bracket-group.hover > .bracket--vert1 {
            background-color: #888888;
          }

          .bracket--vert2 {
            width: 2px;
            height: 10px;
          }

          .business-card__label.hover .bracket--vert2 {
            background-color: #888888;
          }

          .bracket--horiz {
            width: 100%;
            height: 2px;
          }

          .business-card__label.hover .bracket--horiz {
            background-color: #888888;
          }

          .icon {
            width: 24px;
            height: 24px;
            background-repeat: no-repeat;
            background-position: center;
            background-size: contain;
            box-sizing: content-box;
            border: 8px solid transparent;

            transition: all 0.1s ease-in-out;
            cursor: pointer;
          }

          .icon-bracket-group.hover .icon {
            transform: scale(1.1);
          }

          .icon--email {
            background-image: url("/static/icon-email.svg");
          }
          .icon-bracket-group.hover .icon--email {
            background-image: url("/static/icon-email-selected.svg");
          }

          .icon--me {
            background-image: url("/static/icon-me.svg");
          }
          .icon-bracket-group.hover .icon--me {
            background-image: url("/static/icon-me-selected.svg");
          }

          .icon--insta {
            background-image: url("/static/icon-insta.svg");
          }
          .icon-bracket-group.hover .icon--insta {
            background-image: url("/static/icon-insta-selected.svg");
          }

          .icon--twitter {
            background-image: url("/static/icon-twitter.svg");
          }
          .icon-bracket-group.hover .icon--twitter {
            background-image: url("/static/icon-twitter-selected.svg");
          }

          .icon--github {
            background-image: url("/static/icon-github.svg");
          }
          .icon-bracket-group.hover .icon--github {
            background-image: url("/static/icon-github-selected.svg");
          }

          .icon--linkedin {
            background-image: url("/static/icon-linkedin.svg");
          }
          .icon-bracket-group.hover .icon--linkedin {
            background-image: url("/static/icon-linkedin-selected.svg");
          }
        `}
        </style>
      </div>
    )
  }
}

export default BusinessCard;