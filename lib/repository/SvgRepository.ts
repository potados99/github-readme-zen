class SvgRepository {
    createSvgFromText(text: string) {
        return `
        <svg
            width="495"
            height="40"
            viewBox="0 0 495 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">

            <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style="stop-color: rgb(89,188,227); stop-opacity: 1" />
                    <stop offset="100%" style="stop-color: rgb(72,52,198); stop-opacity: 1" />
                </linearGradient>
            </defs>
        
            <style>
                .header {
                    font: 600 18px 'Segoe UI', Ubuntu, Sans-Serif;
                    fill: url(#grad1);
                    animation: fadeInAnimation 0.8s ease-in-out forwards;
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

            <g transform="translate(0, 25)">
                <text class="header" data-testid="header">${text}</text>
            </g>
        </svg>
        `
    }
}

const svgRepository = new SvgRepository();

export default svgRepository;
