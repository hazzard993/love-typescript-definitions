/**
 * How a stencil function modifies the stencil values of pixels it touches.
 * @link [StencilAction](https://love2d.org/wiki/StencilAction)
 */
declare type StencilAction = 'replace' | 'increment' | 'decrement' | 'incrementwrap' | 'decrementwrap' | 'invert';
