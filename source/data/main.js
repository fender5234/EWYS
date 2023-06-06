export default ({ error, pageName, status }) => ({
	appData: {
		page: {
			error,
			pageName,
			status
		}
	},
	description: 'My project',
	pixelperfect: JSON.stringify({ breakpoints: [320, 1440], ext: 'webp' }),
	projectName: 'My app'
});
