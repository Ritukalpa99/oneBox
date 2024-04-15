import React, { useEffect, useState } from "react";
import Skeleton from "./Skeleton";
import LogoutModal from "./Auth/Modal/LogoutModal";
import ReplyModal from "./Auth/Modal/ReplyModal";
import DeleteModal from "./Auth/Modal/DeleteModal";
import parse from "html-react-parser";

function Mail({ data }) {
	const [singleMail, setSingleMail] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	console.log(data);
	useEffect(() => {
		const fetchMail = async () => {
			const token = JSON.parse(localStorage.getItem("UserId"));

			try {
				const res = await fetch(
					`${import.meta.env.VITE_GET_MAIL}:${data.threadId}`,
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
	}, [data.threadId]);

	return (
		<>
			{isLoading ? (
				<Skeleton />
			) : (
				<div>
					<h2>Subject : {data.subject}</h2>
					<h3>From : {data.fromEmail}</h3>
					<h3>To : {data.toEmail}</h3>
					<h3>Thread Id : {data.threadId}</h3>
					{/* <p>Body : {data.body}</p> */}
					<p>Body : {parse(data.body)}</p>
					<div className="flex mt-7 gap-2">
						<DeleteModal />
						<ReplyModal />
					</div>
				</div>
			)}
		</>
	);
}

export default Mail;
