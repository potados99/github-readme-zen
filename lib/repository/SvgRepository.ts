class SvgRepository {
    createSvgFromText(text: string) {
        return `
        <svg
            width="495"
            height="44"
            viewBox="0 0 495 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">

            <style>
                .header {
                    font: 600 18px Sans-Serif;
                    animation: fadeInAnimation 0.8s ease-in-out forwards;
                    word-break: keep-all;
                }

                @keyframes fadeInAnimation {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }
                
            </style>

            <switch>
                <foreignObject width="495" height="44">
                    <p class="header" xmlns="http://www.w3.org/1999/xhtml">"${text}"</p>
                </foreignObject>
            </switch>

        </svg>
        `
    }
}

export default SvgRepository;
