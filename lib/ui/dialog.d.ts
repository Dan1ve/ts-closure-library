/**
 * The default captions for the default buttons.
 */
export type DefaultButtonCaptions = string;
/**
 * The keys used to identify standard buttons in events.
 */
export type DefaultButtonKeys = string;
/**
 * The standard buttons (keys associated with captions).
 */
export type DefaultButtons = {
    key: string;
    caption: string;
};
/**
 * Events dispatched by dialogs.
 */
export type EventType = string;
/**
 * A button set defines the behaviour of a set of buttons that the dialog can
 * show.  Uses the {@link goog.structs.Map} interface.
 *    goog.ui.Component} for semantics.
 * @extends {UiMap}
 */
export class ButtonSet extends UiMap<any, any> {
    /**
     * A button set defines the behaviour of a set of buttons that the dialog can
     * show.  Uses the {@link goog.structs.Map} interface.
     * @param {DomHelper=} opt_domHelper Optional DOM helper; see {@link
     *    goog.ui.Component} for semantics.
     */
    constructor(opt_domHelper?: googdom.DomHelper);
    dom_: googdom.DomHelper;
    /**
     * A CSS className for this component.
     * @private @const {string}
     */
    class_: string;
    /**
     * The button that has default focus (references key in buttons_ map).
     * @private {?string}
     */
    defaultButton_: string;
    /**
     * Optional container the button set should be rendered into.
     * @private {?Element}
     */
    element_: Element;
    /**
     * The button whose action is associated with the escape key and the X button
     * on the dialog.
     * @private {?string}
     */
    cancelButton_: string;
    /**
     * Adds a button to the button set.  Buttons will be displayed in the order they
     * are added.
     *
     * @param {*} key Key used to identify the button in events.
     * @param {*} caption A string caption or a DOM node that can be
     *     appended to a button element.
     * @param {boolean=} opt_isDefault Whether this button is the default button,
     *     Dialog will dispatch for this button if enter is pressed.
     * @param {boolean=} opt_isCancel Whether this button has the same behaviour as
     *    cancel.  If escape is pressed this button will fire.
     * @return {!ButtonSet} The button set, to make it easy to chain
     *    "set" calls and build new ButtonSets.
     * @override
     */
    // @ts-ignore
    set(key: any, caption: any, opt_isDefault?: boolean, opt_isCancel?: boolean): ButtonSet;
    /**
     * Adds a button (an object with a key and caption) to this button set. Buttons
     * will be displayed in the order they are added.
     * @see Dialog.DefaultButtons
     * @param {{key: string, caption: string}} button The button key and caption.
     * @param {boolean=} opt_isDefault Whether this button is the default button.
     *     Dialog will dispatch for this button if enter is pressed.
     * @param {boolean=} opt_isCancel Whether this button has the same behavior as
     *     cancel. If escape is pressed this button will fire.
     * @return {!ButtonSet} The button set, to make it easy to chain
     *     "addButton" calls and build new ButtonSets.
     */
    addButton(button: {
        key: string;
        caption: string;
    }, opt_isDefault?: boolean, opt_isCancel?: boolean): ButtonSet;
    /**
     * Attaches the button set to an element, rendering it inside.
     * @param {?Element} el Container.
     */
    attachToElement(el: Element): void;
    /**
     * Renders the button set inside its container element.
     */
    render(): void;
    /**
     * Decorates the given element by adding any `button` elements found
     * among its descendants to the button set.  The first button found is assumed
     * to be the default and will receive focus when the button set is rendered.
     * If a button with a name of {@link DefaultButtonKeys.CANCEL}
     * is found, it is assumed to have "Cancel" semantics.
     * TODO(attila):  ButtonSet should be a goog.ui.Component.  Really.
     * @param {?Element} element The element to decorate; should contain buttons.
     */
    decorate(element: Element): void;
    /**
     * Gets the component's element.
     * @return {?Element} The element for the component.
     * TODO(user): Remove after refactoring to goog.ui.Component.
     */
    getElement(): Element;
    /**
     * Returns the dom helper that is being used on this component.
     * @return {!DomHelper} The dom helper used on this component.
     * TODO(user): Remove after refactoring to goog.ui.Component.
     */
    getDomHelper(): googdom.DomHelper;
    /**
     * Sets the default button.
     * @param {?string} key The default button.
     */
    setDefault(key: string): void;
    /**
     * Returns the default button.
     * @return {?string} The default button.
     */
    getDefault(): string;
    /**
     * Sets the cancel button.
     * @param {?string} key The cancel button.
     */
    setCancel(key: string): void;
    /**
     * Returns the cancel button.
     * @return {?string} The cancel button.
     */
    getCancel(): string;
    /**
     * Returns the HTML Button element.
     * @param {string} key The button to return.
     * @return {?Element} The button, if found else null.
     */
    getButton(key: string): Element;
    /**
     * Returns all the HTML Button elements in the button set container.
     * @return {!ArrayLike<!Element>} A live NodeList of the buttons.
     */
    getAllButtons(): ArrayLike<Element>;
    /**
     * Enables or disables a button in this set by key. If the button is not found,
     * does nothing.
     * @param {string} key The button to enable or disable.
     * @param {boolean} enabled True to enable; false to disable.
     * @suppress {strictMissingProperties} Part of the go/strict_warnings_migration
     */
    setButtonEnabled(key: string, enabled: boolean): void;
    /**
     * Enables or disables all of the buttons in this set.
     * @param {boolean} enabled True to enable; false to disable.
     * @suppress {strictMissingProperties} Part of the go/strict_warnings_migration
     */
    setAllButtonsEnabled(enabled: boolean): void;
}
export namespace ButtonSet { }
export namespace DefaultButtonCaptions {
    export const OK: string;
    export const CANCEL: string;
    export const YES: string;
    export const NO: string;
    export const SAVE: string;
    export const CONTINUE: string;
}
export namespace DefaultButtonKeys {
    const OK_1: string;
    export { OK_1 as OK };
    const CANCEL_1: string;
    export { CANCEL_1 as CANCEL };
    const YES_1: string;
    export { YES_1 as YES };
    const NO_1: string;
    export { NO_1 as NO };
    const SAVE_1: string;
    export { SAVE_1 as SAVE };
    const CONTINUE_1: string;
    export { CONTINUE_1 as CONTINUE };
}
export namespace DefaultButtons {
    const OK_2: any;
    export { OK_2 as OK };
    const CANCEL_2: any;
    export { CANCEL_2 as CANCEL };
    const YES_2: any;
    export { YES_2 as YES };
    const NO_2: any;
    export { NO_2 as NO };
    const SAVE_2: any;
    export { SAVE_2 as SAVE };
    const CONTINUE_2: any;
    export { CONTINUE_2 as CONTINUE };
}
/**
 * @fileoverview Class for showing simple modal dialog boxes.
 *
 * TODO(user):
 *   * Standardize CSS class names with other components
 *   * Add functionality to "host" other components in content area
 *   * Abstract out ButtonSet and make it more general
 * @see ../demos/dialog.html
 */
