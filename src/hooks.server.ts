import { sequence } from '@sveltejs/kit/hooks';

import { userHook } from './hooks/user.server';

export const handle = sequence(userHook);
