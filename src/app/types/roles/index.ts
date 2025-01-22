import { Modal } from "../shared"

export type RoleType = Modal & {
    name: string,
    description: string
}

export type RolePayLoad = {
    name: string,
    description: string
}