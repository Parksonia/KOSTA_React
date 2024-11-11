import {atomWithStorage,createJSONStorage} from 'jotai/utils' //session에 저장

export const tokenAtom=atomWithStorage(
    'token',
    '',
    createJSONStorage(()=>sessionStorage),
)