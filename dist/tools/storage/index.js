"use server";
import { cookies } from 'next/headers';
export async function getStorage(key = "") {
    var _a;
    return (_a = cookies().get(key)) === null || _a === void 0 ? void 0 : _a.value;
}
export async function setStorage(key = "", value = "") {
    cookies().set(key, value);
}
