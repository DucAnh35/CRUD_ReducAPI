import * as types from '../constants/typeAction'
import * as API from '../constants/apiAction'
import axios from 'axios'

export function requestGetStore(){
    return (dispatch)=>{
        return axios.request({
            method: "GET",
            url: `${API.API_URL}/data`,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json'
            }
        }).then(function(response){
            dispatch(revecieData(types.GET_STORE,response.data))
        }).catch(function(error){
            console.log(error);
        })
    }
}
export function requestRemoveStore(id){
    return (dispatch)=>{
        return axios.request({
            method: 'DELETE',
            url: `${API.API_URL}/data/${id}`,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json'
            }
        }).then(function(response){
            dispatch(revecieData(types.REMOVE_STORE,id))
        }).catch(function(error){
            console.log(error);
        })
    }
}
export function requestCreateStore(data){
    let store = null;
    store = {
        image: data.image,
        category: data.category,
        title: data.title,
        description: data.description,
        time: data.time,
    }
    return (dispatch)=>{
        return axios.request({
            method: 'POST',
            url: `${API.API_URL}/data`,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json'
            },
            data: store
        }).then(function(response){
            dispatch(revecieData(types.ADD_STORE,response.data))
        }).catch(function(error){
            console.log(error);
        })
    }
}
export function requestUpdateStore(data){
    let store = null;
    store = {
        image: data.image,
        category: data.category,
        title: data.title,
        description: data.description,
        time: data.time,
    }
    return (dispatch)=>{
        return axios.request({
            method: 'PUT',
            url: `${API.API_URL}/data/${data.id}`,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json'
            },
            data: store
        }).then(function(response){
            dispatch(revecieData(types.UPDATE_STORE,response.data))
        }).catch(function(error){
            console.log(error);
        })
    }
}
export function revecieData(action,payload){
    return{
        type: action,
        payload
    }
}