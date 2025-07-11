import { data } from "../data";

export const getDetailsById = (autorId) => {
    for (const detail of data.data_autors) {
        if (Number(autorId) === Number(detail.id)) {
            return ([detail.details])
        }
    }
    return null
}