import {$authHost, $host} from "./index";


export const createCar = async (car) => {
    const {data} = await $authHost.post('api/car', car)
    return data
}

export const fetchCar = async (id, brand, owner, number, year, page, limit= 5) => {
    const {data} = await $host.get('api/car', {params: {
            id, brand, owner, number, year, page, limit
        }})
    return data
}

export const fetchOneCar = async (id) => {
    const {data} = await $host.get('api/car/' + id)
    return data
}