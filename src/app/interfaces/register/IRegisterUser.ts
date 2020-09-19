export interface RegisterUser {
  username: string;
  email: string;
  password: string;
}

export interface RegisterUserResponse {
  code: number;
  id?: number;
  message: string;
  data?: {
    status?: number;
    json_error_code?: number;
    json_error_message?: string;
  };
}

export interface RegisterUserSuccess {
  code: number;
  id: number;
  message: string;
}

export interface RegisterUserAlreadyExists {
  code: number;
  message: string;
  data: {
    status: number;
  };
}
