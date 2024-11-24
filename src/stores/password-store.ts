import {create} from 'zustand'

interface IPasswordStore{
    password:string;
    generate12DigPassword:()=>string;

}

const usePasswordStore = create<IPasswordStore>((set,) => ({
    password: '',
    generate12DigPassword: () => {
        // generate 12 digit random password 
        // You can use the following JavaScript code snippet
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let password = '';
        for (let i = 0; i < 12; i++) {
            password += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        set({password });  // update the password state in the store
        return password;
    }
}));

export default usePasswordStore;