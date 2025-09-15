// import React, { useState, useEffect } from 'react';
// import { FaCheckCircle, FaTimesCircle, FaClock, FaExclamationCircle } from "react-icons/fa";

// // Hard-coded Data for the Issue Tracker
// const issuesData = {
//   cabIssues: [
//     { id: 1, username: 'Alice Smith', driver: 'Rahul Sharma', cabNumber: 'MH-01 AB 1234', issue: 'Driver arrived late.', status: 'Pending' },
//     { id: 2, username: 'Bob Johnson', driver: 'Amit Verma', cabNumber: 'AS-01 CD 5678', issue: 'Cab was unclean.', status: 'In Progress' },
//     { id: 3, username: 'Charlie Davis', driver: 'Biren Das', cabNumber: 'ML-05 EF 9012', issue: 'Overcharged for the ride.', status: 'Resolved' },
//   ],
//   guideIssues: [
//     { id: 1, username: 'Jane Smith', guideName: 'Sarah Warjri', issue: 'Guide was not knowledgeable.', status: 'Pending' },
//     { id: 2, username: 'Sam Brown', guideName: 'James Rymbai', issue: 'Guide was rude.', status: 'Resolved' },
//   ],
//   ticketIssues: [
//     { id: 1, username: 'Peter Jones', issue: 'Ticket QR code is not working.', status: 'Pending' },
//     { id: 2, username: 'Mary Lee', issue: 'Did not receive ticket via email.', status: 'In Progress' },
//   ],
//   emergencyAlerts: [
//     { id: 1, username: 'David Wilson', location: 'https://www.google.com/maps?q=25.26,91.73', issue: 'Lost my luggage.', status: 'Pending' },
//     { id: 2, username: 'Eva Brown', location: 'https://www.google.com/maps?q=25.25,91.74', issue: 'Minor accident.', status: 'In Progress' },
//   ],
// };

// // Function to get the status icon, now outside of the main component
// const getStatusIcon = (status) => {
//   switch (status) {
//     case 'Resolved':
//       return <FaCheckCircle className="text-green-600" />;
//     case 'In Progress':
//       return <FaClock className="text-yellow-600" />;
//     case 'Pending':
//     default:
//       return <FaExclamationCircle className="text-red-600" />;
//   }
// };

// // Reusable component to display a problem table
// const ProblemTable = ({ title, data, columns }) => {
//   const [issues, setIssues] = useState([]);

//   useEffect(() => {
//     setIssues(data);
//   }, [data]);
  
//   return (
//     <div className="bg-white rounded-xl shadow-lg p-6 my-8 border border-gray-200">
//       <h2 className="text-2xl font-bold mb-4 text-BaseColor">{title}</h2>
      
//       <div className="overflow-x-auto">
//         <table className="min-w-full text-left bg-white border-collapse">
//           <thead>
//             <tr>
//               {columns.map((col, index) => (
//                 <th key={index} className="px-4 py-2 border-b-2 bg-gray-100 text-gray-600 font-semibold text-sm uppercase tracking-wider">{col.header}</th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {issues.map((issue, index) => (
//               <tr key={issue.id || index} className="border-b hover:bg-gray-50 transition-colors">
//                 {columns.map((col, colIndex) => (
//                   <td key={colIndex} className="px-4 py-2 text-sm text-gray-700">
//                     {col.accessor(issue)}
//                   </td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// // Main component to render the entire dashboard
// const IssueTracker = () => {
//   // Column definitions for each issue type
//   const cabColumns = [
//     { header: 'Username', accessor: (i) => i.username },
//     { header: 'Driver', accessor: (i) => i.driver },
//     { header: 'Cab No.', accessor: (i) => i.cabNumber },
//     { header: 'Issue', accessor: (i) => i.issue },
//     { header: 'Status', accessor: (i) => (
//       <div className="flex items-center gap-2">
//         {getStatusIcon(i.status)} {i.status}
//       </div>
//     )},
//   ];

