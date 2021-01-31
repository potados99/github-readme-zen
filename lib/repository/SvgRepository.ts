class SvgRepository {
    createSvgFromText(text: string) {
        return `
        <svg
            width="495"
            height="40"
            viewBox="0 0 495 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">

        <linearGradient id="linear-gradient" x1="-100%" y1="100%" x2="800%" y2="0" >
            <stop offset="0" stop-color="#007FFF">
               <animate attributeName="offset" values="0;0.8" dur="4s" repeatCount="indefinite"  /> 
            </stop>
            <stop offset="0" stop-color="rgba(0, 127, 255, 0.3)">
               <animate attributeName="offset" values="0;0.8" dur="4s" repeatCount="indefinite"  /> 
            </stop>
            <stop offset="0.1" stop-color="rgba(0, 127, 255, 0.3)">
                <animate attributeName="offset" values="0.1;1" dur="4s" repeatCount="indefinite"  /> 
            </stop>
            <stop offset="0.1" stop-color="#007FFF">
                <animate attributeName="offset" values="0.1;1" dur="4s" repeatCount="indefinite"  /> 
            </stop>
        </linearGradient>
        
            <style>
                .header {
                    font: 600 18px 'Segoe UI', Ubuntu, Sans-Serif;
                    fill: url(#linear-gradient);
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
