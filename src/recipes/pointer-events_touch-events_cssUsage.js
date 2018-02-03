/* 
    CSS Usage RECIPE: Pointer events and touch events listening counter
    -------------------------------------------------------------
    Author: joevery
    Description: Find instances of listening for pointer and touch events.
*/

void function ()
{
    window.CSSUsage.StyleWalker.recipesToRun.push(
        function pointer_touch_events(/*HTML DOM Element*/ element, results) {
            // We want to catch all called instances of on<event> in the element tag and in script on element.
            var eventsToCheckForWithPropertyValues = new Map(
                [
                    ["pointerup", element.onpointerup], ["pointerdown", element.onpointerdown], ["pointermove", element.onpointermove],
                    ["pointercancel", element.onpointercancel], ["pointerout", element.onpointerout], ["pointerleave", element.onpointerleave],
                    ["pointerenter", element.onpointerenter], ["pointerover", element.onpointerover], ["touchstart", element.ontouchstart],
                    ["touchend", element.ontouchend], ["touchmove", element.ontouchmove], ["touchcancel", element.ontouchcancel]
                ]);

            eventsToCheckForWithPropertyValues.forEach(
                function (value, key, map) {
                    // Can be null or undefined depending on the tag.
                    if ((value !== undefined) && (value !== null)) {
                        results[key] = results[key] || { count: 0, };
                        results[key].count++;
                    }
                }
            );

            return results;
        });
}();