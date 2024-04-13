import { env as publicEnv } from '$env/dynamic/public';
import { env as privateEnv } from '$env/dynamic/private';

const { PUBLIC_CHARTMUSEUM_URL } = publicEnv;
const { CHARTMUSEUM_BASIC_AUTH_USERNAME, CHARTMUSEUM_BASIC_AUTH_PASSWORD } = privateEnv;

export async function load({ fetch }) {
	const url = `${PUBLIC_CHARTMUSEUM_URL}/api/charts`;
	const options = {};
	if (CHARTMUSEUM_BASIC_AUTH_USERNAME && CHARTMUSEUM_BASIC_AUTH_PASSWORD) {
		const headers = new Headers();
		headers.append(
			'Authorization',
			'Basic ' +
				Buffer.from(
					CHARTMUSEUM_BASIC_AUTH_USERNAME + ':' + CHARTMUSEUM_BASIC_AUTH_PASSWORD
				).toString('base64')
		);
	}
	const res = await fetch(url, options);
	const charts = await res.json();
	return { charts };
}
