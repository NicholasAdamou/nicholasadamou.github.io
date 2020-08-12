import React from "react";

import styled from "styled-components";

import moment from "moment";

import { parseURL } from "../../utilities/utilities";

import { device, until } from "../../utilities/mixins";

const Container = styled.article`
	display: flex;
	align-items: center;
	justify-content: space-between;

	margin-bottom: 25px;

	&:last-child {
		margin-bottom: 0;
	}

	${until(
    device.iPhone(),
    () => `
			justify-content: center;
			flex-direction: column-reverse;
	`
  )}

	.masthead {
		width: 150px;

		border-radius: 8px;

		${until(
    device.iPhone(),
    () => `
			width: 280px;

			margin-bottom: 10px;
	`
  )}
	}

	.article-details {
		width: 70%;

		${until(
    device.iPhone(),
    () => `
			width: 100%;
	`
  )}

		.link {
			h4 {
				font-size: 1.1rem;

				margin-bottom: 3px;
			}
		}

		p {
			margin-bottom: 3px;
		}

		small {
			color: var(--light-grey);
		}

		div {
			display: flex;
			align-items: center;

			margin-bottom: 3px;

			img {
				margin-right: 10px;

				width: 15px;
				height: 15px;
			}

			p {
				color: var(--light-grey);
			}
		}
	}
`;


const Article = (title, description, date, image, link) => {
	const URL = parseURL(link);

	return (
		<Container>
			<div className="article-details">
				<div>
					<img loading="lazy" src={URL.favicon} alt={`${URL.parts[1]}'s favicon`} />
					<p>{URL.parts[1]}</p>
				</div>
				<a href={link} className="link" target="_blank" rel="noopener noreferrer">
					<h4>{title}</h4>
				</a>
				<p>{description}</p>
				<small>
					{
						(moment(new Date(date)).fromNow() === 'a year ago') || (moment(new Date(date)).fromNow() === '3 months ago')
							?
								`${date}`
							:
								moment(new Date(date)).fromNow()
					}
				</small>
			</div>
			{
				image !== ''
					?
						<img loading="lazy" src={image} className="masthead" alt="article masthead" />
					:
						<div style={{width: 150}}></div>
			}
		</Container>
	)
}

export default Article;
