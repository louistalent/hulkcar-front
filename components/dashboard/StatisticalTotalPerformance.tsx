import React from "react";

const StatisticalTotalPerformance = () => {
    return (
        <>
            {/* desktop */}
            <div className="hidden sm:block">
                <div className="dark:bg-[#1D1E21] bg-transparent p-5 rounded-2xl flex flex-col gap-y-8 h-full">
                    <h2
                        className="text-2xl max-md:text-lg font-bold dark:text-gray-200 text-black whitespace-nowrap"
                        aria-label="Statistical Total Performance"
                    >
                        Statistical Total Performance
                    </h2>
                    <div className="flex gap-5 justify-between items-stretch h-full ">
                        <div className="flex flex-col justify-center items-stretch">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                            >
                                <path
                                    className="fill-black dark:fill-white"
                                    d="M18.2887 9.62256C18.1233 9.62256 17.9893 9.75662 17.9893 9.92197V10.0777C17.9893 10.243 18.1233 10.3771 18.2887 10.3771C18.454 10.3771 18.5881 10.243 18.5881 10.0777V9.92197C18.5881 9.75662 18.454 9.62256 18.2887 9.62256Z"
                                />
                                <path
                                    className="fill-black dark:fill-white"
                                    d="M2.49012 15.5771L8.92418 19.2926C9.25606 19.4855 9.62801 19.5818 9.99996 19.5818C10.3718 19.5818 10.7434 19.4854 11.0747 19.2931L17.5086 15.5776C18.1742 15.1963 18.5875 14.4829 18.5875 13.7158V11.4461C18.5875 11.2807 18.4534 11.1467 18.2881 11.1467C18.1227 11.1467 17.9887 11.2807 17.9887 11.4461V13.7158C17.9887 14.2687 17.6907 14.7831 17.2101 15.0584L10.7746 18.7748C10.2968 19.0526 9.70309 19.0527 9.22438 18.7743L2.78871 15.0579C2.30902 14.7831 2.01105 14.2687 2.01105 13.7158V6.284C2.01105 5.73103 2.30902 5.21669 2.78961 4.94138L9.22512 1.22498C9.70293 0.947202 10.2966 0.947046 10.7754 1.22541L17.211 4.94181C17.6907 5.21669 17.9887 5.73103 17.9887 6.28396V8.55365C17.9887 8.719 18.1227 8.85306 18.2881 8.85306C18.4534 8.85306 18.5875 8.719 18.5875 8.55365V6.28396C18.5875 5.51681 18.1742 4.80349 17.5095 4.42263L11.0754 0.707124C10.4118 0.321577 9.58766 0.321733 8.92488 0.706694L2.49098 4.4222C1.82547 4.80349 1.41211 5.51685 1.41211 6.284V13.7158C1.41215 14.4829 1.82547 15.1962 2.49012 15.5771Z"
                                />
                                <path
                                    className="fill-black dark:fill-white"
                                    d="M15.6575 6.56023L10.151 3.38027C10.0582 3.32637 9.94441 3.32637 9.8516 3.38027L4.34211 6.5602C4.2493 6.6141 4.19238 6.71289 4.19238 6.8207V13.1806C4.19238 13.2884 4.24926 13.3872 4.34211 13.4411L9.8516 16.621C9.89652 16.648 9.94742 16.66 10.0013 16.66C10.0522 16.66 10.1031 16.648 10.1511 16.621L15.6575 13.4411C15.7504 13.3872 15.8073 13.2884 15.8073 13.1806V6.8207C15.8072 6.71293 15.7504 6.6141 15.6575 6.56023ZM8.44125 11.4798C8.44125 11.7763 8.055 11.8901 7.89031 11.6416L6.50395 9.52461V11.4799C6.50395 11.6446 6.37219 11.7793 6.20453 11.7793C6.03984 11.7793 5.90512 11.6446 5.90512 11.4799V8.52156C5.90512 8.3898 5.99496 8.27305 6.1207 8.2341C6.24648 8.19516 6.38422 8.24605 6.45605 8.35687L7.84242 10.4738V8.52156C7.84242 8.35687 7.97719 8.22215 8.14184 8.22215C8.30652 8.22215 8.44125 8.35687 8.44125 8.52156V11.4798ZM10.8098 9.70121C10.9775 9.70121 11.1092 9.83598 11.1092 10.0006C11.1092 10.1653 10.9774 10.3 10.8098 10.3H9.63V11.4798C9.63 11.6445 9.49523 11.7792 9.33059 11.7792C9.16594 11.7792 9.03117 11.6445 9.03117 11.4798V8.52148C9.03117 8.3568 9.16594 8.22207 9.33059 8.22207H10.8098C10.9775 8.22207 11.1092 8.3568 11.1092 8.52148C11.1092 8.68617 10.9774 8.8209 10.8098 8.8209H9.63V9.70121H10.8098ZM13.795 8.82094H13.0435V11.4798C13.0435 11.6445 12.9088 11.7793 12.7441 11.7793C12.5764 11.7793 12.4446 11.6445 12.4446 11.4798V8.82094H11.6931C11.5254 8.82094 11.3937 8.68617 11.3937 8.52152C11.3937 8.35684 11.5254 8.22211 11.6931 8.22211H13.7951C13.9598 8.22211 14.0945 8.35684 14.0945 8.52152C14.0945 8.68617 13.9598 8.82094 13.795 8.82094Z"
                                />
                            </svg>
                            <span
                                className="mt-2 text-sm dark:text-white text-black whitespace-nowrap"
                                aria-label="My NFT"
                            >
                                My NFT
                            </span>
                        </div>
                        <div
                            className="self-end mt-7 text-sm dark:text-lime-400 text-black"
                            aria-label="NFT Counter"
                        >
                            3
                        </div>
                    </div>
                    <div className="shrink-0 mt-4 mb-3 h-px bg-gray-800" />
                    <div className="flex gap-5 justify-between items-stretch ">
                        <div className="flex flex-col justify-center items-stretch">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                            >
                                <path
                                    className="fill-black dark:fill-white"
                                    d="M17.4127 18.0315H2.74509C2.12529 18.0315 1.62109 17.5273 1.62109 16.9073V3.09246C1.62109 2.47266 2.12529 1.96826 2.74509 1.96826H17.4127C18.0325 1.96826 18.5367 2.47246 18.5367 3.09246V16.9073C18.5367 17.5271 18.0323 18.0315 17.4127 18.0315ZM2.74509 2.46826C2.40089 2.46826 2.12109 2.74826 2.12109 3.09246V16.9073C2.12109 17.2515 2.40089 17.5315 2.74509 17.5315H17.4127C17.7569 17.5315 18.0367 17.2515 18.0367 16.9073V3.09246C18.0367 2.74826 17.7569 2.46826 17.4127 2.46826H2.74509Z"
                                />
                                <path
                                    className="fill-black dark:fill-white"
                                    d="M18.2867 5.86523H1.87109C1.73309 5.86523 1.62109 5.75323 1.62109 5.61523C1.62109 5.47723 1.73309 5.36523 1.87109 5.36523H18.2867C18.4247 5.36523 18.5367 5.47723 18.5367 5.61523C18.5367 5.75323 18.4247 5.86523 18.2867 5.86523Z"
                                />
                                <path
                                    className="fill-black dark:fill-white"
                                    d="M5.4681 4.61003C5.83018 4.61003 6.1237 4.31651 6.1237 3.95443C6.1237 3.59235 5.83018 3.29883 5.4681 3.29883C5.10602 3.29883 4.8125 3.59235 4.8125 3.95443C4.8125 4.31651 5.10602 4.61003 5.4681 4.61003Z"
                                />
                                <path
                                    className="fill-black dark:fill-white"
                                    d="M14.6886 4.60963C15.0506 4.60963 15.344 4.3162 15.344 3.95423C15.344 3.59226 15.0506 3.29883 14.6886 3.29883C14.3266 3.29883 14.0332 3.59226 14.0332 3.95423C14.0332 4.3162 14.3266 4.60963 14.6886 4.60963Z"
                                />
                                <path
                                    className="fill-black dark:fill-white"
                                    d="M10.0783 4.60963C10.4402 4.60963 10.7337 4.3162 10.7337 3.95423C10.7337 3.59226 10.4402 3.29883 10.0783 3.29883C9.71628 3.29883 9.42285 3.59226 9.42285 3.95423C9.42285 4.3162 9.71628 4.60963 10.0783 4.60963Z"
                                />
                                <path
                                    className="fill-black dark:fill-white"
                                    d="M5.4679 4.85983C4.9687 4.85983 4.5625 4.45363 4.5625 3.95443C4.5625 3.45503 4.9687 3.04883 5.4679 3.04883C5.9673 3.04883 6.3735 3.45503 6.3735 3.95443C6.3735 4.45363 5.9673 4.85983 5.4679 4.85983ZM5.4679 3.54863C5.2443 3.54863 5.0625 3.73063 5.0625 3.95423C5.0625 4.17783 5.2443 4.35963 5.4679 4.35963C5.6915 4.35963 5.8735 4.17763 5.8735 3.95423C5.8735 3.73063 5.6915 3.54863 5.4679 3.54863ZM14.6885 4.85983C14.1893 4.85983 13.7831 4.45363 13.7831 3.95443C13.7831 3.45503 14.1893 3.04883 14.6885 3.04883C15.1877 3.04883 15.5939 3.45503 15.5939 3.95443C15.5941 4.45363 15.1877 4.85983 14.6885 4.85983ZM14.6885 3.54863C14.4649 3.54863 14.2831 3.73063 14.2831 3.95423C14.2831 4.17783 14.4649 4.35963 14.6885 4.35963C14.9121 4.35963 15.0939 4.17763 15.0939 3.95423C15.0941 3.73063 14.9123 3.54863 14.6885 3.54863ZM10.0789 4.85983C9.5797 4.85983 9.1735 4.45363 9.1735 3.95443C9.1735 3.45503 9.5797 3.04883 10.0789 3.04883C10.5781 3.04883 10.9841 3.45503 10.9841 3.95443C10.9841 4.45363 10.5781 4.85983 10.0789 4.85983ZM10.0789 3.54863C9.8553 3.54863 9.6735 3.73063 9.6735 3.95423C9.6735 4.17783 9.8553 4.35963 10.0789 4.35963C10.3023 4.35963 10.4841 4.17763 10.4841 3.95423C10.4841 3.73063 10.3023 3.54863 10.0789 3.54863ZM10.0001 15.8974C7.6809 15.8974 5.7943 14.0106 5.7943 11.6916C5.7943 9.37263 7.6809 7.48583 10.0001 7.48583C12.3193 7.48583 14.2059 9.37263 14.2059 11.6916C14.2059 14.0106 12.3193 15.8974 10.0001 15.8974ZM10.0001 7.98583C7.9567 7.98583 6.2943 9.64823 6.2943 11.6916C6.2943 13.735 7.9567 15.3974 10.0001 15.3974C12.0435 15.3974 13.7059 13.735 13.7059 11.6916C13.7059 9.64823 12.0435 7.98583 10.0001 7.98583Z"
                                />
                                <path
                                    className="fill-black dark:fill-white"
                                    d="M11.8132 11.9419H10C9.862 11.9419 9.75 11.8299 9.75 11.6919V9.03174C9.75 8.89374 9.862 8.78174 10 8.78174C10.138 8.78174 10.25 8.89374 10.25 9.03174V11.4419H11.8132C11.9512 11.4419 12.0632 11.5539 12.0632 11.6919C12.0632 11.8299 11.9514 11.9419 11.8132 11.9419Z"
                                />
                            </svg>
                            <span
                                className="mt-2 text-sm dark:text-white text-black  whitespace-nowrap"
                                aria-label="Current Month Received"
                            >
                                Current Month Received
                            </span>
                        </div>
                        <div className="self-end">
                            <span className="dark:text-white">$</span>
                            <span className="dark:text-lime-400">115</span> USDT
                        </div>
                    </div>
                    <div className="shrink-0 mt-4 mb-3 h-px bg-gray-800" />
                    <div className="flex gap-5 justify-between items-stretch ">
                        <div className="flex flex-col justify-center items-stretch">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M6.14292 8.50146V14.2182" className="stroke-black dark:stroke-white" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round" />
                                <path d="M10.0316 5.76562V14.2179" className="stroke-black dark:stroke-white" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round" />
                                <path d="M13.8578 11.522V14.2178" className="stroke-black dark:stroke-white" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M13.9051 1.6665H6.09556C3.37334 1.6665 1.66699 3.59324 1.66699 6.3208V13.6789C1.66699 16.4064 3.3654 18.3332 6.09556 18.3332H13.9051C16.6352 18.3332 18.3337 16.4064 18.3337 13.6789V6.3208C18.3337 3.59324 16.6352 1.6665 13.9051 1.6665Z" className="stroke-black dark:stroke-white" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round" />
                            </svg>
                            <span
                                className="mt-2 text-sm dark:text-white text-black  whitespace-nowrap"
                                aria-label="My NFT"
                            >
                                Interest Rate
                            </span>
                        </div>
                        <div className="self-end">
                            5<span className="dark:text-white text-black ">%</span>
                        </div>
                    </div>
                    <div className="shrink-0 mt-4 mb-3 h-px bg-gray-800" />
                    <div className="flex gap-5 justify-between items-stretch ">
                        <div className="flex flex-col justify-center items-stretch">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="20" viewBox="0 0 14 20" fill="none">
                                <path className="fill-black dark:fill-white" d="M6.97578 11.367C6.90194 11.367 6.8288 11.3525 6.76058 11.3243C6.69235 11.296 6.63038 11.2546 6.57819 11.2023C6.52601 11.1501 6.48466 11.088 6.45649 11.0198C6.42833 10.9515 6.41391 10.8783 6.41406 10.8045V10.6639C6.41427 10.5153 6.47339 10.3728 6.57847 10.2677C6.68355 10.1627 6.82601 10.1035 6.97461 10.1033H8.10742V9.32207H7.41406V8.45605H6.63281V9.36543C6.34629 9.44132 6.09289 9.60978 5.91203 9.84461C5.73118 10.0794 5.63301 10.3675 5.63281 10.6639V10.8053C5.63292 11.1614 5.77444 11.5029 6.02627 11.7548C6.27811 12.0066 6.61964 12.1481 6.97578 12.1482C7.06085 12.1461 7.14549 12.1611 7.2247 12.1922C7.30391 12.2233 7.37609 12.2699 7.43701 12.3293C7.49792 12.3888 7.54633 12.4598 7.57938 12.5382C7.61243 12.6166 7.62946 12.7008 7.62946 12.7859C7.62946 12.871 7.61243 12.9553 7.57938 13.0337C7.54633 13.1121 7.49792 13.1831 7.43701 13.2425C7.37609 13.302 7.30391 13.3486 7.2247 13.3797C7.14549 13.4108 7.06085 13.4257 6.97578 13.4236H5.92109V14.2049H6.63281V14.9998H7.41406V14.1334C7.73409 14.0281 8.0062 13.8123 8.18169 13.5247C8.35718 13.2371 8.4246 12.8965 8.37188 12.5637C8.31917 12.231 8.14975 11.9278 7.89396 11.7086C7.63816 11.4893 7.31269 11.3682 6.97578 11.367Z" />
                                <path className="fill-black dark:fill-white" d="M5.1541 16.208H4.36621V16.9959H5.1541V16.208Z" />
                                <path className="fill-black dark:fill-white" d="M7.39336 16.208H6.60547V16.9959H7.39336V16.208Z" />
                                <path className="fill-black dark:fill-white" d="M9.63359 16.208H8.8457V16.9959H9.63359V16.208Z" />
                                <path className="fill-black dark:fill-white" d="M9.7793 6.03398C9.93891 5.84955 10.0268 5.61383 10.027 5.36992V4.85078C10.027 4.58563 9.92413 4.33082 9.73999 4.14004C9.55585 3.94927 9.30483 3.83744 9.03984 3.82812C9.26772 3.60882 9.44898 3.34576 9.57275 3.05472C9.69652 2.76368 9.76026 2.45064 9.76016 2.13437V0.585938H4.23906V2.13594C4.23916 2.45194 4.30301 2.76468 4.42677 3.05544C4.55054 3.34619 4.73169 3.609 4.95937 3.82812C4.69466 3.83743 4.44387 3.94904 4.25977 4.13948C4.07567 4.32992 3.97261 4.58434 3.97227 4.84922V5.3668C3.9724 5.61071 4.06031 5.84643 4.21992 6.03086C1.94102 6.9293 0.324219 9.15234 0.324219 11.7465V16.3121C0.325046 17.1344 0.652016 17.9228 1.2334 18.5043C1.81478 19.0859 2.60309 19.413 3.42539 19.4141H10.5738C11.3961 19.4131 12.1845 19.0861 12.7659 18.5046C13.3474 17.9232 13.6745 17.1348 13.6754 16.3125V11.7496C13.675 9.15586 12.0582 6.93242 9.7793 6.03398ZM5.02031 1.36719H8.97891V2.13594C8.97829 2.5536 8.81204 2.95396 8.51664 3.24922C8.22123 3.54448 7.82078 3.71052 7.40312 3.71094H7.39023V2.73438H6.60898V3.71094H6.59609C6.17843 3.71042 5.77803 3.54428 5.48269 3.24895C5.18736 2.95361 5.02122 2.55321 5.0207 2.13555L5.02031 1.36719ZM4.99414 5.60859C4.93022 5.60859 4.86892 5.5832 4.82372 5.538C4.77852 5.4928 4.75312 5.4315 4.75312 5.36758V4.85078C4.75312 4.78686 4.77852 4.72556 4.82372 4.68036C4.86892 4.63516 4.93022 4.60977 4.99414 4.60977H9.00469C9.06861 4.60977 9.12991 4.63516 9.17511 4.68036C9.22031 4.72556 9.2457 4.78686 9.2457 4.85078V5.36836C9.2457 5.43228 9.22031 5.49358 9.17511 5.53878C9.12991 5.58398 9.06861 5.60938 9.00469 5.60938H4.99453L4.99414 5.60859ZM12.8938 16.3117C12.8932 16.9269 12.6487 17.5169 12.2138 17.952C11.7788 18.3871 11.1891 18.632 10.5738 18.6328H3.42539C2.81023 18.6321 2.22047 18.3874 1.78548 17.9524C1.35049 17.5174 1.1058 16.9277 1.10508 16.3125V11.7496C1.10508 8.79453 3.50898 6.39062 6.46406 6.39062H7.53437C10.4895 6.39062 12.8934 8.79453 12.8934 11.7496L12.8938 16.3117Z" />
                            </svg>
                            <span
                                className="mt-2 text-sm dark:text-white text-black  whitespace-nowrap"
                                aria-label="My NFT"
                            >
                                Total Received
                            </span>
                        </div>
                        <div className="self-end">
                            <span className="dark:text-white">$</span>
                            <span className="dark:text-lime-400">750</span> USDT
                        </div>
                    </div>
                </div>
            </div>
            {/* mobile */}
            <div className="block sm:hidden">
                <h2
                    className="text-2xl max-md:text-lg font-bold dark:text-gray-200 text-black whitespace-nowrap"
                    aria-label="Statistical Total Performance"
                >
                    Statistical Total Performance
                </h2>
                <div className="statistical-grid mt-2">

                    <div className="flex gap-5 flex-col bg-[#2F324180] p-3 rounded-lg justify-between items-stretch">
                        <div className="flex flex-col justify-center items-stretch">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                            >
                                <path
                                    className="fill-black dark:fill-white"
                                    d="M18.2887 9.62256C18.1233 9.62256 17.9893 9.75662 17.9893 9.92197V10.0777C17.9893 10.243 18.1233 10.3771 18.2887 10.3771C18.454 10.3771 18.5881 10.243 18.5881 10.0777V9.92197C18.5881 9.75662 18.454 9.62256 18.2887 9.62256Z"
                                />
                                <path
                                    className="fill-black dark:fill-white"
                                    d="M2.49012 15.5771L8.92418 19.2926C9.25606 19.4855 9.62801 19.5818 9.99996 19.5818C10.3718 19.5818 10.7434 19.4854 11.0747 19.2931L17.5086 15.5776C18.1742 15.1963 18.5875 14.4829 18.5875 13.7158V11.4461C18.5875 11.2807 18.4534 11.1467 18.2881 11.1467C18.1227 11.1467 17.9887 11.2807 17.9887 11.4461V13.7158C17.9887 14.2687 17.6907 14.7831 17.2101 15.0584L10.7746 18.7748C10.2968 19.0526 9.70309 19.0527 9.22438 18.7743L2.78871 15.0579C2.30902 14.7831 2.01105 14.2687 2.01105 13.7158V6.284C2.01105 5.73103 2.30902 5.21669 2.78961 4.94138L9.22512 1.22498C9.70293 0.947202 10.2966 0.947046 10.7754 1.22541L17.211 4.94181C17.6907 5.21669 17.9887 5.73103 17.9887 6.28396V8.55365C17.9887 8.719 18.1227 8.85306 18.2881 8.85306C18.4534 8.85306 18.5875 8.719 18.5875 8.55365V6.28396C18.5875 5.51681 18.1742 4.80349 17.5095 4.42263L11.0754 0.707124C10.4118 0.321577 9.58766 0.321733 8.92488 0.706694L2.49098 4.4222C1.82547 4.80349 1.41211 5.51685 1.41211 6.284V13.7158C1.41215 14.4829 1.82547 15.1962 2.49012 15.5771Z"
                                />
                                <path
                                    className="fill-black dark:fill-white"
                                    d="M15.6575 6.56023L10.151 3.38027C10.0582 3.32637 9.94441 3.32637 9.8516 3.38027L4.34211 6.5602C4.2493 6.6141 4.19238 6.71289 4.19238 6.8207V13.1806C4.19238 13.2884 4.24926 13.3872 4.34211 13.4411L9.8516 16.621C9.89652 16.648 9.94742 16.66 10.0013 16.66C10.0522 16.66 10.1031 16.648 10.1511 16.621L15.6575 13.4411C15.7504 13.3872 15.8073 13.2884 15.8073 13.1806V6.8207C15.8072 6.71293 15.7504 6.6141 15.6575 6.56023ZM8.44125 11.4798C8.44125 11.7763 8.055 11.8901 7.89031 11.6416L6.50395 9.52461V11.4799C6.50395 11.6446 6.37219 11.7793 6.20453 11.7793C6.03984 11.7793 5.90512 11.6446 5.90512 11.4799V8.52156C5.90512 8.3898 5.99496 8.27305 6.1207 8.2341C6.24648 8.19516 6.38422 8.24605 6.45605 8.35687L7.84242 10.4738V8.52156C7.84242 8.35687 7.97719 8.22215 8.14184 8.22215C8.30652 8.22215 8.44125 8.35687 8.44125 8.52156V11.4798ZM10.8098 9.70121C10.9775 9.70121 11.1092 9.83598 11.1092 10.0006C11.1092 10.1653 10.9774 10.3 10.8098 10.3H9.63V11.4798C9.63 11.6445 9.49523 11.7792 9.33059 11.7792C9.16594 11.7792 9.03117 11.6445 9.03117 11.4798V8.52148C9.03117 8.3568 9.16594 8.22207 9.33059 8.22207H10.8098C10.9775 8.22207 11.1092 8.3568 11.1092 8.52148C11.1092 8.68617 10.9774 8.8209 10.8098 8.8209H9.63V9.70121H10.8098ZM13.795 8.82094H13.0435V11.4798C13.0435 11.6445 12.9088 11.7793 12.7441 11.7793C12.5764 11.7793 12.4446 11.6445 12.4446 11.4798V8.82094H11.6931C11.5254 8.82094 11.3937 8.68617 11.3937 8.52152C11.3937 8.35684 11.5254 8.22211 11.6931 8.22211H13.7951C13.9598 8.22211 14.0945 8.35684 14.0945 8.52152C14.0945 8.68617 13.9598 8.82094 13.795 8.82094Z"
                                />
                            </svg>
                            <span
                                className="mt-2 text-sm dark:text-white text-black whitespace-nowrap"
                                aria-label="My NFT"
                            >
                                My NFT
                            </span>
                        </div>
                        <div
                            className=" text-sm dark:text-lime-400 text-black"
                            aria-label="NFT Counter"
                        >
                            3
                        </div>
                    </div>

                    <div className="flex gap-5 flex-col bg-[#2F324180] p-3 rounded-lg justify-between items-stretch ">
                        <div className="flex flex-col justify-center items-stretch">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                            >
                                <path
                                    className="fill-black dark:fill-white"
                                    d="M17.4127 18.0315H2.74509C2.12529 18.0315 1.62109 17.5273 1.62109 16.9073V3.09246C1.62109 2.47266 2.12529 1.96826 2.74509 1.96826H17.4127C18.0325 1.96826 18.5367 2.47246 18.5367 3.09246V16.9073C18.5367 17.5271 18.0323 18.0315 17.4127 18.0315ZM2.74509 2.46826C2.40089 2.46826 2.12109 2.74826 2.12109 3.09246V16.9073C2.12109 17.2515 2.40089 17.5315 2.74509 17.5315H17.4127C17.7569 17.5315 18.0367 17.2515 18.0367 16.9073V3.09246C18.0367 2.74826 17.7569 2.46826 17.4127 2.46826H2.74509Z"
                                />
                                <path
                                    className="fill-black dark:fill-white"
                                    d="M18.2867 5.86523H1.87109C1.73309 5.86523 1.62109 5.75323 1.62109 5.61523C1.62109 5.47723 1.73309 5.36523 1.87109 5.36523H18.2867C18.4247 5.36523 18.5367 5.47723 18.5367 5.61523C18.5367 5.75323 18.4247 5.86523 18.2867 5.86523Z"
                                />
                                <path
                                    className="fill-black dark:fill-white"
                                    d="M5.4681 4.61003C5.83018 4.61003 6.1237 4.31651 6.1237 3.95443C6.1237 3.59235 5.83018 3.29883 5.4681 3.29883C5.10602 3.29883 4.8125 3.59235 4.8125 3.95443C4.8125 4.31651 5.10602 4.61003 5.4681 4.61003Z"
                                />
                                <path
                                    className="fill-black dark:fill-white"
                                    d="M14.6886 4.60963C15.0506 4.60963 15.344 4.3162 15.344 3.95423C15.344 3.59226 15.0506 3.29883 14.6886 3.29883C14.3266 3.29883 14.0332 3.59226 14.0332 3.95423C14.0332 4.3162 14.3266 4.60963 14.6886 4.60963Z"
                                />
                                <path
                                    className="fill-black dark:fill-white"
                                    d="M10.0783 4.60963C10.4402 4.60963 10.7337 4.3162 10.7337 3.95423C10.7337 3.59226 10.4402 3.29883 10.0783 3.29883C9.71628 3.29883 9.42285 3.59226 9.42285 3.95423C9.42285 4.3162 9.71628 4.60963 10.0783 4.60963Z"
                                />
                                <path
                                    className="fill-black dark:fill-white"
                                    d="M5.4679 4.85983C4.9687 4.85983 4.5625 4.45363 4.5625 3.95443C4.5625 3.45503 4.9687 3.04883 5.4679 3.04883C5.9673 3.04883 6.3735 3.45503 6.3735 3.95443C6.3735 4.45363 5.9673 4.85983 5.4679 4.85983ZM5.4679 3.54863C5.2443 3.54863 5.0625 3.73063 5.0625 3.95423C5.0625 4.17783 5.2443 4.35963 5.4679 4.35963C5.6915 4.35963 5.8735 4.17763 5.8735 3.95423C5.8735 3.73063 5.6915 3.54863 5.4679 3.54863ZM14.6885 4.85983C14.1893 4.85983 13.7831 4.45363 13.7831 3.95443C13.7831 3.45503 14.1893 3.04883 14.6885 3.04883C15.1877 3.04883 15.5939 3.45503 15.5939 3.95443C15.5941 4.45363 15.1877 4.85983 14.6885 4.85983ZM14.6885 3.54863C14.4649 3.54863 14.2831 3.73063 14.2831 3.95423C14.2831 4.17783 14.4649 4.35963 14.6885 4.35963C14.9121 4.35963 15.0939 4.17763 15.0939 3.95423C15.0941 3.73063 14.9123 3.54863 14.6885 3.54863ZM10.0789 4.85983C9.5797 4.85983 9.1735 4.45363 9.1735 3.95443C9.1735 3.45503 9.5797 3.04883 10.0789 3.04883C10.5781 3.04883 10.9841 3.45503 10.9841 3.95443C10.9841 4.45363 10.5781 4.85983 10.0789 4.85983ZM10.0789 3.54863C9.8553 3.54863 9.6735 3.73063 9.6735 3.95423C9.6735 4.17783 9.8553 4.35963 10.0789 4.35963C10.3023 4.35963 10.4841 4.17763 10.4841 3.95423C10.4841 3.73063 10.3023 3.54863 10.0789 3.54863ZM10.0001 15.8974C7.6809 15.8974 5.7943 14.0106 5.7943 11.6916C5.7943 9.37263 7.6809 7.48583 10.0001 7.48583C12.3193 7.48583 14.2059 9.37263 14.2059 11.6916C14.2059 14.0106 12.3193 15.8974 10.0001 15.8974ZM10.0001 7.98583C7.9567 7.98583 6.2943 9.64823 6.2943 11.6916C6.2943 13.735 7.9567 15.3974 10.0001 15.3974C12.0435 15.3974 13.7059 13.735 13.7059 11.6916C13.7059 9.64823 12.0435 7.98583 10.0001 7.98583Z"
                                />
                                <path
                                    className="fill-black dark:fill-white"
                                    d="M11.8132 11.9419H10C9.862 11.9419 9.75 11.8299 9.75 11.6919V9.03174C9.75 8.89374 9.862 8.78174 10 8.78174C10.138 8.78174 10.25 8.89374 10.25 9.03174V11.4419H11.8132C11.9512 11.4419 12.0632 11.5539 12.0632 11.6919C12.0632 11.8299 11.9514 11.9419 11.8132 11.9419Z"
                                />
                            </svg>
                            <span
                                className="mt-2 text-sm dark:text-white text-black"
                                aria-label="Current Month Received"
                            >
                                Current Month Received
                            </span>
                        </div>
                        <div className="">
                            <span className="dark:text-white">$</span>
                            <span className="dark:text-lime-400">115</span> USDT
                        </div>
                    </div>
                    
                    <div className="flex gap-5 flex-col bg-[#2F324180] p-3 rounded-lg justify-between items-stretch ">
                        <div className="flex flex-col justify-center items-stretch">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M6.14292 8.50146V14.2182" className="stroke-black dark:stroke-white" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round" />
                                <path d="M10.0316 5.76562V14.2179" className="stroke-black dark:stroke-white" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round" />
                                <path d="M13.8578 11.522V14.2178" className="stroke-black dark:stroke-white" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M13.9051 1.6665H6.09556C3.37334 1.6665 1.66699 3.59324 1.66699 6.3208V13.6789C1.66699 16.4064 3.3654 18.3332 6.09556 18.3332H13.9051C16.6352 18.3332 18.3337 16.4064 18.3337 13.6789V6.3208C18.3337 3.59324 16.6352 1.6665 13.9051 1.6665Z" className="stroke-black dark:stroke-white" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round" />
                            </svg>
                            <span
                                className="mt-2 text-sm dark:text-white text-black  whitespace-nowrap"
                                aria-label="My NFT"
                            >
                                Interest Rate
                            </span>
                        </div>
                        <div className="">
                            5<span className="dark:text-white text-black ">%</span>
                        </div>
                    </div>

                    <div className="flex gap-5 flex-col bg-[#2F324180] p-3 rounded-lg justify-between items-stretch ">
                        <div className="flex flex-col justify-center items-stretch">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="20" viewBox="0 0 14 20" fill="none">
                                <path className="fill-black dark:fill-white" d="M6.97578 11.367C6.90194 11.367 6.8288 11.3525 6.76058 11.3243C6.69235 11.296 6.63038 11.2546 6.57819 11.2023C6.52601 11.1501 6.48466 11.088 6.45649 11.0198C6.42833 10.9515 6.41391 10.8783 6.41406 10.8045V10.6639C6.41427 10.5153 6.47339 10.3728 6.57847 10.2677C6.68355 10.1627 6.82601 10.1035 6.97461 10.1033H8.10742V9.32207H7.41406V8.45605H6.63281V9.36543C6.34629 9.44132 6.09289 9.60978 5.91203 9.84461C5.73118 10.0794 5.63301 10.3675 5.63281 10.6639V10.8053C5.63292 11.1614 5.77444 11.5029 6.02627 11.7548C6.27811 12.0066 6.61964 12.1481 6.97578 12.1482C7.06085 12.1461 7.14549 12.1611 7.2247 12.1922C7.30391 12.2233 7.37609 12.2699 7.43701 12.3293C7.49792 12.3888 7.54633 12.4598 7.57938 12.5382C7.61243 12.6166 7.62946 12.7008 7.62946 12.7859C7.62946 12.871 7.61243 12.9553 7.57938 13.0337C7.54633 13.1121 7.49792 13.1831 7.43701 13.2425C7.37609 13.302 7.30391 13.3486 7.2247 13.3797C7.14549 13.4108 7.06085 13.4257 6.97578 13.4236H5.92109V14.2049H6.63281V14.9998H7.41406V14.1334C7.73409 14.0281 8.0062 13.8123 8.18169 13.5247C8.35718 13.2371 8.4246 12.8965 8.37188 12.5637C8.31917 12.231 8.14975 11.9278 7.89396 11.7086C7.63816 11.4893 7.31269 11.3682 6.97578 11.367Z" />
                                <path className="fill-black dark:fill-white" d="M5.1541 16.208H4.36621V16.9959H5.1541V16.208Z" />
                                <path className="fill-black dark:fill-white" d="M7.39336 16.208H6.60547V16.9959H7.39336V16.208Z" />
                                <path className="fill-black dark:fill-white" d="M9.63359 16.208H8.8457V16.9959H9.63359V16.208Z" />
                                <path className="fill-black dark:fill-white" d="M9.7793 6.03398C9.93891 5.84955 10.0268 5.61383 10.027 5.36992V4.85078C10.027 4.58563 9.92413 4.33082 9.73999 4.14004C9.55585 3.94927 9.30483 3.83744 9.03984 3.82812C9.26772 3.60882 9.44898 3.34576 9.57275 3.05472C9.69652 2.76368 9.76026 2.45064 9.76016 2.13437V0.585938H4.23906V2.13594C4.23916 2.45194 4.30301 2.76468 4.42677 3.05544C4.55054 3.34619 4.73169 3.609 4.95937 3.82812C4.69466 3.83743 4.44387 3.94904 4.25977 4.13948C4.07567 4.32992 3.97261 4.58434 3.97227 4.84922V5.3668C3.9724 5.61071 4.06031 5.84643 4.21992 6.03086C1.94102 6.9293 0.324219 9.15234 0.324219 11.7465V16.3121C0.325046 17.1344 0.652016 17.9228 1.2334 18.5043C1.81478 19.0859 2.60309 19.413 3.42539 19.4141H10.5738C11.3961 19.4131 12.1845 19.0861 12.7659 18.5046C13.3474 17.9232 13.6745 17.1348 13.6754 16.3125V11.7496C13.675 9.15586 12.0582 6.93242 9.7793 6.03398ZM5.02031 1.36719H8.97891V2.13594C8.97829 2.5536 8.81204 2.95396 8.51664 3.24922C8.22123 3.54448 7.82078 3.71052 7.40312 3.71094H7.39023V2.73438H6.60898V3.71094H6.59609C6.17843 3.71042 5.77803 3.54428 5.48269 3.24895C5.18736 2.95361 5.02122 2.55321 5.0207 2.13555L5.02031 1.36719ZM4.99414 5.60859C4.93022 5.60859 4.86892 5.5832 4.82372 5.538C4.77852 5.4928 4.75312 5.4315 4.75312 5.36758V4.85078C4.75312 4.78686 4.77852 4.72556 4.82372 4.68036C4.86892 4.63516 4.93022 4.60977 4.99414 4.60977H9.00469C9.06861 4.60977 9.12991 4.63516 9.17511 4.68036C9.22031 4.72556 9.2457 4.78686 9.2457 4.85078V5.36836C9.2457 5.43228 9.22031 5.49358 9.17511 5.53878C9.12991 5.58398 9.06861 5.60938 9.00469 5.60938H4.99453L4.99414 5.60859ZM12.8938 16.3117C12.8932 16.9269 12.6487 17.5169 12.2138 17.952C11.7788 18.3871 11.1891 18.632 10.5738 18.6328H3.42539C2.81023 18.6321 2.22047 18.3874 1.78548 17.9524C1.35049 17.5174 1.1058 16.9277 1.10508 16.3125V11.7496C1.10508 8.79453 3.50898 6.39062 6.46406 6.39062H7.53437C10.4895 6.39062 12.8934 8.79453 12.8934 11.7496L12.8938 16.3117Z" />
                            </svg>
                            <span
                                className="mt-2 text-sm dark:text-white text-black  whitespace-nowrap"
                                aria-label="My NFT"
                            >
                                Total Received
                            </span>
                        </div>
                        <div className="">
                            <span className="dark:text-white">$</span>
                            <span className="dark:text-lime-400">750</span> USDT
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default StatisticalTotalPerformance;
