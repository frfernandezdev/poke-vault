export interface CoreState {
  loader: boolean;
  theme: 'dark' | 'light';
  snackbar: {
    open: boolean;
    message?: string | null;
    severity?: string | null;
  };
	user?: {} | null;
	drawer: boolean;
}

export const initialCoreState: CoreState = {
  loader: true,
  theme: 'light',
  snackbar: {
    open: false,
    message: null,
    severity: 'info',
  },
	user: null,
	drawer: false
};
