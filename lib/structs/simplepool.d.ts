/**
 * @fileoverview Datastructure: Pool.
 *
 *
 * A generic class for handling pools of objects that is more efficient than
 * goog.structs.Pool because it doesn't maintain a list of objects that are in
 * use. See constructor comment.
 */
/**
 * A generic pool class. Simpler and more efficient than goog.structs.Pool
 * because it doesn't maintain a list of objects that are in use. This class
 * has constant overhead and doesn't create any additional objects as part of
 * the pool management after construction time.
 *
 * IMPORTANT: If the objects being pooled are arrays or maps that can have
 * unlimited number of properties, they need to be cleaned before being
 * returned to the pool.
 *
 * Also note that {@see goog.object.clean} actually allocates an array to clean
 * the object passed to it, so simply using this function would defy the
 * purpose of using the pool.
 *
 *     pool at construction time.
 * @extends {Disposable}
 * @template T
 */
export class SimplePool<T> extends Disposable {
    /**
     * A generic pool class. Simpler and more efficient than goog.structs.Pool
     * because it doesn't maintain a list of objects that are in use. This class
     * has constant overhead and doesn't create any additional objects as part of
     * the pool management after construction time.
     *
     * IMPORTANT: If the objects being pooled are arrays or maps that can have
     * unlimited number of properties, they need to be cleaned before being
     * returned to the pool.
     *
     * Also note that {@see goog.object.clean} actually allocates an array to clean
     * the object passed to it, so simply using this function would defy the
     * purpose of using the pool.
     *
     * @param {number} initialCount Initial number of objects to populate the free
     *     pool at construction time.
     * @param {number} maxCount Maximum number of objects to keep in the free pool.
     * @template T
     */
    constructor(initialCount: number, maxCount: number);
    /**
     * Function for overriding createObject. The avoids a common case requiring
     * subclassing this class.
     * @private {?Function}
     */
    createObjectFn_: Function;
    /**
     * Function for overriding disposeObject. The avoids a common case requiring
     * subclassing this class.
     * @private {?Function}
     */
    disposeObjectFn_: Function;
    /**
     * Maximum number of objects allowed
     * @private {number}
     */
    maxCount_: number;
    /**
     * Queue used to store objects that are currently in the pool and available
     * to be used.
     * @private {Array<T>}
     */
    freeQueue_: any[];
    /**
     * Sets the `createObject` function which is used for creating a new
     * object in the pool.
     * @param {?Function} createObjectFn Create object function which returns the
     *     newly created object.
     */
    setCreateObjectFn(createObjectFn: Function): void;
    /**
     * Sets the `disposeObject` function which is used for disposing of an
     * object in the pool.
     * @param {?Function} disposeObjectFn Dispose object function which takes the
     *     object to dispose as a parameter.
     */
    setDisposeObjectFn(disposeObjectFn: Function): void;
    /**
     * Gets an unused object from the the pool, if there is one available,
     * otherwise creates a new one.
     * @return {T} An object from the pool or a new one if necessary.
     */
    getObject(): T;
    /**
     * Returns an object to the pool so that it can be reused. If the pool is
     * already full, the object is disposed instead.
     * @param {T} obj The object to release.
     */
    releaseObject(obj: T): void;
    /**
     * Populates the pool with initialCount objects.
     * @param {number} initialCount The number of objects to add to the pool.
     * @private
     */
    createInitial_(initialCount: number): void;
    /**
     * Should be overridden by sub-classes to return an instance of the object type
     * that is expected in the pool.
     * @return {T} The created object.
     */
    createObject(): T;
    /**
     * Should be overrideen to dispose of an object. Default implementation is to
     * remove all of the object's members, which should render it useless. Calls the
     *  object's dispose method, if available.
     * @param {T} obj The object to dispose.
     */
    disposeObject(obj: T): void;
}
import { Disposable } from "../disposable/disposable.js";
