import { Link } from "@remix-run/react";

function Index() {
	return (
		<>
			<div>Hello</div>
			<Link to={"/notes"} className={"hover:underline  font-sans font-bold "}>
				go to Page
			</Link>
		</>
	);
}

export default Index;
