import {atomWithStorage,createJSONStorage} from 'jotai/utils';
export const tokenAtom = atomWithStorage (
    'token',
    '',
    createJSONStorage(()=>sessionStorage),
)