import React from 'react'

export const Header = () => {
    return (
        <header className="site-header">
            <div className="container">
                <div className="site-header-inner">
                    <div className="brand header-brand">
                        <h1 className="m-0">
                            <a href="#">
                                <svg
                                    width="32"
                                    height="32"
                                    viewBox="0 0 32 32"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <title>ReactApp</title>
                                    <defs>
                                        <linearGradient
                                            x1="0%"
                                            y1="0%"
                                            y2="100%"
                                            id="logo-a"
                                        >
                                            <stop
                                                stopColor="#4353FF"
                                                offset="0%"
                                            />
                                            <stop
                                                stopColor="#4353FF"
                                                stopOpacity=".32"
                                                offset="100%"
                                            />
                                        </linearGradient>
                                        <linearGradient
                                            x1="0%"
                                            y1="0%"
                                            y2="100%"
                                            id="logo-b"
                                        >
                                            <stop
                                                stopColor="#4353FF"
                                                offset="0%"
                                            />
                                            <stop
                                                stopColor="#4353FF"
                                                stopOpacity=".32"
                                                offset="100%"
                                            />
                                        </linearGradient>
                                        <linearGradient
                                            x1="0%"
                                            y1="0%"
                                            y2="100%"
                                            id="logo-c"
                                        >
                                            <stop
                                                stopColor="#78F9FF"
                                                stopOpacity=".24"
                                                offset="0%"
                                            />
                                            <stop
                                                stopColor="#43F1FF"
                                                offset="55.496%"
                                            />
                                            <stop
                                                stopColor="#43F1FF"
                                                stopOpacity=".24"
                                                offset="100%"
                                            />
                                        </linearGradient>
                                    </defs>
                                    <g fill="none" fillRule="evenodd">
                                        <path
                                            d="M4 0h12v16H0V4a4 4 0 0 1 4-4z"
                                            fill="url(#logo-a)"
                                        />
                                        <path
                                            d="M16 16h16v12a4 4 0 0 1-4 4H16V16z"
                                            fill="url(#logo-b)"
                                        />
                                        <path
                                            d="M11.5 20.5H.5v1h10v10h1v-11z"
                                            stroke="url(#logo-c)"
                                            transform="matrix(-1 0 0 1 12 0)"
                                        />
                                        <path
                                            d="M31.5.5h-11v1h10v10h1V.5z"
                                            stroke="url(#logo-c)"
                                            transform="matrix(1 0 0 -1 0 12)"
                                        />
                                    </g>
                                </svg>
                            </a>
                        </h1>
                    </div>
                </div>
            </div>
        </header>
    )
}
