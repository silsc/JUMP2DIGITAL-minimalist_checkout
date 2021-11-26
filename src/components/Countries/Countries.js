import React, { useState, useEffect } from 'react'

const url = "https://restcountries.com/v3.1/all"

export const Countries = () => {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch(url)
      const countries = await response.json()
      setCountries(countries)
    }
    fetchCountries()
  }, [])

  return (
    <>
    {countries.map((country) => {
      const {name, common} = country
      return (
        <option selected={name.common === "United States" ? "selected" : ""} value={name.common}>{name.common}</option>
      )
    })}
    </>
  )
}
