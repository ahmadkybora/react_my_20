import React from 'react';

export const ImgStyle = {}

export const Form = () => {}

export const Input = ({ type, name, className, id=null, value=null, onChange=null, placeholder=null, style=null }) => {
    return (
        <input 
            type={type}
            name={name}
            defaultValue={value} 
            className={className}
            id={id}
            placeholder={placeholder}
            onChange={onChange}
            style={style}
        />
    )
}

export const Button = ({ type, name, value, className=null, id=null, style=null }) => {
    return (
        <button
            type={type}
            name={name}
            className={className}
            id={id}
            style={style}
        >
            {value}
        </button>
    )
}

export const Select = ({ name, key, value, className, id, style=null }) => {
    return (
        <select 
            name={name} 
            className={className} 
            id={id}
            style={style}
        >
            <option key={key}>{value}</option>
        </select>
    )
}

export const TextArea = ({ name, value, className=null, id=null, style=null }) => {
    return (
        <textArea 
            name={name} 
            className={className} 
            id={id} 
            style={style}
        >
            {value}
        </textArea>
    )
}

export const Label = ({ htmlFor, value, style=null }) => {
    return (
        <label 
            htmlFor={htmlFor} 
            style={style}
        >
            {value}
        </label>
    )
}

export const Table = () => {}

export const THead = () => {}

export const TBody = () => {}

export const Th = ({ className, value, style=null }) => {
    return (
        <th 
            className={className} 
            style={style}
        >
            {value}
        </th>
    )
}

export const Td = ({ className, value, style=null }) => {
    return (
        <td 
        className={className} 
        style={style}
        >
            {value}
        </td>
    )
}

export const Tr = ({ className, value, style=null }) => {
    return (
        <tr 
            className={className} 
            style={style}
        >
            {value}
        </tr>
    )
}

export const Img = ({ width, height, className, value, style=null }) => {
    return (
        <img 
            width={width} 
            height={height} 
            className={className} 
            src={value} 
            style={style} 
        />
    )
}

export const Card = ({ styleCard, img, width, height, title, text, linkReadMore, linkBuy, style=[] }) => {
    return (
        <div className="card mb-3" style={styleCard}>
            <div className='row g-0'>
                <div className='col-md-4'>
                    <img src={img} width={width} height={height} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className='col-md-8'>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{text}</p>

                        <a href={linkReadMore}>
                            <I className="fa fa-leaf btn btn-primary" />
                        </a>

                        <a href={linkBuy}>
                            <I className="fa fa-shopping-cart btn btn-success" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const I = ({ className, style=null }) => {
    return (
        <i 
            className={className} 
            style={style} 
            ariaHidden="true"
        >
        </i>
    )
}

export const Search = ({ onSubmit, type, name, className, id, value, placeholder, style }) => {
    return (
        <div className='flex justify-center'>
            <form onSubmit={onSubmit}>
                <div className="input-group relative flex flex-wrap items-stretch w-full mb-4">
                    <div className="">
                        <Input 
                            type={type} 
                            name={name} 
                            className={className} 
                            id={id} 
                            value={value} 
                            placeholder={placeholder} 
                            style={style}
                        />
                    </div>
                    <button 
                        className="bg-green-500 border rounded w-9">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                </div>
            </form>
        </div>
    );
}

export const H = ({ type, value, className=null, style=null }) => {
    switch (type) {
        case "1":
            return (
                <h1 className={className} style={style}>{value}</h1>
            )
        case "2":
            return (
                <h2 className={className} style={style}>{value}</h2>
            )
        case "3":
            return (
                <h3 className={className} style={style}>{value}</h3>
            )
        case "4":
            return (
                <h4 className={className} style={style}>{value}</h4>
            )
        case "5":
            return (
                <h5 className={className} style={style}>{value}</h5>
            )
        case "6":
            return (
                <h6 className={className} style={style}>{value}</h6>
            )
        default:
            return (
                <h1></h1>
            )
    }
}
