import PropTypes from 'prop-types'

export function Input ({label, ...rest}) {
    return (
        <div className='mb-3'>
            {label && <label className="form-label" htmlFor={rest.id}>{label}</label>}
            <input type="text" className="form-control" {...rest} />
        </div>
    )
}

Input.propTypes = {
    label: PropTypes.string,
}