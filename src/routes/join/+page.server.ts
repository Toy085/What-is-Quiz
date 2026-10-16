import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions = {
	join: async ({request, params}) => {
        const formData = await request.formData();
        
        const gameId = formData.get('gId')?.toString().trim();
        const username = formData.get('uName')?.toString().trim();
        const password = formData.get('pwd')?.toString();

        if (!gameId || !username) {
            return fail(400)
        }
		// TODO join a game
	},
	host: async (event) => {
		// TODO host a game
	}
} satisfies Actions;