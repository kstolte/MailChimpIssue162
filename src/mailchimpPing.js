import mailchimp from "@mailchimp/mailchimp_marketing";

mailchimp.setConfig({
	apiKey: process.env.API_KEY,
	server: process.env.API_SERVER,
});
export const mcPing = async (_req, res) => {
	const response = await mailchimp.ping.get();
	console.log(response);
	res.sendStatus(200);
};
