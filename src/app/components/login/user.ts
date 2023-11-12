export interface UserForAuthenticationDto{
    username: string;
    // email: string; 
    password: string; 
}

export interface RegistrationResult{
    SuccessRegistration: boolean; 
    ErrorRegistration: string; 
}

export interface UserForRegistrationDto {
    username: string;
    email : string;
    password: string;
    nom: string;
    prenom: string;
    role: string;
    checkpassword: string;
}
export interface ForgetPaaswordDto {
    
     email: string; 
}

