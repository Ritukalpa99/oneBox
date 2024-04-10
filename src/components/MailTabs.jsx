import React, { useState } from "react";
import Mail from "./Mail";

function MailTabs({ mails }) {
	const [clicked, setClicked] = useState(false);
	const [id, setId] = useState("");
	const handleClick = (tId) => {
		setClicked(true);
		setId(tId);
	};
	return (
		<>
			<div className="border-2 border-sky-500 flex gap-1 h-[85vh]">
				<div className="border-2 border-yellow-500 w-1/3">
					<ul>
						{mails?.map((mail) => (
							<li
								key={mail.id}
								onClick={() => handleClick(mail.threadId)}
							>
								<div className="px-2">
									<h3 className="text-lg">{mail.fromName}</h3>
									<p className="text-gray-400">
										{mail.subject.substring(0, 20)}...
									</p>
								</div>
								<hr />
							</li>
						))}
					</ul>
				</div>
				<div className="border-2  border-red-500 w-2/3">
					{!clicked ? (
						<div className="flex justify-center h-full items-center">
							<h3>Select a mail</h3>
						</div>
					) : (
						<Mail threadId={id} />
					)}
				</div>
			</div>
		</>
	);
}

export default MailTabs;
