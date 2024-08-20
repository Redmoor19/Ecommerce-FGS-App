import { CreateUser } from "@/types/user";
import api from ".";

const signUp = (data: CreateUser) => {
    api.post(
    "/auth/signup",
    data,
)}