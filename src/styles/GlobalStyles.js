import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {
  /* Indigo */
  --color-brand-50: #eef2ff;
  --color-brand-100: #e0e7ff;
  --color-brand-200: #c7d2fe;
  --color-brand-500: #6366f1;
  --color-brand-600: #4f46e5;
  --color-brand-700: #4338ca;
  --color-brand-800: #3730a3;
  --color-brand-900: #312e81;

  /* Grey */
  --color-grey-0: #fff;
  --color-grey-50: #f9fafb;
  --color-grey-100: #f3f4f6;
  --color-grey-200: #e5e7eb;
  --color-grey-300: #d1d5db;
  --color-grey-400: #9ca3af;
  --color-grey-500: #6b7280;
  --color-grey-600: #4b5563;
  --color-grey-700: #374151;
  --color-grey-800: #1f2937;
  --color-grey-900: #111827;

  --color-blue-100: #e0f2fe;
  --color-blue-700: #0369a1;
  --color-green-100: #dcfce7;
  --color-green-700: #15803d;
  --color-yellow-100: #fef9c3;
  --color-yellow-700: #a16207;
  --color-silver-100: #e5e7eb;
  --color-silver-700: #374151;
  --color-indigo-100: #e0e7ff;
  --color-indigo-700: #4338ca;

  --color-red-100: #fee2e2;
  --color-red-700: #b91c1c;
  --color-red-800: #991b1b;

  --backdrop-color: rgba(255, 255, 255, 0.1);

  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);

  --border-radius-tiny: 3px;
  --border-radius-sm: 5px;
  --border-radius-md: 8px;
  --border-radius-lg: 10px;

  /* For dark mode */
  --image-grayscale: 0;
  --image-opacity: 100%;

  /* Breakpoints 'as a guide' */
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 991px;
  --breakpoint-xl: 1280px;

  /* Project Variables */

  /* Padding and Margins */
  --container-lg-pd: 4rem;
  --container-md-pd: 2rem;
  --container-sm-pd: 1.2rem;
  --section-lg-pt: 12rem;
  --section-pb: 4.4rem;
  --btn-lg-pd: 1.4rem 3rem;
  --btn-sm-pd: 0.8rem 2rem;
  --section-row-gap: 4.8rem;
  --section-col-gap: 1.6rem;

  /* Heights */
  --header-h-lg: 7.8rem;
  --header-h-sm: 7.6rem;

  /* Colors */
  --primary-green: #1C4A2A;

  /* Backgrounds-colors */
  --bg-beige: #C6B09A;
  --bg-gray: #464C48;
  --bg-ligt-gray: #f5f5f5;
  --bg-card: #f8fcf9;
  
  /* Colors */
  --color-green: #0e2515;
  --color-muted: #8c8c8c;
  --color-light-white: rgba(255, 255, 255, 70%);

  /* Border-colors */
  --border-color: #e0e8e0;
  --footer-border-color: #DEDEDE;

}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  border: none;
  outline: none;

  /* Creating animations for dark mode */
  transition: background-color 0.3s, border 0.3s;
}

html {
  font-size: 62.5%;
}

body {
  font-family: "Montserrat", sans-serif;
  transition: color 0.3s, background-color 0.3s;
  line-height: 1.5;
  font-size: 1.6rem;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}



button {
  border: none;
  outline: none;
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-grey-200);
  color: var(--color-grey-500);
}

/* Parent selector, finally 😃 */
button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}

img {
  max-width: 100%;

  /* For dark mode */
  filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
}
`;

export default GlobalStyles;
