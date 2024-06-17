import PropTypes from 'prop-types';

export const CounterApp = ({variable}) => {
    return(
        <>
            <h1>CounterApp</h1>
            <h2>{variable}</h2>
        </>
    )
}

CounterApp.propTypes={
    variable:PropTypes.number,
}