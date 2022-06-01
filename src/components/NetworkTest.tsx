import { useState, useEffect } from "react";
import { DateTime } from "luxon";
import API from "../network";
import "./NetworkTest.css";

type OregonBusinessData = {
  address_: string,
  associated_name_type: string,
  business_name: string,
  city: string,
  entity_type: string,
  registry_date: string,
  registry_number: string,
  state: string,
  zip_code: string,
};

const ENTITY_TYPE = "FOREIGN BUSINESS CORPORATION";
const LIMIT = 45;

export default function NetworkTest() {
  const [businesses, setBusinesses] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchBusinesses = async () => {
    setLoading(true);
    const unique = new Set();
    //  you can add additional error handling (.then, .catch) here, if the returned data
    // needs additional manipulation
    API.recentlyRegisteredOregonBusinesses()
      .then((businesses) => {
        if (!businesses) return [];
        return businesses.reduce((all, bus) => {
          if (unique.size === LIMIT || unique.has(bus.registry_number))
            return all;

          unique.add(bus.registry_number);
          const registeredDT = DateTime.fromISO(bus.registry_date);
          const registered = registeredDT.toFormat("LLL. dd yyyy");
          all.push({ ...bus, registry_date: registered });
          return all;
        }, []);
      })
      .then((bus) => {
        setBusinesses(bus);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchBusinesses();
  }, []);

  if (loading) return <p>Fetching Businesses...</p>;
  return (
    <>
      <h3>Recently-registered businesses</h3>

      <p>Fetched {businesses.length} businesses</p>

      <ul className="list list--businesses list--wrap">
        {businesses.map((business, i) => (
          <li
            key={`${i}-${business.registry_number}`}
            className="list-item list--column half"
          >
            <p>
              <b>{business.business_name}</b>
            </p>
            <p>{business.registry_date}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
