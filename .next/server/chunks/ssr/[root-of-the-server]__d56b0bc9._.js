module.exports = {

"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/lib/utils.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "cn": (()=>cn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}}),
"[project]/components/ui/tubelight-navbar.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "NavBar": (()=>NavBar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function NavBar({ items, className, navItem }) {
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(navItem);
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleResize = ()=>{
            if (!isMobile) {
                setIsMobile(window.innerWidth < 1280);
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return ()=>window.removeEventListener("resize", handleResize);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("fixed bottom-0 min-[1025px]:top-0 left-1/2 -translate-x-1/2 z-50 mb-6 min-[1025px]:pt-10 h-fit sm:px-[20px]", className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center bg-background/5 border border-border backdrop-blur-lg py-1 px-1 rounded-full shadow-lg",
            children: items.map((item)=>{
                const Icon = item.icon;
                const isActive = activeTab === item.name;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: item.url,
                    onClick: ()=>setActiveTab(item.name),
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors", "text-foreground/80 hover:text-primary", isActive && "bg-[#e4ebff] text-primary"),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "hidden xl:inline",
                            children: item.name
                        }, void 0, false, {
                            fileName: "[project]/components/ui/tubelight-navbar.tsx",
                            lineNumber: 59,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "xl:hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                size: 18,
                                strokeWidth: 2.5
                            }, void 0, false, {
                                fileName: "[project]/components/ui/tubelight-navbar.tsx",
                                lineNumber: 61,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/ui/tubelight-navbar.tsx",
                            lineNumber: 60,
                            columnNumber: 15
                        }, this),
                        isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            layoutId: "lamp",
                            className: "absolute inset-0 w-full bg-primary/5 rounded-full -z-10",
                            initial: false,
                            transition: {
                                type: "spring",
                                stiffness: 300,
                                damping: 30
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-[#377DFF] rounded-t-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/tubelight-navbar.tsx",
                                        lineNumber: 75,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/tubelight-navbar.tsx",
                                        lineNumber: 76,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/tubelight-navbar.tsx",
                                        lineNumber: 77,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ui/tubelight-navbar.tsx",
                                lineNumber: 74,
                                columnNumber: 19
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/ui/tubelight-navbar.tsx",
                            lineNumber: 64,
                            columnNumber: 17
                        }, this)
                    ]
                }, item.name, true, {
                    fileName: "[project]/components/ui/tubelight-navbar.tsx",
                    lineNumber: 49,
                    columnNumber: 13
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/components/ui/tubelight-navbar.tsx",
            lineNumber: 43,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/tubelight-navbar.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
}}),
"[project]/components/ui/interactive-hover-button.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "InteractiveHoverButton": (()=>InteractiveHoverButton)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-cart.js [app-ssr] (ecmascript) <export default as ShoppingCart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const InteractiveHoverButton = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].forwardRef(({ text = "Login", iconType, className, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("group relative w-32 cursor-pointer overflow-hidden rounded-sm border bg-background p-2 text-center font-semibold bg-[#377DFF]", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "inline-block translate-x-1 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0 text-[#ffffff]",
                children: text
            }, void 0, false, {
                fileName: "[project]/components/ui/interactive-hover-button.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-[#000000] opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: text
                    }, void 0, false, {
                        fileName: "[project]/components/ui/interactive-hover-button.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    iconType == 'arrow' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {}, void 0, false, {
                        fileName: "[project]/components/ui/interactive-hover-button.tsx",
                        lineNumber: 29,
                        columnNumber: 32
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {}, void 0, false, {
                        fileName: "[project]/components/ui/interactive-hover-button.tsx",
                        lineNumber: 29,
                        columnNumber: 49
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/interactive-hover-button.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-[20%] top-[40%] h-2 w-2 scale-[1] rounded-lg bg-[#e4ebff] transition-all duration-500 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8] group-hover:bg-[#e4ebff]"
            }, void 0, false, {
                fileName: "[project]/components/ui/interactive-hover-button.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/interactive-hover-button.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
});
InteractiveHoverButton.displayName = "InteractiveHoverButton";
;
}}),
"[project]/images/google.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/google.836b74b8.svg");}}),
"[project]/images/google.svg.mjs { IMAGE => \"[project]/images/google.svg (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$google$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/images/google.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$google$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 17,
    height: 17,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
}}),
"[project]/images/email.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/email.eeac96e4.svg");}}),
"[project]/images/email.svg.mjs { IMAGE => \"[project]/images/email.svg (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$email$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/images/email.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$email$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 17,
    height: 13,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
}}),
"[project]/components/user-authentication.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "UserAuthentication": (()=>UserAuthentication)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$google$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$images$2f$google$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/images/google.svg.mjs { IMAGE => "[project]/images/google.svg (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$email$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$images$2f$email$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/images/email.svg.mjs { IMAGE => "[project]/images/email.svg (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
"use client";
;
;
;
;
;
// Login Modal Component (moved outside)
const LoginModal = ({ onClose, onNavigate })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-md mx-auto bg-white rounded-lg p-8 relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onClose,
                className: "absolute top-6 right-6 text-gray-400 hover:text-gray-600 text-4xl font-light cursor-pointer",
                children: "×"
            }, void 0, false, {
                fileName: "[project]/components/user-authentication.js",
                lineNumber: 11,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-semibold text-center mb-2",
                children: "Log in"
            }, void 0, false, {
                fileName: "[project]/components/user-authentication.js",
                lineNumber: 18,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-center text-gray-600 mb-8",
                children: [
                    "Don't have an account yet?",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onNavigate('signup'),
                        className: "text-blue-600 hover:underline ml-1 cursor-pointer",
                        children: "Sign up"
                    }, void 0, false, {
                        fileName: "[project]/components/user-authentication.js",
                        lineNumber: 21,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/user-authentication.js",
                lineNumber: 19,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "w-full flex items-center justify-center gap-3 py-3 px-4 border border-gray-300 rounded-lg hover:bg-[#e4ebff] transition-colors cursor-pointer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$google$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$images$2f$google$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                                alt: "Google"
                            }, void 0, false, {
                                fileName: "[project]/components/user-authentication.js",
                                lineNumber: 31,
                                columnNumber: 9
                            }, this),
                            "Log in with Google"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/user-authentication.js",
                        lineNumber: 30,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onNavigate('emailLogin'),
                        className: "w-full flex items-center justify-center gap-3 py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$email$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$images$2f$email$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                                alt: "Email"
                            }, void 0, false, {
                                fileName: "[project]/components/user-authentication.js",
                                lineNumber: 39,
                                columnNumber: 9
                            }, this),
                            "Log in with Email"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/user-authentication.js",
                        lineNumber: 35,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/user-authentication.js",
                lineNumber: 29,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/user-authentication.js",
        lineNumber: 10,
        columnNumber: 3
    }, this);
// Email Login Form Component (moved outside)
const EmailLoginModal = ({ formData, errors, onInputChange, onSubmit, onClose, onNavigate })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-md mx-auto bg-white rounded-lg p-8 relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onClose,
                className: "absolute top-6 right-6 text-gray-400 hover:text-gray-600 text-4xl font-light cursor-pointer",
                children: "×"
            }, void 0, false, {
                fileName: "[project]/components/user-authentication.js",
                lineNumber: 49,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-semibold text-center mb-2",
                children: "Log in"
            }, void 0, false, {
                fileName: "[project]/components/user-authentication.js",
                lineNumber: 56,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-center text-gray-600 mb-8",
                children: [
                    "Don't have an account?",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onNavigate('signup'),
                        className: "text-blue-600 hover:underline ml-1 cursor-pointer",
                        children: "Sign up"
                    }, void 0, false, {
                        fileName: "[project]/components/user-authentication.js",
                        lineNumber: 59,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/user-authentication.js",
                lineNumber: 57,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium text-gray-700 mb-2",
                                children: "Your email"
                            }, void 0, false, {
                                fileName: "[project]/components/user-authentication.js",
                                lineNumber: 69,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "email",
                                name: "email",
                                value: formData.email,
                                onChange: onInputChange,
                                placeholder: "email@site.com",
                                className: `w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none ${errors.email ? 'border-red-500' : 'border-gray-300'}`
                            }, void 0, false, {
                                fileName: "[project]/components/user-authentication.js",
                                lineNumber: 72,
                                columnNumber: 9
                            }, this),
                            errors.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-red-500 text-sm mt-1",
                                children: errors.email
                            }, void 0, false, {
                                fileName: "[project]/components/user-authentication.js",
                                lineNumber: 83,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/user-authentication.js",
                        lineNumber: 68,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700",
                                        children: "Password"
                                    }, void 0, false, {
                                        fileName: "[project]/components/user-authentication.js",
                                        lineNumber: 89,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "text-sm text-blue-600 hover:underline cursor-pointer",
                                        children: "Forget password?"
                                    }, void 0, false, {
                                        fileName: "[project]/components/user-authentication.js",
                                        lineNumber: 92,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/user-authentication.js",
                                lineNumber: 88,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "password",
                                name: "password",
                                value: formData.password,
                                onChange: onInputChange,
                                placeholder: "8+ characters required",
                                className: `w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none ${errors.password ? 'border-red-500' : 'border-gray-300'}`
                            }, void 0, false, {
                                fileName: "[project]/components/user-authentication.js",
                                lineNumber: 99,
                                columnNumber: 9
                            }, this),
                            errors.password && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-red-500 text-sm mt-1",
                                children: errors.password
                            }, void 0, false, {
                                fileName: "[project]/components/user-authentication.js",
                                lineNumber: 110,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/user-authentication.js",
                        lineNumber: 87,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>onSubmit(false),
                        className: "w-full py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium cursor-pointer",
                        children: "Login"
                    }, void 0, false, {
                        fileName: "[project]/components/user-authentication.js",
                        lineNumber: 114,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/user-authentication.js",
                lineNumber: 67,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/user-authentication.js",
        lineNumber: 48,
        columnNumber: 3
    }, this);
// Signup Options Modal Component (moved outside)
const SignupModal = ({ onClose, onNavigate })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-md mx-auto bg-white rounded-lg p-8 relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onClose,
                className: "absolute top-6 right-6 text-gray-400 hover:text-gray-600 text-4xl font-light cursor-pointer",
                children: "×"
            }, void 0, false, {
                fileName: "[project]/components/user-authentication.js",
                lineNumber: 128,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-semibold text-center mb-2",
                children: "Sign up"
            }, void 0, false, {
                fileName: "[project]/components/user-authentication.js",
                lineNumber: 135,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-center text-gray-600 mb-8",
                children: [
                    "Already have an account?",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onNavigate('login'),
                        className: "text-blue-600 hover:underline ml-1 cursor-pointer",
                        children: "Log in"
                    }, void 0, false, {
                        fileName: "[project]/components/user-authentication.js",
                        lineNumber: 138,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/user-authentication.js",
                lineNumber: 136,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "w-full flex items-center justify-center gap-3 py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$google$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$images$2f$google$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                                alt: "Google"
                            }, void 0, false, {
                                fileName: "[project]/components/user-authentication.js",
                                lineNumber: 148,
                                columnNumber: 9
                            }, this),
                            "Sign up with Google"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/user-authentication.js",
                        lineNumber: 147,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onNavigate('emailSignup'),
                        className: "w-full flex items-center justify-center gap-3 py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$email$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$images$2f$email$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                                alt: "Email"
                            }, void 0, false, {
                                fileName: "[project]/components/user-authentication.js",
                                lineNumber: 156,
                                columnNumber: 9
                            }, this),
                            "Sign up with Email"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/user-authentication.js",
                        lineNumber: 152,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/user-authentication.js",
                lineNumber: 146,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/user-authentication.js",
        lineNumber: 127,
        columnNumber: 3
    }, this);
