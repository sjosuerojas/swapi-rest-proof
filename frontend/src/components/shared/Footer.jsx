import React from 'react'

export const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="footer-bg">
                <svg
                    width="385"
                    height="305"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <linearGradient
                            x1="50%"
                            y1="34.994%"
                            x2="50%"
                            y2="97.738%"
                            id="footer-bg"
                        >
                            <stop stopColor="#151616" offset="0%" />
                            <stop stopColor="#222424" offset="100%" />
                        </linearGradient>
                    </defs>
                    <path
                        d="M384.557 116.012V305H0L210.643 0l173.914 116.012z"
                        fill="url(#footer-bg)"
                        fillRule="evenodd"
                    />
                </svg>
            </div>
            <div
                className="footer-dots is-moving-object is-translating"
                data-translating-factor="160"
            >
                <svg width="69" height="91" xmlns="http://www.w3.org/2000/svg">
                    <g fill="#43F1FF" fillRule="evenodd">
                        <path d="M37.105 41.007l-2.9 1.334-.786 2.823.926 2.689 2.76 1.154 2.6-1.31 1.714-2.533-1.296-2.94z" />
                        <path
                            fillOpacity=".64"
                            d="M63.109 27.24l-1.45.666-.394 1.412.464 1.344 1.38.577 1.3-.655.856-1.266-.647-1.47z"
                        />
                        <path
                            fillOpacity=".24"
                            d="M66.226 86.638l-1.45.667-.393 1.412.463 1.344 1.38.577 1.3-.655.857-1.266-.648-1.47z"
                        />
                        <path
                            fillOpacity=".64"
                            d="M13.497 43.713l-2.175 1-.59 2.118.695 2.016 2.07.866 1.95-.983 1.285-1.9-.972-2.204z"
                        />
                        <path
                            fillOpacity=".8"
                            d="M59.076 56.658l-2.175 1-.59 2.117.695 2.017 2.07.866 1.949-.983 1.286-1.9-.972-2.204z"
                        />
                        <path
                            fillOpacity=".48"
                            d="M22.262 18.49l-1.45.667-.393 1.412.463 1.344 1.38.577 1.3-.655.857-1.266-.648-1.47z"
                        />
                        <path
                            fillOpacity=".64"
                            d="M23.422.5l-1.45.667-.393 1.412.463 1.344 1.38.577 1.3-.655.857-1.266-.648-1.47z"
                        />
                        <path
                            fillOpacity=".48"
                            d="M2.637 12.5l-1.45.667-.393 1.412.463 1.344 1.38.577 1.3-.655.857-1.266-.648-1.47zM36.563 10.856l-.725.334-.197.706.232.672.69.288.65-.327.428-.633-.324-.735z"
                        />
                    </g>
                </svg>
            </div>
            <div className="container">
                <div className="site-footer-inner has-top-divider">
                    <div className="footer-copyright">
                        &copy; 2018 Ellie, all rights reserved
                    </div>
                    <ul className="footer-social-links list-reset">
                        <li>
                            <a href="#">
                                <span className="screen-reader-text">
                                    Facebook
                                </span>
                                <svg
                                    width="16"
                                    height="16"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z"
                                        fill="#FFFFFF"
                                    />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className="screen-reader-text">
                                    Twitter
                                </span>
                                <svg
                                    width="16"
                                    height="16"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z"
                                        fill="#FFFFFF"
                                    />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className="screen-reader-text">
                                    Google
                                </span>
                                <svg
                                    width="16"
                                    height="16"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z"
                                        fill="#FFFFFF"
                                    />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
