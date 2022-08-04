import  baseAxios  from "~/config/axioscf";

export enum UserRoles{
   Brand = 'brand',
   Admin = 'admin',
   Influencer = 'influencer',
}
interface IRegister{
   fullname: string;
   email: string;
   password: string;
   roles: UserRoles;
}
export const Auth = {
   Register: (payload: IRegister) => {
      return baseAxios.post('/auth/register', payload)
   },
   loginGoogle: (payload: { idToken: string, email: string }) => {
      return baseAxios.post('/auth/login/google',payload)
   },
   Login: (payload: { username: string, password: string }) => {
      return baseAxios.post('/auth/login',payload)
   },
   Secret: () => {
      return baseAxios.get('/auth/secret')
   },
   Logout: () => {
      return  baseAxios.get('/auth/logout')
   }
}