// Email Signup Form Component (moved outside)
const EmailSignupModal = ({ formData, errors, onInputChange, onSubmit, onClose, onNavigate })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-md mx-auto bg-white rounded-lg p-8 relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onClose,
                className: "absolute top-6 right-6 text-gray-400 hover:text-gray-600 text-4xl font-light text-center cursor-pointer",
                children: "×"
            }, void 0, false, {
                fileName: "[project]/components/user-authentication.js",
                lineNumber: 166,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-semibold text-center mb-2",
                children: "Sign up"
            }, void 0, false, {
                fileName: "[project]/components/user-authentication.js",
                lineNumber: 173,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-center text-gray-600 mb-8",
                children: [
                    "Already have an account?",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onNavigate('login'),
                        className: "text-blue-600 hover:underline ml-1 cursor-pointer",
                        children: "Log in"
                    }, void 0, false, {
                        fileName: "[project]/components/user-authentication.js",
                        lineNumber: 176,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/user-authentication.js",
                lineNumber: 174,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium text-gray-700 mb-2",
                                children: "Your email"
                            }, void 0, false, {
                                fileName: "[project]/components/user-authentication.js",
                                lineNumber: 186,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "email",
                                name: "email",
                                value: formData.email,
                                onChange: onInputChange,
                                placeholder: "email@site.com",
                                className: `w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none ${errors.email ? 'border-red-500' : 'border-gray-300'}`
                            }, void 0, false, {
                                fileName: "[project]/components/user-authentication.js",
                                lineNumber: 189,
                                columnNumber: 9
                            }, this),
                            errors.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-red-500 text-sm mt-1",
                                children: errors.email
                            }, void 0, false, {
                                fileName: "[project]/components/user-authentication.js",
                                lineNumber: 200,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/user-authentication.js",
                        lineNumber: 185,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium text-gray-700 mb-2",
                                children: "Password"
                            }, void 0, false, {
                                fileName: "[project]/components/user-authentication.js",
                                lineNumber: 205,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "password",
                                name: "password",
                                value: formData.password,
                                onChange: onInputChange,
                                placeholder: "8+ characters required",
                                className: `w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none ${errors.password ? 'border-red-500' : 'border-gray-300'}`
                            }, void 0, false, {
                                fileName: "[project]/components/user-authentication.js",
                                lineNumber: 208,
                                columnNumber: 9
                            }, this),
                            errors.password && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-red-500 text-sm mt-1",
                                children: errors.password
                            }, void 0, false, {
                                fileName: "[project]/components/user-authentication.js",
                                lineNumber: 219,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/user-authentication.js",
                        lineNumber: 204,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium text-gray-700 mb-2",
                                children: "Confirm password"
                            }, void 0, false, {
                                fileName: "[project]/components/user-authentication.js",
                                lineNumber: 224,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "password",
                                name: "confirmPassword",
                                value: formData.confirmPassword,
                                onChange: onInputChange,
                                placeholder: "8+ characters required",
                                className: `w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'}`
                            }, void 0, false, {
                                fileName: "[project]/components/user-authentication.js",
                                lineNumber: 227,
                                columnNumber: 9
                            }, this),
                            errors.confirmPassword && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-red-500 text-sm mt-1",
                                children: errors.confirmPassword
                            }, void 0, false, {
                                fileName: "[project]/components/user-authentication.js",
                                lineNumber: 238,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/user-authentication.js",
                        lineNumber: 223,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>onSubmit(true),
                        className: "w-full py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium cursor-pointer",
                        children: "Sign up"
                    }, void 0, false, {
                        fileName: "[project]/components/user-authentication.js",
                        lineNumber: 242,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-center text-sm text-gray-600",
                        children: [
                            "By continuing you agree to our",
                            ' ',
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "text-blue-600 hover:underline cursor-pointer",
                                children: "Terms and Conditions"
                            }, void 0, false, {
                                fileName: "[project]/components/user-authentication.js",
                                lineNumber: 252,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/user-authentication.js",
                        lineNumber: 250,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/user-authentication.js",
                lineNumber: 184,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/user-authentication.js",
        lineNumber: 165,
        columnNumber: 3
    }, this);
