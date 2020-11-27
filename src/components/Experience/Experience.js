import React from 'react';

import styled from 'styled-components';

import { device, until } from '../../utilities/mixins';

const Container = styled.div`
  display: flex;
  align-items: flex-start;

	width: 95%;
	margin: 0 auto;

	padding-bottom: 20px;

  ${until(
    device.iPhone(),
    () => `
		display: block;

		margin-bottom: 20px;

		padding-bottom: 0;

		text-align: left;
	`,
  )}

  img {
    margin-top: 5px;

    border-radius: 5%;

    width: 50px;

    ${until(
      device.iPhone(),
      () => `
			margin: 0;
		`,
    )}
  }

  div {
    display: flex;
    flex-direction: column;

		position: relative;

    margin-left: 1rem;

		width: 100%;

    text-align: left;

    font-size: var(--copy-size);

    ${until(
      device.iPhone(),
      () => `
			margin: 0;
		`,
    )}

    aside {
      color: #a6a6a6;
    }

    span {
      margin-top: 5px;

			width: 90%;

			${until(
      device.iPhone(),
      () => `
				width: 100%;
		`,
    )}
    }
  }
`;

const Experience = (company, title, location, duration, description, image) => (
  <Container className="experience">
    <img loading="lazy" src={image} alt={company} />
    <div>
      <strong>{title}</strong>
      <aside>{duration}</aside>
      <aside>{location}</aside>
      <span>{description()}</span>
    </div>
  </Container>
);

export default Experience;
