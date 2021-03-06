/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { hidden } from "../styles/utils"

const icons = {
  triangle: {
    shape: (
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 287.87 288">
            <defs>
                <style>.cls-1{`fill:#f27423;`}</style>
            </defs>
            <title>Icons</title>
            <path className="cls-1"
                  d="M157.46,103.12c-3.57-4.57-6.94-8.89-6.94-12.28v-50a2.18,2.18,0,0,0-2.18-2.18H130.88a2.18,2.18,0,0,0-2.18,2.18v50c0,3.38-3.37,7.69-6.93,12.26-4.74,6.08-10.11,13-10.11,20.75V233.57c0,4.43,3,11,9.32,11h37.27c6.37,0,9.34-6.55,9.34-11V123.85C167.58,116.06,162.2,109.18,157.46,103.12Zm-32.26,2.67c4-5.18,7.86-10.07,7.86-14.95V43h13.09V90.84c0,4.89,3.83,9.78,7.88,15,4.52,5.79,9.19,11.76,9.19,18v10.32H116V123.85C116,117.56,120.68,111.58,125.2,105.79ZM116,206V139.12h47.21V206H116Zm42.24,34.13H121c-3.46,0-5-4.38-5-6.62V211h47.21v22.58C163.22,235.8,161.72,240.18,158.24,240.18Z"/>
        </svg>
    ),
    viewBox: `0 0 30 30`,
  },
  circle: {
    shape: (
        <svg id="Layer_1" height="512" viewBox="0 0 128 128" width="512" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="m96.478 41.942-2.11-7.11a1.8 1.8 0 0 0 -.061-.17l-7.63-25.662a1.749 1.749 0 0 0 -1.677-1.25h-42a1.75 1.75 0 0 0 -1.677 1.25l-9.8 32.939c-2.572 8.629.181 18.14 6.694 23.13a57.166 57.166 0 0 0 24.033 10.363v33.6l-12.8 7.986a1.75 1.75 0 0 0 .926 3.235h27.25a1.75 1.75 0 0 0 .926-3.235l-12.8-7.986v-33.6a57.166 57.166 0 0 0 24.031-10.362c6.517-4.99 9.266-14.501 6.695-23.128zm-52.173-30.692h39.39l6.5 21.848a54.9 54.9 0 0 0 -24.209 2.23c-11.891 3.68-21.3-.49-27.361-4.972zm12.181 105.5 7.514-4.687 7.514 4.688zm31.171-54.46a54.187 54.187 0 0 1 -23.657 9.933 54.185 54.185 0 0 1 -23.656-9.932c-5.3-4.06-7.6-12.2-5.467-19.351l2.687-9.031a33.773 33.773 0 0 0 19.324 6.346 34.119 34.119 0 0 0 10.128-1.582 50.318 50.318 0 0 1 24.3-1.813l1.8 6.081c2.138 7.151-.16 15.289-5.459 19.349z"/></svg>    ),
    viewBox: `0 0 1012 1012`,
  },
  arrowUp: {
    shape: (
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.48 283.61" >
            <defs>
                <style>.cls-1{`fill:#83282f;`}.cls-2{`fill:#5d883c;`}.cls-3{`fill:#78652d;`}</style>
            </defs>
            <title>Icons</title>
            <circle className="cls-1" cx="87.15" cy="161.33" r="4.32" transform="translate(-0.43 0.24) rotate(-0.15)"/>
            <circle className="cls-1" cx="87.27" cy="208.09" r="4.32" transform="translate(-0.56 0.24) rotate(-0.15)"/>
            <circle className="cls-1" cx="199.53" cy="161.03" r="4.32" transform="matrix(1, 0, 0, 1, -0.43, 0.54)"/>
            <circle className="cls-1" cx="199.66" cy="207.79" r="4.32" transform="translate(-0.56 0.54) rotate(-0.15)"/>
            <path className="cls-2"
                  d="M75.65,127.32h2.42V122c0-5.33,4-10.51,7.89-15.51,3.57-4.59,6.94-8.93,6.92-13.35L92.76,51.76l10.53,0,0.11,41.35c0,4.43,3.41,8.75,7,13.33,3.92,5,8,10.13,8,15.46l0,15.58h4.93l0-15.58c0-5.33,4-10.51,7.89-15.51,3.57-4.59,6.94-8.93,6.92-13.35L138,51.63l10.53,0L148.65,93c0,4.43,3.41,8.75,7,13.33,3.91,5,8,10.13,8,15.46l0,15.58h4.77l0-15.58c0-5.33,4-10.51,7.89-15.51,3.57-4.59,6.94-8.93,6.92-13.35L183.1,51.51l10.53,0,0.11,41.35c0,4.43,3.41,8.75,7,13.33,3.91,5,8,10.13,8,15.46V127h2.35a7,7,0,0,1,2.37.43l0-5.77c0-7-4.78-13-9-18.36-3.08-3.92-6-7.63-6-10.42l-0.12-43.71A2.35,2.35,0,0,0,196,46.77l-15.24,0a2.35,2.35,0,0,0-2.35,2.36l0.12,43.71c0,2.79-2.88,6.51-5.93,10.45a61.87,61.87,0,0,0-6.57,9.74,61.34,61.34,0,0,0-6.63-9.7c-3.08-3.92-6-7.63-6-10.42l-0.12-43.71a2.35,2.35,0,0,0-2.36-2.35l-15.25,0a2.35,2.35,0,0,0-2.35,2.36L133.41,93c0,2.79-2.88,6.51-5.93,10.45a60.61,60.61,0,0,0-6.65,9.9,60.62,60.62,0,0,0-6.71-9.85c-3.08-3.92-6-7.63-6-10.42L108,49.36A2.35,2.35,0,0,0,105.64,47l-15.24,0A2.35,2.35,0,0,0,88,49.41l0.12,43.71c0,2.79-2.88,6.51-5.93,10.45-4.17,5.38-8.9,11.46-8.88,18.42l0,5.75A6.9,6.9,0,0,1,75.65,127.32Z"/>
            <path className="cls-3"
                  d="M221.54,180.17a2.36,2.36,0,0,0,2.35-2.37l-0.09-33.57a2.36,2.36,0,0,0-2.37-2.35l-7.95,0,0-7.88a2.36,2.36,0,0,0-2.37-2.35l-26,.07a2.36,2.36,0,0,0-2.35,2.37l0,7.88L104,142.2l0-7.88a2.36,2.36,0,0,0-2.37-2.35l-26,.07a2.36,2.36,0,0,0-2.35,2.37l0,7.88-8,0A2.36,2.36,0,0,0,63,144.67l0.09,33.57a2.36,2.36,0,0,0,2.37,2.36l8,0,0,8.89-8,0a2.36,2.36,0,0,0-2.35,2.36l0.09,33.57a2.35,2.35,0,0,0,2.37,2.35l8,0,0,6.75a2.36,2.36,0,0,0,2.37,2.35l26-.07a2.36,2.36,0,0,0,2.35-2.36l0-6.75,78.77-.21,0,6.75a2.36,2.36,0,0,0,2.36,2.35l26-.07a2.36,2.36,0,0,0,2.35-2.36l0-6.75,7.95,0A2.36,2.36,0,0,0,224,225l-0.09-33.57a2.36,2.36,0,0,0-2.37-2.35l-7.95,0,0-8.89Zm-34-43.72,21.26-.06v5.52l-21.26.06v-5.52ZM78,136.74l21.26-.06v5.52l-21.26.06v-5.52ZM67.75,147l8,0,26-.07,83.49-.23,26-.07,8,0,0.08,28.86-8,0-26,.07-83.49.23-26,.07-8,0Zm36.4,42.37,0-8.89,78.77-.21,0,8.89Zm-26-8.82,21.26-.06,0,8.89-21.26.06Zm21.4,51.52-21.26.06v-4.39l21.26-.06v4.39Zm109.47-.3-21.26.06v-4.39l21.26-.06v4.39Zm10.28-9.14-8,0-26,.07-83.49.23-26,.07-8,0-0.08-28.86,8,0,26-.07,83.49-.23,26-.07,8,0ZM208.9,189.1l-21.26.06,0-8.89,21.26-.06Z"/>
        </svg>
    ),
    viewBox: `0 0 30 30`,
  },
  upDown: {
    shape: (
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.48 283.61">
            <defs>
                <style>.cls-1,.cls-3{`fill:#78652d;`}.cls-2{`fill:#5d883c;`}.cls-3{`stroke:#fff;stroke-miterlimit:10;stroke-width:1.16px;`}</style>
            </defs>
            <title>Icons</title>
            <path className="cls-1"
                  d="M135.55,76.72l-0.07-1a4.31,4.31,0,1,1,8.56-.61l0.07,1,3.91-.23-0.07-1A8.22,8.22,0,1,0,131.56,76l0.08,1.05Z"/>
            <path className="cls-2"
                  d="M143.08,117.59a381.19,381.19,0,0,1-50.14.58,6.46,6.46,0,0,1-6.13-5,89.47,89.47,0,0,1-1.47-20.5,6.46,6.46,0,0,1,5.36-5.81,382,382,0,0,1,49.71-6.58,381.94,381.94,0,0,1,50.14-.58,6.46,6.46,0,0,1,6.13,5,89.95,89.95,0,0,1,1.47,20.51,6.46,6.46,0,0,1-5.36,5.81A381.28,381.28,0,0,1,143.08,117.59Zm-2.39-33.4a378.37,378.37,0,0,0-49.17,6.5,2.63,2.63,0,0,0-2.26,2.15,86.11,86.11,0,0,0,1.41,19.61,2.63,2.63,0,0,0,2.54,1.8,377.94,377.94,0,0,0,49.6-.57A378,378,0,0,0,192,107.17a2.63,2.63,0,0,0,2.26-2.14,86.24,86.24,0,0,0-1.41-19.62,2.63,2.63,0,0,0-2.54-1.8A378.33,378.33,0,0,0,140.68,84.19Z"/>
            <path className="cls-1"
                  d="M151.94,130.47l-0.69-9.61-3.91.33,0.78,10.92C149.35,131.56,150.62,131,151.94,130.47Z"/>
            <path className="cls-1"
                  d="M139.8,136.08l-1-14.28-3.91.23L136,138.16C137.21,137.47,138.45,136.78,139.8,136.08Z"/>
            <path className="cls-3"
                  d="M133.76,160.55a78,78,0,0,1,8.49-5c-7.52-.32-9.9-1.41-10.55-1.85,1.36-3,13.93-10.19,27.64-15.68a2.94,2.94,0,1,0-2.18-5.46c-27.23,10.89-32.08,18.11-31.36,22.25C126.37,158.05,129.59,159.69,133.76,160.55Z"/>
            <path className="cls-3"
                  d="M135,178.42a77.59,77.59,0,0,1,8.49-5c-7.52-.33-9.9-1.42-10.55-1.85,1.36-3,13.93-10.2,27.64-15.68a2.94,2.94,0,1,0-2.18-5.46c-27.23,10.89-32.08,18.11-31.36,22.25C127.65,175.92,130.87,177.56,135,178.42Z"/>
            <path className="cls-3"
                  d="M136.4,196.3a78.21,78.21,0,0,1,8.47-5c-7.57-.33-10-1.42-10.6-1.85,1.36-3,13.93-10.19,27.64-15.68a2.94,2.94,0,1,0-2.18-5.46c-27.23,10.89-32.08,18.11-31.36,22.26C128.93,193.81,132.18,195.45,136.4,196.3Z"/>
            <path className="cls-3"
                  d="M152.32,223.6h-0.19a2.94,2.94,0,0,1-3-2.92c0-4-2.31-5.7-8.14-6.06-0.43,0-.77-0.05-1-0.08-2.68-.36-9.79-1.31-10.41-6.39-1-7.83,19.25-17.15,31.39-22a2.94,2.94,0,1,1,2.18,5.46c-13.7,5.49-26.28,12.64-27.64,15.67,0.47,0.31,1.82,1,5.26,1.43l0.59,0c11.22,0.7,13.62,6.85,13.66,11.88A2.94,2.94,0,0,1,152.32,223.6Z"/>
        </svg>

    ),
    viewBox: `0 0 30 44.58`,
  },
  box: {
    shape: (
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.48 283.61">
            <defs>
                <style>.cls-1,.cls-2{`fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:4.25px;`}.cls-1{`stroke:#5c883b;`}.cls-2{`stroke:#594099;`}</style>
            </defs>
            <title>Icons</title>
            <path className="cls-1" d="M106.64,103S96.87,68.58,67.71,74.34c-24.85,4.92-14.08,34.41,5,28.68"/>
            <path className="cls-1"
                  d="M105,112.85L96.7,102.2,90.9,121,68.54,117l4.14,13.11L52.8,135l13.25,16.39L55.28,162l19.88,7.37-3.31,16.39s31.47,0.82,38.1-18"/>
            <path className="cls-2" d="M141.42,100.56s5.8,4.92,4.14,9a25.17,25.17,0,0,1-5,7.37"/>
            <ellipse className="cls-2" cx="173.72" cy="102.2" rx="15.74" ry="15.57"/>
            <ellipse className="cls-2" cx="161.3" cy="133.34" rx="15.74" ry="15.57"/>
            <ellipse className="cls-2" cx="129.83" cy="147.27" rx="15.74" ry="15.57"/>
            <ellipse className="cls-2" cx="154.67" cy="166.11" rx="15.74" ry="15.57"/>
            <ellipse className="cls-2" cx="185.32" cy="157.92" rx="15.74" ry="15.57"/>
            <ellipse className="cls-2" cx="213.89" cy="155.05" rx="12.84" ry="12.7"/>
            <ellipse className="cls-2" cx="178.28" cy="185.37" rx="12.84" ry="12.7"/>
            <ellipse className="cls-2" cx="203.96" cy="180.45" rx="12.84" ry="12.7"/>
            <ellipse className="cls-2" cx="232.12" cy="173.9" rx="12.84" ry="12.7"/>
            <ellipse className="cls-2" cx="196.09" cy="128.42" rx="15.74" ry="15.57"/>
            <ellipse className="cls-2" cx="133.97" cy="108.76" rx="20.71" ry="20.48"/>
        </svg>    ),
    viewBox: `0 0 30 30`,
  },
  hexa: {
    shape: (
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.48 283.61">
            <defs>
                <style>.cls-1,.cls-2{`fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:4.25px;`}.cls-1{`stroke:#5c883b;`}.cls-2{`stroke:#de1f26;`}</style>
            </defs>
            <title>Icons</title>
            <path className="cls-1"
                  d="M149.37,102.89S137.77,75,126.18,72.57s-38.1-2.46-38.1-2.46,7.45,25.4,21.53,32S149.37,102.89,149.37,102.89Z"/>
            <line className="cls-1" x1="103.81" y1="79.13" x2="149.37" y2="102.89"/>
            <line className="cls-1" x1="107.96" y1="89.78" x2="121.21" y2="88.96"/>
            <line className="cls-1" x1="126.18" y1="79.95" x2="132.8" y2="94.69"/>
            <path className="cls-1" d="M151.85,95.51L151,116s-38.1,7.37-39.76,44.25"/>
            <path className="cls-1" d="M151,116s41.41,8.19,41.41,44.25"/>
            <path className="cls-2"
                  d="M105.77,213.5s-26-7.37-26-31.14,23.19-31.14,31.47-16.39h0c8.28-14.75,31.47-7.37,31.47,16.39s-26,31.14-26,31.14H105.77Z"/>
            <path className="cls-2" d="M127,165.16s9.94,4.1,6.63,22.94"/>
            <path className="cls-2"
                  d="M186.94,213.5s-26-7.37-26-31.14,23.19-31.14,31.47-16.39h0c8.28-14.75,31.47-7.37,31.47,16.39s-26,31.14-26,31.14H186.94Z"/>
            <path className="cls-2" d="M208.17,165.16s9.94,4.1,6.63,22.94"/>
        </svg>
    ),
    viewBox: `0 0 30 30`,
  },
  cross: {
    shape: (
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.48 283.61">
            <defs>
                <style>.cls-1,.cls-2{`fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:4.25px;`}.cls-1{`stroke:#5c883b;`}.cls-2{`stroke:#9ec334;`}</style>
            </defs>
            <title>Icons</title>
            <path className="cls-1" d="M156.27,82.18s-22.36,13.11-12.42,34.41"/>
            <path className="cls-2"
                  d="M176.15,162.47s0.83-43.43-29-42.61-31.47,43.43-31.47,43.43S89.18,168.21,95,196.89s34.79,37.69,48.87,30.32c0,0,40.7,11,49.7-23.76C201.82,171.49,180.29,162.47,176.15,162.47Z"/>
            <path className="cls-1"
                  d="M79.24,60.87s22.36-8.19,43.9,4.92,21.53,28.68,21.53,28.68-28.16,4.1-38.1-.82A53.55,53.55,0,0,1,79.24,60.87Z"/>
            <line className="cls-1" x1="95.81" y1="70.71" x2="138.05" y2="92.01"/>
            <path className="cls-1" d="M117.34,70.71c2.48,2.46,9.11,15.57,9.11,15.57s-20.71-9.83-25.68-4.92"/>
            <path className="cls-2" d="M157.93,137.07a41.1,41.1,0,0,1,4.14,25.4"/>
        </svg>
    ),
    viewBox: `0 0 100 100`,
  },
}

type IconType = "triangle" | "circle" | "arrowUp" | "upDown" | "box" | "hexa" | "cross"

type SVGProps = {
  stroke?: boolean
  color?: string | number | any
  width: number
  icon: IconType
  left: string
  top: string
  hiddenMobile?: boolean
}

const SVG = ({ stroke = false, color = ``, width, icon, left, top, hiddenMobile = false }: SVGProps) => (
  <svg
    sx={{
      position: `absolute`,
      stroke: stroke ? `currentColor` : `none`,
      fill: stroke ? `none` : `currentColor`,
      display: hiddenMobile ? hidden : `block`,
      color,
      width,
      left,
      top,
    }}
    viewBox={icons[icon].viewBox}
  >
    {icons[icon].shape}
  </svg>
)

export default SVG
