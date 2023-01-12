"use strict";
exports.id = 330;
exports.ids = [330];
exports.modules = {

/***/ 644:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_navContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(333);



const About = ()=>{
    const { nav  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_navContext__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z);
    // Function will execute on click of button
    const onButtonClick = ()=>{
        // using Java Script method to get PDF file
        fetch("CarlosOsornio.pdf").then((response)=>{
            response.blob().then((blob)=>{
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement("a");
                alink.href = fileURL;
                alink.download = "CarlosOsornio.pdf";
                alink.click();
            });
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        id: "about",
        className: `${nav === "about" ? "active" : ""}`,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container page-title text-center",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                        className: "text-center",
                        children: [
                            "about ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: "me"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "title-head-subtitle",
                        children: "If you can't figure something out, figure out how to figure it out"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container infos",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "row personal-info",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "col-xl-6 col-lg-6 col-md-12 col-sm-12",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "image-container",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        className: "img-fluid d-block",
                                        src: "img/profile.png",
                                        alt: ""
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: "d-block d-md-none",
                                    children: [
                                        `I'm`,
                                        " a web developer based in Anaheim, California. I strive to build immersive and beautiful web applications through carefully crafted code and user-centric design."
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "row col-xl-6 col-lg-6 col-md-12",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-xl-6 col-lg-6 col-md-6 col-sm-6",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                        className: "list-1",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h6", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "font-weight-600",
                                                            children: "First Name"
                                                        }),
                                                        "Carlos"
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h6", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "font-weight-600",
                                                            children: "Last Name"
                                                        }),
                                                        "Osornio"
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h6", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "font-weight-600",
                                                            children: "Location"
                                                        }),
                                                        "California"
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h6", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "font-weight-600",
                                                            children: "Freelance"
                                                        }),
                                                        "Available"
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h6", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "font-weight-600",
                                                            children: "Languages"
                                                        }),
                                                        "English"
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-xl-6 col-lg-6 col-md-6 col-sm-6",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                        className: "list-2",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h6", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "font-weight-600",
                                                            children: "Phone"
                                                        }),
                                                        "+1 909 979 7464"
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h6", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "font-weight-600",
                                                            children: "Email"
                                                        }),
                                                        "c.alejandro.oso@gmail.com"
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h6", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "font-weight-600",
                                                            children: "LinkedIn"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            href: "https://www.linkedin.com/in/carlos-osornio/",
                                                            target: "_blank",
                                                            rel: "noreferrer",
                                                            children: "carlos-osornio"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h6", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "font-weight-600",
                                                            children: "GitHub"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            href: "https://github.com/c-osornio",
                                                            target: "_blank",
                                                            rel: "noreferrer",
                                                            children: "c-osornio"
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-12 resume-btn-container",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        onClick: onButtonClick,
                                        className: "btn btn-resume",
                                        target: "_blank",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                    className: "fa fa-download"
                                                }),
                                                "download my cv"
                                            ]
                                        })
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container col-12 mx-auto text-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                    className: "about-section"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "resume-container",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "row",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "col-xl-6 col-lg-6 col-md-6",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            className: "font-weight-600 uppercase title-section",
                                            children: "experience"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "resume-items",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "item",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "bullet"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "card",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "card-header",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                            className: "year",
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                    className: "fa fa-calendar"
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                    className: "fa fa-caret-right"
                                                                                }),
                                                                                "2019 - 2022"
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                            className: "d-block font-weight-400 uppercase",
                                                                            children: [
                                                                                "mortgage underwriter",
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                    className: "separator"
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                    className: "font-weight-700",
                                                                                    children: "Better.com"
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "card-body ",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            children: "- Underwrote Fannie Mae and Freddie Mac conforming mortgages and issued VPALS."
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            children: "- Graduated Valedictorian through Better Mortgage's Underwriting University Class of 2020."
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            children: "- Conducted through review of applicants credit reports, calculated all sources of income, and reviewed assets for qualification."
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            children: "- Analyzed risk and made recommendations to help facilitate/streamline loan process."
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "item",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "bullet"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "card",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "card-header",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                            className: "year",
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                    className: "fa fa-calendar"
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                    className: "fa fa-caret-right"
                                                                                }),
                                                                                "2015 - 2019"
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                            className: "d-block font-weight-400 uppercase",
                                                                            children: [
                                                                                "sr. loan consultant",
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                    className: "separator"
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                    className: "font-weight-700",
                                                                                    children: "Ally Financial "
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "card-body",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            children: "- Assisted in development and implementation of new lending policies and procedures."
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            children: "-  Collaborated with cross-functional teams, to drive business growth and increase loan volume."
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            children: "- Provided auto loan consulting to reach clients' financial needs."
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "item",
                                                    style: {
                                                        marginBottom: -10
                                                    }
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "col-xl-6 col-lg-6 col-md-6 skills-container",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            className: "font-weight-600 uppercase title-section",
                                            children: "Education"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "resume-items",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "item",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "bullet"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "card",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "card-header",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                            className: "year",
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                    className: "fa fa-calendar"
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                    className: "fa fa-caret-right"
                                                                                }),
                                                                                "2022 - 2023"
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                            className: "d-block font-weight-400 uppercase",
                                                                            children: [
                                                                                "Software Development Certificate",
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                    className: "separator"
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                    className: "font-weight-700",
                                                                                    children: "Coding Dojo (Colorado Technical University)"
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "card-body",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            children: "Grade: Triple Black Belt in Python, Java, and MERN"
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                                                    children: "Languages/ Stacks: "
                                                                                }),
                                                                                "Python, Java, JavaScript (MERN), CSS, HTML, SQL"
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                                                    children: "Frameworks/Libraries:"
                                                                                }),
                                                                                " Flask, React, Redux, EmailJS, Node.js, Mongoose, Express, Socket.io, Spring MVC, Bootstrap, Materialize, Tailwind, SASS/LESS"
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                                                    children: "Databases: "
                                                                                }),
                                                                                "MySQL, MongoDB"
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                                                    children: "Cloud: "
                                                                                }),
                                                                                "AWS EC2, Gunicorn, Nginx"
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                                                    children: "Web Technologies:"
                                                                                }),
                                                                                "  RESTful APIs, RestController, AJAX, Context API, Axios"
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                                                    children: "Tools: "
                                                                                }),
                                                                                "Git, Github, Terminal, GitBash, Powershell, VS Code, SpringBoot, Postman, JSON, Bcrypt, Jinja, JSX, MySQL Workbench, MongoDB Compass/Atlas, OOP, Figma, Balsamiq"
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "item",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "bullet"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "card",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "card-header",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                            className: "year",
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                    className: "fa fa-calendar"
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                    className: "fa fa-caret-right"
                                                                                }),
                                                                                "Class of 2022"
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                            className: "d-block font-weight-400 uppercase",
                                                                            children: [
                                                                                "AA, Business Administration",
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                    className: "separator"
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                    className: "font-weight-700",
                                                                                    children: "Fullerton College"
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "card-body",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        children: "Fullerton, CA"
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "row",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-12",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        className: "font-weight-600 uppercase title-section skills-title",
                                        children: "skills"
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "col-12 col-sm-6 col-md-4",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "skill-text",
                                            children: "html"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "chart-bar",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "item-progress",
                                                    "data-percent": 85,
                                                    style: {
                                                        width: "85%"
                                                    }
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    className: "percent",
                                                    style: {
                                                        right: "calc(15% - 21px)"
                                                    },
                                                    children: [
                                                        "85%",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                            className: "arrow"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "col-12 col-sm-6 col-md-4",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "skill-text",
                                            children: "javascript"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "chart-bar",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "item-progress",
                                                    "data-percent": 80,
                                                    style: {
                                                        width: "80%"
                                                    }
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    className: "percent",
                                                    style: {
                                                        right: "calc(20% - 21px)"
                                                    },
                                                    children: [
                                                        "80%",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                            className: "arrow"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "col-12 col-sm-6 col-md-4",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "skill-text",
                                            children: "css"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "chart-bar",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "item-progress",
                                                    "data-percent": 80,
                                                    style: {
                                                        width: "80%"
                                                    }
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    className: "percent",
                                                    style: {
                                                        right: "calc(20% - 21px)"
                                                    },
                                                    children: [
                                                        "80%",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                            className: "arrow"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "col-12 col-sm-6 col-md-4",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "skill-text",
                                            children: "python"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "chart-bar",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "item-progress",
                                                    "data-percent": 80,
                                                    style: {
                                                        width: "80%"
                                                    }
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    className: "percent",
                                                    style: {
                                                        right: "calc(20% - 21px)"
                                                    },
                                                    children: [
                                                        "80%",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                            className: "arrow"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "col-12 col-sm-6 col-md-4",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "skill-text",
                                            children: "java"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "chart-bar",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "item-progress",
                                                    "data-percent": 80,
                                                    style: {
                                                        width: "80%"
                                                    }
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    className: "percent",
                                                    style: {
                                                        right: "calc(20% - 21px)"
                                                    },
                                                    children: [
                                                        "80%",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                            className: "arrow"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "col-12 col-sm-6 col-md-4",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "skill-text",
                                            children: "react"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "chart-bar",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "item-progress",
                                                    "data-percent": 85,
                                                    style: {
                                                        width: "85%"
                                                    }
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    className: "percent",
                                                    style: {
                                                        right: "calc(15% - 21px)"
                                                    },
                                                    children: [
                                                        "85%",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                            className: "arrow"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "col-12 col-sm-6 col-md-4",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "skill-text",
                                            children: "mySQL"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "chart-bar",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "item-progress",
                                                    "data-percent": 75,
                                                    style: {
                                                        width: "75%"
                                                    }
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    className: "percent",
                                                    style: {
                                                        right: "calc(25% - 21px)"
                                                    },
                                                    children: [
                                                        "75%",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                            className: "arrow"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "col-12 col-sm-6 col-md-4",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "skill-text",
                                            children: "MongoDB"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "chart-bar",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "item-progress",
                                                    "data-percent": 75,
                                                    style: {
                                                        width: "75%"
                                                    }
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    className: "percent",
                                                    style: {
                                                        right: "calc(25% - 21px)"
                                                    },
                                                    children: [
                                                        "75%",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                            className: "arrow"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "col-12 col-sm-6 col-md-4",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "skill-text",
                                            children: "Git"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "chart-bar",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "item-progress",
                                                    "data-percent": 80,
                                                    style: {
                                                        width: "80%"
                                                    }
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    className: "percent",
                                                    style: {
                                                        right: "calc(20% - 21px)"
                                                    },
                                                    children: [
                                                        "80%",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                            className: "arrow"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (About);


/***/ }),

/***/ 504:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(655);
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(emailjs_com__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_navContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(333);




const Contact = ()=>{
    const { nav  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_navContext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z);
    const { 0: mailData , 1: setMailData  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        name: "",
        email: "",
        message: ""
    });
    const { name , email , message  } = mailData;
    const { 0: error , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const onChange = (e)=>setMailData({
            ...mailData,
            [e.target.name]: e.target.value
        });
    const onSubmit = (e)=>{
        e.preventDefault();
        if (name.length === 0 || email.length === 0 || message.length === 0) {
            setError(true);
            clearError();
        } else {
            emailjs_com__WEBPACK_IMPORTED_MODULE_1___default().send(// "service_seruhwu", // service id
            "service_h3l8equ", // "template_21aw58z", // template id
            "template_vrm6zns", mailData, // "Q3pccdLZhU-mZT7tQ" // public api
            "y3a9tNHIeNJD3prJo").then((response)=>{
                setError(false);
                clearError();
                setMailData({
                    name: "",
                    email: "",
                    message: ""
                });
            }, (err)=>{
                console.log(err.text);
            });
        }
    };
    const clearError = ()=>{
        setTimeout(()=>{
            setError(null);
        }, 2000);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        id: "contact",
        className: `${nav === "contact" ? "active" : ""}`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "contact-container",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "container page-title text-center",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                            className: "text-center",
                            children: [
                                "get ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: "in touch"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "title-head-subtitle",
                            children: "I\u2019m always open to discussing product design work or partnerships."
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "row contact",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-12 col-md-4 col-xl-4 leftside",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                    className: "custom-list",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h6", {
                                                className: "font-weight-600",
                                                children: [
                                                    " ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "contact-title",
                                                        children: "Phone"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        className: "fa fa-whatsapp"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "contact-content",
                                                        children: "+1 909 979 7464"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h6", {
                                                className: "font-weight-600",
                                                children: [
                                                    " ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "contact-title",
                                                        children: "email"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        className: "fa fa-envelope-o fs-14"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "contact-content",
                                                        children: "c.alejandro.oso@gmail.com"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h6", {
                                                className: "font-weight-600",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "contact-title",
                                                        children: "LinkedIn"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        className: "fa fa-linkedin"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "contact-content",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            href: "https://www.linkedin.com/in/carlos-osornio/",
                                                            children: "carlos-osornio"
                                                        })
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h6", {
                                                className: "font-weight-600",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "contact-title",
                                                        children: "GitHub "
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        className: "fa fa-github"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "contact-content",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            href: "https://github.com/c-osornio",
                                                            children: "c-osornio"
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "col-12 col-md-8 col-xl-8 rightside",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "If you have any suggestion, project or even you want to say Hello.. please fill out the form below and I will reply you shortly."
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                        className: "contactform",
                                        onSubmit: (e)=>onSubmit(e),
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "row",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "form-group col-xl-6",
                                                        children: [
                                                            " ",
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "fa fa-user prefix"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                id: "name",
                                                                name: "name",
                                                                onChange: (e)=>onChange(e),
                                                                value: name,
                                                                type: "text",
                                                                className: "form-control",
                                                                placeholder: "YOUR NAME",
                                                                required: ""
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "form-group col-xl-6",
                                                        children: [
                                                            " ",
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "fa fa-envelope prefix"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                id: "email",
                                                                type: "email",
                                                                name: "email",
                                                                onChange: (e)=>onChange(e),
                                                                value: email,
                                                                className: "form-control",
                                                                placeholder: "YOUR EMAIL",
                                                                required: ""
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "form-group col-xl-12",
                                                        children: [
                                                            " ",
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "fa fa-comments prefix"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                                                id: "comment",
                                                                name: "message",
                                                                onChange: (e)=>onChange(e),
                                                                value: message,
                                                                className: "form-control",
                                                                placeholder: "YOUR MESSAGE",
                                                                required: "",
                                                                defaultValue: ""
                                                            }),
                                                            " "
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "submit-form",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    className: "btn button-animated",
                                                    type: "submit",
                                                    name: "send",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "fa fa-send"
                                                            }),
                                                            " Send Message"
                                                        ]
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "form-message",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: error ? "empty_notice" : "returnmessage",
                                                        style: {
                                                            display: error == null ? "none" : "block"
                                                        },
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: error ? "Please Fill Required Fields" : "Your message has been received, We will contact you soon."
                                                        })
                                                    }),
                                                    " ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "output_message text-center font-weight-600 uppercase"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contact);


/***/ }),

/***/ 447:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Home)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: ./public/img/bg-video-poster.jpg
/* harmony default export */ const bg_video_poster = ({"src":"/_next/static/media/bg-video-poster.d16fbc23.jpg","height":1080,"width":1920,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAArgf/xAAYEAACAwAAAAAAAAAAAAAAAAAAARESMv/aAAgBAQABPwCrnbP/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q=="});
// EXTERNAL MODULE: ./src/context/navContext.js
var navContext = __webpack_require__(333);
// EXTERNAL MODULE: external "react-moving-text"
var external_react_moving_text_ = __webpack_require__(977);
var external_react_moving_text_default = /*#__PURE__*/__webpack_require__.n(external_react_moving_text_);
;// CONCATENATED MODULE: ./src/components/AnimationText.js


const AnimationText = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
        className: "ah-headline d-flex",
        children: [
            `I'm`,
            " ",
            /*#__PURE__*/ jsx_runtime_.jsx((external_react_moving_text_default()), {
                type: "typewriter",
                dataText: [
                    "carlos osornio",
                    "a web developer",
                    "a software engineer"
                ]
            })
        ]
    });
};
/* harmony default export */ const components_AnimationText = (AnimationText);

;// CONCATENATED MODULE: ./src/components/Home.js





const Home = ({ leftImg , video , leftImgSrc  })=>{
    const { nav , changeNav  } = (0,external_react_.useContext)(navContext/* default */.Z);
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        id: "home",
        className: `${nav === "home" ? "active" : ""}`,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "main-text-container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    className: "leftimagepicture",
                    src: "img/me-circle.png",
                    alt: ""
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "main-text",
                    id: "selector",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            children: "Hi there !"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(components_AnimationText, {}),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            children: [
                                `I'm`,
                                " a web developer based in Anaheim, California. I strive to build immersive and beautiful web applications through carefully crafted code and user-centric design."
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "call-to-actions-home",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "text-left",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "#about",
                                        onClick: ()=>changeNav("about"),
                                        className: "btn link-portfolio-one",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fa fa-user"
                                                }),
                                                "more about me"
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "#work",
                                        onClick: ()=>changeNav("work"),
                                        className: "btn btn-secondary link-portfolio-two",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fa fa-suitcase"
                                                }),
                                                "portfolio"
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const components_Home = (Home);


/***/ }),

