// this is to make it easy to pull information from the build
import { PageInfo } from "../typings";

export const fetchPageInfo = async () => {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`
	);

	const data = await res.json();
	const pageInfo: PageInfo = data.pageInfo;

	//console.log("fetching", pageInfo);
	return pageInfo;
};
