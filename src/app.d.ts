import type { User } from './types';

declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			user?: User;
		}
		interface PageData {
			user?: User;
		}
		// interface Platform {}
	}
}

export {};
