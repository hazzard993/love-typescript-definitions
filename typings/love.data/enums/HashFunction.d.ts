declare module "love.data" {
  /**
   * Hash algorithm of love.data.hash.
   *
   * | Constant | Description |
   * | :- | :- |
   * | `"md5"` | MD5 hash algorithm (16 bytes). |
   * | `"sha1"` | SHA1 hash algorithm (20 bytes). |
   * | `"sha224"` | SHA2 hash algorithm with message digest size of 224 bits (28 bytes). |
   * | `"sha256"` | SHA2 hash algorithm with message digest size of 256 bits (32 bytes). |
   * | `"sha384"` | SHA2 hash algorithm with message digest size of 384 bits (48 bytes). |
   * | `"sha512"` | SHA2 hash algorithm with message digest size of 512 bits (64 bytes). |
   *
   * @link [HashFunction](https://love2d.org/wiki/HashFunction)
   * @since 11.0
   */
  type HashFunction =
    | "md5"
    | "sha1"
    | "sha224"
    | "sha256"
    | "sha384"
    | "sha512";
}
