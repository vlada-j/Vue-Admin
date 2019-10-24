import Vue from 'vue';

export default Vue.filter('dateFormat', function (value, format) {
	format = format || 'DD. MM. YYYY. H:M';

	if (!value) return '';

	let d = new Date(value),
		dd = d.getDate(),
		mm = d.getMonth() + 1,
		yy = d.getFullYear(),
		h = d.getHours(),
		m = d.getMinutes();

	return format
		.replace(/DD/, dd)
		.replace(/MM/, mm)
		.replace(/YYYY/, yy)
		.replace(/hh/, h)
		.replace(/mm/, m);
});