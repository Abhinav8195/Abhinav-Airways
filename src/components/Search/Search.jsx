// src/components/Search.jsx
import React, { useEffect, useState } from 'react';
import { HiOutlineLocationMarker } from "react-icons/hi";
import { RxCalendar } from "react-icons/rx";
import Aos from 'aos';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import { useNavigate } from 'react-router-dom';
import 'aos/dist/aos.css';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const Search = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [tripType, setTripType] = useState('one-way');
  const [openDate, setOpenDate] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const navigate = useNavigate();

  const handleDateChange = (ranges) => {
    const { selection } = ranges;
    setStartDate(selection.startDate);
    setEndDate(selection.endDate);
  };

  const handleSearch = () => {
    localStorage.setItem('origin', origin);
    localStorage.setItem('destination', destination);
    localStorage.setItem('startDate', format(startDate, "yyyy-MM-dd"));
    if (tripType === 'round-trip') {
      localStorage.setItem('endDate', format(endDate, "yyyy-MM-dd"));
    }

    navigate('/results'); // Use navigate to redirect
  };

  return (
    <div className='search container section'>
      <div data-aos='fade-up' className="sectionContainer grid">
        <div className="btns flex">
          <div className={`singleBtn ${tripType === 'one-way' ? 'active' : ''}`} onClick={() => setTripType('one-way')}>
            <span>One-way</span>
          </div>
          <div className={`singleBtn ${tripType === 'round-trip' ? 'active' : ''}`} onClick={() => setTripType('round-trip')}>
            <span>Round Trip</span>
          </div>
        </div>

        <div className="searchInputs flex">
          <div className="singleInput flex">
            <div className="iconDiv">
              <HiOutlineLocationMarker className='icon' />
            </div>
            <div className="texts">
              <h4>Origin</h4>
              <input 
                type="text" 
                placeholder='Enter IATA code (e.g., JFK)' 
                value={origin} 
                onChange={(e) => setOrigin(e.target.value)} 
              />
            </div>
          </div>

          <div className="singleInput flex">
            <div className="iconDiv">
              <HiOutlineLocationMarker className='icon' />
            </div>
            <div className="texts">
              <h4>Destination</h4>
              <input 
                type="text" 
                placeholder='Enter IATA code (e.g., LAX)' 
                value={destination} 
                onChange={(e) => setDestination(e.target.value)} 
              />
            </div>
          </div>

          <div className="singleInput flex">
            <div className="iconDiv">
              <RxCalendar className='icon' />
            </div>
            <div className="texts">
              <h4 style={{cursor:'pointer'}} onClick={() => setOpenDate(!openDate)}>Check In</h4>
              <span>{format(startDate, "MM/dd/yyyy")}</span>
              {openDate && (
                <DateRange
                  editableDateInputs={true}
                  onChange={handleDateChange}
                  moveRangeOnFirstSelection={false}
                  ranges={[{ startDate, endDate, key: 'selection' }]}
                  className='date'
                  minDate={new Date()}
                />
              )}
            </div>
          </div>

          {tripType === 'round-trip' && (
            <div className="singleInput flex">
              <div className="iconDiv">
                <RxCalendar className='icon' />
              </div>
              <div className="texts">
                <h4>Check Out</h4>
                <span>{format(endDate, "MM/dd/yyyy")}</span>
              </div>
            </div>
          )}

          <button className='btn btnBlock flex' onClick={handleSearch}>Search Flight</button>
        </div>
      </div>
    </div>
  );
}

export default Search;
