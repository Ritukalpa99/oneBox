import React from "react";

function MailTab({ mails }) {
	return (
		<>
			<div className="md:flex w-9">
				<ul className=" space-y space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0">
					{mails?.map((mail) => (
						<li key={mail.id}>
							<div
								className="flex-column items-center px-4 py-3 hover:cursor-pointer text-white bg-blue-300 rounded-lg active w-max dark:bg-blue-600"
								aria-current="page"
							>
								<h3 className="text-lg">{mail.fromName}</h3>
								<p className="text-gray-400">
									{mail.subject.substring(0,10)}...
								</p>
							</div>
						</li>
					))}
				</ul>
				<div className="p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full">
				
				</div>
			</div>
		</>
	);
}

export default MailTab;
