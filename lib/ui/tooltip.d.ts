/**
 * Possible states for the tooltip to be in.
 */
export type State = number;
/**
 * Popup position implementation that positions the popup (the tooltip in this
 * case) based on the cursor position. It's positioned below the cursor to the
 * right if there's enough room to fit all of it inside the Viewport. Otherwise
 * it's displayed as far right as possible either above or below the element.
 *
 * Used to position tooltips triggered by the cursor.
 *
 * @extends {ViewportPosition}
 * @final
 */
export class CursorTooltipPosition extends ViewportPosition {
    /**
     * Popup position implementation that positions the popup (the tooltip in this
     * case) based on the cursor position. It's positioned below the cursor to the
     * right if there's enough room to fit all of it inside the Viewport. Otherwise
     * it's displayed as far right as possible either above or below the element.
     *
     * Used to position tooltips triggered by the cursor.
     *
     * @param {number|!Coordinate} arg1 Left position or coordinate.
     * @param {number=} opt_arg2 Top position.
     */
    constructor(arg1: number | Coordinate, opt_arg2?: number);
    /**
     * Repositions the popup based on cursor position.
     *
     * @param {?Element} element The DOM element of the popup.
     * @param {?Corner} popupCorner The corner of the popup element
     *     that that should be positioned adjacent to the anchorElement.
     * @param {Box=} opt_margin A margin specified in pixels.
     * @override
     */
    reposition(element: Element, popupCorner: goog_positioning.Corner, opt_margin?: Box): void;
}
/**
 * Popup position implementation that positions the popup (the tooltip in this
 * case) based on the element position. It's positioned below the element to the
 * right if there's enough room to fit all of it inside the Viewport. Otherwise
 * it's displayed as far right as possible either above or below the element.
 *
 * Used to position tooltips triggered by focus changes.
 *
 * @extends {AnchoredPosition}
 */
export class ElementTooltipPosition extends AnchoredPosition {
    /**
     * Popup position implementation that positions the popup (the tooltip in this
     * case) based on the element position. It's positioned below the element to the
     * right if there's enough room to fit all of it inside the Viewport. Otherwise
     * it's displayed as far right as possible either above or below the element.
     *
     * Used to position tooltips triggered by focus changes.
     *
     * @param {?Element} element The element to anchor the popup at.
     */
    constructor(element: Element);
    /**
     * Repositions the popup based on element position.
     *
     * @param {?Element} element The DOM element of the popup.
     * @param {?Corner} popupCorner The corner of the popup element
     *     that should be positioned adjacent to the anchorElement.
     * @param {Box=} opt_margin A margin specified in pixels.
     * @override
     */
    reposition(element: Element, popupCorner: goog_positioning.Corner, opt_margin?: Box): void;
}
export namespace State {
    export const INACTIVE: number;
    export const WAITING_TO_SHOW: number;
    export const SHOWING: number;
    export const WAITING_TO_HIDE: number;
    export const UPDATING: number;
}
/**
 * @fileoverview Tooltip widget implementation.
 *
 * @see ../demos/tooltip.html
 */
/**
 * Tooltip widget. Can be attached to one or more elements and is shown, with a
 * slight delay, when the the cursor is over the element or the element gains
 * focus.
 *
 *     element reference or string id.
 * @extends {Popup}
 */
