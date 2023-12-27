// Gallery.js

import React from 'react';

const imageUrls = [
  'https://images.squarespace-cdn.com/content/v1/5ea0614a23978f42dee12261/1588186173822-5B3AMW7AEQQ9EYPB9QMX/CLE-A-075-5b6867146d121.jpg?format=1500w',
  'https://images.squarespace-cdn.com/content/v1/5ea0614a23978f42dee12261/1588186182749-PI37B2FX74Q7ESP4IADM/CLE-L-054-5b64af655b145-790x502.jpg?format=1500w',
  'https://images.squarespace-cdn.com/content/v1/5ea0614a23978f42dee12261/1588186170535-Q8A0XGW8SBSYNLBXZZXZ/CLE-A-0024.jpg?format=1000w',
  'https://images.squarespace-cdn.com/content/v1/5ea0614a23978f42dee12261/1588186171111-KC69A7HCENE3Z5Q7QQYP/CLE-A-034.jpg?format=1000w',
  'https://placekitten.com/400/300',
  'https://placekitten.com/401/300',
  'https://placekitten.com/402/300',
  'https://placekitten.com/403/300',
  'https://images.squarespace-cdn.com/content/v1/5ea0614a23978f42dee12261/1588186180088-X6HQRV8AFRZ8BR8SV9XI/CLE-A-510-052-5b686832e8c67.jpg?format=1500w',
  'https://images.squarespace-cdn.com/content/v1/5ea0614a23978f42dee12261/1588186162709-GE1KCGH123XLO0P8NELE/CLE-A-0020-5b6866d68ddec.jpg?format=1500w',
  'https://images.squarespace-cdn.com/content/v1/5ea0614a23978f42dee12261/1588186161990-VEJKP5CLRCZI8VMIGURV/CLE-A-007-5b686583ed458.jpg?format=1500w',
  'https://images.squarespace-cdn.com/content/v1/5ea0614a23978f42dee12261/1588186183136-PB7TS6GL47WD52MOVM8F/Clermont-Photos-17-5ad0b5b9988df.jpg?format=1000w',
  'https://images.squarespace-cdn.com/content/v1/5ea0614a23978f42dee12261/1588186168363-NUY60DHZXZEHQDA1C4ZX/CLE-A-022-5b6866e1494be.jpg?format=1500w',
  'https://images.squarespace-cdn.com/content/v1/5ea0614a23978f42dee12261/1588186169154-4AVS8FCXE64LD6JZCRCC/CLE-A-023-5b6866f1b514c.jpg?format=1500w',
  'https://images.squarespace-cdn.com/content/v1/5ea0614a23978f42dee12261/1588186173479-618FBKOMRZ0WVKHG6C3D/CLE-A-055.jpg?format=1000w',
  'https://images.squarespace-cdn.com/content/v1/5ea0614a23978f42dee12261/1588186161984-R1W6WTWQTR8WX0TQ5WPZ/CLE-A-013-5b6866ccc2097.jpg?format=1500w',
  'https://images.squarespace-cdn.com/content/v1/5ea0614a23978f42dee12261/1588186171877-ETFM07C3DSWCBMI43066/CLE-A-037-5b686716f14ee.jpg?format=1500w',
  'https://images.squarespace-cdn.com/content/v1/5ea0614a23978f42dee12261/1588186173058-GQR5DC6JIDMH37YF0FLN/CLE-A-058-5b686715aecac.jpg?format=1500w',
  'https://images.squarespace-cdn.com/content/v1/5ea0614a23978f42dee12261/1588186175779-24FFMBQUN7T0X4L08MAS/CLE-A-076.jpg?format=1000w',
  'https://images.squarespace-cdn.com/content/v1/5ea0614a23978f42dee12261/1588186177044-1PAWG1HJY5UZ8AUJ8UE3/CLE-A-112-5b68671254332.jpg?format=1500w',
  'https://images.squarespace-cdn.com/content/v1/5ea0614a23978f42dee12261/1588186177537-DSUTIB0Y3RKI0D346NEW/CLE-A-095.jpg?format=1000w',
  'https://images.squarespace-cdn.com/content/v1/5ea0614a23978f42dee12261/1588186177982-I0GKBEIT2QB0IS9XTJ42/CLE-A-123-5b6867111262c.jpg?format=1500w',
  'https://images.squarespace-cdn.com/content/v1/5ea0614a23978f42dee12261/1588186179242-6HEVKA35ZNH0J9G07CGP/CLE-A-508-129-5b68686514c15.jpg?format=1500w',
  'https://images.squarespace-cdn.com/content/v1/5ea0614a23978f42dee12261/1588186179543-BTOVKF56CLL4D8QK1PVE/CLE-A-508-205-5b686830967fe.jpg?format=1500w',

];

const Gallery = () => {
  return (
    <div className="container mx-auto p-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {imageUrls.map((url, index) => (
          <div key={index} className="mb-4 h-[323px]">
            <img
              src={url}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-full  object-cover rounded"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
