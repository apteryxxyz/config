require('./helper').ensureDependencies([
	'eslint-plugin-import'
]);

module.exports = {
	plugins: ['import'],
	rules: {
		'import/no-deprecated': 1,
	},
};