//   const guideColumns = [
//     { header: 'Username', accessor: (i) => i.username },
//     { header: 'Guide Name', accessor: (i) => i.guideName },
//     { header: 'Issue', accessor: (i) => i.issue },
//     { header: 'Status', accessor: (i) => (
//       <div className="flex items-center gap-2">
//         {getStatusIcon(i.status)} {i.status}
//       </div>
//     )},
//   ];

//   const ticketColumns = [
//     { header: 'Username', accessor: (i) => i.username },
//     { header: 'Issue', accessor: (i) => i.issue },
//     { header: 'Status', accessor: (i) => (
//       <div className="flex items-center gap-2">
//         {getStatusIcon(i.status)} {i.status}
//       </div>
//     )},
//   ];
  
//   const emergencyColumns = [
//     { header: 'Username', accessor: (i) => i.username },
//     { header: 'Location', accessor: (i) => (
//       <a href={i.location} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
//         View on Map
//       </a>
//     )},
//     { header: 'Issue', accessor: (i) => i.issue },
//     { header: 'Status', accessor: (i) => (
//       <div className="flex items-center gap-2">
//         {getStatusIcon(i.status)} {i.status}
//       </div>
//     )},
//   ];

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-4xl font-bold mb-2 text-center text-BaseColor">
//           Admin Issue Tracker 🚨
//         </h1>
//         <p className="text-center text-gray-600 mb-8">
//           Monitor and manage all support requests and emergency alerts in one place.
//         </p>

//         <ProblemTable
//           title="Cab Problems"
//           data={issuesData.cabIssues}
//           columns={cabColumns}
//         />
        
//         <ProblemTable
//           title="Guide Problems"
//           data={issuesData.guideIssues}
//           columns={guideColumns}
//         />
        
//         <ProblemTable
//           title="Ticket Problems"
//           data={issuesData.ticketIssues}
//           columns={ticketColumns}
//         />
        
//         <ProblemTable
//           title="Emergency Alerts"
//           data={issuesData.emergencyAlerts}
//           columns={emergencyColumns}
//         />
//       </div>
//     </div>
//   );
// };

// export default IssueTracker;

import React, { useState, useEffect } from 'react';
import { FaCheckCircle, FaTimesCircle, FaClock, FaExclamationCircle } from "react-icons/fa";

// Hard-coded Data for the Issue Tracker
const issuesData = {
  cabIssues: [
    { id: 1, username: 'Alice Smith', contact: '9876543210', driver: 'Rahul Sharma', cabNumber: 'MH-01 AB 1234', issue: 'Driver is not responding to calls.', status: 'Pending' },
    { id: 2, username: 'Bob Johnson', contact: '9876543211', driver: 'Amit Verma', cabNumber: 'AS-01 CD 5678', issue: 'Cab was not clean upon arrival.', status: 'In Progress' },
    { id: 3, username: 'Charlie Davis', contact: '9876543212', driver: 'Biren Das', cabNumber: 'ML-05 EF 9012', issue: 'Overcharged for the ride by ₹500.', status: 'Resolved' },
  ],
  guideIssues: [
    { id: 1, username: 'Jane Smith', contact: '9876543213', guideName: 'Sarah Warjri', issue: 'Guide was not knowledgeable about the history.', status: 'Pending' },
    { id: 2, username: 'Sam Brown', contact: '9876543214', guideName: 'James Rymbai', issue: 'Guide was rude and dismissive.', status: 'Resolved' },
  ],
  ticketIssues: [
    { id: 1, username: 'Peter Jones', contact: '9876543215', issue: 'Ticket QR code is not working at the entrance.', status: 'Pending' },
    { id: 2, username: 'Mary Lee', contact: '9876543216', issue: 'Did not receive ticket via email after payment.', status: 'In Progress' },
  ],
  emergencyAlerts: [
    { id: 1, username: 'David Wilson', contact: '9876543217', location: 'https://www.google.com/maps?q=25.26,91.73', issue: 'Lost my luggage.', status: 'Pending' },
    { id: 2, username: 'Eva Brown', contact: '9876543218', location: 'https://www.google.com/maps?q=25.25,91.74', issue: 'Minor accident.', status: 'In Progress' },
  ],
};

