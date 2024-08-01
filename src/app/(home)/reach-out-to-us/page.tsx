"use client";

import React, { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
// import { fetch } from "node-fetch"; // Assuming Node.js environment, otherwise use window.fetch
import { toast } from "../../../components/ui/use-toast"; // Assuming this exists in your project
import { SubmitButton } from "../../../components/buttons/submit";
import { TextInput } from "../../../components/inputs/textInput";
import { ReachOutSchema } from "@/components/form/schema/reachOut";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/ui/form";
import { TextAreaInput } from "@/components/inputs/textAreaInput";

export default function ReachOutToUs() {
	const router = useRouter();
	const form = useForm<z.infer<typeof ReachOutSchema>>({
		resolver: zodResolver(ReachOutSchema),
	});
	const [submitted, setSubmitted] = useState(false);

	const onSubmit = async (data: any) => {
		try {
			const res = await fetch("/api/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});

			if (!res.ok) throw new Error("Network response was not ok");

			// reset(); // Reset form after successful submission
			setSubmitted(true);
		} catch (error) {
			console.error(
				"There has been a problem with your fetch operation:",
				error
			);
			toast({
				title: "Error",
				description: "Failed to send your message. Please try again.",
				variant: "destructive",
			});
		}
	};

	return (
		<div className="max-w-lg mx-auto mt-8 border-2 bg-gray-100 py-10 px-20">
			<h1 className="text-3xl font-bold mb-4">Reach Out to Us</h1>
			{submitted ? (
				<p className="text-green-600">
					Thank you for your message! We will get back to you soon.
				</p>
			) : (
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
						<div>
							<FormField
								control={form.control}
								name="name"
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<TextInput
												label="Name"
												{...field}
												className="bg-white"
												autoComplete="name"
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<div>
							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<TextInput
												label="Email"
												{...field}
												className="bg-white"
												autoComplete="email"
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<div>
							<FormField
								control={form.control}
								name="question"
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<TextAreaInput
												label="Question"
												{...field}
												className="bg-white"
												autoComplete="question"
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<SubmitButton
							label="Send"
							type="submit"
							className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
							Submit
						</SubmitButton>
					</form>
				</Form>
			)}
		</div>
	);
}