const UserAuthentication = ({ isOpen, onClose })=>{
    const [currentView, setCurrentView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('login'); // 'login', 'signup', 'emailLogin', 'emailSignup'
    // Separate form data for each view
    const [loginFormData, setLoginFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        email: '',
        password: ''
    });
    const [signupFormData, setSignupFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        email: '',
        password: '',
        confirmPassword: ''
    });
    // Separate errors for each view
    const [loginErrors, setLoginErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [signupErrors, setSignupErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    if (!isOpen) return null;
    // Get current form data and errors based on view
    const getCurrentFormData = ()=>{
        return currentView === 'emailLogin' ? loginFormData : signupFormData;
    };
    const getCurrentErrors = ()=>{
        return currentView === 'emailLogin' ? loginErrors : signupErrors;
    };
    const setCurrentFormData = (newData)=>{
        if (currentView === 'emailLogin') {
            setLoginFormData(newData);
        } else {
            setSignupFormData(newData);
        }
    };
    const setCurrentErrors = (newErrors)=>{
        if (currentView === 'emailLogin') {
            setLoginErrors(newErrors);
        } else {
            setSignupErrors(newErrors);
        }
    };
    const handleInputChange = (e)=>{
        const { name, value } = e.target;
        const currentData = getCurrentFormData();
        const currentErrs = getCurrentErrors();
        setCurrentFormData({
            ...currentData,
            [name]: value
        });
        // Clear error when user starts typing
        if (currentErrs[name]) {
            setCurrentErrors({
                ...currentErrs,
                [name]: ''
            });
        }
    };
    const validateEmail = (email)=>{
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    const validateForm = (isSignup = false)=>{
        const newErrors = {};
        const formData = getCurrentFormData();
        // Email validation
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!validateEmail(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }
        // Password validation
        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters long';
        }
        // Confirm password validation (only for signup)
        if (isSignup) {
            if (!formData.confirmPassword) {
                newErrors.confirmPassword = 'Please confirm your password';
            } else if (formData.password !== formData.confirmPassword) {
                newErrors.confirmPassword = 'Passwords do not match';
            }
        }
        setCurrentErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const handleSubmit = (isSignup = false)=>{
        if (validateForm(isSignup)) {
            // Handle form submission logic here
            const formData = getCurrentFormData();
            console.log('Form submitted:', formData);
        }
    };
    const resetAndClose = ()=>{
        setCurrentView('login');
        setLoginFormData({
            email: '',
            password: ''
        });
        setSignupFormData({
            email: '',
            password: '',
            confirmPassword: ''
        });
        setLoginErrors({});
        setSignupErrors({});
        onClose();
    };
    const handleNavigate = (view)=>{
        setCurrentView(view);
    };
    const renderCurrentView = ()=>{
        switch(currentView){
            case 'login':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LoginModal, {
                    onClose: resetAndClose,
                    onNavigate: handleNavigate
                }, void 0, false, {
                    fileName: "[project]/components/user-authentication.js",
                    lineNumber: 386,
                    columnNumber: 16
                }, this);
            case 'emailLogin':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(EmailLoginModal, {
                    formData: getCurrentFormData(),
                    errors: getCurrentErrors(),
                    onInputChange: handleInputChange,
                    onSubmit: handleSubmit,
                    onClose: resetAndClose,
                    onNavigate: handleNavigate
                }, void 0, false, {
                    fileName: "[project]/components/user-authentication.js",
                    lineNumber: 389,
                    columnNumber: 11
                }, this);
            case 'signup':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SignupModal, {
                    onClose: resetAndClose,
                    onNavigate: handleNavigate
                }, void 0, false, {
                    fileName: "[project]/components/user-authentication.js",
                    lineNumber: 399,
                    columnNumber: 16
                }, this);
            case 'emailSignup':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(EmailSignupModal, {
                    formData: getCurrentFormData(),
                    errors: getCurrentErrors(),
                    onInputChange: handleInputChange,
                    onSubmit: handleSubmit,
                    onClose: resetAndClose,
                    onNavigate: handleNavigate
                }, void 0, false, {
                    fileName: "[project]/components/user-authentication.js",
                    lineNumber: 402,
                    columnNumber: 11
                }, this);
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LoginModal, {
                    onClose: resetAndClose,
                    onNavigate: handleNavigate
                }, void 0, false, {
                    fileName: "[project]/components/user-authentication.js",
                    lineNumber: 412,
                    columnNumber: 16
                }, this);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-[#21325b80] bg-opacity-50 flex items-center justify-center z-50 p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-md",
            children: renderCurrentView()
        }, void 0, false, {
            fileName: "[project]/components/user-authentication.js",
            lineNumber: 418,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/user-authentication.js",
        lineNumber: 417,
        columnNumber: 5
    }, this);
};
}}),
"[project]/images/logo.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/logo.ae2dae0c.svg");}}),
"[project]/images/logo.svg.mjs { IMAGE => \"[project]/images/logo.svg (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$logo$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/images/logo.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$logo$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 151,
    height: 63,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
}}),
"[project]/images/search.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/search.8ad2675c.svg");}}),
"[project]/images/search.svg.mjs { IMAGE => \"[project]/images/search.svg (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$search$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/images/search.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$search$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 14,
    height: 15,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
}}),
"[project]/images/favourite.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/favourite.fdd0aa28.svg");}}),
"[project]/images/favourite.svg.mjs { IMAGE => \"[project]/images/favourite.svg (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$favourite$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/images/favourite.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$favourite$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 14,
    height: 13,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
}}),
"[project]/images/cart.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/cart.fba4d389.svg");}}),
"[project]/images/cart.svg.mjs { IMAGE => \"[project]/images/cart.svg (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$cart$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/images/cart.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$cart$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 15,
    height: 14,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
}}),
"[project]/components/header.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Header)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.js [app-ssr] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-ssr] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-ssr] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-ssr] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/droplets.js [app-ssr] (ecmascript) <export default as Droplets>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tubelight$2d$navbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/tubelight-navbar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$interactive$2d$hover$2d$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/interactive-hover-button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$user$2d$authentication$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/user-authentication.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$logo$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$images$2f$logo$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/images/logo.svg.mjs { IMAGE => "[project]/images/logo.svg (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$search$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$images$2f$search$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/images/search.svg.mjs { IMAGE => "[project]/images/search.svg (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$favourite$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$images$2f$favourite$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/images/favourite.svg.mjs { IMAGE => "[project]/images/favourite.svg (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$cart$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$images$2f$cart$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/images/cart.svg.mjs { IMAGE => "[project]/images/cart.svg (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
function Header({ activeTab }) {
    const [isAuthModalOpen, setIsAuthModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const navItems = [
        {
            name: 'Home',
            url: '/',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"]
        },
        {
            name: 'About',
            url: '#',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"]
        },
        {
            name: 'Products',
            url: '#',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"]
        },
        {
            name: 'Categories',
            url: '#',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"]
        },
        {
            name: 'Pumps',
            url: '/pumps',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__["Droplets"]
        },
        {
            name: 'Contact',
            url: '/contact',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"]
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "w-full bg-white border-b border-gray-100 py-[20px] items-center top-[0px] sticky z-[11]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-[1400] mx-auto px-4 sm:px-6 lg:px-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between h-16 lg:h-20",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/",
                                        className: "flex items-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            src: __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$logo$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$images$2f$logo$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                                            alt: "VR PUMPS",
                                            width: 150
                                        }, void 0, false, {
                                            fileName: "[project]/components/header.js",
                                            lineNumber: 37,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/header.js",
                                        lineNumber: 36,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/header.js",
                                    lineNumber: 35,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tubelight$2d$navbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NavBar"], {
                                    navItem: activeTab,
                                    items: navItems
                                }, void 0, false, {
                                    fileName: "[project]/components/header.js",
                                    lineNumber: 46,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center space-x-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "/wishlist",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `${activeTab == 'Wishlist' ? '-top-2 left-1/2 h-1 bg-[#377DFF] rounded-t-full' : ''}`
                                                }, void 0, false, {
                                                    fileName: "[project]/components/header.js",
                                                    lineNumber: 51,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: `p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200 cursor-pointer hidden sm:block ${activeTab == 'Wishlist' ? 'bg-[#e4ebff]' : ''}`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        src: __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$favourite$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$images$2f$favourite$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                                                        alt: "WishList",
                                                        width: 20,
                                                        height: 20,
                                                        className: "w-5 h-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/header.js",
                                                        lineNumber: 53,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/header.js",
                                                    lineNumber: 52,
                                                    columnNumber: 17
                                                }, this),
                                                console.log(activeTab)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/header.js",
                                            lineNumber: 50,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "/cart",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `${activeTab == 'Cart' ? '-top-2 left-1/2 h-1 bg-[#377DFF] rounded-t-full' : ''}`
                                                }, void 0, false, {
                                                    fileName: "[project]/components/header.js",
                                                    lineNumber: 64,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: `p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200 cursor-pointer hidden sm:block ${activeTab == 'Cart' ? 'bg-[#e4ebff]' : ''}`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        src: __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$cart$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$images$2f$cart$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                                                        alt: "Cart",
                                                        width: 20,
                                                        height: 20,
                                                        className: "w-5 h-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/header.js",
                                                        lineNumber: 66,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/header.js",
                                                    lineNumber: 65,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/header.js",
                                            lineNumber: 63,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200 cursor-pointer hidden sm:block",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                src: __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$search$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$images$2f$search$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                                                alt: "Search",
                                                width: 20,
                                                height: 20,
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/components/header.js",
                                                lineNumber: 77,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/header.js",
                                            lineNumber: 76,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative justify-center hidden sm:block",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$interactive$2d$hover$2d$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InteractiveHoverButton"], {
                                                iconType: "arrow",
                                                text: "Login",
                                                onClick: ()=>setIsAuthModalOpen(true)
                                            }, void 0, false, {
                                                fileName: "[project]/components/header.js",
                                                lineNumber: 88,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/header.js",
                                            lineNumber: 87,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setIsMobileMenuOpen(!isMobileMenuOpen),
                                            className: "lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {}, void 0, false, {
                                                fileName: "[project]/components/header.js",
                                                lineNumber: 96,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/header.js",
                                            lineNumber: 92,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/header.js",
                                    lineNumber: 49,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/header.js",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this),
                        isMobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:hidden py-4 border-t border-gray-100",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                className: "flex flex-col space-y-3",
                                children: [
                                    navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: item.url,
                                            className: "text-gray-700 hover:text-blue-600 font-medium text-sm py-2 transition-colors duration-200",
                                            children: item.name
                                        }, item.name, false, {
                                            fileName: "[project]/components/header.js",
                                            lineNumber: 106,
                                            columnNumber: 19
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "sm:hidden bg-[#377DFF] text-white px-4 py-2 rounded-sm font-medium text-sm transition-colors duration-200 mt-2",
                                        onClick: ()=>setIsAuthModalOpen(true),
                                        children: "Login"
                                    }, void 0, false, {
                                        fileName: "[project]/components/header.js",
                                        lineNumber: 114,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/header.js",
                                lineNumber: 104,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/header.js",
                            lineNumber: 103,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/header.js",
                    lineNumber: 32,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/header.js",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$user$2d$authentication$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserAuthentication"], {
                isOpen: isAuthModalOpen,
                onClose: ()=>setIsAuthModalOpen(false)
            }, void 0, false, {
                fileName: "[project]/components/header.js",
                lineNumber: 122,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}}),
"[project]/images/homepage/fold1/fold1image1.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/fold1image1.e654369c.png");}}),
"[project]/images/homepage/fold1/fold1image1.png.mjs { IMAGE => \"[project]/images/homepage/fold1/fold1image1.png (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$fold1$2f$fold1image1$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/images/homepage/fold1/fold1image1.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$fold1$2f$fold1image1$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 369,
    height: 293,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAA0UlEQVR42gHGADn/AAAAAAAAAAAAAAAAABIRDzVQTkiybmxj1jUyLXgDAgIEAAICAgIHBwYJGBcWKDY1MZYxLyv9Pjw2/zo5MeEaGxdOAC0sKHtGRDy2iIZ63WNjWvwvLyr/JiYf/yAgG/8lJiKxAElJQ8Y3NzL/XV5R/25tXP8sLCn+HRwZ8CAfHcwmJiRcAFFRS6w+PTj5SUhB/VdVTP8vLyz8IB8cwA4ODTUBAQECABAPDSAmJSFxJycjhh8fHKoWFhWbDAwLSAQEBA0AAAAAh9MzaeUh5MEAAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 6
};
}}),
"[project]/images/homepage/arrow-right.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/arrow-right.aedf3b79.png");}}),
"[project]/images/homepage/arrow-right.png.mjs { IMAGE => \"[project]/images/homepage/arrow-right.png (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$arrow$2d$right$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/images/homepage/arrow-right.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$arrow$2d$right$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 32,
    height: 32,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAaUlEQVR42oWPKQ6AMBBFOzVtD0CCQOMhIWHCkrQspgIcVHD/azBjMAzh2//yF6VIAKCzvCiNdVZJ0qQaw976eBJkRIgN9DH9Qv28Xc2wHpwqAt1CwCgAbFJ8wkmoAKIrGonho/+56d43b/A6D2HPl6noAAAAAElFTkSuQmCC",
    blurWidth: 8,
    blurHeight: 8
};
}}),
"[project]/images/homepage/arrow-left.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/arrow-left.02293120.png");}}),
"[project]/images/homepage/arrow-left.png.mjs { IMAGE => \"[project]/images/homepage/arrow-left.png (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$arrow$2d$left$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/images/homepage/arrow-left.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$arrow$2d$left$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 32,
    height: 32,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAaUlEQVR42oWPoQ6AIBRFeRTQ7mYw23W6icMgTgpBmhj8/9+QFwiCzJveds527yMkCuMlr+qmBQBKUliwaTWun5WlPl/wEptxeL8g2sOiT6mPO4FBGKUX9owQKoSvwA1/kuuEshCPzL35AOjKD2J4yYtFAAAAAElFTkSuQmCC",
    blurWidth: 8,
    blurHeight: 8
};
}}),
"[project]/images/homepage/favourite-fill.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/favourite-fill.4d1a7486.svg");}}),
"[project]/images/homepage/favourite-fill.svg.mjs { IMAGE => \"[project]/images/homepage/favourite-fill.svg (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$favourite$2d$fill$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/images/homepage/favourite-fill.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$favourite$2d$fill$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 17,
    height: 16,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
}}),
"[project]/components/favourite-button.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>FavouriteButton)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$favourite$2d$fill$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$images$2f$homepage$2f$favourite$2d$fill$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/images/homepage/favourite-fill.svg.mjs { IMAGE => "[project]/images/homepage/favourite-fill.svg (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$favourite$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$images$2f$favourite$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/images/favourite.svg.mjs { IMAGE => "[project]/images/favourite.svg (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function FavouriteButton({ isFavorite, onToggle }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onClick: onToggle,
        className: "p-3 rounded-full hover:bg-gray-100 transition-colors duration-200 cursor-pointer border-[1px] border-solid border-[#21325B1A]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            src: isFavorite ? __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$favourite$2d$fill$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$images$2f$homepage$2f$favourite$2d$fill$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"] : __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$favourite$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$images$2f$favourite$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
            alt: "favourite",
            width: 16,
            height: 16
        }, void 0, false, {
            fileName: "[project]/components/favourite-button.js",
            lineNumber: 13,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/favourite-button.js",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
}}),
"[project]/components/homepage/fold1.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Fold1)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$fold1$2f$fold1image1$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$images$2f$homepage$2f$fold1$2f$fold1image1$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/images/homepage/fold1/fold1image1.png.mjs { IMAGE => "[project]/images/homepage/fold1/fold1image1.png (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$arrow$2d$right$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$images$2f$homepage$2f$arrow$2d$right$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/images/homepage/arrow-right.png.mjs { IMAGE => "[project]/images/homepage/arrow-right.png (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$arrow$2d$left$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$images$2f$homepage$2f$arrow$2d$left$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/images/homepage/arrow-left.png.mjs { IMAGE => "[project]/images/homepage/arrow-left.png (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$favourite$2d$button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/favourite-button.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function Fold1() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "w-full bg-[#F7FAFF] py-12 md:py-16 lg:py-30",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "absolute left-10 top-1/2 -translate-y-1/2 -translate-x-12 lg:-translate-x-16 bg-white rounded-full shadow-lg p-3 hover:shadow-xl transition-shadow duration-200 cursor-pointer z-10 hidden md:block",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$arrow$2d$left$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$images$2f$homepage$2f$arrow$2d$left$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                            alt: "Previous",
                            width: 24,
                            height: 24,
                            className: "w-6 h-6"
                        }, void 0, false, {
                            fileName: "[project]/components/homepage/fold1.js",
                            lineNumber: 16,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/homepage/fold1.js",
                        lineNumber: 15,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "absolute right-10 top-1/2 -translate-y-1/2 translate-x-12 lg:translate-x-16 bg-white rounded-full shadow-lg p-3 hover:shadow-xl transition-shadow duration-200 cursor-pointer z-10 hidden md:block",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$arrow$2d$right$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$images$2f$homepage$2f$arrow$2d$right$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                            alt: "Next",
                            width: 24,
                            height: 24,
                            className: "w-6 h-6"
                        }, void 0, false, {
                            fileName: "[project]/components/homepage/fold1.js",
                            lineNumber: 26,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/homepage/fold1.js",
                        lineNumber: 25,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center px-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-center lg:justify-end order-2 lg:order-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative w-full max-w-md lg:max-w-lg",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$fold1$2f$fold1image1$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$images$2f$homepage$2f$fold1$2f$fold1image1$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                                        alt: "Flowmaxx Pump",
                                        width: 500,
                                        height: 400,
                                        className: "w-full h-auto object-contain",
                                        priority: true
                                    }, void 0, false, {
                                        fileName: "[project]/components/homepage/fold1.js",
                                        lineNumber: 40,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/homepage/fold1.js",
                                    lineNumber: 39,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/homepage/fold1.js",
                                lineNumber: 38,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "order-1 lg:order-2 text-center lg:text-left",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6",
                                        children: "Flowmaxx"
                                    }, void 0, false, {
                                        fileName: "[project]/components/homepage/fold1.js",
                                        lineNumber: 53,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600 text-base lg:text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0",
                                        children: "Flowmaxx is specifically designed to provide consistent high-pressure water output for residential and industrial use. Its compact and stainless-steel construction makes it corrosion-resistant and ideal for locations such as villas, high-rise buildings, hotels, and commercial spaces."
                                    }, void 0, false, {
                                        fileName: "[project]/components/homepage/fold1.js",
                                        lineNumber: 57,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "bg-[#377DFF] text-white px-6 py-3 rounded-lg font-medium text-base transition-colors duration-300 cursor-pointer flex items-center gap-2 hover:bg-[#e4ebff] hover:text-[#000000]",
                                                children: "$15 - Add to cart"
                                            }, void 0, false, {
                                                fileName: "[project]/components/homepage/fold1.js",
                                                lineNumber: 66,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$favourite$2d$button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                fileName: "[project]/components/homepage/fold1.js",
                                                lineNumber: 70,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/homepage/fold1.js",
                                        lineNumber: 65,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/homepage/fold1.js",
                                lineNumber: 52,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/homepage/fold1.js",
                        lineNumber: 36,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center gap-4 mt-8 md:hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "bg-white rounded-full shadow-lg p-3 hover:shadow-xl transition-shadow duration-200 cursor-pointer",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$arrow$2d$left$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$images$2f$homepage$2f$arrow$2d$left$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                                    alt: "Previous",
                                    width: 20,
                                    height: 20,
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/components/homepage/fold1.js",
                                    lineNumber: 78,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/homepage/fold1.js",
                                lineNumber: 77,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "bg-white rounded-full shadow-lg p-3 hover:shadow-xl transition-shadow duration-200 cursor-pointer",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$arrow$2d$right$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$images$2f$homepage$2f$arrow$2d$right$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                                    alt: "Next",
                                    width: 20,
                                    height: 20,
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/components/homepage/fold1.js",
                                    lineNumber: 88,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/homepage/fold1.js",
                                lineNumber: 87,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/homepage/fold1.js",
                        lineNumber: 76,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/homepage/fold1.js",
                lineNumber: 13,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/homepage/fold1.js",
            lineNumber: 12,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/homepage/fold1.js",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
}}),
"[project]/images/homepage/fold2/fold2image1.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/fold2image1.296766e2.png");}}),
"[project]/images/homepage/fold2/fold2image1.png.mjs { IMAGE => \"[project]/images/homepage/fold2/fold2image1.png (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$fold2$2f$fold2image1$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/images/homepage/fold2/fold2image1.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$fold2$2f$fold2image1$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 134,
    height: 99,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAqklEQVR42l3NPQ/BQADG8ePeeteXNNWmLzSNE7G4YJIWoTETJpvJZKhPYDGK1We0+AISQ69Dlw7/8fk9gNvxljB71IxyZ8zt3gowK8oRNZJmWLOEGq+BZvoZxNyvw9RMnEjeQpE+qe5OgKIkIkYMMfNabUjUYLHZFd/T5fEPRPauhLnihhULEXWYGSzzffE5nu+/aJC+gGZ4U6p3ZnXqIrbc/sHtyisielgCmcAXzZlxQUIAAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 6
};
}}),
"[project]/images/homepage/fold2/fold2image2.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/fold2image2.b4b9150a.png");}}),
"[project]/images/homepage/fold2/fold2image2.png.mjs { IMAGE => \"[project]/images/homepage/fold2/fold2image2.png (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$fold2$2f$fold2image2$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/images/homepage/fold2/fold2image2.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$fold2$2f$fold2image2$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 134,
    height: 100,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAvElEQVR42i1OzQqCQBhc13XXza3d1Aq1KPGnU2EYgSeTiKBbEXQMolsP0WN0Czr1VkHvUOdapYHh+2Dmm29A3Q43zPSXtOHOSjIrWNftaAdVzEEJTHmkIl0gbHR01p4YzX5BuZuriFiVQQoe+AMiIuQlQ4T1SM0cQ1VjlUFRoCano+k8hAiL1iC7psXx1Y3ndyBjEyn4xLBHck9LRtP9c3u4fLPV+Q0UiKj8V3XAVAQy3vHi/Jbkp483XDx+i04W31PEtVUAAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 6
};
}}),
"[project]/images/homepage/fold2/fold2image3.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/fold2image3.03d97321.png");}}),
"[project]/images/homepage/fold2/fold2image3.png.mjs { IMAGE => \"[project]/images/homepage/fold2/fold2image3.png (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$fold2$2f$fold2image3$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/images/homepage/fold2/fold2image3.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$fold2$2f$fold2image3$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 134,
    height: 105,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAnElEQVR42m2NyQrCQBBEZ0t3ZjFkkQSjiQZB4xJPise5xR8V/Abx52zHaxoKuot6XazePz7V1j9lpEs2NYvd+KbAC0x+jHDW/JWsuZAYAqCzA+i0F0IZHiQxipMNeZ2Q4JhCt0RTnNAWZwWmIoaT16CdDzqp74zImPpzBbbinMsQALciaIhdeWP0xtBysVnrfxRV9nRfXd6NNm39F4gqDUdOtgtBAAAAAElFTkSuQmCC",
    blurWidth: 8,
    blurHeight: 6
};
}}),
"[project]/components/homepage/fold2.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Fold2)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$fold2$2f$fold2image1$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$images$2f$homepage$2f$fold2$2f$fold2image1$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/images/homepage/fold2/fold2image1.png.mjs { IMAGE => "[project]/images/homepage/fold2/fold2image1.png (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$fold2$2f$fold2image2$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$images$2f$homepage$2f$fold2$2f$fold2image2$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/images/homepage/fold2/fold2image2.png.mjs { IMAGE => "[project]/images/homepage/fold2/fold2image2.png (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$fold2$2f$fold2image3$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$images$2f$homepage$2f$fold2$2f$fold2image3$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/images/homepage/fold2/fold2image3.png.mjs { IMAGE => "[project]/images/homepage/fold2/fold2image3.png (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
"use client";
;
;
;
;
;
function Fold2() {
    const features = [
        {
            id: 1,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$fold2$2f$fold2image1$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$images$2f$homepage$2f$fold2$2f$fold2image1$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
            title: 'Secure checkout',
            description: 'Guaranteed safe checkout'
        },
        {
            id: 2,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$fold2$2f$fold2image2$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$images$2f$homepage$2f$fold2$2f$fold2image2$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
            title: '30 Days return',
            description: 'We offer you a full refund within 30 days of purchase.'
        },
        {
            id: 3,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$fold2$2f$fold2image3$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$images$2f$homepage$2f$fold2$2f$fold2image3$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
            title: 'Free shipping',
            description: 'Automatically receive free standard shipping on every order.'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "w-full bg-white py-12 md:py-16 lg:py-20 border-b-[1px] border-b-solid border-b-[#21325B1A]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6 lg:gap-8 justify-between",
                children: features.map((feature)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-12 h-12 md:w-14 md:h-14 flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: feature.icon,
                                        alt: feature.title,
                                        width: 56,
                                        height: 56,
                                        className: "w-full h-full object-contain"
                                    }, void 0, false, {
                                        fileName: "[project]/components/homepage/fold2.js",
                                        lineNumber: 42,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/homepage/fold2.js",
                                    lineNumber: 41,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/homepage/fold2.js",
                                lineNumber: 40,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg md:text-[18px] font-semibold text-gray-900 mb-1",
                                        children: feature.title
                                    }, void 0, false, {
                                        fileName: "[project]/components/homepage/fold2.js",
                                        lineNumber: 54,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[14px] md:text-base text-gray-600 leading-relaxed",
                                        children: feature.description
                                    }, void 0, false, {
                                        fileName: "[project]/components/homepage/fold2.js",
                                        lineNumber: 57,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/homepage/fold2.js",
                                lineNumber: 53,
                                columnNumber: 15
                            }, this)
                        ]
                    }, feature.id, true, {
                        fileName: "[project]/components/homepage/fold2.js",
                        lineNumber: 35,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/homepage/fold2.js",
                lineNumber: 33,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/homepage/fold2.js",
            lineNumber: 32,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/homepage/fold2.js",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
}}),
"[project]/components/ui/hover-border-gradient.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "HoverBorderGradient": (()=>HoverBorderGradient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function HoverBorderGradient({ children, containerClassName, className, as: Tag = "button", duration = 1, clockwise = true, ...props }) {
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [direction, setDirection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("TOP");
    const rotateDirection = (currentDirection)=>{
        const directions = [
            "TOP",
            "LEFT",
            "BOTTOM",
            "RIGHT"
        ];
        const currentIndex = directions.indexOf(currentDirection);
        const nextIndex = clockwise ? (currentIndex - 1 + directions.length) % directions.length : (currentIndex + 1) % directions.length;
        return directions[nextIndex];
    };
    const movingMap = {
        TOP: "radial-gradient(20.7% 50% at 50% 0%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
        LEFT: "radial-gradient(16.6% 43.1% at 0% 50%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
        BOTTOM: "radial-gradient(20.7% 50% at 50% 100%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
        RIGHT: "radial-gradient(16.2% 41.199999999999996% at 100% 50%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)"
    };
    const highlight = "radial-gradient(75% 181.15942028985506% at 50% 50%, #3275F8 0%, rgba(255, 255, 255, 0) 100%)";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!hovered) {
            const interval = setInterval(()=>{
                setDirection((prevState)=>rotateDirection(prevState));
            }, duration * 1000);
            return ()=>clearInterval(interval);
        }
    }, [
        hovered
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
        // onMouseEnter={(event: React.MouseEvent<HTMLDivElement>) => {
        onMouseEnter: ()=>{
            setHovered(true);
        },
        onMouseLeave: ()=>setHovered(false),
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative flex rounded-full border  content-center bg-black/20 hover:bg-black/10 transition duration-500 dark:bg-white/20 items-center flex-col flex-nowrap gap-10 h-min justify-center overflow-visible p-px decoration-clone w-fit", containerClassName),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-auto text-white z-10 bg-black px-4 py-2 rounded-[inherit]", className),
                children: children
            }, void 0, false, {
                fileName: "[project]/components/ui/hover-border-gradient.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex-none inset-0 overflow-hidden absolute z-0 rounded-[inherit]"),
                style: {
                    filter: "blur(2px)",
                    position: "absolute",
                    width: "100%",
                    height: "100%"
                },
                initial: {
                    background: movingMap[direction]
                },
                animate: {
                    background: hovered ? [
                        movingMap[direction],
                        highlight
                    ] : movingMap[direction]
                },
                transition: {
                    ease: "linear",
                    duration: duration ?? 1
                }
            }, void 0, false, {
                fileName: "[project]/components/ui/hover-border-gradient.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-black absolute z-1 flex-none inset-[2px] rounded-[100px]"
            }, void 0, false, {
                fileName: "[project]/components/ui/hover-border-gradient.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/hover-border-gradient.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
}}),
"[project]/images/homepage/fold3/fold3image1.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/fold3image1.1ec1faaa.png");}}),
"[project]/images/homepage/fold3/fold3image1.png.mjs { IMAGE => \"[project]/images/homepage/fold3/fold3image1.png (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$fold3$2f$fold3image1$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/images/homepage/fold3/fold3image1.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$fold3$2f$fold3image1$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 1340,
    height: 902,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAk0lEQVR42j2OOw6CQAAF9754BsWWU0BMDImtjRpt1IpYopWfuGt0kQgbEj4m7CiFvuZ1MyOstTTNm+5/S5Inp+OZPDeIsizx/QAlJfpxJ01TomhHGE6Q8oYwxuA4PYaDPqvZlO1mTVVVFEVB21pEU9d4nofrulwvHTYnjmPGo4DDPkZ0Tq01Sql/h/zqlos5WfbiAyOojfQMa9IAAAAAAElFTkSuQmCC",
    blurWidth: 8,
    blurHeight: 5
};
}}),
"[project]/images/homepage/fold3/fold3image2.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/fold3image2.29bbb97a.png");}}),
"[project]/images/homepage/fold3/fold3image2.png.mjs { IMAGE => \"[project]/images/homepage/fold3/fold3image2.png (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$fold3$2f$fold3image2$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/images/homepage/fold3/fold3image2.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$fold3$2f$fold3image2$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 1346,
    height: 886,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAe0lEQVR42jXMuwrCQBCF4bz/26QwjX0akRgEEbUQAlEbd2z2kr387q7mNIcZPk5DjnOO8TBirS0nMUZu1wvBe5ryMFqz63t07pIQAufTEb8sP/ARoWtbRMl/IfF8zBVWIEqx3XTIW1WQUmKe7sQVGGMY9kPtFbzmKS8Fvh3gmINLzZpaAAAAAElFTkSuQmCC",
    blurWidth: 8,
    blurHeight: 5
};
}}),
"[project]/images/homepage/fold3/fold3image3.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/fold3image3.706120fd.png");}}),
"[project]/images/homepage/fold3/fold3image3.png.mjs { IMAGE => \"[project]/images/homepage/fold3/fold3image3.png (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$fold3$2f$fold3image3$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/images/homepage/fold3/fold3image3.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$fold3$2f$fold3image3$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 1338,
    height: 894,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAmElEQVR42h2NuQrCQABE95dFrNXWwsJv8CgEETSSyiYhiIKFeDTZWiPkEJOsMcdz3almmMeMQCtLU27XM8Hj/o8URcFysSAKQ0Rd14TajIYDbGtlgDzP6Xd7SN9HVFVFHEU4W5vL6WiAsixNqTQo3s8Abz6j024xnYxpmkYvZBx2Hl99JT6vBOm5bKw1UkqzoJRi7zrkScwPW22PO0fVzX8AAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 5
};
}}),
"[project]/components/homepage/fold3.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Fold3)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$hover$2d$border$2d$gradient$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/hover-border-gradient.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$fold3$2f$fold3image1$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$images$2f$homepage$2f$fold3$2f$fold3image1$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/images/homepage/fold3/fold3image1.png.mjs { IMAGE => "[project]/images/homepage/fold3/fold3image1.png (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$fold3$2f$fold3image2$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$images$2f$homepage$2f$fold3$2f$fold3image2$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/images/homepage/fold3/fold3image2.png.mjs { IMAGE => "[project]/images/homepage/fold3/fold3image2.png (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$fold3$2f$fold3image3$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$images$2f$homepage$2f$fold3$2f$fold3image3$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/images/homepage/fold3/fold3image3.png.mjs { IMAGE => "[project]/images/homepage/fold3/fold3image3.png (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
"use client";
;
;
;
;
;
;
const AceternityLogo = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "66",
        height: "65",
        viewBox: "0 0 66 65",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: "h-3 w-3 text-black dark:text-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696",
            stroke: "#377DFF",
            strokeWidth: "15",
            strokeMiterlimit: "3.86874",
            strokeLinecap: "round"
        }, void 0, false, {
            fileName: "[project]/components/homepage/fold3.js",
            lineNumber: 20,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/homepage/fold3.js",
        lineNumber: 12,
        columnNumber: 5
    }, this);
};
function Fold3() {
    const categories = [
        {
            id: 1,
            name: 'Zenflow',
            image: __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$fold3$2f$fold3image1$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$images$2f$homepage$2f$fold3$2f$fold3image1$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
            startingPrice: '₹5,366',
            link: '/products/zenflow'
        },
        {
            id: 2,
            name: 'Wellrise',
            image: __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$fold3$2f$fold3image2$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$images$2f$homepage$2f$fold3$2f$fold3image2$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
            startingPrice: '₹8,453',
            link: '/products/wellrise'
        },
        {
            id: 3,
            name: 'Cutmaxx',
            image: __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$fold3$2f$fold3image3$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$images$2f$homepage$2f$fold3$2f$fold3image3$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
            startingPrice: '₹19,845',
            link: '/products/cutmaxx'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "w-full py-12 md:py-16 lg:py-30",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-16 md:mb-24",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-1",
                            children: "The better way to shop with"
                        }, void 0, false, {
                            fileName: "[project]/components/homepage/fold3.js",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900",
                            children: "VR PUMPS"
                        }, void 0, false, {
                            fileName: "[project]/components/homepage/fold3.js",
                            lineNumber: 64,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/homepage/fold3.js",
                    lineNumber: 60,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8",
                    children: categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden cursor-pointer border-[1px] border-solid border-[#21325B1A]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative border-b-[1px] border-b-solid border-b-[#21325B1A] flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: category.image,
                                        alt: `${category.name} products`,
                                        width: 300,
                                        height: 280,
                                        className: "w-full h-full object-contain"
                                    }, void 0, false, {
                                        fileName: "[project]/components/homepage/fold3.js",
                                        lineNumber: 78,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/homepage/fold3.js",
                                    lineNumber: 77,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "px-6 py-10 text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl md:text-2xl font-semibold text-gray-900 mb-2",
                                            children: category.name
                                        }, void 0, false, {
                                            fileName: "[project]/components/homepage/fold3.js",
                                            lineNumber: 89,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-600 mb-4",
                                            children: [
                                                "Starting from ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-medium text-gray-900",
                                                    children: category.startingPrice
                                                }, void 0, false, {
                                                    fileName: "[project]/components/homepage/fold3.js",
                                                    lineNumber: 93,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/homepage/fold3.js",
                                            lineNumber: 92,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$hover$2d$border$2d$gradient$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HoverBorderGradient"], {
                                                containerClassName: "rounded-full",
                                                as: "button",
                                                className: "dark:bg-black bg-white text-[#377DFF] dark:text-white flex items-center space-x-2 cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AceternityLogo, {}, void 0, false, {
                                                        fileName: "[project]/components/homepage/fold3.js",
                                                        lineNumber: 101,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "View all"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/homepage/fold3.js",
                                                        lineNumber: 102,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/homepage/fold3.js",
                                                lineNumber: 96,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/homepage/fold3.js",
                                            lineNumber: 95,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/homepage/fold3.js",
                                    lineNumber: 88,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, category.id, true, {
                            fileName: "[project]/components/homepage/fold3.js",
                            lineNumber: 72,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/homepage/fold3.js",
                    lineNumber: 70,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/homepage/fold3.js",
            lineNumber: 58,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/homepage/fold3.js",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
}}),
"[project]/images/homepage/fold4/fold4image1.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/fold4image1.8f119018.png");}}),
"[project]/images/homepage/fold4/fold4image1.png.mjs { IMAGE => \"[project]/images/homepage/fold4/fold4image1.png (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$fold4$2f$fold4image1$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/images/homepage/fold4/fold4image1.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$fold4$2f$fold4image1$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 468,
    height: 273,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAsElEQVR42gGlAFr/AAAAAAAAAAAAAAAAAAMDAwMUFBUYDQwNESAhJDYkJSo/AAAAAAAAAAAABQUGCSkoLHFOTVe8Y2d2wYiGkuNhYWzHABsaHlJJRUt9cm10sH94f+lHRlP/e32L/7O9y/2Af4rlADE2RuuTjZT5qqKn5YeAhcc7O0XXTkxVu0ZDRm8iISVfACEkLpQ7OT15JSMlMg0MDRMJCQslCQkLIgAAAAAAAAAASHYts64tm9UAAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 5
};
}}),
"[project]/images/homepage/fold4/fold4image2.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/fold4image2.d8ebac81.png");}}),
"[project]/images/homepage/fold4/fold4image2.png.mjs { IMAGE => \"[project]/images/homepage/fold4/fold4image2.png (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$fold4$2f$fold4image2$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/images/homepage/fold4/fold4image2.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$fold4$2f$fold4image2$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 369,
    height: 304,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAA8klEQVR42gHnABj/AAkKCyU8QEq4ExQXMgAAAAAAAAAAAAAAAAEBAQQAAAABAAkKCzIhJCzgJCMncyEeHj0oJyZKKyYmaSgoK5oTFRYvABQUFWQjJSz5RTM99XBUVfNfXVn4X1ZU/Do1Ov4eISiZABUWGrMiJS3/Q0ZT/42Ljv+eoKH/nZ6g/2NmbP8hJS+9ABERFIggIin5OT1I/3Rwb/x8eXb1Z2Ni6jExNM0PEBRTAAUFBiYZGh/RJicuwCooKGMiISFDExMTLgYGBhwAAAABAAAAAQMJCQtDFBYclgECAgsAAAAAAAAAAAAAAAAAAAAAx4A3iEpcSq4AAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 7
};
}}),
"[project]/components/homepage/fold4.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Fold4)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$fold4$2f$fold4image1$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$images$2f$homepage$2f$fold4$2f$fold4image1$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/images/homepage/fold4/fold4image1.png.mjs { IMAGE => "[project]/images/homepage/fold4/fold4image1.png (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$fold4$2f$fold4image2$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$images$2f$homepage$2f$fold4$2f$fold4image2$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/images/homepage/fold4/fold4image2.png.mjs { IMAGE => "[project]/images/homepage/fold4/fold4image2.png (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
"use client";
;
;
;
;
;
function Fold4() {
    // Timer state for countdown
    const [timeLeft, setTimeLeft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        days: 364,
        hours: 23,
        minutes: 59,
        seconds: 59
    });
    // Countdown timer effect (optional - you can remove if not needed)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const timer = setInterval(()=>{
            setTimeLeft((prev)=>{
                if (prev.seconds > 0) {
                    return {
                        ...prev,
                        seconds: prev.seconds - 1
                    };
                } else if (prev.minutes > 0) {
                    return {
                        ...prev,
                        minutes: prev.minutes - 1,
                        seconds: 59
                    };
                } else if (prev.hours > 0) {
                    return {
                        ...prev,
                        hours: prev.hours - 1,
                        minutes: 59,
                        seconds: 59
                    };
                } else if (prev.days > 0) {
                    return {
                        ...prev,
                        days: prev.days - 1,
                        hours: 23,
                        minutes: 59,
                        seconds: 59
                    };
                }
                return prev;
            });
        }, 1000); // Update every minute
        return ()=>clearInterval(timer);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "w-full bg-white py-12 md:py-16 lg:py-20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative bg-[#DCDADB] rounded-2xl overflow-hidden h-[520px] lg:h-[500px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 p-8 md:p-10 lg:p-12 flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-pink-500 text-sm font-medium mb-4",
                                                children: "LIMITED TIME ONLY"
                                            }, void 0, false, {
                                                fileName: "[project]/components/homepage/fold4.js",
                                                lineNumber: 47,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6",
                                                children: "70% OFF"
                                            }, void 0, false, {
                                                fileName: "[project]/components/homepage/fold4.js",
                                                lineNumber: 48,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid sm:grid-cols-4 grid-cols-2 gap-4 mb-8 h-max",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-white rounded-lg px-4 py-2 text-center min-w-[80px]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xl md:text-3xl font-bold text-gray-900",
                                                                children: timeLeft.days
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/homepage/fold4.js",
                                                                lineNumber: 55,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm text-gray-600",
                                                                children: "Days"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/homepage/fold4.js",
                                                                lineNumber: 56,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/homepage/fold4.js",
                                                        lineNumber: 54,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-white rounded-lg px-4 py-2 text-center min-w-[80px]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xl md:text-3xl font-bold text-gray-900",
                                                                children: timeLeft.hours
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/homepage/fold4.js",
                                                                lineNumber: 59,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm text-gray-600",
                                                                children: "Hours"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/homepage/fold4.js",
                                                                lineNumber: 60,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/homepage/fold4.js",
                                                        lineNumber: 58,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-white rounded-lg px-4 py-2 text-center min-w-[80px]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xl md:text-3xl font-bold text-gray-900",
                                                                children: timeLeft.minutes
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/homepage/fold4.js",
                                                                lineNumber: 63,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm text-gray-600",
                                                                children: "Mins"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/homepage/fold4.js",
                                                                lineNumber: 64,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/homepage/fold4.js",
                                                        lineNumber: 62,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-white rounded-lg px-4 py-2 text-center min-w-[80px]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xl md:text-3xl font-bold text-gray-900",
                                                                children: timeLeft.seconds
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/homepage/fold4.js",
                                                                lineNumber: 67,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm text-gray-600",
                                                                children: "Seconds"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/homepage/fold4.js",
                                                                lineNumber: 68,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/homepage/fold4.js",
                                                        lineNumber: 66,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/homepage/fold4.js",
                                                lineNumber: 53,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/homepage/fold4.js",
                                        lineNumber: 46,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 rounded-full font-medium transition-colors duration-200 cursor-pointer",
                                            children: "Shop"
                                        }, void 0, false, {
                                            fileName: "[project]/components/homepage/fold4.js",
                                            lineNumber: 75,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/homepage/fold4.js",
                                        lineNumber: 74,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/homepage/fold4.js",
                                lineNumber: 44,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-5 sm:right-15 right-5 w-[60%] h-[60%]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$fold4$2f$fold4image1$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$images$2f$homepage$2f$fold4$2f$fold4image1$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                                    alt: "Sale Product",
                                    className: "w-full h-full object-contain object-bottom-right"
                                }, void 0, false, {
                                    fileName: "[project]/components/homepage/fold4.js",
                                    lineNumber: 83,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/homepage/fold4.js",
                                lineNumber: 82,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/homepage/fold4.js",
                        lineNumber: 43,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative bg-[#2A2A2A] rounded-2xl overflow-hidden h-[400px] md:h-[450px] lg:h-[500px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 p-8 md:p-10 lg:p-12 flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-4xl md:text-5xl font-bold text-white mb-2",
                                                children: "₹7938"
                                            }, void 0, false, {
                                                fileName: "[project]/components/homepage/fold4.js",
                                                lineNumber: 96,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-3xl md:text-4xl font-bold text-white mb-4",
                                                children: "Aquarise"
                                            }, void 0, false, {
                                                fileName: "[project]/components/homepage/fold4.js",
                                                lineNumber: 99,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-400 text-base md:text-lg max-w-xs",
                                                children: "Where Pressure Meets Precision"
                                            }, void 0, false, {
                                                fileName: "[project]/components/homepage/fold4.js",
                                                lineNumber: 102,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/homepage/fold4.js",
                                        lineNumber: 95,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 rounded-full font-medium transition-colors duration-200 cursor-pointer",
                                            children: "Shop"
                                        }, void 0, false, {
                                            fileName: "[project]/components/homepage/fold4.js",
                                            lineNumber: 109,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/homepage/fold4.js",
                                        lineNumber: 108,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/homepage/fold4.js",
                                lineNumber: 93,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-5 sm:right-15 right-5 w-[55%] h-[55%]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$fold4$2f$fold4image2$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$images$2f$homepage$2f$fold4$2f$fold4image2$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                                    alt: "Aquarise Product",
                                    className: "w-full h-full object-contain object-bottom-right"
                                }, void 0, false, {
                                    fileName: "[project]/components/homepage/fold4.js",
                                    lineNumber: 117,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/homepage/fold4.js",
                                lineNumber: 116,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/homepage/fold4.js",
                        lineNumber: 92,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/homepage/fold4.js",
                lineNumber: 40,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/homepage/fold4.js",
            lineNumber: 39,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/homepage/fold4.js",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
}}),
"[project]/images/homepage/fold5/product1.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/product1.cdfc9e97.png");}}),
"[project]/images/homepage/fold5/product1.png.mjs { IMAGE => \"[project]/images/homepage/fold5/product1.png (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$fold5$2f$product1$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/images/homepage/fold5/product1.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$fold5$2f$product1$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 1135,
    height: 889,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAA0UlEQVR42gHGADn/AOLi4gDW1NImuLSwTsK/vECdmpZl0dDOJ/Pz8wLq6uoAAMLAvjFvbWqqNS8p9Tw2L+2BfnqPg355kqajoGve3dwbAFZSTMkoYHf9Hm6P/yJNXv88OTL0OTMr/TUwKfZVUUu8AE5OSsEkc5f0HpHC+CNbcf42MCn/PTky/zYwJ/yGgn1/ANLS0h20xMxPstbnTYumsXs8OjTmMzAq+TgzK+24trRDANzc3ADv7+8A7e3tApmYll9ubGmXq6qoXZaUkWnY2NgN+tFmdmlsGVkAAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 6
};
}}),
"[project]/images/homepage/fold5/product2.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/product2.98f29976.png");}}),
"[project]/images/homepage/fold5/product2.png.mjs { IMAGE => \"[project]/images/homepage/fold5/product2.png (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$fold5$2f$product2$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/images/homepage/fold5/product2.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$fold5$2f$product2$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 485,
    height: 682,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAAvUlEQVR42kXPPQuCUBSA4as/qKlJsC2C9paWCCvzA5OMGhqjtORCEAQtQjUlSRANJng1sJCGKGeb/CN5HewMZzgP73AAkU6JpnseQsUkSQCEEJAkCfAiBJbRfeQqcfwtGIbxh6EsaM7lZEXvF5MCkcNA4qYPdD0EvqvxHFfDtwzajfrcOR/Nu2vvpW5rSeIEw0jm9NCzrdB3dmKnCfNCEVn1E97M6Bls+3xWZAAoipIX6kzfrFeTaqU8xi/8ANPuRq1a5kCGAAAAAElFTkSuQmCC",
    blurWidth: 6,
    blurHeight: 8
};
}}),
"[project]/images/homepage/fold5/product3.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/product3.93368d5d.png");}}),
"[project]/images/homepage/fold5/product3.png.mjs { IMAGE => \"[project]/images/homepage/fold5/product3.png (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$fold5$2f$product3$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/images/homepage/fold5/product3.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$fold5$2f$product3$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 731,
    height: 891,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAA80lEQVR42gHoABf/AJmUmZ6Kh46v6+rqIv///wD///8A////APb29gAAvre6ycC4u+bv7u8p9vb3EPj4+Qz6+voG4uLiHQDLxcLGy8a/5O/t7i2gnp6Vt7a2cejn5i6WkI2/ALy0ttHAt7fo6+rrMcvGwazc2NR99PLwNMi+t9kAkomN9JqQk/fU0dNVsKunusK+u5Hv7es1uK6n2QC4rq/4x76/+dnV1WaqpKDXubWxt+rm5ECtoJfhALWpqvnEurv529fXZtnTzNff2dK57uvpPsCzqOEAenR73Xp0e+jV09VEnZqZta+tq5Xs6egwqp+Wywj4oJ4MH1o0AAAAAElFTkSuQmCC",
    blurWidth: 7,
    blurHeight: 8
};
}}),
"[project]/images/homepage/fold5/product4.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/product4.6f1de0c9.png");}}),
"[project]/images/homepage/fold5/product4.png.mjs { IMAGE => \"[project]/images/homepage/fold5/product4.png (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$fold5$2f$product4$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/images/homepage/fold5/product4.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$fold5$2f$product4$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 1131,
    height: 885,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAA0UlEQVR42gHGADn/AKusroaGhITSZWVn9Kurq4/4+PgM8vHxFvz8/Ab///8AAJucnaNkZ2z3Vlpg/3Fzd9CgoKCJipKasJ2el53c3dpAAPb29xGho6erV1xj/2RoavyHh4T1i5SY/YWGf/90dnfYAP39/QSfoKOhSEtP/0ZISf/Fw7v/x8W7/3p5c/9WWFnzAP7+/gK2trl9aWtw6mNmaPXKysb+ysnD/5mZleasra2GAP///wD09PQU39/fONfY12bx8e3Z8PDrxfT18276+fkOXht/UhLSMSYAAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 6
};
}}),
"[project]/images/homepage/fold5/product5.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/product5.4d6c2844.png");}}),
"[project]/images/homepage/fold5/product5.png.mjs { IMAGE => \"[project]/images/homepage/fold5/product5.png (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$fold5$2f$product5$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/images/homepage/fold5/product5.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$fold5$2f$product5$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 4000,
    height: 3000,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAA0UlEQVR42gHGADn/AP7+/gDm5eQD09XUKtHU0y/Pz80z6+zpDvT39AD09vQAAP38/AC1u7wsUniHzVBvd+FHWV/khpORsMvVzyrn7+oAAPz8/AKTpa56LmqF8iNvjv8vdpL/TH6R+pmjmXDRyrgJAP38/AChsLZoOoKi+SVnhvg8eZj5jKKoka+mkhvFsZMJAP39/QDOzswSkqavZnmUomuEprmAucHCGufl4QD08OoAAP///wD8/PwA+/v6APn6+gH5+voD+/v7AP7+/gD///8Axol6JN9VsuEAAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 6
};
}}),
"[project]/images/homepage/fold5/product6.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/product6.082cdec5.png");}}),
"[project]/images/homepage/fold5/product6.png.mjs { IMAGE => \"[project]/images/homepage/fold5/product6.png (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$fold5$2f$product6$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/images/homepage/fold5/product6.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$fold5$2f$product6$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 1186,
    height: 879,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAA0UlEQVR42gHGADn/AP7+/gDV1dY9lpaZnPf39wv5+fgR2djXScjHxlj29vYMANfW1jucmZiZUE9Q4LKwrp3QycLAtKyj73dybvCxsbNpAJ6dnXs+PD38Kikq/09NTf+5r6T/xrqu/46Fff2VlJWIAMzMzDw5ODrqISAi/zk4Ov2lnJLttq2j1ZWSjarf398mAPb29gqHhoeOQkFF6VhXWs3g3tw87+/uHPHx8RH+/v4AAP7+/gD09PQMvLy8TWhpa63m5uYc////AP///wD+/v4AA7p5kW+/dL0AAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 6
};
}}),
"[project]/images/homepage/fold5/product7.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/product7.d0813508.png");}}),
"[project]/images/homepage/fold5/product7.png.mjs { IMAGE => \"[project]/images/homepage/fold5/product7.png (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$fold5$2f$product7$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/images/homepage/fold5/product7.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$fold5$2f$product7$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 4096,
    height: 2731,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAjklEQVR42m2OTQqCQABGZ6YZtSkKisk/DEkIgvZhJ6iodOFCdKF4AwUv4t6TeAZP4B3ElWsFQRF82+/B+wAYgMKaMoQQBkv0Az3r10yVlJciSw+RnWyeF8RRIIQz9Mut8v5OnSZx47l+e2RyNAorjDVVM8r3x6qiMChM85n3yfusQun2u9sffhwhGwinLx1dFBLvzZVMHAAAAABJRU5ErkJggg==",
    blurWidth: 8,
    blurHeight: 5
};
}}),
"[project]/images/homepage/fold5/product8.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/product8.5a623df4.png");}}),
"[project]/images/homepage/fold5/product8.png.mjs { IMAGE => \"[project]/images/homepage/fold5/product8.png (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$fold5$2f$product8$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/images/homepage/fold5/product8.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$fold5$2f$product8$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 815,
    height: 544,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAhUlEQVR42mXKvQqDMBiF4Q/p0nbqHfXnAkqXQseO3kFRqpMRcVVHdRQU3TOLoKuio7cQMaCZIg6ZMhw4vDzAOYd967KC7wUv42+qXdsqooM4lFIFWcjRNT1p6vogAzKd3Z+WuTbKq7I8SWAm5Ki+P8Xjeh/jMHpKgDEGGONbmmbfoR8uom+Tj2r3ZeI53gAAAABJRU5ErkJggg==",
    blurWidth: 8,
    blurHeight: 5
};
}}),
"[project]/images/homepage/fold5/product9.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/product9.368d21d3.png");}}),
"[project]/images/homepage/fold5/product9.png.mjs { IMAGE => \"[project]/images/homepage/fold5/product9.png (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$fold5$2f$product9$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/images/homepage/fold5/product9.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$fold5$2f$product9$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 401,
    height: 334,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAA8klEQVR42gHnABj/ADc3NwA3NzgWMjIzKD4+PgI/Pz8APz8/AD8/PwAnJycAANDQ0FmpqaqlaWpswt/f4Bfu7u4A5+foE9ra2i6RkZEDANnY2Ma9vL3oTk9R3snJyGrj4d9s0c7Ls6akodGBgYItANnY2JOWlZb/Kywu/1xbXPvCvLb9zcbB/7awrPxaWlpuANzb22fW1NP2TExM/zg5O/+kn5v8v7iz7Layr9B4eHg9AN3d3Q/DwsOORkZI+05PUdzU0tBr7e3sNOfn5ySbm5sBAMzMzADS0tIbamtsmF1eXqTPz88e6OjoAOjo6ACPj48AhCl+BLaPUxEAAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 7
};
}}),
"[project]/images/homepage/fold5/product10.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/product10.bcf6e8a5.png");}}),
"[project]/images/homepage/fold5/product10.png.mjs { IMAGE => \"[project]/images/homepage/fold5/product10.png (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$fold5$2f$product10$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/images/homepage/fold5/product10.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$fold5$2f$product10$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 908,
    height: 1547,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAYAAAAx8TU7AAAAs0lEQVR42gGoAFf/APz8/APn5+cb2tjXL9zZ2ETh390tAO/v7xTu7u4UvLi0YGtlYM2alI6MAOnp6Rr08/MPoJuZoVROSf99enfBAOno6Br29vYN2tbSmb+2rf/Cvbe5AOfn5xz29vYM1NDMncO5r//Evri2AMa2tlXm4OAmqaall1ZSTv6IhYKvALspK+m4gYGNXFlZ2jIwLvVNS0nbANqWlnDjy8s4ioiIira1tVTMzMw5AuBmmoa8/P0AAAAASUVORK5CYII=",
    blurWidth: 5,
    blurHeight: 8
};
}}),
"[project]/images/homepage/fold5/product11.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/product11.3ad766df.png");}}),
"[project]/images/homepage/fold5/product11.png.mjs { IMAGE => \"[project]/images/homepage/fold5/product11.png (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$fold5$2f$product11$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/images/homepage/fold5/product11.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$fold5$2f$product11$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 961,
    height: 612,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAsElEQVR42gGlAFr/AP///wD///8A+/v8CfT19Rr19vYc9fX1J9na3F3LzdBVAPr6+xPz8/QiuLzBhJGUmNGVmJzPvb2+4K6vr/aBhYjdAISMlMJ3fYTgmZ2h9UNLU/8/R03/qamq/6yrq/+Ag4bxAD9LV/E3QUn+oaSn90tSWPI8REnsqKinv728u4+RlJeRAKqvs2h7gYWd0NHTW8bIykaWmp125ebnIf7+/gLo6eoZ2sloaX8eoHMAAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 5
};
}}),
"[project]/images/homepage/fold5/product12.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/product12.3352465f.png");}}),
"[project]/images/homepage/fold5/product12.png.mjs { IMAGE => \"[project]/images/homepage/fold5/product12.png (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$fold5$2f$product12$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/images/homepage/fold5/product12.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$fold5$2f$product12$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 1140,
    height: 881,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAA0UlEQVR42gHGADn/APX29wzi5uss2ODkMYahrZeUq7WIn7a/o6XE0dvU2twoAI+st4pRd4njXI2e30h/kvo7Z3f+VXWB52uVpN/Hz9IvAEqElvE5aXr/QHKE/0d5iv9JfI//XJSn/0yAk/uZqrJsAEFqeeQyXWz/PG1+/0Jzhf9UjqH/bai7/1WNoP+pusK5AMDHy0VxhIqkO25/+UJwgfc+bH3yRoOY/1F8jOnGztJiAP7+/gC+0NVLYJGhzXaap7OjuL90bJShuKK5wm/n6OkGw/d1mVjVT7UAAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 6
};
}}),
"[project]/images/homepage/fold5/product13.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/product13.704a0980.png");}}),
"[project]/images/homepage/fold5/product13.png.mjs { IMAGE => \"[project]/images/homepage/fold5/product13.png (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$fold5$2f$product13$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/images/homepage/fold5/product13.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$fold5$2f$product13$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 3216,
    height: 2136,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAsElEQVR42gGlAFr/AAQCAQCCMy0AvVdMAKNiVR9nX1SdaFxTrYlCOiYSCAcAAAUEBAGZgX4d3cC4QqGJgZ45NjH5ODQu/FZIQZkQDg0JAAMDAwRCQT2bXVxT83Z2Z/4wMCv+JCQf9ElIRaUODg4MAAQEAwRSUk2SQkI89VlXTvo1NTH0aGdhk6yrphkVFRUAAAMDAwBGRUEYPj44Ui4tK2QvLy5iZGNiImdnZgIMDAsA6uYvqoWE2dYAAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 5
};
}}),
"[project]/images/homepage/fold5/product14.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/product14.67bdd5af.png");}}),
"[project]/images/homepage/fold5/product14.png.mjs { IMAGE => \"[project]/images/homepage/fold5/product14.png (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$fold5$2f$product14$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/images/homepage/fold5/product14.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$fold5$2f$product14$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 1263,
    height: 816,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAsElEQVR42gGlAFr/AO7u7gD9/f0A/f39APn6+g/7/PwH/Pz8Btrc3kTZ295HAO/v7wb7/PwK0tLVVcLDx5PQ0dSI0NDTqaenrOGGiZC2AJyfp4mQlJy2kZKY4VFUW/9sbnb/t7a4/7Cws/9ydXvuADlATuMvNUD/jY6T/1NWXf9WWWHwt7e5zb6+wKaQkpaYAHB0fZJITFPNpaapjnJzdqaWmJt17u3uF/Pz8wXl5uYP73FnfDMzMf8AAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 5
};
}}),
"[project]/images/homepage/fold5/product15.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/product15.bcf6e8a5.png");}}),
"[project]/images/homepage/fold5/product15.png.mjs { IMAGE => \"[project]/images/homepage/fold5/product15.png (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$fold5$2f$product15$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/images/homepage/fold5/product15.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$fold5$2f$product15$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 908,
    height: 1547,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAYAAAAx8TU7AAAAs0lEQVR42gGoAFf/APz8/APn5+cb2tjXL9zZ2ETh390tAO/v7xTu7u4UvLi0YGtlYM2alI6MAOnp6Rr08/MPoJuZoVROSf99enfBAOno6Br29vYN2tbSmb+2rf/Cvbe5AOfn5xz29vYM1NDMncO5r//Evri2AMa2tlXm4OAmqaall1ZSTv6IhYKvALspK+m4gYGNXFlZ2jIwLvVNS0nbANqWlnDjy8s4ioiIira1tVTMzMw5AuBmmoa8/P0AAAAASUVORK5CYII=",
    blurWidth: 5,
    blurHeight: 8
};
}}),
"[project]/components/homepage/fold5.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Fold5)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$interactive$2d$hover$2d$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/interactive-hover-button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$favourite$2d$button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/favourite-button.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$fold5$2f$product1$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$images$2f$homepage$2f$fold5$2f$product1$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/images/homepage/fold5/product1.png.mjs { IMAGE => "[project]/images/homepage/fold5/product1.png (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$fold5$2f$product2$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$images$2f$homepage$2f$fold5$2f$product2$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/images/homepage/fold5/product2.png.mjs { IMAGE => "[project]/images/homepage/fold5/product2.png (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$fold5$2f$product3$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$images$2f$homepage$2f$fold5$2f$product3$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/images/homepage/fold5/product3.png.mjs { IMAGE => "[project]/images/homepage/fold5/product3.png (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$fold5$2f$product4$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$images$2f$homepage$2f$fold5$2f$product4$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/images/homepage/fold5/product4.png.mjs { IMAGE => "[project]/images/homepage/fold5/product4.png (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$fold5$2f$product5$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$images$2f$homepage$2f$fold5$2f$product5$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/images/homepage/fold5/product5.png.mjs { IMAGE => "[project]/images/homepage/fold5/product5.png (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$fold5$2f$product6$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$images$2f$homepage$2f$fold5$2f$product6$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/images/homepage/fold5/product6.png.mjs { IMAGE => "[project]/images/homepage/fold5/product6.png (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$fold5$2f$product7$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$images$2f$homepage$2f$fold5$2f$product7$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/images/homepage/fold5/product7.png.mjs { IMAGE => "[project]/images/homepage/fold5/product7.png (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$fold5$2f$product8$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$images$2f$homepage$2f$fold5$2f$product8$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/images/homepage/fold5/product8.png.mjs { IMAGE => "[project]/images/homepage/fold5/product8.png (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$fold5$2f$product9$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$images$2f$homepage$2f$fold5$2f$product9$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/images/homepage/fold5/product9.png.mjs { IMAGE => "[project]/images/homepage/fold5/product9.png (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$fold5$2f$product10$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$images$2f$homepage$2f$fold5$2f$product10$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/images/homepage/fold5/product10.png.mjs { IMAGE => "[project]/images/homepage/fold5/product10.png (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$fold5$2f$product11$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$images$2f$homepage$2f$fold5$2f$product11$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/images/homepage/fold5/product11.png.mjs { IMAGE => "[project]/images/homepage/fold5/product11.png (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$fold5$2f$product12$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$images$2f$homepage$2f$fold5$2f$product12$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/images/homepage/fold5/product12.png.mjs { IMAGE => "[project]/images/homepage/fold5/product12.png (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$fold5$2f$product13$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$images$2f$homepage$2f$fold5$2f$product13$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/images/homepage/fold5/product13.png.mjs { IMAGE => "[project]/images/homepage/fold5/product13.png (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$fold5$2f$product14$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$images$2f$homepage$2f$fold5$2f$product14$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/images/homepage/fold5/product14.png.mjs { IMAGE => "[project]/images/homepage/fold5/product14.png (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$fold5$2f$product15$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$images$2f$homepage$2f$fold5$2f$product15$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/images/homepage/fold5/product15.png.mjs { IMAGE => "[project]/images/homepage/fold5/product15.png (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function Fold5() {
    const [showAll, setShowAll] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const products = [
        {
            id: 1,
            name: 'Shallopro',
            image: __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$fold5$2f$product1$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$images$2f$homepage$2f$fold5$2f$product1$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
            description: 'Optimized For Shallow Well Lifting',
            price: '₹5,880',
            rating: 0,
            reviews: 0
        },
        {
            id: 2,
            name: 'Deepflow',
            image: __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$fold5$2f$product2$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$images$2f$homepage$2f$fold5$2f$product2$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
            description: 'Deep Bore Works Across All Use Cases',
            price: '₹11,319',
            rating: 4,
            reviews: 40
        },
        {
            id: 3,
            name: 'Wellrise',
            image: __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$fold5$2f$product3$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$images$2f$homepage$2f$fold5$2f$product3$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
            description: 'Rise Water Steadily From Deep Wells',
            price: '₹8,453',
            rating: 4,
            reviews: 125
        },
        {
            id: 4,
            name: 'Primemate',
            image: __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$fold5$2f$product4$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$images$2f$homepage$2f$fold5$2f$product4$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
            description: 'Friendly And Helpful Tone Self-Priming Support',
            price: '₹3,234',
            rating: 5,
            reviews: 9
        },
        {
            id: 5,
            name: 'Suctionpro',
            image: __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$fold5$2f$product5$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$images$2f$homepage$2f$fold5$2f$product5$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
            description: 'Driven By Power Defined By Suction',
            price: '₹4,778',
            rating: 0,
            reviews: 0
        },
        {
            id: 6,
            name: 'Megaflow',
            image: __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$fold5$2f$product6$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$images$2f$homepage$2f$fold5$2f$product6$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
            description: 'High Discharge Potential Highlighted',
            price: '₹7,203',
            rating: 4,
            reviews: 40
        },
        {
            id: 7,
            name: 'Aquarise',
            image: __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$fold5$2f$product7$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$images$2f$homepage$2f$fold5$2f$product7$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
            description: 'Where Pressure Meets Precision',
            price: '₹7,938',
            rating: 4,
            reviews: 125
        },
        {
            id: 8,
            name: 'Drainforce',
            image: __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$fold5$2f$product8$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$images$2f$homepage$2f$fold5$2f$product8$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
            description: 'One Solution For Every Application',
            price: '₹6,000',
            rating: 5,
            reviews: 9
        },
        {
            id: 9,
            name: 'Zenflow',
            image: __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$fold5$2f$product9$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$images$2f$homepage$2f$fold5$2f$product9$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
            description: 'Silent. Strength. Everyday',
            price: '₹5,366',
            rating: 0,
            reviews: 0
        },
        {
            id: 10,
            name: 'Cutmaxx',
            image: __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$fold5$2f$product10$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$images$2f$homepage$2f$fold5$2f$product10$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
            description: 'Engineered To Cut Built To Perform',
            price: '₹19,845',
            rating: 4,
            reviews: 40
        },
        {
            id: 11,
            name: 'Stagepro',
            image: __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$fold5$2f$product11$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$images$2f$homepage$2f$fold5$2f$product11$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
            description: 'Clean Flow, Precise Performance',
            price: '₹8,967',
            rating: 4,
            reviews: 125
        },
        {
            id: 12,
            name: 'Flowmaster',
            image: __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$fold5$2f$product12$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$images$2f$homepage$2f$fold5$2f$product12$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
            description: 'Delivering Steadily High Volume',
            price: '₹4,079',
            rating: 5,
            reviews: 9
        },
        {
            id: 13,
            name: 'Flowmaxx',
            image: __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$fold5$2f$product13$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$images$2f$homepage$2f$fold5$2f$product13$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
            description: 'Pumpup Your Waterflow',
            price: '₹8,269',
            rating: 0,
            reviews: 0
        },
        {
            id: 14,
            name: 'Aquaglow',
            image: __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$fold5$2f$product14$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$images$2f$homepage$2f$fold5$2f$product14$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
            description: 'Visual Brilliance, Elegance In Every Drop',
            price: '₹5,366',
            rating: 4,
            reviews: 40
        },
        {
            id: 15,
            name: 'Sludgepro',
            image: __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$homepage$2f$fold5$2f$product15$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$images$2f$homepage$2f$fold5$2f$product15$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
            description: 'Handles The Heavy, Tackles The Tough',
            price: '₹14,553',
            rating: 4,
            reviews: 125
        }
    ];
    const displayedProducts = showAll ? products : products.slice(0, 8);
    const renderStars = (rating)=>{
        return Array.from({
            length: 5
        }, (_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `text-2xl ${index < rating ? 'text-[#e9bc14]' : 'text-gray-300'}`,
                children: "★"
            }, index, false, {
                fileName: "[project]/components/homepage/fold5.js",
                lineNumber: 169,
                columnNumber: 7
            }, this));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "w-full py-12 py-16",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-3xl md:text-4xl font-bold text-gray-900 text-center mb-18",
                    children: "What's trending"
                }, void 0, false, {
                    fileName: "[project]/components/homepage/fold5.js",
                    lineNumber: 179,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",
                    children: displayedProducts.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-4 right-4 z-10",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$favourite$2d$button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                fileName: "[project]/components/homepage/fold5.js",
                                                lineNumber: 193,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/homepage/fold5.js",
                                            lineNumber: 192,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "aspect-square bg-gray-50 p-6 flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                src: product.image,
                                                alt: product.name,
                                                width: 200,
                                                height: 200,
                                                className: "w-full h-full object-contain"
                                            }, void 0, false, {
                                                fileName: "[project]/components/homepage/fold5.js",
                                                lineNumber: 198,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/homepage/fold5.js",
                                            lineNumber: 197,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/homepage/fold5.js",
                                    lineNumber: 191,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "px-4 py-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-md font-bold text-black mb-1",
                                            children: product.name
                                        }, void 0, false, {
                                            fileName: "[project]/components/homepage/fold5.js",
                                            lineNumber: 210,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-700 mb-3 min-h-[40px]",
                                            children: product.description
                                        }, void 0, false, {
                                            fileName: "[project]/components/homepage/fold5.js",
                                            lineNumber: 213,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-lg font-bold text-gray-900 mb-2",
                                            children: product.price
                                        }, void 0, false, {
                                            fileName: "[project]/components/homepage/fold5.js",
                                            lineNumber: 216,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex",
                                                    children: renderStars(product.rating)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/homepage/fold5.js",
                                                    lineNumber: 222,
                                                    columnNumber: 19
                                                }, this),
                                                product.reviews >= 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm text-blue-600",
                                                    children: product.reviews
                                                }, void 0, false, {
                                                    fileName: "[project]/components/homepage/fold5.js",
                                                    lineNumber: 226,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/homepage/fold5.js",
                                            lineNumber: 221,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$interactive$2d$hover$2d$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InteractiveHoverButton"], {
                                            text: "Add to cart",
                                            className: "w-50"
                                        }, void 0, false, {
                                            fileName: "[project]/components/homepage/fold5.js",
                                            lineNumber: 231,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/homepage/fold5.js",
                                    lineNumber: 209,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, product.id, true, {
                            fileName: "[project]/components/homepage/fold5.js",
                            lineNumber: 186,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/homepage/fold5.js",
                    lineNumber: 184,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mt-12",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setShowAll(!showAll),
                        className: "hover:bg-[#377DFF] hover:text-white px-6 py-3 font-medium text-base transition-colors duration-300 cursor-pointer mx-auto gap-2 bg-[#fafbff] font-semibold text-[#377DFF] p-3 rounded-full border-[#21325B1A] border-solid border-[1.5px]",
                        children: showAll ? 'Show less' : 'View all products'
                    }, void 0, false, {
                        fileName: "[project]/components/homepage/fold5.js",
                        lineNumber: 239,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/homepage/fold5.js",
                    lineNumber: 238,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/homepage/fold5.js",
            lineNumber: 177,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/homepage/fold5.js",
        lineNumber: 176,
        columnNumber: 5
    }, this);
}
}}),
"[project]/images/logo-white.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/logo-white.e52d1339.png");}}),
"[project]/images/logo-white.png.mjs { IMAGE => \"[project]/images/logo-white.png (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$logo$2d$white$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/images/logo-white.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$logo$2d$white$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 225,
    height: 94,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAY0lEQVR42i2LsQqAIBQAXymt/kNj7hoEoSCJEOhg4qD0FS4Ofntv6LaDOwCEMbbUWs9SiqGUzvBDCJlACLGFEFRKSfXeX++9jjFeGN84GeCcr845iYHMOR+tNT/GeNC1tXb/AI28Fy0hDRChAAAAAElFTkSuQmCC",
    blurWidth: 8,
    blurHeight: 3
};
}}),
"[project]/images/whatsapp.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/whatsapp.f5d534cb.svg");}}),
"[project]/images/whatsapp.svg.mjs { IMAGE => \"[project]/images/whatsapp.svg (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$whatsapp$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/images/whatsapp.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$whatsapp$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 19,
    height: 19,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
}}),
"[project]/images/facebook.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/facebook.daacff40.svg");}}),
"[project]/images/facebook.svg.mjs { IMAGE => \"[project]/images/facebook.svg (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$facebook$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/images/facebook.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$facebook$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 20,
    height: 19,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
}}),
"[project]/components/footer.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Footer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$logo$2d$white$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$images$2f$logo$2d$white$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/images/logo-white.png.mjs { IMAGE => "[project]/images/logo-white.png (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$whatsapp$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$images$2f$whatsapp$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/images/whatsapp.svg.mjs { IMAGE => "[project]/images/whatsapp.svg (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$facebook$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$images$2f$facebook$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/images/facebook.svg.mjs { IMAGE => "[project]/images/facebook.svg (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
"use client";
;
;
;
;
;
;
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "w-full bg-[#377DFF] text-white font-medium",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mb-10 md:mb-18",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-center mb-15",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$logo$2d$white$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$images$2f$logo$2d$white$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                                        alt: "VR PUMPS",
                                        width: 200,
                                        height: 80,
                                        className: "h-16 md:h-20 w-auto"
                                    }, void 0, false, {
                                        fileName: "[project]/components/footer.js",
                                        lineNumber: 17,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/footer.js",
                                    lineNumber: 16,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm md:text-base max-w-5xl mx-auto leading-relaxed",
                                    children: "VR PUMPS Is A Specialized Manufacturer Of Different Varieties Of Pumps, Integrating Research & Development, Engineering & Advanced Robotic Manufacturing To Maintain Stringent Quality Control."
                                }, void 0, false, {
                                    fileName: "[project]/components/footer.js",
                                    lineNumber: 25,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/footer.js",
                            lineNumber: 15,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 lg:grid-cols-3 mb-12 md:mb-16",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center sm:text-left border border-[#E6E9EB4D] px-16 py-10 flex items-center sm:justify-start justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm md:text-base leading-relaxed",
                                        children: [
                                            "No. 26, Mahalakshmi Gardens,",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/components/footer.js",
                                                lineNumber: 36,
                                                columnNumber: 45
                                            }, this),
                                            "Thottipalayam Road,",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/components/footer.js",
                                                lineNumber: 37,
                                                columnNumber: 36
                                            }, this),
                                            "Chinniyampalayam,",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/components/footer.js",
                                                lineNumber: 38,
                                                columnNumber: 34
                                            }, this),
                                            "Coimbatore - 641 062. Tamilnadu,",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/components/footer.js",
                                                lineNumber: 39,
                                                columnNumber: 49
                                            }, this),
                                            "INDIA."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/footer.js",
                                        lineNumber: 35,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/footer.js",
                                    lineNumber: 34,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center border border-[#E6E9EB4D] px-16 py-10 flex items-center lg:justify-center sm:justify-start justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "mailto:Vrpumps@Yahoo.in",
                                        className: "text-sm md:text-base hover:underline transition-all duration-200 cursor-pointer",
                                        children: "vrpumps@Yahoo.in"
                                    }, void 0, false, {
                                        fileName: "[project]/components/footer.js",
                                        lineNumber: 46,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/footer.js",
                                    lineNumber: 45,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center border border-[#E6E9EB4D] md:text-right px-16 py-10 flex items-center lg:justify-center sm:justify-start justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "tel:+919715177222",
                                                className: "block text-sm md:text-base hover:underline transition-all duration-200 cursor-pointer mb-1",
                                                children: "+91 97151 77222"
                                            }, void 0, false, {
                                                fileName: "[project]/components/footer.js",
                                                lineNumber: 57,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "tel:+919952537222",
                                                className: "block text-sm md:text-base hover:underline transition-all duration-200 cursor-pointer",
                                                children: "+91 99525 37222"
                                            }, void 0, false, {
                                                fileName: "[project]/components/footer.js",
                                                lineNumber: 63,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/footer.js",
                                        lineNumber: 56,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/footer.js",
                                    lineNumber: 55,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/footer.js",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/footer.js",
                    lineNumber: 13,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/footer.js",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-[#E6E9EB4D] bg-[#377DFF] w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 lg:pb-10 pb-20 flex flex-col md:flex-row justify-between items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm mb-4 md:mb-0 font-semibold text-[#ffffff]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                fileName: "[project]/components/footer.js",
                                lineNumber: 79,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/footer.js",
                            lineNumber: 78,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "#",
                                    className: "p-2 rounded-full transition-colors duration-200 cursor-pointer",
                                    "aria-label": "WhatsApp",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$whatsapp$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$images$2f$whatsapp$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                                        alt: "WhatsApp",
                                        width: 24,
                                        height: 24,
                                        className: "w-6 h-6"
                                    }, void 0, false, {
                                        fileName: "[project]/components/footer.js",
                                        lineNumber: 89,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/footer.js",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "#",
                                    className: "p-2 rounded-full transition-colors duration-200 cursor-pointer",
                                    "aria-label": "Facebook",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: __TURBOPACK__imported__module__$5b$project$5d2f$images$2f$facebook$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$images$2f$facebook$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                                        alt: "Facebook",
                                        width: 24,
                                        height: 24,
                                        className: "w-6 h-6"
                                    }, void 0, false, {
                                        fileName: "[project]/components/footer.js",
                                        lineNumber: 102,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/footer.js",
                                    lineNumber: 97,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/footer.js",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/footer.js",
                    lineNumber: 76,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/footer.js",
                lineNumber: 74,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__d56b0bc9._.js.map