/**
 * @type {number} The number of currently unused objects to keep around for
 *    reuse.
 */
export const DEFAULT_MAX_UNUSED: number;
/**
 * @type {boolean} Whether traces of `then` calls should be included in
 * exceptions thrown
 */
export const LONG_STACK_TRACES: boolean;
/**
 * Resolver interface for promises. The resolver is a convenience interface that
 * bundles the promise and its associated resolve and reject functions together,
 * for cases where the resolver needs to be persisted internally.
 *
 * @interface
 * @template TYPE
 * @suppress {checkTypes}
 */
export class Resolver<TYPE> {
    /**
     * The promise that created this resolver.
     * @type {!goog_Promise<TYPE>}
     */
    promise: goog_Promise<TYPE>;
    /**
     * Resolves this resolver with the specified value.
     * @type {function((TYPE|goog_Promise<TYPE>|Thenable)=)}
     */
    resolve: (arg0: (TYPE | goog_Promise<TYPE> | Thenable) | undefined) => void;
    /**
     * Rejects this resolver with the specified reason.
     * @type {function(*=): void}
     */
    reject: () => void;
}
/**  */
/**
 * Provides a more strict interface for Thenables in terms of
 * http://promisesaplus.com for interop with {@see goog_Promise}.
 *
 * @interface
 * @extends {IThenable<TYPE>}
 * @template TYPE
 */
export class Thenable<TYPE> {
    /**
     * Adds callbacks that will operate on the result of the Thenable, returning a
     * new child Promise.
     *
     * If the Thenable is fulfilled, the `onFulfilled` callback will be
     * invoked with the fulfillment value as argument, and the child Promise will
     * be fulfilled with the return value of the callback. If the callback throws
     * an exception, the child Promise will be rejected with the thrown value
     * instead.
     *
     * If the Thenable is rejected, the `onRejected` callback will be invoked
     * with the rejection reason as argument, and the child Promise will be rejected
     * with the return value of the callback or thrown value.
     *
     * @param {?(function(this:THIS, TYPE): VALUE)=} opt_onFulfilled A
     *     function that will be invoked with the fulfillment value if the Promise
     *     is fulfilled.
     * @param {?(function(this:THIS, *): *)=} opt_onRejected A function that will
     *     be invoked with the rejection reason if the Promise is rejected.
     * @param {THIS=} opt_context An optional context object that will be the
     *     execution context for the callbacks. By default, functions are executed
     *     with the default this.
     *
     * @return {?RESULT} A new Promise that will receive the result
     *     of the fulfillment or rejection callback.
     * @template VALUE
     * @template THIS
     *
     * When a Promise (or thenable) is returned from the fulfilled callback,
     * the result is the payload of that promise, not the promise itself.
     *
     * @template RESULT := type('Promise',
     *     cond(isUnknown(VALUE), unknown(),
     *       mapunion(VALUE, (V) =>
     *         cond(isTemplatized(V) && sub(rawTypeOf(V), 'IThenable'),
     *           templateTypeOf(V, 0),
     *           cond(sub(V, 'Thenable'),
     *              unknown(),
     *              V)))))
     *  =:
     *
     */
    then<VALUE, THIS, RESULT>(opt_onFulfilled?: (this: THIS, arg1: TYPE) => VALUE, opt_onRejected?: (this: THIS, arg1: any) => any, opt_context?: THIS): RESULT;
}
export namespace Thenable {
    export const IMPLEMENTED_BY_PROP: string;
}
/**
 * @type {number} The delay in milliseconds before a rejected Promise's reason
 * is passed to the rejection handler. By default, the rejection handler
 * rethrows the rejection reason so that it appears in the developer console or
 * `window.onerror` handler.
 *
 * Rejections are rethrown as quickly as possible by default. A negative value
 * disables rejection handling entirely.
 */
