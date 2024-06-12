export default function delayedMagic(Alpine) {
    Alpine.magic('delay', (el) => {
        return (callback, time = null) => {
            let totalDelay = 0;
            let hasDelay = time !== null;
            let currentElement = el;

            while (currentElement) {
                const delayAttr = currentElement.getAttribute('x-delay');

                if (delayAttr) {
                    totalDelay += parseInt(delayAttr);
                    hasDelay = true;
                }

                currentElement = currentElement.parentElement;
            }

            if (time !== null) {
                totalDelay += time;
            }

            if (!hasDelay) {
                throw "No delay specified and no parent x-delay attribute was found.";
            }

            setTimeout(callback, totalDelay);
        };
    });
}
