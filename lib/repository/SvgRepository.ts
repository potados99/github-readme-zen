class SvgRepository {
    createSvgFromText(text: string) {
        return `
        <svg
            width="330"
            height="57"
            viewBox="0 0 330 57"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">

            <style>
                .header {
                    font: 600 16px Sans-Serif;
                    color: #24292e;
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
                <g requiredFeatures="http://www.w3.org/Graphics/SVG/feature/1.2/#TextFlow">
                    <textArea class="header" width="330" height="57">
                        “${text}”
                    </textArea>
                </g>
                
                <foreignObject width="330" height="57" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                    <div class="header" style="display: table;" xmlns="http://www.w3.org/1999/xhtml">
                        <span style="display: table-cell; vertical-align: middle;">
                            “${text}”
                        </span>
                    </div>
                </foreignObject>
            </switch>

        </svg>
        `
    }
}

export default SvgRepository;
