# Style-Guide

These are the rules that must be upheld when designing the appearance of a component and the general application. This is to ensure that the entire application maintains solid stylistic consistency.

## 1 General Rules

### 1.1 Tailwind & MUI only

We are using MUI as the library for the appearance of the application, and Tailwind CSS as the design framework. That means;

- Only use MUI-elements, do **not** use raw HTML-elements, unless MUI is denying you functionality or style and there is no work around.

### 1.2 Stay within the color palette

Do not choose random colors when designing the page. Try sticking to the given colors in the table below.

| Type        | Name                             | RGB-Value (0...255) |
|-------------|----------------------------------|---------------------|
| Primary     | "Purple"                         | (107, 49, 227)      |
| Secondary   | "Yellow-Green"                   | (208, 255, 95)      |
| Tertiary    | "White-Cream"                    | (253, 247, 231)     |
| Quaternary  | "Brown"                          | (80, 60, 60)        |
| Undertitle  | "Gray"                           | (74, 74, 74)        |
| Black       | "Black"                          | (0, 0, 0)           |

### 1.3 Use the correct font

All text visible to the user must use the following fonts:
 - "**Unbounded**" font from Google, for headers and large welcome texts.
 - "**IBM Plex Sans**" font from Google, for all the other text.

### 1.4 The user speaks English

All text visible to the user must be written in English (logically).

This includes any text elements, errors or other kinds of notifications visible to the user.

Also ensure grammatical correctness in all user-visible text.

## 2 General Site Layout

For the general site Layout, refer to the figma-board.