/***/ 101:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const ColorContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ColorContext);


/***/ }),

/***/ 333:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const NavContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavContext);


/***/ }),

/***/ 760:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layouts_Layouts)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./src/context/colorContext.js
var colorContext = __webpack_require__(101);
// EXTERNAL MODULE: ./src/context/navContext.js
var navContext = __webpack_require__(333);
;// CONCATENATED MODULE: ./src/useWindowSize.js

function useWindowSize() {
    const isSSR = "undefined" === "undefined";
    const [windowSize, setWindowSize] = external_react_default().useState({
        width: isSSR ? 1200 : window.innerWidth,
        height: isSSR ? 800 : window.innerHeight
    });
    function changeWindowSize() {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        });
    }
    external_react_default().useEffect(()=>{
        window.addEventListener("resize", changeWindowSize);
        return ()=>{
            window.removeEventListener("resize", changeWindowSize);
        };
    }, []);
    return windowSize;
};

;// CONCATENATED MODULE: ./src/layouts/BackMobile.js

const BackMobile = ({ changeMobileMenu , mobileMenu  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("span", {
        className: "back-mobile",
        id: "back-mobile",
        onClick: ()=>changeMobileMenu(false),
        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
            className: "fa fa-arrow-left"
        })
    });
};
/* harmony default export */ const layouts_BackMobile = (BackMobile);

