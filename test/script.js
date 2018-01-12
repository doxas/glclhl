
(() => {
    window.addEventListener('load', () => {
        const backscreen = document.getElementById('insert_target');
        const backscreenOption = {
            target: backscreen,
            eventTarget: window,
            mouse: true,
            resize: true,
            escape: true
        };
        const content = document.getElementById('insert_target_content');
        const contentOption = {
            target: content,
            eventTarget: null,
            mouse: true,
            resize: true,
            escape: false
        };
        fetch('shader/test.frag')
        .then((response) => {
            return response.text();
        })
        .then((source) => {
            new GLCLHL(backscreenOption).render(source);
            new GLCLHL(contentOption).render(source);
        });
    }, false);
})();

