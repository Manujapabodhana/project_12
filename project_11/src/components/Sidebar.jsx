import React from 'react';
import policeLogo from '../assets/police-logo.png'; // Add a logo or placeholder
import bloomfieldLogo from '../assets/bloomfield-logo.png'; // Add a logo or placeholder

const upcomingMatches = [
  {
    tournament: 'MAJOR CLUB T20 2025',
    date: '22 May 2025',
    location: 'Colts, Colombo',
    matches: [
      {
        club: 'POLICE SPORTS CLUB',
        logo: policeLogo,
      },
      {
        club: 'BLOOMFIELD CRICKET AND ATHLETIC CLUB',
        logo: bloomfieldLogo,
      },
    ],
  },
];

const Sidebar = () => (
  <aside className="sidebar">
    <h2>Upcoming</h2>
    <ul className="upcoming-list">
      {upcomingMatches.map((item, idx) => (
        <li className="upcoming-item" key={idx}>
          <div className="upcoming-tournament">{item.tournament}</div>
          <div className="upcoming-date">{item.date}</div>
          <div className="upcoming-location">{item.location}</div>
          {item.matches.map((match, i) => (
            <div className="upcoming-match" key={i}>
              <img src={match.logo} alt={match.club} />
              {match.club}
            </div>
          ))}
        </li>
      ))}
    </ul>
  </aside>
);

export default Sidebar;
