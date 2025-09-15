import path from "node:path";
import { fileURLToPath } from "node:url";
import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import { defineConfig } from "eslint/config";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all,
});

export default defineConfig([
	{
		extends: fixupConfigRules(
			compat.extends(
				"eslint:recommended",
				"plugin:@typescript-eslint/recommended",
				"plugin:@typescript-eslint/recommended-requiring-type-checking",
				"plugin:import/recommended",
				"plugin:import/typescript",
				"prettier",
			),
		),

		plugins: {
			"@typescript-eslint": fixupPluginRules(typescriptEslint),
		},

		languageOptions: {
			parser: tsParser,
			ecmaVersion: 2020,
			sourceType: "module",

			parserOptions: {
				project: ["./tsconfig.json"],
			},
		},

		settings: {
			"import/parsers": {
				"@typescript-eslint/parser": [".ts"],
			},

			"import/resolver": {
				typescript: {
					alwaysTryTypes: true,
					project: "./tsconfig.json",
				},
			},
		},

		rules: {
			"@typescript-eslint/ban-ts-comment": [
				"error",
				{
					"ts-ignore": "allow-with-description",
				},
			],

			"@typescript-eslint/explicit-module-boundary-types": "off",
			"@typescript-eslint/no-explicit-any": "off",
			"@typescript-eslint/no-unsafe-assignment": "off",
			"@typescript-eslint/no-unsafe-call": "off",
			"@typescript-eslint/no-unsafe-member-access": "warn",

			"@typescript-eslint/no-unused-vars": [
				"error",
				{
					argsIgnorePattern: "^_",
					ignoreRestSiblings: true,
				},
			],

			"@typescript-eslint/require-await": "warn",
			"@typescript-eslint/restrict-template-expressions": "off",
			"@typescript-eslint/unbound-method": "warn",
			"import/default": "off",

			"import/order": [
				"error",
				{
					groups: [
						["builtin", "external"],
						"internal",
						["parent", "sibling", "index"],
					],
					"newlines-between": "always",

					alphabetize: {
						order: "asc",
						caseInsensitive: true,
					},
				},
			],
		},
	},
]);
