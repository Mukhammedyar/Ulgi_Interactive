import React from 'react'

export default function LoginIcon({width, height, className}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} className={className} viewBox="0 0 24 24" style={{fill: "rgba(255, 255, 255, 1)",}}>
        <path d="m10.998 16 5-4-5-4v3h-9v2h9z"></path>
        <path d="M12.999 2.999a8.938 8.938 0 0 0-6.364 2.637L8.049 7.05c1.322-1.322 3.08-2.051 4.95-2.051s3.628.729 4.95 2.051S20 10.13 20 12s-.729 3.628-2.051 4.95-3.08 2.051-4.95 2.051-3.628-.729-4.95-2.051l-1.414 1.414c1.699 1.7 3.959 2.637 6.364 2.637s4.665-.937 6.364-2.637C21.063 16.665 22 14.405 22 12s-.937-4.665-2.637-6.364a8.938 8.938 0 0 0-6.364-2.637z"></path>
    </svg>
  )
}

export function MenuIcon({className}) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} width={"30"} height="30" viewBox="0 0 24 24" style={{fill: "#ECEEFF"}}>
            <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z">
            </path>
        </svg>
    )
}
export function RightIcon({className, width, height}) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} className={className} viewBox="0 0 24 24" style={{fill: "rgba(1, 1, 1, 1)",}}>
        <path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z">
        </path>
      </svg>
    )
}
export function SearchIcon({className, width, height}) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className={className} width={width} height={height} viewBox="0 0 24 24" style={{fill: "rgba(0, 0, 0, 1)"}}>
        <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z">
        </path>
      </svg>
    )
}
export function PhoneIcon({width, height}) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width={height} height={width} viewBox="0 0 24 24" style={{fill: "rgba(0, 0, 0, 1)"}}>
        <path d="m20.487 17.14-4.065-3.696a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a.997.997 0 0 0-.085-1.39z">
        </path>
      </svg>
    )
}
export function CancelIcon({width, height, className, onClick}) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" onClick={onClick} className={className} width={height} height={width} viewBox="0 0 24 24" style={{fill: "rgba(0, 0, 0, 1)"}}>
        <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z">
        </path>
      </svg>
    )
}