// Function to get the status icon, now outside of the main component
const getStatusIcon = (status) => {
  switch (status) {
    case 'Resolved':
      return <FaCheckCircle className="text-green-600" />;
    case 'In Progress':
      return <FaClock className="text-yellow-600" />;
    case 'Pending':
    default:
      return <FaExclamationCircle className="text-red-600" />;
  }
};

// Reusable component to display a problem table
const ProblemTable = ({ title, data, columns }) => {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    setIssues(data);
  }, [data]);
  
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 my-8 border border-gray-200">
      <h2 className="text-2xl font-bold mb-4 text-BaseColor">{title}</h2>
      
      <div className="overflow-x-auto">
        <table className="min-w-full text-left bg-white border-collapse">
          <thead>
            <tr>
              {columns.map((col, index) => (
                <th key={index} className="px-4 py-2 border-b-2 bg-gray-100 text-gray-600 font-semibold text-sm uppercase tracking-wider">{col.header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {issues.map((issue, index) => (
              <tr key={issue.id || index} className="border-b hover:bg-gray-50 transition-colors">
                {columns.map((col, colIndex) => (
                  <td key={colIndex} className="px-4 py-2 text-sm text-gray-700">
                    {col.accessor(issue)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Main component to render the entire dashboard
const IssueTracker = () => {
  // Column definitions for each issue type
  const cabColumns = [
    { header: 'Username', accessor: (i) => i.username },
    { header: 'Contact', accessor: (i) => i.contact },
    { header: 'Driver', accessor: (i) => i.driver },
    { header: 'Cab No.', accessor: (i) => i.cabNumber },
    { header: 'Issue', accessor: (i) => i.issue },
    { header: 'Status', accessor: (i) => (
      <div className="flex items-center gap-2">
        {getStatusIcon(i.status)} {i.status}
      </div>
    )},
  ];

  const guideColumns = [
    { header: 'Username', accessor: (i) => i.username },
    { header: 'Contact', accessor: (i) => i.contact },
    { header: 'Guide Name', accessor: (i) => i.guideName },
    { header: 'Issue', accessor: (i) => i.issue },
    { header: 'Status', accessor: (i) => (
      <div className="flex items-center gap-2">
        {getStatusIcon(i.status)} {i.status}
      </div>
    )},
  ];

  const ticketColumns = [
    { header: 'Username', accessor: (i) => i.username },
    { header: 'Contact', accessor: (i) => i.contact },
    { header: 'Issue', accessor: (i) => i.issue },
    { header: 'Status', accessor: (i) => (
      <div className="flex items-center gap-2">
        {getStatusIcon(i.status)} {i.status}
      </div>
    )},
  ];
  
  const emergencyColumns = [
    { header: 'Username', accessor: (i) => i.username },
    { header: 'Contact', accessor: (i) => i.contact },
    { header: 'Location', accessor: (i) => (
      <a href={i.location} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
        View on Map
      </a>
    )},
    { header: 'Issue', accessor: (i) => i.issue },
    { header: 'Status', accessor: (i) => (
      <div className="flex items-center gap-2">
        {getStatusIcon(i.status)} {i.status}
      </div>
    )},
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 text-center text-BaseColor">
          Admin Issue Tracker 🚨
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Monitor and manage all support requests and emergency alerts in one place.
        </p>

        <ProblemTable
          title="Cab Problems"
          data={issuesData.cabIssues}
          columns={cabColumns}
        />
        
        <ProblemTable
          title="Guide Problems"
          data={issuesData.guideIssues}
          columns={guideColumns}
        />
        
        <ProblemTable
          title="Ticket Problems"
          data={issuesData.ticketIssues}
          columns={ticketColumns}
        />
        
        <ProblemTable
          title="Emergency Alerts"
          data={issuesData.emergencyAlerts}
          columns={emergencyColumns}
        />
      </div>
    </div>
  );
};

export default IssueTracker;
