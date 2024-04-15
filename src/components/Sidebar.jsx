import React, { useEffect, useState } from "react";
import MailTab from "./MailTab";
import MailTabs from "./MailTabs";
import LogoutModal from "./Auth/Modal/LogoutModal";

function Sidebar() {
	const DUMMY_DATA = {
		status: 200,
		data: [
			{
				id: 2,
				fromName: "Emma Smith",
				fromEmail: "emma@example.com",
				toName: "Bob",
				toEmail: "bob@example.com",
				cc: null,
				bcc: null,
				threadId: 2,
				messageId: "<5678efgh@example.com>",
				inReplyTo: null,
				references: null,
				subject: "Meeting Reminder",
				body: "<p>Hi Bob, Don't forget our meeting tomorrow at 10 AM.</p>",
				isRead: true,
				folder: "INBOX",
				uid: 124,
				sentAt: "2024-04-11T15:00:00.000Z",
				archivedAt: null,
				createdAt: "2024-04-11T15:05:00.000Z",
				updatedAt: "2024-04-11T15:05:00.000Z",
				deletedAt: null,
			},
			{
				id: 4,
				fromName: "Shaw Adley",
				fromEmail: "shaw@getmemeetings.com",
				toName: "",
				toEmail: "mitrajit2022@gmail.com",
				cc: null,
				bcc: null,
				threadId: 4,
				messageId: "<a5dcWbm1ac5e46d38746648c3e2f6d2c@getmemeetings.com>",
				inReplyTo: "<4a5cWemdbfda475fabaf856ef5e806a7@gmail.com>",
				references: "<4a5cWemdbfda475fabaf856ef5e806a7@gmail.com>",
				subject: "Test mail",
				body: "<p>Test mail</p>",
				isRead: true,
				folder: "INBOX",
				uid: 594,
				sentAt: "2023-11-23T04:08:45.000Z",
				archivedAt: null,
				createdAt: "2023-11-23T07:38:46.000Z",
				updatedAt: "2023-11-23T07:38:46.000Z",
				deletedAt: null,
			},
			{
				id: 1,
				fromName: "John Doe",
				fromEmail: "john@example.com",
				toName: "Alice",
				toEmail: "alice@example.com",
				cc: null,
				bcc: null,
				threadId: 1,
				messageId: "<1234abcd@example.com>",
				inReplyTo: null,
				references: null,
				subject: "Hello Alice",
				body: "<p>Hi Alice, How are you?</p>",
				isRead: true,
				folder: "INBOX",
				uid: 123,
				sentAt: "2024-04-10T10:00:00.000Z",
				archivedAt: null,
				createdAt: "2024-04-10T10:05:00.000Z",
				updatedAt: "2024-04-10T10:05:00.000Z",
				deletedAt: null,
			},
			{
				id: 3,
				fromName: "Sarah Johnson",
				fromEmail: "sarah@example.com",
				toName: "David",
				toEmail: "david@example.com",
				cc: null,
				bcc: null,
				threadId: 3,
				messageId: "<abcd1234@example.com>",
				inReplyTo: null,
				references: null,
				subject: "Project Update",
				body: "<p>Hi David, Here's the latest update on the project.</p>",
				isRead: false,
				folder: "INBOX",
				uid: 125,
				sentAt: "2024-04-12T09:30:00.000Z",
				archivedAt: null,
				createdAt: "2024-04-12T09:35:00.000Z",
				updatedAt: "2024-04-12T09:35:00.000Z",
				deletedAt: null,
			},
			{
				id: 5,
				fromName: "Alexandra Lee",
				fromEmail: "alexandra@example.com",
				toName: "Chris",
				toEmail: "chris@example.com",
				cc: null,
				bcc: null,
				threadId: 5,
				messageId: "<ijkl9012@example.com>",
				inReplyTo: null,
				references: null,
				subject: "Upcoming Event",
				body: "<p>Hi Chris, Just a reminder about the upcoming event next week.</p>",
				isRead: false,
				folder: "INBOX",
				uid: 127,
				sentAt: "2024-04-12T11:00:00.000Z",
				archivedAt: null,
				createdAt: "2024-04-12T11:05:00.000Z",
				updatedAt: "2024-04-12T11:05:00.000Z",
				deletedAt: null,
			},
		],
	};
	const [mails, setMails] = useState(DUMMY_DATA.data);
	const [openModal, setOpenModal] = useState(false);

	const [darkMode, setDarkMode] = useState(false);

	const handleLogout = () => {
		console.log("lockout clicked");
		setOpenModal(true);
	};
	useEffect(() => {
		document.querySelector("html").classList.remove("light", "dark");
		document.querySelector("html").classList.add(darkMode ? "dark" : "light");
	}, [darkMode]);

	return (
		<>
			<nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
				<div className="px-3 py-3 lg:px-5 lg:pl-3">
					<div className="flex items-center justify-between">
						<div className="flex items-center justify-start rtl:justify-end">
							<button
								data-drawer-target="logo-sidebar"
								data-drawer-toggle="logo-sidebar"
								aria-controls="logo-sidebar"
								type="button"
								className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
							>
								<span className="sr-only">Open sidebar</span>
								<svg
									className="w-6 h-6"
									aria-hidden="true"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										clipRule="evenodd"
										fillRule="evenodd"
										d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
									></path>
								</svg>
							</button>
							<a
								href="https://flowbite.com"
								className="flex ms-2 md:me-24"
							>
								<span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
									OneMail
								</span>
							</a>
						</div>
						<div className="flex items-center">
							<div className="flex items-center ms-3">
								<div>
									<label className="inline-flex items-center cursor-pointer">
										<input
											type="checkbox"
											value=""
											className="sr-only peer"
											checked={darkMode}
											onChange={(e) => setDarkMode(e.target.checked)}
										/>
										<div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
										<span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
											{darkMode ? "Light" : "Dark"}
										</span>
									</label>
								</div>
								<div
									className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
									id="dropdown-user"
								>
									<ul
										className="py-1"
										role="none"
									>
										<li>
											<a
												href="#"
												className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
												role="menuitem"
											>
												Inbox
											</a>
										</li>
										<li>
											<a
												href="#"
												className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
												role="menuitem"
											>
												Settings
											</a>
										</li>
										<li>
											<a
												href="#"
												className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
												role="menuitem"
											>
												Earnings
											</a>
										</li>
										<li>
											<a
												href="#"
												className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
												role="menuitem"
											>
												Sign out
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</nav>

			<aside
				id="logo-sidebar"
				className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
				aria-label="Sidebar"
			>
				<div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
					<ul className="space-y-2 font-medium">
						<li>
							<a
								href="/"
								className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
							>
								<svg
									className="w-6 h-6 text-gray-800 dark:text-white"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									fill="none"
									viewBox="0 0 24 24"
								>
									<path
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 13h3.439a.991.991 0 0 1 .908.6 3.978 3.978 0 0 0 7.306 0 .99.99 0 0 1 .908-.6H20M4 13v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-6M4 13l2-9h12l2 9"
									/>
								</svg>

								<span className="flex-1 ms-3 whitespace-nowrap">Inbox</span>
							</a>
						</li>
						<li>
							<a
								href="/"
								className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
							>
								<svg
									className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									viewBox="0 0 20 18"
								>
									<path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
								</svg>
								<span className="flex-1 ms-3 whitespace-nowrap">Sent</span>
							</a>
						</li>

						<li>
							<a
								href="/"
								className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
							>
								<svg
									className="w-6 h-6 text-gray-800 dark:text-white"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									fill="none"
									viewBox="0 0 24 24"
								>
									<path
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
									/>
								</svg>

								<span className="flex-1 ms-3 whitespace-nowrap">Deleted</span>
							</a>
						</li>
						<li>
							<a
								href="/"
								className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
							>
								<svg
									className="w-6 h-6 text-gray-800 dark:text-white"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										fillRule="evenodd"
										d="M4 4a2 2 0 1 0 0 4h16a2 2 0 1 0 0-4H4Zm0 6h16v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8Zm10.707 5.707a1 1 0 0 0-1.414-1.414l-.293.293V12a1 1 0 1 0-2 0v2.586l-.293-.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l2-2Z"
										clipRule="evenodd"
									/>
								</svg>

								<span className="flex-1 ms-3 whitespace-nowrap">Archives</span>
							</a>
						</li>
						<li onClick={handleLogout}>
							<a className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 hover:cursor-pointer dark:hover:bg-gray-700 group">
								<svg
									className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 18 16"
								>
									<path
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
									/>
								</svg>
								<span className="flex-1 ms-3 whitespace-nowrap">Logout</span>
							</a>
						</li>
					</ul>
				</div>
			</aside>

			<div className="p-4 sm:ml-64 mt-14">
				{/* <MailTab mails={mails}/> */}
				<MailTabs mails={mails} />
				<LogoutModal
					openModal={openModal}
					setOpenModal={setOpenModal}
				/>
			</div>
		</>
	);
}

export default Sidebar;
