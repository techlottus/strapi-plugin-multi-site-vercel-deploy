import React, { useEffect, useState } from "react";
import getSites from "../../utils/getSites";
import { Select, Option } from "@strapi/design-system/Select";

const SitePicker = ({ selectedSite, setSelectedSite }) => {
  const [sites, setSites] = useState([]);

  useEffect(() => {
    getSites().then((sites) => setSites(sites));
  }, []);

  const handleChange = (value) => {
    if (value === selectedSite.appFilter) return;

    const changedSite = sites.find((site) => site.appFilter === value);
    setSelectedSite(changedSite);
  };

  return (
    <Select size="M" value={selectedSite.appFilter} onChange={handleChange}>
      {sites.map((site) => (
        <Option key={site.appFilter} value={site.appFilter}>
          {site.displayName}
        </Option>
      ))}
    </Select>
  );
};

export default SitePicker;
