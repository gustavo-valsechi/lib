"use server"

import { cookies } from 'next/headers'

export async function getStorage(key: string = "") {
    return cookies().get(key)?.value
}

export async function setStorage(key: string = "", value: string = "") {
    cookies().set(key, value)
}