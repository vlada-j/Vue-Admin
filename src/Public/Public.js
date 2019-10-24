import SETTINGS from '../SETTINGS';
import http from '../shared/http';
import auth from '../shared/auth';


const Public = {
	login(email, password) {
		return auth.login(email, password)
			.then(res => {
				if ( res.data && res.data.userId ) {
					return this.onLogin(res.data.userId);
				} else {
					return res;
				}
			});
	},

	onLogin(userId) {
		return http.get(SETTINGS.API_ROOT + 'users/' + userId)
		//	.then(res => User.set(res.data) );
	},

	singup(username, email, password) {
		return auth.singup(username, email, password)
			.then(res => {
				if ( res.data && res.data.userId ) {
					return this.onLogin(res.data.userId);
				} else {
					return res;
				}
			});
	}
};

export default Public;