/**
 * Class for showing simple dialog boxes.
 * The Html structure of the dialog box is:
 * <pre>
 *  Element         Function                Class-name, modal-dialog = default
 * ----------------------------------------------------------------------------
 * - iframe         Iframe mask              modal-dialog-bg
 * - div            Background mask          modal-dialog-bg
 * - div            Dialog area              modal-dialog
 *     - div        Title bar                modal-dialog-title
 *        - span                             modal-dialog-title-text
 *          - text  Title text               N/A
 *        - span                             modal-dialog-title-close
 *          - ??    Close box                N/A
 *     - div        Content area             modal-dialog-content
 *        - ??      User specified content   N/A
 *     - div        Button area              modal-dialog-buttons
 *        - button                           N/A
 *        - button
 *        - ...
 * </pre>
 *     as a class name prefix for related elements; defaults to modal-dialog.
 *     This should be a single, valid CSS class name.
 *     issue by using an iframe instead of a div for bg element.
 *     goog.ui.Component} for semantics.
 * @extends {ModalPopup}
 */
export class Dialog extends ModalPopup {
    /**
     * Class for showing simple dialog boxes.
     * The Html structure of the dialog box is:
     * <pre>
     *  Element         Function                Class-name, modal-dialog = default
     * ----------------------------------------------------------------------------
     * - iframe         Iframe mask              modal-dialog-bg
     * - div            Background mask          modal-dialog-bg
     * - div            Dialog area              modal-dialog
     *     - div        Title bar                modal-dialog-title
     *        - span                             modal-dialog-title-text
     *          - text  Title text               N/A
     *        - span                             modal-dialog-title-close
     *          - ??    Close box                N/A
     *     - div        Content area             modal-dialog-content
     *        - ??      User specified content   N/A
     *     - div        Button area              modal-dialog-buttons
     *        - button                           N/A
     *        - button
     *        - ...
     * </pre>
     * @param {string=} opt_class CSS class name for the dialog element, also used
     *     as a class name prefix for related elements; defaults to modal-dialog.
     *     This should be a single, valid CSS class name.
     * @param {boolean=} opt_useIframeMask Work around windowed controls z-index
     *     issue by using an iframe instead of a div for bg element.
     * @param {DomHelper=} opt_domHelper Optional DOM helper; see {@link
     *     goog.ui.Component} for semantics.
     */
    constructor(opt_class?: string, opt_useIframeMask?: boolean, opt_domHelper?: googdom.DomHelper);
    /**
     * Whether the escape key closes this dialog.
     * @type {boolean}
     * @private
     */
    escapeToCancel_: boolean;
    /**
     * Whether this dialog should include a title close button.
     * @type {boolean}
     * @private
     */
    hasTitleCloseButton_: boolean;
    /**
     * Whether the dialog is modal. Defaults to true.
     * @type {boolean}
     * @private
     */
    modal_: boolean;
    /**
     * Whether the dialog is draggable. Defaults to true.
     * @type {boolean}
     * @private
     */
    draggable_: boolean;
    /**
     * Opacity for background mask.  Defaults to 50%.
     * @type {number}
     * @private
     */
    backgroundElementOpacity_: number;
    /**
     * Dialog's title.
     * @type {string}
     * @private
     */
    title_: string;
    /**
     * Dialog's content (HTML).
     * @type {?SafeHtml}
     * @private
     */
    content_: SafeHtml | null;
    /**
     * Dragger.
     * @type {?Fx_Dragger}
     * @private
     */
    dragger_: Fx_Dragger | null;
    /**
     * Whether the dialog should be disposed when it is hidden.
     * @type {boolean}
     * @private
     */
    disposeOnHide_: boolean;
    /**
     * Element for the title bar.
     * @type {?Element}
     * @private
     */
    titleEl_: Element | null;
    /**
     * Element for the text area of the title bar.
     * @type {?Element}
     * @private
     */
    titleTextEl_: Element | null;
    /**
     * Id of element for the text area of the title bar.
     * @type {?string}
     * @private
     */
    titleTextId_: string | null;
    /**
     * Element for the close box area of the title bar.
     * @type {?Element}
     * @private
     */
    titleCloseEl_: Element | null;
    /**
     * Element for the content area.
     * @type {?Element}
     * @private
     */
    contentEl_: Element | null;
    /**
     * Element for the button bar.
     * @type {?Element}
     * @private
     */
    buttonEl_: Element | null;
    /**
     * The dialog's preferred ARIA role.
     * @type {?Role}
     * @private
     */
    preferredAriaRole_: Role | null;
    /**
     * CSS class name for the dialog element, also used as a class name prefix for
     * related elements.  Defaults to google.getCssName('modal-dialog').
     * @type {string}
     * @private
     */
    class_: string;
    /**
     * Button set.  Default to Ok/Cancel.
     * @type {?ButtonSet}
     * @private
     */
    buttons_: ButtonSet | null;
    /**
     * Sets the title.
     * @param {string} title The title text.
     */
    setTitle(title: string): void;
    /**
     * Gets the title.
     * @return {string} The title.
     */
    getTitle(): string;
    /**
     * Allows plain text to be set in the content element.
     * @param {string} text Content plain text. Newlines are preserved.
     */
    setTextContent(text: string): void;
    /**
     * Allows arbitrary HTML to be set in the content element.
     * @param {!SafeHtml} html Content HTML.
     */
    setSafeHtmlContent(html: SafeHtml): void;
    /**
     * Gets the content HTML of the content element as a plain string.
     *
     * Note that this method returns the HTML markup that was previously set via
     * setSafeHtmlContent() or setTextContent(). In particular, the HTML returned by
     * this method does not reflect any changes to the content element's DOM that
     * were made by other means.
     *
     * @return {string} Content HTML.
     */
    getContent(): string;
    /**
     * Gets the content HTML of the content element.
     * @return {?SafeHtml} Content HTML.
     */
    getSafeHtmlContent(): SafeHtml;
    /**
     * Returns the dialog's preferred ARIA role. This can be used to override the
     * default dialog role, e.g. with an ARIA role of ALERTDIALOG for a simple
     * warning or confirmation dialog.
     * @return {?Role} This dialog's preferred ARIA role.
     */
    getPreferredAriaRole(): string;
    /**
     * Sets the dialog's preferred ARIA role. This can be used to override the
     * default dialog role, e.g. with an ARIA role of ALERTDIALOG for a simple
     * warning or confirmation dialog.
     * @param {?Role} role This dialog's preferred ARIA role.
     */
    setPreferredAriaRole(role: string): void;
    /**
     * Renders if the DOM is not created.
     * @private
     */
    renderIfNoDom_(): void;
    /**
     * Returns the title element so that more complicated things can be done with
     * the title.  Renders if the DOM is not yet created.
     * @return {?Element} The title element.
     */
    getTitleElement(): Element;
    /**
     * Returns the title text element so that more complicated things can be done
     * with the text of the title.  Renders if the DOM is not yet created.
     * @return {?Element} The title text element.
     */
    getTitleTextElement(): Element;
    /**
     * Returns the title close element so that more complicated things can be done
     * with the close area of the title.  Renders if the DOM is not yet created.
     * @return {?Element} The close box.
     */
    getTitleCloseElement(): Element;
    /**
     * Get the dialog close message.
     * @return {string}
     * @protected
     */
    getDialogCloseMessage(): string;
    /**
     * Returns the button element so that more complicated things can be done with
     * the button area.  Renders if the DOM is not yet created.
     * @return {?Element} The button container element.
     */
    getButtonElement(): Element;
    /**
     * Returns the dialog element so that more complicated things can be done with
     * the dialog box.  Renders if the DOM is not yet created.
     * @return {?Element} The dialog element.
     */
    getDialogElement(): Element;
    /**
     * Gets the opacity of the background mask.
     * @return {number} Background mask opacity.
     */
    getBackgroundElementOpacity(): number;
    /**
     * Sets the opacity of the background mask.
     * @param {number} opacity Background mask opacity.
     */
    setBackgroundElementOpacity(opacity: number): void;
    /**
     * Sets the modal property of the dialog. In case the dialog is already
     * inDocument, renders the modal background elements according to the specified
     * modal parameter.
     *
     * Note that non-modal dialogs cannot use an iframe mask.
     *
     * @param {boolean} modal Whether the dialog is modal.
     */
    setModal(modal: boolean): void;
    /**
     * Sets the modal property of the dialog.
     * @param {boolean} modal Whether the dialog is modal.
     * @private
     */
    setModalInternal_(modal: boolean): void;
    /**
     * @return {boolean} modal Whether the dialog is modal.
     */
    getModal(): boolean;
    /**
     * @return {string} The CSS class name for the dialog element.
     */
    getClass(): string;
    /**
     * Sets whether the dialog can be dragged.
     * @param {boolean} draggable Whether the dialog can be dragged.
     */
    setDraggable(draggable: boolean): void;
    /**
     * Returns a dragger for moving the dialog and adds a class for the move cursor.
     * Defaults to allow dragging of the title only, but can be overridden if
     * different drag targets or dragging behavior is desired.
     * @return {!Fx_Dragger} The created dragger instance.
     * @protected
     */
    createDragger(): Fx_Dragger;
    /**
     * @return {boolean} Whether the dialog is draggable.
     */
    getDraggable(): boolean;
    /**
     * Enables or disables dragging.
     * @param {boolean} enabled Whether to enable it.
     * @private
     */
    setDraggingEnabled_(enabled: boolean): void;
    /**
     * Sets dragger limits when dragging is started.
     * @param {!EventsEvent} e DraggerEventType.START event.
     * @private
     */
    setDraggerLimits_(e: EventsEvent): void;
    /**
     * Handles a click on the title close area.
     * @param {?EventsBrowserEvent} e Browser's event object.
     * @private
     */
    onTitleCloseClick_(e: EventsBrowserEvent): void;
    /**
     * Performs the action of closing the dialog in response to the title close
     * button being interacted with. General purpose method to be called by click
     * and button event handlers.
     * @private
     */
    handleTitleClose_(): void;
    /**
     * @return {boolean} Whether this dialog has a title close button.
     */
    getHasTitleCloseButton(): boolean;
    /**
     * Sets whether the dialog should have a close button in the title bar. There
     * will always be an element for the title close button, but setting this
     * parameter to false will cause it to be hidden and have no active listener.
     * @param {boolean} b Whether this dialog should have a title close button.
     */
    setHasTitleCloseButton(b: boolean): void;
    /**
     * @return {boolean} Whether the escape key should close this dialog.
     */
    isEscapeToCancel(): boolean;
    /**
     * @param {boolean} b Whether the escape key should close this dialog.
     */
    setEscapeToCancel(b: boolean): void;
    /**
     * Sets whether the dialog should be disposed when it is hidden.  By default
     * dialogs are not disposed when they are hidden.
     * @param {boolean} b Whether the dialog should get disposed when it gets
     *     hidden.
     */
    setDisposeOnHide(b: boolean): void;
    /**
     * @return {boolean} Whether the dialog should be disposed when it is hidden.
     */
    getDisposeOnHide(): boolean;
    /**
     * Sets the button set to use.
     * Note: Passing in null will cause no button set to be rendered.
     * @param {ButtonSet?} buttons The button set to use.
     */
    setButtonSet(buttons: ButtonSet): void;
    /**
     * Returns the button set being used.
     * @return {ButtonSet?} The button set being used.
     */
    getButtonSet(): ButtonSet;
    /**
     * Handles a click on the button container.
     * @param {?EventsBrowserEvent} e Browser's event object.
     * @private
     * @suppress {strictMissingProperties} Part of the go/strict_warnings_migration
     */
    onButtonClick_(e: EventsBrowserEvent): void;
    /**
     * Finds the parent button of an element (or null if there was no button
     * parent).
     * @param {?Element} element The element that was clicked on.
     * @return {?Element} Returns the parent button or null if not found.
     * @private
     * @suppress {strictMissingProperties} Part of the go/strict_warnings_migration
     */
    findParentButton_(element: Element): Element;
    /**
     * Handles keydown and keypress events, and dismisses the popup if cancel is
     * pressed.  If there is a cancel action in the ButtonSet, than that will be
     * fired.  Also prevents tabbing out of the dialog.
     * @param {?EventsBrowserEvent} e Browser's event object.
     * @private
     * @suppress {strictMissingProperties} Part of the go/strict_warnings_migration
     */
    onKey_(e: EventsBrowserEvent): void;
    actualEventTarget_: Dialog;
}
export namespace Dialog {
    export const SELECT_EVENT: string;
    export const MSG_DIALOG_OK_: string;
    export const MSG_DIALOG_CANCEL_: string;
    export const MSG_DIALOG_YES_: string;
    export const MSG_DIALOG_NO_: string;
    export const MSG_DIALOG_SAVE_: string;
    export const MSG_DIALOG_CONTINUE_: string;
    export const MSG_GOOG_UI_DIALOG_CLOSE_: string;
}
/**
 * Dialog event class.
 * @extends {EventsEvent}
 */
declare class Dialog_Event extends EventsEvent {
    /**
     * Dialog event class.
     * @param {string} key Key identifier for the button.
     * @param {string|Element} caption Caption on the button (might be i18nlized).
     */
    constructor(key: string, caption: string | Element);
    /** @const */
    key: string;
    /** @const */
    caption: string | Element;
}
export namespace EventType {
    export const SELECT: string;
    export const AFTER_HIDE: string;
    export const AFTER_SHOW: string;
}
import { Map as UiMap } from "./map.js";
import * as googdom from "../dom/dom.js";
import { ModalPopup } from "./modalpopup.js";
import { SafeHtml } from "../html/safehtml.js";
import { Dragger as Fx_Dragger } from "../fx/dragger.js";
import { Role } from "../a11y/aria/roles.js";
import { Event as EventsEvent } from "../events/event.js";
import { BrowserEvent as EventsBrowserEvent } from "../events/browserevent.js";
export { Dialog_Event as Event };
