// this is to make it easy to pull information from the build
import { Skill } from "../typings";

export const fetchSkills = async () => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`);

	const data = await res.json();
	const skills: Skill[] = data.skills;

	//console.log("fetching", skills);
	return skills;
};
