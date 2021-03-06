import React, { Component, MouseEvent, SyntheticEvent, TransitionEvent } from 'react';

class BusinessCard extends Component<IBusinessCardProps> {
	private lastScrollPos: number;
	private stopAutoScroll: boolean;

	constructor(props: IBusinessCardProps) {
		super(props);
		this.lastScrollPos = 0;
		this.stopAutoScroll = false;

		this.setupAutoScroll = this.setupAutoScroll.bind(this);
		this.scrollToTop = this.scrollToTop.bind(this);
		this.onBusinessCardTextClick = this.onBusinessCardTextClick.bind(this);
	}

	public componentDidMount() {
		this.setupAutoScroll();
	}

	public setupAutoScroll() {
		window.addEventListener('scroll', () => {
			const scrollTop =
				document.documentElement.scrollTop || document.body.scrollTop;
			if (scrollTop > this.lastScrollPos) {
				this.stopAutoScroll = true;
			}

			this.lastScrollPos = scrollTop;
		});
	}

	public scrollToTop() {
		const scrollTop =
			document.documentElement.scrollTop || document.body.scrollTop;
		if (!this.stopAutoScroll && scrollTop > 0) {
			window.scrollTo(0, scrollTop - scrollTop / 8);
			window.requestAnimationFrame(this.scrollToTop);
		}
	}

	public onBusinessCardTextClick(evt: MouseEvent) {
		this.stopAutoScroll = false;
		this.props.onMouseLeaveContainer({ currentTarget: (evt.target as HTMLElement).closest('.header-container') as HTMLElement });
		this.scrollToTop();
	}

	public onIconMouseOver(evt: MouseEvent) {
		const icon = evt.target as HTMLElement;
		const iconBracketGroup = icon.closest('.icon-bracket-group') as HTMLElement;
		const iconLabel = icon.closest('.business-card__label') as HTMLElement;
		iconBracketGroup.classList.add('hover');
		iconLabel.classList.add('hover');

		const businessCardContainer = icon.closest('.business-card-container') as HTMLElement;
		if (icon.classList.contains('icon--email')) {
			const textAt = businessCardContainer.querySelector(
				'.business-card___text__at',
			) as HTMLElement;
			textAt.classList.add('selected');
		} else if (icon.classList.contains('icon--me')) {
			const textVolle = businessCardContainer.querySelector('.business-card___text__volle') as HTMLElement;
			const textDot = businessCardContainer.querySelector('.business-card___text__dot') as HTMLElement;
			const textIo = businessCardContainer.querySelector('.business-card___text__io') as HTMLElement;
			textVolle.classList.remove('selected');
			textDot.classList.remove('selected');
			textIo.classList.remove('selected');
		} else if (
			icon.classList.contains('icon--insta') ||
			icon.classList.contains('icon--twittr') ||
			icon.classList.contains('icon--github') ||
			icon.classList.contains('icon--linkedn')
		) {
			const textLucas = businessCardContainer.querySelector(
				'.business-card___text__lucas',
			) as HTMLElement;
			textLucas.classList.remove('selected');

			if (!icon.classList.contains('icon--insta')) {
				const textDot = businessCardContainer.querySelector(
					'.business-card___text__dot',
				) as HTMLElement;
				textDot.classList.remove('selected');
			}
		}
	}

	public onIconMouseOut(evt: MouseEvent) {
		const icon = evt.target as HTMLElement;
		const iconBracketGroup = icon.closest('.icon-bracket-group') as HTMLElement;
		const iconLabel = icon.closest('.business-card__label') as HTMLElement;
		iconBracketGroup.classList.remove('hover');
		iconLabel.classList.remove('hover');

		const businessCardContainer = icon.closest('.business-card-container') as HTMLElement;
		if (icon.classList.contains('icon--email')) {
			const textAt = businessCardContainer.querySelector(
				'.business-card___text__at',
			) as HTMLElement;
			textAt.classList.remove('selected');
		} else if (icon.classList.contains('icon--me')) {
			const avatar = (icon.parentElement as HTMLElement).querySelector('.icon-me-avatar') as HTMLElement;
			icon.classList.remove('flip');
			avatar.classList.remove('flip');

			const textVolle = businessCardContainer.querySelector('.business-card___text__volle') as HTMLElement;
			const textDot = businessCardContainer.querySelector('.business-card___text__dot') as HTMLElement;
			const textIo = businessCardContainer.querySelector('.business-card___text__io') as HTMLElement;
			textVolle.classList.add('selected');
			textDot.classList.add('selected');
			textIo.classList.add('selected');
		} else if (
			icon.classList.contains('icon--insta') ||
			icon.classList.contains('icon--twittr') ||
			icon.classList.contains('icon--github') ||
			icon.classList.contains('icon--linkedn')
		) {
			const textLucas = businessCardContainer.querySelector(
				'.business-card___text__lucas',
			) as HTMLElement;
			textLucas.classList.add('selected');

			if (!icon.classList.contains('icon--insta')) {
				const textDot = businessCardContainer.querySelector(
					'.business-card___text__dot',
				) as HTMLElement;
				textDot.classList.add('selected');
			}
		}
	}

