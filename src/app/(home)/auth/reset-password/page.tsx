// app/(front)/reset-password/Form.tsx
"use client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { TextInput } from "@/components/inputs/textInput";
import { toast } from "@/components/ui/use-toast";
// import toast from 'react-hot-toast'

type ResetPasswordInputs = {
	email: string;
};

const ResetPasswordForm = () => {
	const router = useRouter();

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<ResetPasswordInputs>();

	const onSubmit = async (data: ResetPasswordInputs) => {
		try {
			const response = await fetch("/api/auth/reset-password", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});

			if (!response.ok) {
				throw new Error("There was an error sending the reset password email.");
			}

			toast({
				title: "Success",
				description:
					"If the email is associated with an account, a password reset email will be sent.",
				variant: "default",
			});
			router.push("/auth/login"); // Redirect to sign in page after successful submission
		} catch (error: any) {
			toast({
				title: "Error",
				description: error.response.data.message,
				variant: "destructive",
			});
		}
	};

	return (
		<div className="max-w-md mx-auto my-8 border-2 border-gray-200 rounded-md">
			<div className="bg-white rounded px-8 pt-6 pb-8 mb-4">
				<h1 className="text-2xl font-bold mb-6">Reset Password</h1>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="mb-4">
						<TextInput
							label="Email"
							id="email"
							{...register("email", {
								required: "Email is required",
								pattern: {
									value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
									message: "Please enter a valid email address",
								},
							})}
							required
						/>
						{errors.email && (
							<p className="text-red-500 text-xs mt-1">
								{errors.email.message}
							</p>
						)}
					</div>
					<div className="flex items-center justify-between">
						<button
							type="submit"
							disabled={isSubmitting}
							className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
							{isSubmitting ? "Submitting..." : "Submit"}
						</button>
						<Link
							href="/auth/login"
							className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-600">
							Remember password?
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ResetPasswordForm;
