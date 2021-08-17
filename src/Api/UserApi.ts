import axios from "axios"
import { UserDataType } from "../Components/Context/User/UserReducers.types"
import ROOT_URL from "../Utilities/AxiosUtils"

export const loginUser = async(userData: UserDataType) => {
    try {
        const { data } = await axios.post(`${ROOT_URL}/auth/signin`, userData, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            }
        })
        return data
    } catch (err) {
        console.log("Error occurred while signing in user", err.message)
    }
}

export const registerUser = async(userData: UserDataType) => {
    try {
        const { data } = await axios.post(`${ROOT_URL}/auth/signup`, userData, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            }
        })
        return data
    } catch (err) {
        console.log("Error signing up user", err.message)
    }
}