;// CONCATENATED MODULE: ./src/useClickOutside.js

let useClickOutside = (handler)=>{
    let domNode = (0,external_react_.useRef)();
    (0,external_react_.useEffect)(()=>{
        let maybeHandler = (event)=>{
            if (!domNode.current.contains(event.target)) {
                handler();
            }
        };
        document.addEventListener("mousedown", maybeHandler);
        return ()=>{
            document.removeEventListener("mousedown", maybeHandler);
        };
    });
    return domNode;
};
/* harmony default export */ const src_useClickOutside = (useClickOutside);

;// CONCATENATED MODULE: ./src/layouts/Header.js





const menus = [
    {
        icon: "fa fa-home",
        dkMenuName: "Home",
        name: "Home",
        id: "home"
    },
    {
        icon: "fa fa-user",
        dkMenuName: "About",
        name: "About me",
        id: "about"
    },
    {
        icon: "fa fa-briefcase",
        dkMenuName: "Portfolio",
        name: "my Portfolio",
        id: "work"
    },
    {
        icon: "fa fa-envelope-open",
        dkMenuName: "Contact",
        name: "get in touch",
        id: "contact"
    }, 
];
const Header = ({ light  })=>{
    const { 0: toggle , 1: setToggle  } = (0,external_react_.useState)(false);
    const { changeNav , nav , changeMobileMenu , mobileMenu  } = (0,external_react_.useContext)(navContext/* default */.Z);
    (0,external_react_.useEffect)(()=>{
        let path = window.location.hash, newpath = path.split("#").pop();
        return ()=>{
            changeNav(newpath ? newpath : "home");
        };
    }, []);
    const { width  } = useWindowSize();
    // outside click
    let domNode = src_useClickOutside(()=>{
        setToggle(false);
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        id: "header",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "nav-container",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        id: "nav",
                        className: "navigation",
                        children: menus.map((menu, i)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: nav === menu.id ? "active" : "",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                        onClick: ()=>{
                                            changeNav(menu.id);
                                            changeMobileMenu(width < 1025 ? true : false);
                                        },
                                        id: `link-${menu.id}`,
                                        href: `#${menu.id}`,
                                        className: nav === menu.id ? "active" : "",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: `${menu.icon}`
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: menu.name
                                            })
                                        ]
                                    })
                                })
                            }, i))
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                ref: domNode,
                className: `cd-stretchy-nav ${toggle ? "nav-is-visible" : ""} ${light ? nav == "home" && "lighter" : ""}`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: "cd-nav-trigger",
                        onClick: ()=>setToggle(!toggle),
                        href: "#",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            "aria-hidden": "true"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        className: "stretchy-nav",
                        children: menus.map((menu, i)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: nav == menu.id ? "active" : "",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: `#${menu.id}`,
                                    onClick: ()=>{
                                        changeNav(menu.id);
                                        setToggle(false);
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: menu.dkMenuName
                                    })
                                })
                            }, i))
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        "aria-hidden": "true",
                        className: "stretchy-nav-bg"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const layouts_Header = (Header);

