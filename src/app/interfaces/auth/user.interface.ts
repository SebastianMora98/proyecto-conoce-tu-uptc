/**
 * @ignore
 */
export type Roles =
  | 'Suscriptor'
  | 'Colaborador'
  | 'Autor'
  | 'Editor'
  | 'Administrador';

/**
 * @ignore
 */
export interface User {
  username: string;
  password: string;
}

/**
 * @ignore
 */
export interface UserResponse {
  user_email: string;
  token: string;
  user_nicename: string;
  user_display_name: string;

  /* "user_role": [
    "editor",
    "bbp_participant"
]*/
  user_role: [string, string];
}
