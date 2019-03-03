/**
 * Documented at
 * https://love2d.org/wiki/Channel
 * 2019/03/03
 */
let channel: Channel;
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

/**
 * Documented at
 * https://love2d.org/wiki/Thread
 */
let thread: Thread;
thread.release;
thread.type;
thread.typeOf;
thread.getError;
thread.isRunning;
thread.start;
thread.wait;

love;
love.thread;

love.thread.getChannel;
love.thread.newChannel;
love.thread.newThread;
