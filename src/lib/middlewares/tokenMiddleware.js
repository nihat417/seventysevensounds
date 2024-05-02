import { login } from "../redux/slices/authSlice";

export  const tokenMiddleware = (store) => (next) => (action) => {
    if (action.type === login.fulfilled.type) {
        const token = action.payload.accsesToken;
        document.cookie = `token=${token}; path=/;`;
        console.log('Token succsesfuly saved in cookie');
    } else if (action.type === 'auth/logout') {
        document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        console.log('Token succsesfuly deleted in cookie');
    }
    return next(action);
  };
