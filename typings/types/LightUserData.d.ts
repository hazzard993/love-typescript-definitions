declare module "love" {
    /**
     * Used for valid LightUserData typings.
     */
    export type ValidUserDataTypes = "Touch" | "Pointer";

    /**
     * Inaccessible. Can only be passed to other functions.
     */
    export type LightUserData<T extends ValidUserDataTypes> = {
        __TYPE__: T;
    };
}
