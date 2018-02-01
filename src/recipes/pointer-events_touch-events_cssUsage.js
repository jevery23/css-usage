/* 
    RECIPE: Pointer events and touch events listening counter
    -------------------------------------------------------------
    Author: joevery
    Description: Find instances of listening for pointer and touch events.
*/

void function ()
{
    window.CSSUsage.StyleWalker.recipesToRun.push(
        function pointer_events_touch_events(/*HTML DOM Element*/ element, results)
        {
            var nodeName = element.nodeName;

            // We want to catch all instances of listening for these events.
            var eventsToCheckFor = ["pointerup", "pointerdown", "pointermove", "pointercancel", "pointerout", "pointerleave", "pointerenter", "pointerover",
                "touchstart", "touchend", "touchmove", "touchcancel"];

            // We just want to check on attributes.
            for (const event of eventsToCheckFor) {
                if (element.attributes["on" + event] !== undefined) {
                    results[event] = results[event] || { count: 0, };
                    results[event].count++;
                }
                break;
            }

            return results;
        });

    function findNumOfStringInstancesInText_CaseSensitive(string, text)
    {
        var regex = new RegExp(string, 'g');
        var instances = text.match(regex);

        return instances.length;
    }
}();