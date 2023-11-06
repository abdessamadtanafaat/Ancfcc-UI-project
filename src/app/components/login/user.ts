export interface UserForAuthenticationDto{
    username: string;
    email: string; 
    password: string; 
}

export interface AuthResponseDto{
    IsSuccessful: boolean; 
    ErrorMessage: string; 
}