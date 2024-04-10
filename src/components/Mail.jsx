import React, { useEffect, useState } from "react";
import Skeleton from "./Skeleton";

function Mail({ threadId }) {
	const [singleMail, setSingleMail] = useState({});
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const fetchMail = async () => {
			const token = JSON.parse(localStorage.getItem("UserId"));

			try {
				const res = await fetch(
					`${import.meta.env.VITE_GET_MAIL}:${threadId}`,
					{
						method: "GET",
						headers: {
							Authorization: `Bearer ${token}`,
						},
					}
				);
				if (!res.ok) {
					throw new Error("Error is response");
				}
				const data = await res.json();
				setSingleMail(data);
				setIsLoading(false);
			} catch (error) {
				console.log(error);
			}
		};

		// fetchMail();
	}, [threadId]);

	return (
		<>
			{isLoading ? (
				<Skeleton />
			) : (
				<div>
					<h2>Subject : {singleMail.subject}</h2>
					<h3>From : {singleMail.fromEmail}</h3>
					<h3>To : {singleMail.toEmail}</h3>
					<h3>Thread Id : {threadId}</h3>
					<p>Body : {singleMail.body}</p>
				</div>
			)}
		</>
	);
}

export default Mail;