	public onMeClick(evt: MouseEvent) {
		const icon = evt.target as HTMLElement;
		const avatar = (icon.parentElement as HTMLElement).querySelector('.icon-me-avatar') as HTMLElement;
		icon.classList.add('flip');
		avatar.classList.add('flip');
	}

	public render() {
		return (
			<div
				className="business-card-container"
				onTransitionEnd={this.props.onTransitionEnd}
			>
				<div className="business-card-mouseout-buffer" />
				<div className="business-card__label business-card__label--top">
					<div className="icon-bracket-group">
						<a href="mailto:Lucas@Volle.io" aria-label="Email">
							<div
								className="icon icon--email"
								onMouseOver={this.onIconMouseOver}
								onMouseOut={this.onIconMouseOut}
								/>
						</a>
						<div className="bracket bracket--vert1" />
					</div>
					<div className="bracket bracket--horiz" />
					<div className="bracket-group">
						<div className="bracket bracket--vert2" />
						<div className="bracket bracket--vert2" />
					</div>
				</div>
				<div
					className="business-card__text"
					onClick={this.onBusinessCardTextClick}
				>
					<span className="business-card___text__lucas selected">
						Lucas
					</span>
					<span className="business-card___text__at">@</span>
					<span className="business-card___text__volle selected">
						Volle
					</span>
					<span className="business-card___text__dot selected">
						.
					</span>
					<span className="business-card___text__io selected">
						io
					</span>
				</div>
				<div className="business-card__label-group">
					<div className="business-card__label business-card__label--bottom">
						<div className="bracket-group">
							<div className="bracket bracket--vert2" />
							<div className="bracket bracket--vert2" />
						</div>
						<div className="bracket bracket--horiz" />
						<div className="icon-bracket-group">
							<div className="bracket bracket--vert1" />
							<div
								className="icon icon--me no-invert"
								onClick={this.onMeClick}
								onMouseOver={this.onIconMouseOver}
								onMouseOut={this.onIconMouseOut}
							/>
							<div className="icon-me-avatar no-invert" />
						</div>
					</div>
					<div className="business-card__label business-card__label--bottom">
						<div className="bracket-group">
							<div className="bracket bracket--vert2" />
							<div className="bracket bracket--vert2" />
						</div>
						<div className="bracket bracket--horiz" />
						<div className="bracket-group bracket-group--even">
							<div className="icon-bracket-group">
								<div className="bracket bracket--vert1" />
								<a href="https://www.instagram.com/volle.io/" aria-label="Instagram">
									<div
										className="icon icon--insta"
										onMouseOver={this.onIconMouseOver}
										onMouseOut={this.onIconMouseOut}
									/>
								</a>
							</div>
							<div className="icon-bracket-group">
								<div className="bracket bracket--vert1" />
								<a href="https://www.twitter.com/volleio" aria-label="Twitter">
									<div
										className="icon icon--twittr"
										onMouseOver={this.onIconMouseOver}
										onMouseOut={this.onIconMouseOut}
									/>
								</a>
							</div>
							<div className="icon-bracket-group">
								<div className="bracket bracket--vert1" />
								<a href="https://github.com/volleio" aria-label="GitHub">
									<div
										className="icon icon--github"
										onMouseOver={this.onIconMouseOver}
										onMouseOut={this.onIconMouseOut}
									/>
								</a>
							</div>
							<div className="icon-bracket-group">
								<div className="bracket bracket--vert1" />
								<a href="https://www.linkedin.com/in/volleio/" aria-label="LinkedIn">
									<div
										className="icon icon--linkedn"
										onMouseOver={this.onIconMouseOver}
										onMouseOut={this.onIconMouseOut}
									/>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className="business-card-sizer" />
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
							transform: scale(
									calc(0.6 + (0.4 * var(--header-height-out)))
								)
								translateY(
									calc(-140px * var(--header-height-in))
								);
							margin: auto;
							padding: 4px 40px 0 40px;

							background-color: rgba(
								255,
								255,
								255,
								var(--header-fade-out)
							);

							box-shadow: 0 1px 4px 2px
								rgba(
									50,
									50,
									50,
									calc(var(--header-fade-out) / 2 - 0.3)
								);
							border-radius: 2px;
						}

						@media (min-width: 900px) {
							.business-card-container {
								transform: scale(
										calc(
											0.6 +
												(0.6 * var(--header-height-out))
										)
									)
									translateY(
										calc(-140px * var(--header-height-in))
									);
							}
						}

						@media (max-width: 510px) {
							.business-card-container {
								transform: scale(
										calc(
											0.6 +
												(0.2 * var(--header-height-out))
										)
									)
									translateY(
										calc(-140px * var(--header-height-in))
									);
							}
						}

						@media (max-width: 370px) {
							.business-card-container {
								transform: scale(
										calc(
											0.6 +
												(0.1 * var(--header-height-out))
										)
									)
									translateY(
										calc(-140px * var(--header-height-in))
									);
							}
						}

						@media (max-width: 360px) {
							.business-card-container {
								transform: scale(
										calc(
											0.6 + (0 * var(--header-height-out))
										)
									)
									translateY(
										calc(-140px * var(--header-height-in))
									);
							}
						}

						.business-card__text {
							position: absolute;
							font-weight: 300;
							font-size: 67px;
							letter-spacing: 0.1px;
							margin-top: -3px;
							cursor: default;

							color: #c4c4c4;
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
							position: relative;
							display: flex;
							flex-direction: column;
							align-items: center;
						}

						.bracket {
							background-color: #c4c4c4;
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
							background-size: 24px 24px;
							box-sizing: content-box;
							border: 8px solid transparent;

							pointer-events: var(--header-fade-disabled);
							cursor: pointer;

							transform: scale(1);
							transition: all 0.1s ease-in-out;
						}
						.dark-mode .icon {
							filter: invert(1);
						}

						.icon-bracket-group.hover .icon {
							transform: scale(1.1);
						}

						.icon--email {
							background-image: url("/static/images/email.svg?sprite");
						}
						.icon-bracket-group.hover .icon--email {
							background-image: url("/static/images/email-selected.svg?sprite");
							transform: scale(1);
							background-size: 28px 28px;
						}

						.icon--me {
							opacity: 1;
							background-image: url("/static/images/me.svg?sprite");
							transform: rotateY(0deg) scale(1) translateY(0);
							transition: all 0.1s ease-in-out,
								transform 0.3s ease-in-out,
								opacity 0.3s ease-in-out;
						}
						.icon-bracket-group.hover .icon--me {
							background-image: url("/static/images/me-selected.svg?sprite");
						}
						.icon-bracket-group.hover .icon--me.flip {
							opacity: 0;
							transform: rotateY(180deg) scale(3) translateY(6px);
						}

						.icon-me-avatar {
							position: absolute;
							width: 24px;
							height: 24px;
							top: 16px;
							border-radius: 50%;
							background-image: url('/static/images/me-avatar.svg?sprite');
							background-repeat: no-repeat;
							background-position: center;
							background-size: contain;
							box-shadow: 0 0.3px 1px 0px rgba(0, 0, 0, 0.2);
							backface-visibility: hidden;
							transform: rotateY(180deg) scale(0);
							transform-origin: top;
							transition: all 0.3s ease-in-out;
							pointer-events: none;
						}
						.icon-bracket-group.hover .icon-me-avatar.flip {
							transform: rotateY(360deg) scale(3);
						}

						.icon--insta {
							background-image: url("/static/images/insta.svg?sprite");
						}
						.icon-bracket-group.hover .icon--insta {
							background-image: url("/static/images/insta-selected.svg?sprite");
						}

						.icon--twittr {
							background-image: url("/static/images/twittr.svg?sprite");
						}
						.icon-bracket-group.hover .icon--twittr {
							background-image: url("/static/images/twittr-selected.svg?sprite");
						}

						.icon--github {
							background-image: url("/static/images/github.svg?sprite");
						}
						.icon-bracket-group.hover .icon--github {
							background-image: url("/static/images/github-selected.svg?sprite");
						}

						.icon--linkedn {
							background-image: url("/static/images/linkedn.svg?sprite");
						}
						.icon-bracket-group.hover .icon--linkedn {
							background-image: url("/static/images/linkedn-selected.svg?sprite");
						}

						// preload hover state background images to prevent flashing
						.business-card-container::after {
							position: absolute;
							width: 0;
							height: 0;
							overflow: hidden;
							z-index: -1;
							content: url("/static/images/email-selected.svg?sprite")
								url("/static/images/me-selected.svg?sprite")
								url("/static/images/insta-selected.svg?sprite")
								url("/static/images/twittr-selected.svg?sprite")
								url("/static/images/github-selected.svg?sprite")
								url("/static/images/linkedn-selected.svg?sprite");
						}

						// when scrolled, add some lower buffer to header around card to prevent accidental mouseouts
						.business-card-mouseout-buffer {
							width: 420px;
							height: 320px;
							position: absolute;
						}
					`}
				</style>
			</div>
		);
	}
}

interface IBusinessCardProps {
	onMouseLeaveContainer: (evt: MouseEvent | { currentTarget: HTMLElement }) => void;
	onTransitionEnd: (evt: TransitionEvent) => void;
}

export default BusinessCard;
