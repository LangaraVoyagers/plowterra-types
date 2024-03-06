export interface ISignInRequest {
  email: string;
  password: string;
}

export interface ISignInResponse {
  token: string;
  user: {
    name: string;
    farm: {
      isDisabled: boolean;
      _id: string;
      name: string;
      address: string;
    };
  };
}
