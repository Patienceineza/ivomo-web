import { GroupType } from "../group";

export type UserType = {
    id: string;
    createdTimestamp: number;
    username: string;
    enabled: boolean;
    totp: boolean;
    emailVerified: boolean;
    firstName: string;
    lastName: string;
    email: string;
    disableableCredentialTypes: string[]; // You can replace this with a more specific type if needed
    requiredActions: string[]; // You can replace this with a more specific type if needed
    notBefore: number;
    access: {
      manageGroupMembership: boolean;
      view: boolean;
      mapRoles: boolean;
      impersonate: boolean;
      manage: boolean;
    };
    groups: GroupType[]; // You can replace this with a more specific type if needed
    roles: any[]; // You can replace this with a more specific type if needed
};

export type UserPayload = {
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
};

export type AuthLoginPayload = {
    username: string;
    password: string;
};


export type User = {
    exp: number,
    iat: number,
    jti: string,
    iss: string,
    aud: string[],
    sub: string,
    typ: string,
    azp: string,
    session_state: string,
    acr: number,
    // allowed-origins: string[],
    realm_access: {
        roles: string[]
    },
    resource_access: Object,
    scope: string,
    sid: string,
    email_verified: boolean,
    name: string,
    preferred_username: string,
    given_name: string,
    family_name: string,
    email: string
}