/**
 * Documented at
 * https://love2d.org/wiki/Channel
 * 2019/03/03
 */
declare const channel: Channel;
channel.clear;
channel.demand;
channel.getCount;
channel.hasRead;
channel.peek;
channel.performAtomic;
channel.pop;
channel.push;
channel.supply;
channel.release;
channel.type;
channel.typeOf;

const [a] = channel.performAtomic<(this: void, a: number) => [number]>((a: number) => [0], 0);
