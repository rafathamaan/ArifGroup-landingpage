const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./mdx-components.tsx",
		"content/**/*.mdx",
	],

	theme: {
		extend: {
			typography: {
				DEFAULT: {
					css: {
						"code::before": {
							content: '""',
						},
						"code::after": {
							content: '""',
						},
					},
				},
				quoteless: {
					css: {
						"blockquote p:first-of-type::before": { content: "none" },
						"blockquote p:first-of-type::after": { content: "none" },
					},
				},
			},
			fontFamily: {
				sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
				display: ["var(--font-calsans)"],
			},
			backgroundImage: {
				"gradient-radial":
					"radial-gradient(50% 50% at 50% 50%, var(--tw-gradient-stops))",
			},
			animation: {
				"fade-in": "fade-in 3s ease-in-out forwards",
				title: "title 3s ease-out forwards",
				"fade-left": "fade-left 3s ease-in-out forwards",
				"fade-right": "fade-right 3s ease-in-out forwards",
			},
			keyframes: {
				"fade-in": {
					"0%": {
						opacity: "0%",
					},
					"75%": {
						opacity: "0%",
					},
					"100%": {
						opacity: "100%",
					},
				},
				"fade-left": {
					"0%": {
						transform: "translateX(100%) translateY(-13.3rem) ",
						opacity: "0%",
					},

					"30%": {
						transform: "translateX(0%) translateY(-13.3rem) ",
						opacity: "100%",
					},
					"100%": {
						transform: " translateY(-20rem) ",
						opacity: "0%",
					},
				},
				"fade-right": {
					"0%": {
						transform: "translateX(-100%) translateY(-15.8rem) ",
						opacity: "0%",
					},

					"30%": {
						transform: "translateX(0%) translateY(-15.8rem)",
						opacity: "100%",
					},
					"100%": {
						transform: " translateY(-10rem)",
						opacity: "0%",
					},
				},
				title: {
					"0%": {
						"line-height": "0%",
						transform: "translateY(-14.8rem) scale(0.5)",
						"letter-spacing": "0.25em",
						opacity: "0",
					},
					"25%": {
						"line-height": "0%",
						transform: "translateY(-14.8rem) scale(0.5)",
						opacity: "0%",
					},
					"80%": {
						opacity: "100%",
						transform: "translateY(-14.8rem) scale(1.9)",
					},

					"100%": {
						"line-height": 
						"100%",
						transform: "translateY(-42.5rem) scale(1)",
						opacity: "100%",
					},
				},
			},
		},
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("tailwindcss-debug-screens"),
	],
};
