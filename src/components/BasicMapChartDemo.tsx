import React from "react";
import { VisLeafletMap } from "@unovis/react";

const key = "i3nxju1EMymXMLGINUWI";

export const BasicMapChartDemo = () => {
  const style = `https://api.maptiler.com/maps/basic-v2/style.json?key=${key}`;
  const attribution = [
    `<a href="https://www.maptiler.com/copyright/" target="_blank">MapTiler</a>`,
    `<a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap contributors</a>`,
  ];

  const locations = [
    { latitude: 60.69210004127813, longitude: -146.4861769640118 },
    { latitude: 62.12392847303562, longitude: -146.13888441592775 },
    { latitude: 50.5000873183541, longitude: -178.01396271188042 },
    { latitude: 29.219204511905776, longitude: -184.18160525003927 },
    { latitude: 55.717124046334604, longitude: -132.42031314226276 },
    { latitude: 28.77870168243071, longitude: -129.75489780311972 },
    { latitude: 40.45820597114234, longitude: -132.53687207547455 },
    { latitude: 56.02831445412277, longitude: -131.67140700439455 },
    { latitude: 48.9925243274171, longitude: -162.58379611507632 },
    { latitude: 35.60404588930575, longitude: -157.45969221051067 },
    { latitude: 25.64130677359703, longitude: -161.23741608237154 },
    { latitude: 35.327278804139475, longitude: -147.25805023385465 },
    { latitude: 57.206208318833156, longitude: -162.7766470010587 },
    { latitude: 42.48920455674398, longitude: -150.76093192440953 },
    { latitude: 52.62244592886506, longitude: -175.20389552411845 },
    { latitude: 53.99839567650311, longitude: -178.05180288526356 },
    { latitude: 64.39883064817215, longitude: -153.8412269522544 },
    { latitude: 26.002328035065858, longitude: -162.2018839590308 },
    { latitude: 69.53616761478347, longitude: -158.85324069433477 },
    { latitude: 71.22896994487198, longitude: -129.03280085777567 },
  ];
  return (
    <VisLeafletMap
      style={style}
      attribution={attribution}
      pointColor="red"
      pointShape={"triangle"}
      data={locations}
      clusterColor={"black"}
      clusterExpandOnClick={true}
    />
  );
};
