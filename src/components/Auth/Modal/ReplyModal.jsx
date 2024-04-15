import { Button, Label, Modal, TextInput, Textarea } from "flowbite-react";

import { useEffect, useState } from "react";

export default function ReplyModal({ data }) {
	const [openModal, setOpenModal] = useState(false);
	const [toEmail, setToEmail] = useState(data.fromEmail);
	const [fromEmail, setFromEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [body, setBody] = useState("");

	function onCloseModal() {
		setOpenModal(false);
		setToEmail("");
		setFromEmail("");
		setSubject("");
		setBody("");
	}

	const submitForm = async (formBody) => {
		const token = JSON.parse(localStorage.getItem("UserId"));
		try {
			const res = await fetch(
				`${import.meta.env.VITE_POST_MAIL}:${data.threadId}`,
				{
					method: "POST",
					headers: {
						Authorization: `Bearer ${token}`,
					},
					body: JSON.stringify(formBody),
				}
			);
			if (!res.ok) {
				throw new Error("Error is response");
			}
			const data = await res.json();
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		setToEmail(data.fromEmail);
	}, [data.fromEmail]);

	const handleSubmit = () => {
		event.preventDefault();
		setOpenModal(false);
		onCloseModal();
		// alert("form submitted");
		const formData = {
			toEmail,
			fromEmail,
			subject,
			body,
			...data,
		};
		submitForm(formData);
	};
	return (
		<>
			<Button
				className="bg-green-400"
				onClick={() => setOpenModal(true)}
			>
				Reply
			</Button>
			<Modal
				show={openModal}
				size="md"
				onClose={onCloseModal}
				popup
			>
				<Modal.Header />
				<Modal.Body>
					<form onSubmit={handleSubmit}>
						<div className="space-y-6">
							<div>
								<div className="mb-2 block">
									<Label
										htmlFor="email"
										value="To"
									/>
								</div>
								<TextInput
									id="email"
									placeholder="name@company.com"
									value={toEmail}
									onChange={(event) => setToEmail(event.target.value)}
									required
								/>
							</div>
							<div>
								<div className="mb-2 block">
									<Label
										htmlFor="email"
										value="From"
									/>
								</div>
								<TextInput
									id="email"
									placeholder="name@company.com"
									value={fromEmail}
									onChange={(event) => setFromEmail(event.target.value)}
									required
								/>
							</div>
							<div>
								<div className="mb-2 block">
									<Label
										htmlFor="subject"
										value="Subject"
									/>
								</div>
								<TextInput
									id="subject"
									type="text"
									required
									onChange={(e) => setSubject(e.target.value)}
								/>
							</div>
							<div className="max-w-md">
								<div className="mb-2 block">
									<Label
										htmlFor="comment"
										value="Body"
									/>
								</div>
								<Textarea
									id="comment"
									placeholder="Leave a reply..."
									required
									rows={4}
									onChange={(e) => setBody(e.target.value)}
								/>
							</div>
							<Button
								className="bg-green-500"
								type="submit"
							>
								Submit
							</Button>
						</div>
					</form>
				</Modal.Body>
			</Modal>
		</>
	);
}
