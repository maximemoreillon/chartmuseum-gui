import { env } from '$env/dynamic/public';

export async function load({ fetch, params }) {
	const { chartName } = params;
	const res = await fetch(`${env.PUBLIC_CHARTMUSEUM_URL}/api/charts/${chartName}`);
	const chart = await res.json();
	return { chart };
}
