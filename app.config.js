export default {
	name: "demo",
	version: process.env.MY_CUSTOM_PROJECT_VERSION || '1.0.0',
	// All values in extra will be passed to your app.
	extra: {
		server: 'hanet', //  hanet, aws, google
		language: 'vi', // vi, en
	},
	android: {
		package: 'com.hanet.home',
	},
	ios: {
		bundleIdentifier: 'com.hanet.home',
	},
};