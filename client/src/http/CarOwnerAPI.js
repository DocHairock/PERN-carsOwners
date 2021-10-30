import { $authHost, $host } from "./index";



export const createCarOwner = async (carOwner) => {
    const {data} = await $host.post('api/carOwner', carOwner)
    return data
}

export const fetchCarOwner = async (id, name, age, email, page, limit= 10) => {
    const {data} = await $host.get('api/carOwner', {params: {
            id, name, age, email, page, limit
        }})
    return data
}

export const fetchOneCarOwner = async (id) => {
    const {data} = await $host.get('api/carOwner/' + id)
    return data
}