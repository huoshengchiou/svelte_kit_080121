// src/hooks.ts
// import {defaultState} from '$lib/store';
// import * as cookie from 'cookie';
const auth_token='demo_token_for_example';
const userDetails={name:"Deb",age:45}

export const getContext=({ headers })=>{
    // const cookies = cookie.parse(headers.cookie || '');
    console.log('getContext')
    return {
        token:123456
    };
}
export const getSession=async ({context})=>{
        console.log('getSession')
    // let initialState={...defaultState};
    // if (context['token']===auth_token){
    //     console.log("tokens match");
    //     initialState.authenticated=true
    //     initialState.user=userDetails;
    // }
    // console.log(initialState)
    return {}
}