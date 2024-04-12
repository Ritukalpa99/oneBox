"use client";

import {
	Button,
	Checkbox,
	Label,
	Modal,
	TextInput,
	FileInput,
	Radio,
	RangeSlider,
	Select,
	Textarea,
	ToggleSwitch,
} from "flowbite-react";

import { useState } from "react";

export default function ReplyModal() {
	const [openModal, setOpenModal] = useState(false);
	const [email, setEmail] = useState("");

	function onCloseModal() {
		setOpenModal(false);
		setEmail("");
	}

	const handleSubmit = () => {
		setOpenModal(false);
		alert("form submitted");
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
									value={email}
									onChange={(event) => setEmail(event.target.value)}
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
									value={email}
									onChange={(event) => setEmail(event.target.value)}
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
