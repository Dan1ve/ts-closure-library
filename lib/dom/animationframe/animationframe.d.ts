export type Spec = {
    measure: Function;
    mutate: Function;
};
export type Task_ = {
    id: number;
    fn: Function;
    context: any;
};
export type TaskSet_ = {
    measureTask: {
        id: number;
        fn: Function;
        context: any;
    };
    mutateTask: {
        id: number;
        fn: Function;
        context: any;
    };
    state: any;
    args: any[];
    isScheduled: boolean;
};
/**
 * @typedef {{
 *   measure: (!Function|undefined),
 *   mutate: (!Function|undefined)
 * }}
 */
export let Spec: any;
/**
 * A type to represent state. Users may add properties as desired.
 * @final
 */
export class State {
}
/**
 * Returns a function that schedules the two passed-in functions to be run upon
 * the next animation frame. Calling the function again during the same
 * animation frame does nothing.
 *
 * The function under the "measure" key will run first and together with all
 * other functions scheduled under this key and the function under "mutate" will
 * run after that.
 *
 * @param {{
 *   measure: (function(this:THIS, !State)|undefined),
 *   mutate: (function(this:THIS, !State)|undefined)
 * }} spec
 * @param {THIS=} opt_context Context in which to run the function.
 * @return {function(...?)}
 * @template THIS
 */
export function createTask<THIS>(spec: {
    measure: (this: THIS, arg1: State) => any;
    mutate: (this: THIS, arg1: State) => any;
}, opt_context?: THIS): (...arg0: any[]) => any;
/**
 * @return {boolean} Whether the animationframe is currently running. For use
 *     by callers who need not to delay tasks scheduled during runTasks_ for an
 *     additional frame.
 */
export function isRunning(): boolean;
