export default function test(state = false, action = null) {
	switch (action.type) {
		case 'TEST':
			console.log('state: ', state);
			return !state
		}

	return state;
}
