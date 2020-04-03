import React from 'react';

import Repo from "./components/Repo/Repo";

import './index.scss'

import FooterText from "../../components/FooterText/FooterText";

const OpenSource = () => (
	<section id="open-source">
		<h2 className="title">Open Source</h2>
		<p className="subtitle">
			I am an{' '}
			<a
				href="http://git-awards.com/users/nicholasadamou"
				target="_blank"
				aria-hidden="true"
				rel="noopener noreferrer"
				className="link"
			>
				avid open-sourcer
			</a>
			.{' '}
		</p>
		<p className="subtitle" style={{ marginTop: -18 }}>
			I have{' '}
			<a
				href="https://github.com/nicholasadamou"
				target="_blank"
				aria-hidden="true"
				rel="noopener noreferrer"
				className="link"
			>
				many repositories
			</a>
			{' '}. Take a <span role="img" aria-label="eyes">👀</span>.
		</p>

		<div className="repositories">
			{
				Repo(
				"https://github.com/nicholasadamou/set-me-up",
				"🛠",
				"hammer and wrench",
				)
			}
			{
				Repo(
				"https://github.com/nicholasadamou/set-me-up-blueprint",
				"🛠",
				"hammer and wrench",
				)
			}
			{
				Repo(
					"https://github.com/nicholasadamou/utilities",
					"🛠",
					"hammer and wrench",
				)
			}
		</div>

		{
			FooterText(
				"More can be found on my ",
				"GitHub",
				"https://github.com/nicholasadamou",
				"github"
			)
		}
	</section>
);

export default OpenSource;
