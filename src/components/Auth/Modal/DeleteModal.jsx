import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

export default function DeleteModal({ threadId }) {
	const [openModal, setOpenModal] = useState(false);

	const deleteMail = async () => {
		const token = JSON.parse(localStorage.getItem("UserId"));
		try {
			const res = await fetch(`${import.meta.env.VITE_DELETE_MAIL}:${threadId}`, {
				method: "DELETE",
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			if (!res.ok) {
				throw new Error("Error is response");
			}
			const data = await res.json();
		} catch (error) {
			console.log(error);
		}
	};

	const handleDelete = () => {
		// deleteMail();
		alert(`${threadId} deleted`)
		setOpenModal(false);
	};
	return (
		<>
			<Button
				className="bg-red-600"
				onClick={() => setOpenModal(true)}
			>
				Delete Mail
			</Button>
			<Modal
				show={openModal}
				size="md"
				onClose={() => setOpenModal(false)}
				popup
			>
				<Modal.Header />
				<Modal.Body>
					<div className="text-center">
						<HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
						<h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
							Are you sure you want to Delete?
						</h3>
						<div className="flex justify-center gap-4">
							<Button
								color="failure"
								onClick={handleDelete}
							>
								{"Yes, I'm sure"}
							</Button>
							<Button
								color="gray"
								onClick={() => setOpenModal(false)}
							>
								No, cancel
							</Button>
						</div>
					</div>
				</Modal.Body>
			</Modal>
		</>
	);
}
