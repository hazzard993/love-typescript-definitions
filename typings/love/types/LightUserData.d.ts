declare module "love" {
  /**
   * Used for valid LightUserData typings.
   */
  type ValidUserDataTypes = "Touch" | "Pointer";

  /**
   * Inaccessible. Can only be passed to other functions.
   */
  type LightUserData<T extends ValidUserDataTypes> = {
    __TYPE__: T;
  };
}
