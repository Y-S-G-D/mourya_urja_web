import {create} from 'zustand'
import { generate12DigPassword } from '@/utils/services/password-generator';

interface IPasswordStore{
    password:string;
    generate12DigPassword:()=>string;

}

const usePasswordStore = create<IPasswordStore>((set,) => ({
    password: '',
    generate12DigPassword: () => {
        const password = generate12DigPassword();
        set({password });  // update the password state in the store
        return password;
    }
}));

export default usePasswordStore;