export const UNHANDLED_REJECTION_DELAY: number;
/**
 * NOTE: This class was created in anticipation of the built-in Promise type
 * being standardized and implemented across browsers. Now that Promise is
 * available in modern browsers, and is automatically polyfilled by the Closure
 * Compiler, by default, most new code should use native `Promise`
 * instead of `goog_Promise`. However, `goog_Promise` has the
 * concept of cancellation which native Promises do not yet have. So code
 * needing cancellation may still want to use `goog_Promise`.
 *
 * Promises provide a result that may be resolved asynchronously. A Promise may
 * be resolved by being fulfilled with a fulfillment value, rejected with a
 * rejection reason, or blocked by another Promise. A Promise is said to be
 * settled if it is either fulfilled or rejected. Once settled, the Promise
 * result is immutable.
 *
 * Promises may represent results of any type, including undefined. Rejection
 * reasons are typically Errors, but may also be of any type. Closure Promises
 * allow for optional type annotations that enforce that fulfillment values are
 * of the appropriate types at compile time.
 *
 * The result of a Promise is accessible by calling `then` and registering
 * `onFulfilled` and `onRejected` callbacks. Once the Promise
 * is settled, the relevant callbacks are invoked with the fulfillment value or
 * rejection reason as argument. Callbacks are always invoked in the order they
 * were registered, even when additional `then` calls are made from inside
 * another callback. A callback is always run asynchronously sometime after the
 * scope containing the registering `then` invocation has returned.
 *
 * If a Promise is resolved with another Promise, the first Promise will block
 * until the second is settled, and then assumes the same result as the second
 * Promise. This allows Promises to depend on the results of other Promises,
 * linking together multiple asynchronous operations.
 *
 * This implementation is compatible with the Promises/A+ specification and
 * passes that specification's conformance test suite. A Closure Promise may be
 * resolved with a Promise instance (or sufficiently compatible Promise-like
 * object) created by other Promise implementations. From the specification,
 * Promise-like objects are known as "Thenables".
 *
 * @see http://promisesaplus.com/
 *
 *             this:RESOLVER_CONTEXT,
 *             function((TYPE|IThenable<TYPE>|Thenable)=),
 *             function(*=)): void} resolver
 *     Initialization function that is invoked immediately with `resolve`
 *     and `reject` functions as arguments. The Promise is resolved or
 *     rejected with the first argument passed to either function.
 *     resolver function. If unspecified, the resolver function will be executed
 *     in the default scope.
 * @class
 * @final
 * @implements {Thenable<TYPE>}
 * @template TYPE,RESOLVER_CONTEXT
 */
