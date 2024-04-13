import { env as publicEnv } from '$env/dynamic/public';
import { env as privateEnv } from '$env/dynamic/private';

const { PUBLIC_CHARTMUSEUM_URL } = publicEnv;
const { CHARTMUSEUM_BASICAUTH_USERNAME, CHARTMUSEUM_BASICAUTH_PASSWORD } = privateEnv;

export async function load({ fetch, params }) {
	const { chartName } = params;
	const url = `${PUBLIC_CHARTMUSEUM_URL}/api/charts/${chartName}`;
	const options = {};
	if (CHARTMUSEUM_BASICAUTH_USERNAME && CHARTMUSEUM_BASICAUTH_PASSWORD) {
		const headers = new Headers();
		headers.append(
			'Authorization',
			'Basic ' +
				Buffer.from(CHARTMUSEUM_BASICAUTH_USERNAME + ':' + CHARTMUSEUM_BASICAUTH_PASSWORD).toString(
					'base64'
				)
		);
	}

	const res = await fetch(url, options);
	const chart = await res.json();
	return { chart };
}