;// CONCATENATED MODULE: ./src/layouts/Switcher.js



const colors = [
    {
        name: "blue",
        colorImg: "img/styleswitcher/blue.png"
    },
    {
        name: "red",
        colorImg: "img/styleswitcher/red.png"
    },
    {
        name: "goldrenrod",
        colorImg: "img/styleswitcher/goldenrod.png"
    },
    {
        name: "magenta",
        colorImg: "img/styleswitcher/magenta.png"
    },
    {
        name: "yellowgreen",
        colorImg: "img/styleswitcher/yellowgreen.png"
    },
    {
        name: "orange",
        colorImg: "img/styleswitcher/orange.png"
    },
    {
        name: "green",
        colorImg: "img/styleswitcher/green.png"
    },
    {
        name: "yellow",
        colorImg: "img/styleswitcher/yellow.png"
    }, 
];
const Switcher = ()=>{
    const { changeColor  } = useContext(ColorContext);
    const { 0: toggle , 1: setToggle  } = useState(false);
    return /*#__PURE__*/ _jsxs(Fragment, {
        children: [
            /*#__PURE__*/ _jsx("div", {
                id: "switcher",
                className: "",
                style: {
                    display: toggle ? "block" : "none"
                },
                children: /*#__PURE__*/ _jsxs("div", {
                    className: "content-switcher",
                    children: [
                        /*#__PURE__*/ _jsx("h4", {
                            children: "STYLE SWITCHER"
                        }),
                        /*#__PURE__*/ _jsx("ul", {
                            children: colors.map((color, i)=>/*#__PURE__*/ _jsx("li", {
                                    children: /*#__PURE__*/ _jsx("a", {
                                        href: "#",
                                        title: color.name,
                                        className: "color",
                                        onClick: ()=>changeColor(color.name),
                                        children: /*#__PURE__*/ _jsx("img", {
                                            src: color.colorImg,
                                            alt: color.name
                                        })
                                    }, i)
                                }, i))
                        }),
                        /*#__PURE__*/ _jsx("br", {}),
                        /*#__PURE__*/ _jsxs("a", {
                            href: "",
                            className: "waves-effect waves-light btn font-weight-600 purchase hoverable",
                            children: [
                                " ",
                                /*#__PURE__*/ _jsxs("span", {
                                    children: [
                                        /*#__PURE__*/ _jsx("i", {
                                            className: "fa fa-shopping-cart"
                                        }),
                                        " PURCHASE"
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            id: "hideSwitcher",
                            onClick: ()=>setToggle(false),
                            children: "\xd7"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ _jsx("div", {
                id: "showSwitcher",
                className: "styleSecondColor",
                onClick: ()=>setToggle(true),
                style: {
                    display: toggle ? "none" : "block"
                },
                children: /*#__PURE__*/ _jsx("i", {
                    className: "fa fa-cog fa-spin"
                })
            })
        ]
    });
};
/* harmony default export */ const layouts_Switcher = ((/* unused pure expression or super */ null && (Switcher)));

;// CONCATENATED MODULE: ./src/layouts/Layouts.js









const Layouts = ({ children , bodyCls , extraPage , light  })=>{
    (0,external_react_.useEffect)(()=>{
        document.querySelector("body").classList = bodyCls ? bodyCls : "dark fullscreendark";
    }, []);
    const { changeMobileMenu , mobileMenu  } = (0,external_react_.useContext)(navContext/* default */.Z);
    const { color  } = (0,external_react_.useContext)(colorContext/* default */.Z);
    const { width  } = useWindowSize();
    (0,external_react_.useEffect)(()=>{
        if (width > 1025) {
            changeMobileMenu(false);
        }
    }, [
        width
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        type: "text/css",
                        media: "all",
                        href: `css/skins/${color}.css`,
                        rel: "stylesheet"
                    }),
                    " ",
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Carlos Osornio- Portfolio"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "page animated",
                style: {
                    animationDuration: "500ms"
                },
                children: [
                    !extraPage && /*#__PURE__*/ jsx_runtime_.jsx(layouts_Header, {
                        light: light
                    }),
                    " ",
                    extraPage ? children : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                        id: "main",
                        className: `${width < 1025 ? mobileMenu ? "open" : "" : ""}`,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(layouts_BackMobile, {
                                changeMobileMenu: changeMobileMenu,
                                mobileMenu: mobileMenu
                            }),
                            children
                        ]
                    })
                ]
            }),
            " "
        ]
    });
};
/* harmony default export */ const layouts_Layouts = (Layouts);


/***/ })

};
;