import { useMutation } from "@tanstack/react-query";
import { PersonData } from "../Interfaces/interfacePersonData";
import axios from "axios";

const postData = (_data: PersonData) => {
    return axios.post("http//localhost:8080/send-data")
}

export default function useIdentityMutation(){
    const {mutate, isSuccess, isError} = useMutation({
        mutationFn: (data: PersonData) => postData(data)
    })

    return {
        mutate,
        isSuccess, 
        isError
    }

}