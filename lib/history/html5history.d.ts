/**
 * @fileoverview HTML5 based history implementation, compatible with
 * goog.History.
 *
 * TODO(user): There should really be a history interface and multiple
 * implementations.
 */
/**
 * An implementation compatible with google.History that uses the HTML5
 * history APIs.
 *
 *     The token transformer that is used to create URL from the token
 *     when storing token without using hash fragment.
 * @extends {EventsEventTarget}
 * @final
 */
export class Html5History extends goog_events.EventTarget {
    /**
     * An implementation compatible with google.History that uses the HTML5
     * history APIs.
     *
     * @param {Window=} opt_win The window to listen/dispatch history events on.
     * @param {TokenTransformer=} opt_transformer
     *     The token transformer that is used to create URL from the token
     *     when storing token without using hash fragment.
     */
    constructor(opt_win?: Window, opt_transformer?: TokenTransformer);
    /**
     * Status of when the object is active and dispatching events.
     * @type {boolean}
     * @private
     */
    enabled_: boolean;
    /**
     * Whether to use the fragment to store the token, defaults to true.
     * @type {boolean}
     * @private
     */
    useFragment_: boolean;
    /**
     * If useFragment is false the path will be used, the path prefix will be
     * prepended to all tokens. Defaults to '/'.
     * @type {string}
     * @private
     */
    pathPrefix_: string;
    /**
     * The window object to use for history tokens.  Typically the top window.
     * @type {?Window}
     * @private
     */
    window_: Window | null;
    /**
     * The token transformer that is used to create URL from the token
     * when storing token without using hash fragment.
     * @type {?TokenTransformer}
     * @private
     */
    transformer_: TokenTransformer | null;
    /**
     * The fragment of the last navigation. Used to eliminate duplicate/redundant
     * NAVIGATE events when a POPSTATE and HASHCHANGE event are triggered for the
     * same navigation (e.g., back button click).
     * @private {?string}
     */
    lastFragment_: string;
    /**
     * Starts or stops the History.  When enabled, the History object
     * will immediately fire an event for the current location. The caller can set
     * up event listeners between the call to the constructor and the call to
     * setEnabled.
     *
     * @param {boolean} enable Whether to enable history.
     */
    setEnabled(enable: boolean): void;
    /**
     * Returns the current token.
     * @return {string} The current token.
     */
    getToken(): string;
    /**
     * Sets the history state.
     * @param {string} token The history state identifier.
     * @param {string=} opt_title Optional title to associate with history entry.
     */
    setToken(token: string, opt_title?: string): void;
    /**
     * Replaces the current history state without affecting the rest of the history
     * stack.
     * @param {string} token The history state identifier.
     * @param {string=} opt_title Optional title to associate with history entry.
     */
    replaceToken(token: string, opt_title?: string): void;
    /**
     * Sets whether to use the fragment to store tokens.
     * @param {boolean} useFragment Whether to use the fragment.
     */
    setUseFragment(useFragment: boolean): void;
    /**
     * Sets the path prefix to use if storing tokens in the path. The path
     * prefix should start and end with slash.
     * @param {string} pathPrefix Sets the path prefix.
     */
    setPathPrefix(pathPrefix: string): void;
    /**
     * Gets the path prefix.
     * @return {string} The path prefix.
     */
    getPathPrefix(): string;
    /**
     * Gets the current hash fragment, if useFragment_ is enabled.
     * @return {?string} The hash fragment.
     * @private
     */
    getFragment_(): string;
    /**
     * Gets the URL to set when calling history.pushState
     * @param {string} token The history token.
     * @return {string} The URL.
     * @private
     */
    getUrl_(token: string): string;
    /**
     * Handles history events dispatched by the browser.
     * @param {?EventsBrowserEvent} e The browser event object.
     * @private
     */
    onHistoryEvent_(e: EventsBrowserEvent): void;
    actualEventTarget_: Html5History;
}
export namespace Html5History { }
/**
 * A token transformer that can create a URL from a history
 * token. This is used by `Html5History` to create
 * URL when storing token without the hash fragment.
 *
 * Given a `window.location` object containing the location
 * created by `createUrl`, the token transformer allows
 * retrieval of the token back via `retrieveToken`.
 *
 * @interface
 */
export class TokenTransformer {
    /**
     * Retrieves a history token given the path prefix and
     * `window.location` object.
     *
     * @param {string} pathPrefix The path prefix to use when storing token
     *     in a path; always begin with a slash.
     * @param {?Location} location The `window.location` object.
     *     Treat this object as read-only.
     * @return {string} token The history token.
     */
    retrieveToken(pathPrefix: string, location: Location): string;
    /**
     * Creates a URL to be pushed into HTML5 history stack when storing
     * token without using hash fragment.
     *
     * @param {string} token The history token.
     * @param {string} pathPrefix The path prefix to use when storing token
     *     in a path; always begin with a slash.
     * @param {?Location} location The `window.location` object.
     *     Treat this object as read-only.
     * @return {string} url The complete URL string from path onwards
     *     (without {@code protocol://host:port} part); must begin with a
     *     slash.
     */
    createUrl(token: string, pathPrefix: string, location: Location): string;
}
import * as goog_events from "../events/eventhandler.js";
import { BrowserEvent as EventsBrowserEvent } from "../events/browserevent.js";
