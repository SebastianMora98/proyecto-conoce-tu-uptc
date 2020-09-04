export type Roles =
  | 'Suscriptor'
  | 'Colaborador'
  | 'Autor'
  | 'Editor'
  | 'Administrador';

export interface User {
  username: string;
  password: string;
}

export interface UserResponse {
  user_email: string;
  token: string;
  user_nicename: string;
  user_display_name: string;
}
