import baseAxios from '~/config/axioscf';

export const Users = {
  Infor: () => {
    return baseAxios.get('/users/userInfor');
  },
};
