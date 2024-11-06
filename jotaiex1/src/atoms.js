// import {atom} from 'jotai';
import {atomWithStorage,createJSONStorage} from'jotai/utils';

// export const countAtom = atom(0);
// export const accAtom = atom({id:'10001', name:"홍길동",balance:100000});

//session에 저장하기 때문에 재로딩 하더라도 이전 기록이 남아있게됨 
export const countAtom = atomWithStorage("count",0,createJSONStorage(()=>sessionStorage));
export const accAtom = atomWithStorage("acc",{id:'10001', name:"홍길동",balance:100000},createJSONStorage(()=>sessionStorage));