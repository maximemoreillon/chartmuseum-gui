import { env } from '$env/dynamic/public';

export async function load({ fetch, params }) {
	const res = await fetch(`${env.PUBLIC_CHARTMUSEUM_URL}/api/charts`);
	const charts = await res.json();
	return { charts };
}
