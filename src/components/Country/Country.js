import React from 'react';

const Country = (props) => {
    const {name, capital, population, region, flag} = props.country;
    const flagStyle = {height: '50px'}
    const countryStyle = {border: '2px solid red', margin: '20px', padding: '10px'}
    const handleAddCountry = props.handleAddCountry;
    return (
        <div style = {countryStyle}>
            <h2>This is {name}</h2>
            <img style={flagStyle} src={flag} alt=""/>
            <h3>Capital: {capital}</h3>
            <p>Population: {population}</p>
            <p><small>Region: {region}</small></p>
            <button onClick = {()=> handleAddCountry(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;