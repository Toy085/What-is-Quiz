import type { Actions } from './$types';

export const actions = {
	join: async ({request, params}) => {
        const formData = await request.formData();
		// TODO join a game
        console.log(formData)
	},
	host: async (event) => {
		// TODO host a game
	}
} satisfies Actions;