import React from 'react';

import LambdaBadge from '../assets/full-stack-web-development-120x120.png';

export default function Logos() {
	return (
		<div id="logosSection">
			<a
				href="https://www.credly.com/users/peter-lofland/badges"
				target="_blank"
				rel="noreferrer"
			>
				<img
					src={LambdaBadge}
					alt="Lambda School full stack web development badge"
				/>
			</a>
		</div>
	);
}