export class Tooltip extends Popup {
    /**
     * Tooltip widget. Can be attached to one or more elements and is shown, with a
     * slight delay, when the the cursor is over the element or the element gains
     * focus.
     *
     * @param {Element|string=} opt_el Element to display tooltip for, either
     *     element reference or string id.
     * @param {?string=} opt_str Text message to display in tooltip.
     * @param {DomHelper=} opt_domHelper Optional DOM helper.
     */
    constructor(opt_el?: string | Element, opt_str?: string, opt_domHelper?: googdom.DomHelper);
    /**
     * Active element reference. Used by the delayed show functionality to keep
     * track of the element the mouse is over or the element with focus.
     * @type {?Element}
     * @private
     */
    activeEl_: Element | null;
    /**
     * CSS class name for tooltip.
     *
     * @type {string}
     */
    className: string;
    /**
     * Delay in milliseconds since the last mouseover or mousemove before the
     * tooltip is displayed for an element.
     *
     * @type {number}
     * @private
     */
    showDelayMs_: number;
    /**
     * Timer for when to show.
     *
     * @type {number|undefined}
     * @protected
     */
    showTimer: number | undefined;
    /**
     * Delay in milliseconds before tooltips are hidden.
     *
     * @type {number}
     * @private
     */
    hideDelayMs_: number;
    /**
     * Timer for when to hide.
     *
     * @type {number|undefined}
     * @protected
     */
    hideTimer: number | undefined;
    /**
     * Element that triggered the tooltip.  Note that if a second element triggers
     * this tooltip, anchor becomes that second element, even if its show is
     * cancelled and the original tooltip survives.
     *
     * @type {Element|undefined}
     * @protected
     */
    anchor: Element | undefined;
    /**
     * Whether the anchor has seen the cursor move or has received focus since the
     * tooltip was last shown. Used to ignore mouse over events triggered by view
     * changes and UI updates.
     * @type {boolean|undefined}
     * @private
     */
    seenInteraction_: boolean | undefined;
    /**
     * Whether the cursor must have moved before the tooltip will be shown.
     * @type {boolean|undefined}
     * @private
     */
    requireInteraction_: boolean | undefined;
    /**
     * If this tooltip's element contains another tooltip that becomes active, this
     * property identifies that tooltip so that we can check if this tooltip should
     * not be hidden because the nested tooltip is active.
     * @type {?Tooltip}
     * @private
     */
    childTooltip_: Tooltip | null;
    /**
     * If this tooltip is inside another tooltip's element, then it may have
     * prevented that tooltip from hiding.  When this tooltip hides, we'll need
     * to check if the parent should be hidden as well.
     * @type {?Tooltip}
     * @private
     */
    parentTooltip_: Tooltip | null;
    /**
     * Dom Helper
     * @type {?DomHelper}
     * @private
     */
    dom_: DomHelper | null;
    /**
     * Cursor position relative to the page.
     * @type {!Coordinate}
     * @protected
     */
    cursorPosition: Coordinate;
    /**
     * Elements this widget is attached to.
     * @type {?StructsSet}
     * @private
     */
    elements_: StructsSet<any> | null;
    /**
     * Keyboard focus event handler for elements inside the tooltip.
     * @private {?FocusHandler}
     */
    tooltipFocusHandler_: FocusHandler;
    /**
     * Returns the dom helper that is being used on this component.
     * @return {?DomHelper} The dom helper used on this component.
     */
    getDomHelper(): googdom.DomHelper;
    /**
     * @return {?Tooltip} Active tooltip in a child element, or null if none.
     * @protected
     */
    getChildTooltip(): Tooltip;
    /**
     * Attach to element. Tooltip will be displayed when the cursor is over the
     * element or when the element has been active for a few milliseconds.
     *
     * @param {Element|string} el Element to display tooltip for, either element
     *                            reference or string id.
     */
    attach(el: string | Element): void;
    /**
     * Detach from element(s).
     *
     * @param {Element|string=} opt_el Element to detach from, either element
     *                                reference or string id. If no element is
     *                                specified all are detached.
     */
    detach(opt_el?: string | Element): void;
    /**
     * Detach from element.
     *
     * @param {?Element} el Element to detach from.
     * @private
     */
    detachElement_(el: Element): void;
    /**
     * Sets delay in milliseconds before tooltip is displayed for an element.
     *
     * @param {number} delay The delay in milliseconds.
     */
    setShowDelayMs(delay: number): void;
    /**
     * @return {number} The delay in milliseconds before tooltip is displayed for an
     *     element.
     */
    getShowDelayMs(): number;
    /**
     * Sets delay in milliseconds before tooltip is hidden once the cursor leavs
     * the element.
     *
     * @param {number} delay The delay in milliseconds.
     */
    setHideDelayMs(delay: number): void;
    /**
     * @return {number} The delay in milliseconds before tooltip is hidden once the
     *     cursor leaves the element.
     */
    getHideDelayMs(): number;
    /**
     * Sets tooltip message as plain text.
     *
     * @param {string} str Text message to display in tooltip.
     */
    setText(str: string): void;
    /**
     * Sets tooltip message as HTML markup.
     * @param {!SafeHtml} html HTML message to display in tooltip.
     */
    setSafeHtml(html: SafeHtml): void;
    /**
     * Handler for keyboard focus events of elements inside the tooltip's content
     * element. This should only be invoked if this.getElement() != null.
     * @private
     */
    registerContentFocusEvents_(): void;
    /**
     * @return {string} The tooltip message as plain text.
     */
    getText(): string;
    /**
     * @return {string} The tooltip message as HTML as plain string.
     */
    getHtml(): string;
    /**
     * @return {?State} Current state of tooltip.
     */
    getState(): number;
    /**
     * Sets whether tooltip requires the mouse to have moved or the anchor receive
     * focus before the tooltip will be shown.
     * @param {boolean} requireInteraction Whether tooltip should require some user
     *     interaction before showing tooltip.
     */
    setRequireInteraction(requireInteraction: boolean): void;
    /**
     * Returns true if the coord is in the tooltip.
     * @param {?Coordinate} coord Coordinate being tested.
     * @return {boolean} Whether the coord is in the tooltip.
     */
    isCoordinateInTooltip(coord: Coordinate): boolean;
    /** @override */
    onHide(): void;
    /**
     * Called by timer from mouse over handler. Shows tooltip if cursor is still
     * over the same element.
     *
     * @param {?Element} el Element to show tooltip for.
     * @param {AbstractPosition=} opt_pos Position to display popup
     *     at.
     */
    maybeShow(el: Element, opt_pos?: AbstractPosition): void;
    /**
     * @return {?StructsSet} Elements this widget is attached to.
     * @protected
     */
    getElements(): StructsSet<any>;
    /**
     * @return {?Element} Active element reference.
     */
    getActiveElement(): Element;
    /**
     * @param {?Element} activeEl Active element reference.
     * @protected
     */
    setActiveElement(activeEl: Element): void;
    /**
     * Shows tooltip for a specific element.
     *
     * @param {?Element} el Element to show tooltip for.
     * @param {AbstractPosition=} opt_pos Position to display popup
     *     at.
     */
    showForElement(el: Element, opt_pos?: AbstractPosition): void;
    /**
     * Sets tooltip position and shows it.
     *
     * @param {?Element} el Element to show tooltip for.
     * @param {AbstractPosition=} opt_pos Position to display popup
     *     at.
     * @private
     */
    positionAndShow_(el: Element, opt_pos?: AbstractPosition): void;
    /**
     * Called by timer from mouse out handler. Hides tooltip if cursor is still
     * outside element and tooltip, or if a child of tooltip has the focus.
     * @param {?Element|undefined} el Tooltip's anchor when hide timer was started.
     */
    maybeHide(el: Element): void;
    /**
     * @return {boolean} Whether tooltip element contains an active child tooltip,
     *     and should thus not be hidden.  When the child tooltip is hidden, it
     *     will check if the parent should be hidden, too.
     * @protected
     */
    hasActiveChild(): boolean;
    /**
     * Saves the current mouse cursor position to `this.cursorPosition`.
     * @param {?EventsBrowserEvent} event MOUSEOVER or MOUSEMOVE event.
     * @private
     */
    saveCursorPosition_(event: EventsBrowserEvent): void;
    /**
     * Handler for mouse over events.
     *
     * @param {?EventsBrowserEvent} event Event object.
     * @protected
     */
    handleMouseOver(event: EventsBrowserEvent): void;
    /**
     * Find anchor containing the given element, if any.
     *
     * @param {?Element} el Element that triggered event.
     * @return {?Element} Element in elements_ array that contains given element,
     *     or null if not found.
     * @protected
     */
    getAnchorFromElement(el: Element): Element;
    /**
     * Handler for mouse move events.
     *
     * @param {?EventsBrowserEvent} event MOUSEMOVE event.
     * @protected
     */
    handleMouseMove(event: EventsBrowserEvent): void;
    /**
     * Handler for focus events.
     *
     * @param {?EventsBrowserEvent} event Event object.
     * @protected
     */
    handleFocus(event: EventsBrowserEvent): void;
    /**
     * Return a Position instance for repositioning the tooltip. Override in
     * subclasses to customize the way repositioning is done.
     *
     * @param {Tooltip.Activation} activationType Information about what
     *    kind of event caused the popup to be shown.
     * @return {!AbstractPosition} The position object used
     *    to position the tooltip.
     * @protected
     */
    getPositioningStrategy(activationType: number): AbstractPosition;
    /**
     * Looks for an active tooltip whose element contains this tooltip's anchor.
     * This allows us to prevent hides until they are really necessary.
     *
     * @private
     */
    checkForParentTooltip_(): void;
    /**
     * Handler for mouse out and blur events.
     *
     * @param {?EventsBrowserEvent} event Event object.
     * @protected
     */
    handleMouseOutAndBlur(event: EventsBrowserEvent): void;
    /**
     * Handler for mouse over events for the tooltip element.
     *
     * @param {?EventsBrowserEvent} event Event object.
     * @protected
     */
    handleTooltipMouseOver(event: EventsBrowserEvent): void;
    /**
     * Handler for mouse out events for the tooltip element.
     *
     * @param {?EventsBrowserEvent} event Event object.
     * @protected
     */
    handleTooltipMouseOut(event: EventsBrowserEvent): void;
    /**
     * Helper method, starts timer that calls maybeShow. Parameters are passed to
     * the maybeShow method.
     *
     * @param {?Element} el Element to show tooltip for.
     * @param {AbstractPosition=} opt_pos Position to display popup
     *     at.
     * @protected
     */
    startShowTimer(el: Element, opt_pos?: AbstractPosition): void;
    /**
     * Helper method called to clear the show timer.
     *
     * @protected
     */
    clearShowTimer(): void;
    /**
     * Helper method called to start the close timer.
     * @protected
     */
    startHideTimer(): void;
    /**
     * Helper method called to clear the close timer.
     * @protected
     */
    clearHideTimer(): void;
    actualEventTarget_: Tooltip;
}
export namespace Tooltip {
    export const activeInstances_: Array<Tooltip>;
    export namespace Activation {
        export const CURSOR: number;
        export const FOCUS: number;
    }
    /**
     * Popup activation types. Used to select a positioning strategy.
     */
    export type Activation = number;
}
import { ViewportPosition } from "../positioning/viewportposition.js";
import * as goog_positioning from "../positioning/positioning.js";
import { Box } from "../math/box.js";
import { Coordinate } from "../math/coordinate.js";
import { AnchoredPosition } from "../positioning/anchoredposition.js";
import { Popup } from "./popup.js";
import { DomHelper } from "../dom/dom.js";
import { Set as StructsSet } from "../structs/set.js";
import { FocusHandler } from "../events/focushandler.js";
import * as googdom from "../dom/dom.js";
import { SafeHtml } from "../html/safehtml.js";
import { AbstractPosition } from "../positioning/abstractposition.js";
import { BrowserEvent as EventsBrowserEvent } from "../events/browserevent.js";
