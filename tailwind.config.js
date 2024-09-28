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
				sans: ["Monserrat,Poppins,var(--font-inter)", ...defaultTheme.fontFamily.sans],
				display: ["Monserrat,Poppins,var(--font-calsans)"],
			},
			backgroundImage: {
				"gradient-radial":
					"radial-gradient(50% 50% at 50% 50%, var(--tw-gradient-stops))",
			},
			animation: {
				"fade-in": "fade-in 3s ease-in-out forwards",
				title: "title 3s ease-in-out forwards",
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
						transform: "translateX(100%) translateY(1.9vh) ",
						opacity: "0%",
						
					},

					"30%": {
						transform: "translateX(0%) translateY(1.9vh) ",
						opacity: "100%",
					},
					"100%": {
						transform: " translateY(-27vh) ",
						opacity: "0%",
					},
				},
				
				"fade-right": {
					"0%": {
						transform: "translateX(-100%) translateY(1.9vh) ",
						opacity: "0%",
					},

					"30%": {
						transform: "translateX(0%) translateY(1.9vh)",
						opacity: "100%",
					},
					"100%": {
						transform: " translateY(39vh)",
						opacity: "0%",
					},
				},
				title: {
					
					"0%": {
						"line-height": "0%",
						transform: "translateY(45vh) scale(0.2)",
						"letter-spacing": "1.5rem",
						opacity: "0",
					},
					"25%": {
						"line-height": "0%",
						transform: "translateY(45vh) scale(0.2)",
						opacity: "0%",
					},
					"80%": {
						opacity: "100%",
						transform: "translateY(45vh) scale(1.5)",

					},

					"100%": {
						"line-height": 
						"100%",
						transform: " translateY(0vh) scale(1)",
						opacity: "100%",
						"letter-spacing": "0rem",

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
