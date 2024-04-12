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

	return (
		<>
			<Button
				className="bg-pink-400"
				onClick={() => setOpenModal(true)}
			>
				Toggle modal
			</Button>
			<Modal
				show={openModal}
				size="md"
				onClose={onCloseModal}
				popup
			>
				<Modal.Header />
				<Modal.Body>
					<div className="space-y-6">
						<h3 className="text-xl font-medium text-gray-900 dark:text-white">
							Sign in to our platform
						</h3>
						<div>
							<div className="mb-2 block">
								<Label
									htmlFor="email"
									value="Your email"
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
									htmlFor="password"
									value="Your password"
								/>
							</div>
							<TextInput
								id="password"
								type="password"
								required
							/>
						</div>
						<div className="flex justify-between">
							<div className="flex items-center gap-2">
								<Checkbox id="remember" />
								<Label htmlFor="remember">Remember me</Label>
							</div>
							<a
								href="#"
								className="text-sm text-cyan-700 hover:underline dark:text-cyan-500"
							>
								Lost Password?
							</a>
						</div>
						<div className="w-full">
							<Button>Log in to your account</Button>
						</div>
						<div className="max-w-md">
      <div className="mb-2 block">
        <Label htmlFor="comment" value="Your message" />
      </div>
      <Textarea id="comment" placeholder="Leave a comment..." required rows={4} />
    </div>
					</div>
				</Modal.Body>
			</Modal>
		</>
	);
}