declare class goog_Promise<TYPE, RESOLVER_CONTEXT> {
    /**
     * NOTE: This class was created in anticipation of the built-in Promise type
     * being standardized and implemented across browsers. Now that Promise is
     * available in modern browsers, and is automatically polyfilled by the Closure
     * Compiler, by default, most new code should use native `Promise`
     * instead of `goog_Promise`. However, `goog_Promise` has the
     * concept of cancellation which native Promises do not yet have. So code
     * needing cancellation may still want to use `goog_Promise`.
     *
     * Promises provide a result that may be resolved asynchronously. A Promise may
     * be resolved by being fulfilled with a fulfillment value, rejected with a
     * rejection reason, or blocked by another Promise. A Promise is said to be
     * settled if it is either fulfilled or rejected. Once settled, the Promise
     * result is immutable.
     *
     * Promises may represent results of any type, including undefined. Rejection
     * reasons are typically Errors, but may also be of any type. Closure Promises
     * allow for optional type annotations that enforce that fulfillment values are
     * of the appropriate types at compile time.
     *
     * The result of a Promise is accessible by calling `then` and registering
     * `onFulfilled` and `onRejected` callbacks. Once the Promise
     * is settled, the relevant callbacks are invoked with the fulfillment value or
     * rejection reason as argument. Callbacks are always invoked in the order they
     * were registered, even when additional `then` calls are made from inside
     * another callback. A callback is always run asynchronously sometime after the
     * scope containing the registering `then` invocation has returned.
     *
     * If a Promise is resolved with another Promise, the first Promise will block
     * until the second is settled, and then assumes the same result as the second
     * Promise. This allows Promises to depend on the results of other Promises,
     * linking together multiple asynchronous operations.
     *
     * This implementation is compatible with the Promises/A+ specification and
     * passes that specification's conformance test suite. A Closure Promise may be
     * resolved with a Promise instance (or sufficiently compatible Promise-like
     * object) created by other Promise implementations. From the specification,
     * Promise-like objects are known as "Thenables".
     *
     * @see http://promisesaplus.com/
     *
     * @param {function(
     *             this:RESOLVER_CONTEXT,
     *             function((TYPE|IThenable<TYPE>|Thenable)=),
     *             function(*=)): void} resolver
     *     Initialization function that is invoked immediately with `resolve`
     *     and `reject` functions as arguments. The Promise is resolved or
     *     rejected with the first argument passed to either function.
     * @param {RESOLVER_CONTEXT=} opt_context An optional context for executing the
     *     resolver function. If unspecified, the resolver function will be executed
     *     in the default scope.
     * @template TYPE,RESOLVER_CONTEXT
     */
    constructor(resolver: (this: RESOLVER_CONTEXT_1, arg1: (arg0?: any) => any, arg2: () => any) => void, opt_context?: RESOLVER_CONTEXT_1);
    /**
     * The internal state of this Promise. Either PENDING, FULFILLED, REJECTED, or
     * BLOCKED.
     * @private {goog_Promise.State_}
     */
    state_: number;
    /**
     * The settled result of the Promise. Immutable once set with either a
     * fulfillment value or rejection reason.
     * @private {*}
     */
    result_: any;
    /**
     * For Promises created by calling `then()`, the originating parent.
     * @private {?goog_Promise}
     */
    parent_: any;
    /**
     * The linked list of `onFulfilled` and `onRejected` callbacks
     * added to this Promise by calls to `then()`.
     * @private {?goog_Promise.CallbackEntry_}
     */
    callbackEntries_: any;
    /**
     * The tail of the linked list of `onFulfilled` and `onRejected`
     * callbacks added to this Promise by calls to `then()`.
     * @private {?goog_Promise.CallbackEntry_}
     */
    callbackEntriesTail_: {
        /** @type {?goog_Promise} */
        child: goog_Promise<any, any>;
        /** @type {?Function} */
        onFulfilled: Function;
        /** @type {?Function} */
        onRejected: Function;
        /** @type {?} */
        context: any;
        /** @type {?goog_Promise.CallbackEntry_} */
        next: any;
        /**
         * A boolean value to indicate this is a "thenAlways" callback entry.
         * Unlike a normal "then/thenVoid" a "thenAlways doesn't participate
         * in "cancel" considerations but is simply an observer and requires
         * special handling.
         * @type {boolean}
         */
        always: boolean;
        /** clear the object prior to reuse */
        reset(): void;
    };
    /**
     * Whether the Promise is in the queue of Promises to execute.
     * @private {boolean}
     */
    executing_: boolean;
    /**
     * A timeout ID used when the `UNHANDLED_REJECTION_DELAY` is greater
     * than 0 milliseconds. The ID is set when the Promise is rejected, and
     * cleared only if an `onRejected` callback is invoked for the
     * Promise (or one of its descendants) before the delay is exceeded.
     *
     * If the rejection is not handled before the timeout completes, the
     * rejection reason is passed to the unhandled rejection handler.
     * @private {number}
     */
    unhandledRejectionId_: number;
    /**
     * When the `UNHANDLED_REJECTION_DELAY` is set to 0 milliseconds, a
     * boolean that is set if the Promise is rejected, and reset to false if an
     * `onRejected` callback is invoked for the Promise (or one of its
     * descendants). If the rejection is not handled before the next timestep,
     * the rejection reason is passed to the unhandled rejection handler.
     * @private {boolean}
     */
    hadUnhandledRejection_: boolean;
    /**
     * A list of stack trace frames pointing to the locations where this Promise
     * was created or had callbacks added to it. Saved to add additional context
     * to stack traces when an exception is thrown.
     * @private {!Array<string>}
     */
    stack_: any[];
    /**
     * Index of the most recently executed stack frame entry.
     * @private {number}
     */
    currentStep_: number;
    /**
     * Adds callbacks that will operate on the result of the Promise, returning a
     * new child Promise.
     *
     * If the Promise is fulfilled, the `onFulfilled` callback will be invoked
     * with the fulfillment value as argument, and the child Promise will be
     * fulfilled with the return value of the callback. If the callback throws an
     * exception, the child Promise will be rejected with the thrown value instead.
     *
     * If the Promise is rejected, the `onRejected` callback will be invoked
     * with the rejection reason as argument, and the child Promise will be resolved
     * with the return value or rejected with the thrown value of the callback.
     * @suppress{checkTypes}
     *
     * @override
     */
    then(opt_onFulfilled?: any, opt_onRejected?: any, opt_context?: any): goog_Promise<any, any>;
    /**
     * Adds callbacks that will operate on the result of the Promise without
     * returning a child Promise (unlike "then").
     *
     * If the Promise is fulfilled, the `onFulfilled` callback will be invoked
     * with the fulfillment value as argument.
     *
     * If the Promise is rejected, the `onRejected` callback will be invoked
     * with the rejection reason as argument.
     *
     * @param {?(function(this:THIS, TYPE):?)=} opt_onFulfilled A
     *     function that will be invoked with the fulfillment value if the Promise
     *     is fulfilled.
     * @param {?(function(this:THIS, *): *)=} opt_onRejected A function that will
     *     be invoked with the rejection reason if the Promise is rejected.
     * @param {THIS=} opt_context An optional context object that will be the
     *     execution context for the callbacks. By default, functions are executed
     *     with the default this.
     * @package
     * @template THIS
     */
    thenVoid<THIS>(opt_onFulfilled?: (this: THIS, arg1: TYPE) => any, opt_onRejected?: (this: THIS, arg1: any) => any, opt_context?: THIS): void;
    /**
     * Adds a callback that will be invoked when the Promise is settled (fulfilled
     * or rejected). The callback receives no argument, and no new child Promise is
     * created. This is useful for ensuring that cleanup takes place after certain
     * asynchronous operations. Callbacks added with `thenAlways` will be
     * executed in the same order with other calls to `then`,
     * `thenAlways`, or `thenCatch`.
     *
     * Since it does not produce a new child Promise, cancellation propagation is
     * not prevented by adding callbacks with `thenAlways`. A Promise that has
     * a cleanup handler added with `thenAlways` will be canceled if all of
     * its children created by `then` (or `thenCatch`) are canceled.
     * Additionally, since any rejections are not passed to the callback, it does
     * not stop the unhandled rejection handler from running.
     *
     * @param {function(this:THIS): void} onSettled A function that will be invoked
     *     when the Promise is settled (fulfilled or rejected).
     * @param {THIS=} opt_context An optional context object that will be the
     *     execution context for the callbacks. By default, functions are executed
     *     in the global scope.
     * @return {!goog_Promise<TYPE>} This Promise, for chaining additional calls.
     * @template THIS
     */
    thenAlways<THIS>(onSettled: (this: THIS) => void, opt_context?: THIS): goog_Promise<TYPE, any>;
    /**
     * Adds a callback that will be invoked only if the Promise is rejected. This
     * is equivalent to `then(null, onRejected)`.
     *
     * @param {function(this:THIS, *): *} onRejected A function that will be
     *     invoked with the rejection reason if this Promise is rejected.
     * @param {THIS=} opt_context An optional context object that will be the
     *     execution context for the callbacks. By default, functions are executed
     *     in the global scope.
     * @return {!goog_Promise} A new Promise that will resolve either to the
     *     value of this promise, or if this promise is rejected, the result of
     *     `onRejected`. The returned Promise will reject if `onRejected` throws.
     * @template THIS
     */
    thenCatch<THIS>(onRejected: (this: THIS, arg1: any) => any, opt_context?: THIS): goog_Promise<any, any>;
    /**
     * Cancels the Promise if it is still pending by rejecting it with a cancel
     * Error. No action is performed if the Promise is already resolved.
     *
     * All child Promises of the canceled Promise will be rejected with the same
     * cancel error, as with normal Promise rejection. If the Promise to be canceled
     * is the only child of a pending Promise, the parent Promise will also be
     * canceled. Cancellation may propagate upward through multiple generations.
     *
     * @param {string=} opt_message An optional debugging message for describing the
     *     cancellation reason.
     */
    cancel(opt_message?: string): void;
    /**
     * Cancels this Promise with the given error.
     *
     * @param {!Error} err The cancellation error.
     * @private
     */
    cancelInternal_(err: Error): void;
    /**
     * Cancels a child Promise from the list of callback entries. If the Promise has
     * not already been resolved, reject it with a cancel error. If there are no
     * other children in the list of callback entries, propagate the cancellation
     * by canceling this Promise as well.
     *
     * @param {!goog_Promise} childPromise The Promise to cancel.
     * @param {!Error} err The cancel error to use for rejecting the Promise.
     * @private
     */
    cancelChild_(childPromise: goog_Promise<any, any>, err: Error): void;
    /**
     * Adds a callback entry to the current Promise, and schedules callback
     * execution if the Promise has already been settled.
     *
     * @param {goog_Promise.CallbackEntry_} callbackEntry Record containing
     *     `onFulfilled` and `onRejected` callbacks to execute after
     *     the Promise is settled.
     * @private
     */
    addCallbackEntry_(callbackEntry: {
        /** @type {?goog_Promise} */
        child: goog_Promise<any, any>;
        /** @type {?Function} */
        onFulfilled: Function;
        /** @type {?Function} */
        onRejected: Function;
        /** @type {?} */
        context: any;
        /** @type {?goog_Promise.CallbackEntry_} */
        next: any;
        /**
         * A boolean value to indicate this is a "thenAlways" callback entry.
         * Unlike a normal "then/thenVoid" a "thenAlways doesn't participate
         * in "cancel" considerations but is simply an observer and requires
         * special handling.
         * @type {boolean}
         */
        always: boolean;
        /** clear the object prior to reuse */
        reset(): void;
    }): void;
    /**
     * Creates a child Promise and adds it to the callback entry list. The result of
     * the child Promise is determined by the state of the parent Promise and the
     * result of the `onFulfilled` or `onRejected` callbacks as
     * specified in the Promise resolution procedure.
     *
     * @see http://promisesaplus.com/#the__method
     *
     * @param {?function(this:THIS, TYPE):
     *          (RESULT|goog_Promise<RESULT>|Thenable)} onFulfilled A callback that
     *     will be invoked if the Promise is fulfilled, or null.
     * @param {?function(this:THIS, *): *} onRejected A callback that will be
     *     invoked if the Promise is rejected, or null.
     * @param {THIS=} opt_context An optional execution context for the callbacks.
     *     in the default calling context.
     * @return {!goog_Promise} The child Promise.
     * @template RESULT,THIS
     * @private
     */
    addChildPromise_<RESULT, THIS>(onFulfilled: (this: THIS, arg1: TYPE) => Thenable<any> | RESULT | goog_Promise<RESULT, any>, onRejected: (this: THIS, arg1: any) => any, opt_context?: THIS): goog_Promise<any, any>;
    /**
     * Unblocks the Promise and fulfills it with the given value.
     *
     * @param {?TYPE} value
     * @private
     */
    unblockAndFulfill_(value: TYPE): void;
    /**
     * Unblocks the Promise and rejects it with the given rejection reason.
     *
     * @param {*} reason
     * @private
     */
    unblockAndReject_(reason: any): void;
    /**
     * Attempts to resolve a Promise with a given resolution state and value. This
     * is a no-op if the given Promise has already been resolved.
     *
     * If the given result is a Thenable (such as another Promise), the Promise will
     * be settled with the same state and result as the Thenable once it is itself
     * settled.
     *
     * If the given result is not a Thenable, the Promise will be settled (fulfilled
     * or rejected) with that result based on the given state.
     *
     * @see http://promisesaplus.com/#the_promise_resolution_procedure
     *
     * @param {goog_Promise.State_} state
     * @param {*} x The result to apply to the Promise.
     * @private
     */
    resolve_(state: number, x: any): void;
    /**
     * Executes the pending callbacks of a settled Promise after a timeout.
     *
     * Section 2.2.4 of the Promises/A+ specification requires that Promise
     * callbacks must only be invoked from a call stack that only contains Promise
     * implementation code, which we accomplish by invoking callback execution after
     * a timeout. If `startExecution_` is called multiple times for the same
     * Promise, the callback chain will be evaluated only once. Additional callbacks
     * may be added during the evaluation phase, and will be executed in the same
     * event loop.
     *
     * All Promises added to the waiting list during the same browser event loop
     * will be executed in one batch to avoid using a separate timeout per Promise.
     *
     * @private
     */
    scheduleCallbacks_(): void;
    /**
     * @return {boolean} Whether there are any pending callbacks queued.
     * @private
     */
    hasEntry_(): boolean;
    /**
     * @param {goog_Promise.CallbackEntry_} entry
     * @private
     */
    queueEntry_(entry: {
        /** @type {?goog_Promise} */
        child: goog_Promise<any, any>;
        /** @type {?Function} */
        onFulfilled: Function;
        /** @type {?Function} */
        onRejected: Function;
        /** @type {?} */
        context: any;
        /** @type {?goog_Promise.CallbackEntry_} */
        next: any;
        /**
         * A boolean value to indicate this is a "thenAlways" callback entry.
         * Unlike a normal "then/thenVoid" a "thenAlways doesn't participate
         * in "cancel" considerations but is simply an observer and requires
         * special handling.
         * @type {boolean}
         */
        always: boolean;
        /** clear the object prior to reuse */
        reset(): void;
    }): void;
    /**
     * @return {goog_Promise.CallbackEntry_} entry
     * @private
     */
    popEntry_(): {
        /** @type {?goog_Promise} */
        child: goog_Promise<any, any>;
        /** @type {?Function} */
        onFulfilled: Function;
        /** @type {?Function} */
        onRejected: Function;
        /** @type {?} */
        context: any;
        /** @type {?goog_Promise.CallbackEntry_} */
        next: any;
        /**
         * A boolean value to indicate this is a "thenAlways" callback entry.
         * Unlike a normal "then/thenVoid" a "thenAlways doesn't participate
         * in "cancel" considerations but is simply an observer and requires
         * special handling.
         * @type {boolean}
         */
        always: boolean;
        /** clear the object prior to reuse */
        reset(): void;
    };
    /**
     * @param {goog_Promise.CallbackEntry_} previous
     * @private
     */
    removeEntryAfter_(previous: {
        /** @type {?goog_Promise} */
        child: goog_Promise<any, any>;
        /** @type {?Function} */
        onFulfilled: Function;
        /** @type {?Function} */
        onRejected: Function;
        /** @type {?} */
        context: any;
        /** @type {?goog_Promise.CallbackEntry_} */
        next: any;
        /**
         * A boolean value to indicate this is a "thenAlways" callback entry.
         * Unlike a normal "then/thenVoid" a "thenAlways doesn't participate
         * in "cancel" considerations but is simply an observer and requires
         * special handling.
         * @type {boolean}
         */
        always: boolean;
        /** clear the object prior to reuse */
        reset(): void;
    }): void;
    /**
     * Executes all pending callbacks for this Promise.
     *
     * @private
     */
    executeCallbacks_(): void;
    /**
     * Executes a pending callback for this Promise. Invokes an `onFulfilled`
     * or `onRejected` callback based on the settled state of the Promise.
     *
     * @param {!goog_Promise.CallbackEntry_} callbackEntry An entry containing the
     *     onFulfilled and/or onRejected callbacks for this step.
     * @param {goog_Promise.State_} state The resolution status of the Promise,
     *     either FULFILLED or REJECTED.
     * @param {*} result The settled result of the Promise.
     * @private
     */
    executeCallback_(callbackEntry: {
        /** @type {?goog_Promise} */
        child: goog_Promise<any, any>;
        /** @type {?Function} */
        onFulfilled: Function;
        /** @type {?Function} */
        onRejected: Function;
        /** @type {?} */
        context: any;
        /** @type {?goog_Promise.CallbackEntry_} */
        next: any;
        /**
         * A boolean value to indicate this is a "thenAlways" callback entry.
         * Unlike a normal "then/thenVoid" a "thenAlways doesn't participate
         * in "cancel" considerations but is simply an observer and requires
         * special handling.
         * @type {boolean}
         */
        always: boolean;
        /** clear the object prior to reuse */
        reset(): void;
    }, state: number, result: any): void;
    /**
     * Records a stack trace entry for functions that call `then` or the
     * Promise constructor. May be disabled by unsetting `LONG_STACK_TRACES`.
     *
     * @param {!Error} err An Error object created by the calling function for
     *     providing a stack trace.
     * @private
     */
    addStackTrace_(err: Error): void;
    /**
     * Adds extra stack trace information to an exception for the list of
     * asynchronous `then` calls that have been run for this Promise. Stack
     * trace information is recorded in {@see #addStackTrace_}, and appended to
     * rethrown errors when `LONG_STACK_TRACES` is enabled.
     *
     * @param {?} err An unhandled exception captured during callback execution.
     * @private
     */
    appendLongStack_(err: any): void;
    /**
     * Marks this rejected Promise as having being handled. Also marks any parent
     * Promises in the rejected state as handled. The rejection handler will no
     * longer be invoked for this Promise (if it has not been called already).
     *
     * @private
     */
    removeUnhandledRejection_(): void;
}
declare namespace goog_Promise {
    export namespace State_ {
        export const PENDING: number;
        export const BLOCKED: number;
        export const FULFILLED: number;
        export const REJECTED: number;
    }
    /**
     * The possible internal states for a Promise. These states are not directly
     * observable to external callers.
     */
    export type State_ = number;
    export { CallbackEntry_ };
    export const freelist_: FreeList<{
        /** @type {?goog_Promise} */
        child: goog_Promise<any, any>;
        /** @type {?Function} */
        onFulfilled: Function;
        /** @type {?Function} */
        onRejected: Function;
        /** @type {?} */
        context: any;
        /** @type {?goog_Promise.CallbackEntry_} */
        next: any;
        /**
         * A boolean value to indicate this is a "thenAlways" callback entry.
         * Unlike a normal "then/thenVoid" a "thenAlways doesn't participate
         * in "cancel" considerations but is simply an observer and requires
         * special handling.
         * @type {boolean}
         */
        always: boolean;
        /** clear the object prior to reuse */
        reset(): void;
    }>;
    export { throwException as handleRejection_ };
    export { CancellationError };
    export { Resolver_ };
}
declare class CallbackEntry_ {
    /** @type {?goog_Promise} */
    child: goog_Promise | null;
    /** @type {?Function} */
    onFulfilled: Function | null;
    /** @type {?Function} */
    onRejected: Function | null;
    /** @type {?} */
    context: unknown;
    /** @type {?goog_Promise.CallbackEntry_} */
    next: goog_Promise.CallbackEntry_ | null;
    /**
     * A boolean value to indicate this is a "thenAlways" callback entry.
     * Unlike a normal "then/thenVoid" a "thenAlways doesn't participate
     * in "cancel" considerations but is simply an observer and requires
     * special handling.
     * @type {boolean}
     */
    always: boolean;
    /** clear the object prior to reuse */
    reset(): void;
}
import { FreeList } from "../async/freelist.js";
import { throwException } from "../async/nexttick.js";
declare class CancellationError extends DebugError {
    /**
     * Error used as a rejection reason for canceled Promises.
     *
     * @param {string=} opt_message
     */
    constructor(opt_message?: string);
}
declare class Resolver_<TYPE> {
    /**
     * Internal implementation of the resolver interface.
     *
     * @param {!goog_Promise<TYPE>} promise
     * @param {function((TYPE|goog_Promise<TYPE>|Thenable)=)} resolve
     * @param {function(*=): void} reject
     * @private
     * @template TYPE
     */
    constructor(promise: goog_Promise<TYPE, any>, resolve: (arg0?: Thenable<any> | TYPE | goog_Promise<TYPE, any>) => any, reject: () => void);
    /**
     * @const
     * @suppress {checkTypes}
     */
    promise: goog_Promise<TYPE, any>;
    /** @const */
    resolve: (arg0?: Thenable<any> | TYPE | goog_Promise<TYPE, any>) => any;
    /** @const */
    reject: () => void;
}
import { Error as DebugError } from "../debug/error.js";
export { goog_Promise as Promise };
