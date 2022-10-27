// This is  a utility function to help to make it easy to pull information from the BackEnd Code.
import { Experience } from "../typings";

export const fetchExperiences = async () => {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`
	);

	const data = await res.json();
	const experiences: Experience[] = data.experiences;

	//console.log("fetching", experiences);
	return experiences;
};
